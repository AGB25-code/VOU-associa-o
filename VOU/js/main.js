/**
 * VO.U. - Associação de Voluntariado Universitário
 * Main JavaScript File
 */

// ==================== UTILITY FUNCTIONS ====================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ==================== HEADER & NAVIGATION ====================

class Navigation {
  constructor() {
    this.header = document.getElementById('header');
    this.navToggle = document.getElementById('nav-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.navLinks = document.querySelectorAll('.nav__link');

    this.init();
  }

  init() {
    if (!this.header) return;

    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu when clicking on a link
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });

    // Sticky header on scroll
    window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));

    // Close menu when clicking outside
    document.addEventListener('click', (e) => this.handleOutsideClick(e));
  }

  toggleMobileMenu() {
    this.navToggle.classList.toggle('active');
    this.navMenu.classList.toggle('active');
    document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.navToggle.classList.remove('active');
    this.navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  handleScroll() {
    if (window.scrollY > 100) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  }

  handleOutsideClick(e) {
    if (!this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
      this.closeMobileMenu();
    }
  }
}

// ==================== STATS COUNTER ANIMATION ====================

class StatsCounter {
  constructor() {
    this.statsNumbers = document.querySelectorAll('.stats__number');
    this.animated = false;
    this.init();
  }

  init() {
    if (this.statsNumbers.length === 0) return;

    window.addEventListener('scroll', debounce(() => this.checkVisibility(), 100));
    this.checkVisibility(); // Check on load
  }

  checkVisibility() {
    if (this.animated) return;

    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;

    if (isInViewport(statsSection)) {
      this.animateCounters();
      this.animated = true;
    }
  }

  animateCounters() {
    this.statsNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-count'));
      const prefix = stat.getAttribute('data-prefix') || '';
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60 FPS
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.textContent = prefix + Math.floor(current).toLocaleString('pt-PT');
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = prefix + target.toLocaleString('pt-PT');
        }
      };

      updateCounter();
    });
  }
}

// ==================== MULTI-STEP FORM ====================

class MultiStepForm {
  constructor() {
    this.form = document.getElementById('registration-form');
    if (!this.form) return;

    this.currentStep = 1;
    this.totalSteps = 3;
    this.formSteps = document.querySelectorAll('.form-step');
    this.formContents = document.querySelectorAll('.form-content');
    this.nextBtn = document.getElementById('next-btn');
    this.prevBtn = document.getElementById('prev-btn');
    this.submitBtn = document.getElementById('submit-btn');
    this.successMessage = document.getElementById('success-message');

    this.init();
  }

  init() {
    // Next button
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextStep());
    }

    // Previous button
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevStep());
    }

    // Form submission
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Show first step
    this.showStep(1);
  }

  nextStep() {
    if (this.validateStep(this.currentStep)) {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
        this.showStep(this.currentStep);
      }
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.showStep(this.currentStep);
    }
  }

  showStep(step) {
    // Update form contents
    this.formContents.forEach((content, index) => {
      content.classList.toggle('active', index + 1 === step);
    });

    // Update step indicators
    this.formSteps.forEach((stepEl, index) => {
      const stepNumber = index + 1;
      stepEl.classList.toggle('active', stepNumber === step);
      stepEl.classList.toggle('completed', stepNumber < step);
    });

    // Update buttons
    this.prevBtn.style.display = step === 1 ? 'none' : 'inline-flex';
    this.nextBtn.style.display = step === this.totalSteps ? 'none' : 'inline-flex';
    this.submitBtn.style.display = step === this.totalSteps ? 'inline-flex' : 'none';

    // Scroll to top of form
    this.form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  validateStep(step) {
    const currentContent = document.querySelector(`.form-content[data-step="${step}"]`);
    const requiredInputs = currentContent.querySelectorAll('[required]');
    let isValid = true;

    requiredInputs.forEach(input => {
      // Remove previous error messages
      const existingError = input.parentElement.querySelector('.form-error');
      if (existingError) existingError.remove();

      // Check validity
      if (!input.checkValidity()) {
        isValid = false;
        this.showError(input, input.validationMessage);
      } else {
        // Custom validations
        if (input.type === 'email' && !this.isValidEmail(input.value)) {
          isValid = false;
          this.showError(input, 'Por favor, insira um email válido');
        }

        if (input.id === 'motivacao' && input.value.length < 100) {
          isValid = false;
          this.showError(input, 'A motivação deve ter no mínimo 100 caracteres');
        }

        // Check if at least one interest is checked
        if (step === 2) {
          const interests = currentContent.querySelectorAll('input[name="interesses"]:checked');
          if (interests.length === 0) {
            isValid = false;
            const interestLabel = currentContent.querySelector('label.form-label--required:has(+ .checkbox-group)');
            if (interestLabel && !interestLabel.nextElementSibling.querySelector('.form-error')) {
              const error = document.createElement('span');
              error.className = 'form-error';
              error.textContent = 'Seleciona pelo menos uma área de interesse';
              interestLabel.nextElementSibling.appendChild(error);
            }
          }
        }
      }
    });

    return isValid;
  }

  showError(input, message) {
    input.classList.add('error');
    const errorElement = document.createElement('span');
    errorElement.className = 'form-error';
    errorElement.textContent = message;
    input.parentElement.appendChild(errorElement);

    // Remove error on input
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const error = input.parentElement.querySelector('.form-error');
      if (error) error.remove();
    }, { once: true });
  }

  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.validateStep(this.currentStep)) {
      return;
    }

    // Get form data
    const formData = new FormData(this.form);
    const data = {};

    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
      if (data[key]) {
        // Handle multiple values (checkboxes)
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    }

    // Log form data (in production, send to server)
    console.log('Form submitted:', data);

    // Show success message
    this.form.style.display = 'none';
    this.successMessage.style.display = 'block';
    this.successMessage.scrollIntoView({ behavior: 'smooth' });

    // In production, you would send this data to your backend:
    /*
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      this.form.style.display = 'none';
      this.successMessage.style.display = 'block';
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Ocorreu um erro ao submeter o formulário. Por favor, tenta novamente.');
    });
    */
  }
}

// ==================== PROJECT FILTER ====================

class ProjectFilter {
  constructor() {
    this.filterButtons = document.querySelectorAll('[data-filter]');
    this.projectCards = document.querySelectorAll('[data-category]');

    if (this.filterButtons.length === 0) return;
    this.init();
  }

  init() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', () => this.filter(button));
    });
  }

  filter(button) {
    const filter = button.getAttribute('data-filter');

    // Update active button
    this.filterButtons.forEach(btn => {
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-outline-primary');
    });
    button.classList.remove('btn-outline-primary');
    button.classList.add('btn-primary');

    // Filter projects
    this.projectCards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.5s ease-out';
      } else {
        card.style.display = 'none';
      }
    });
  }
}

// ==================== SMOOTH SCROLL ====================

class SmoothScroll {
  constructor() {
    this.links = document.querySelectorAll('a[href^="#"]');
    this.init();
  }

  init() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => this.handleClick(e, link));
    });

    // Handle hash on page load (for cross-page navigation)
    this.handleHashOnLoad();
  }

  handleClick(e, link) {
    const href = link.getAttribute('href');

    // Ignore empty hashes or javascript:void(0)
    if (href === '#' || href === '#!') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    this.scrollToElement(target);

    // Update URL without jumping
    history.pushState(null, null, href);
  }

  handleHashOnLoad() {
    // Check if URL has a hash
    if (window.location.hash) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        const hash = window.location.hash;
        const target = document.querySelector(hash);

        if (target) {
          this.scrollToElement(target);
        }
      }, 100);
    }
  }

  scrollToElement(target) {
    const headerHeight = document.getElementById('header')?.offsetHeight || 80;
    const targetPosition = target.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// ==================== SCROLL REVEAL ANIMATIONS ====================

class ScrollReveal {
  constructor() {
    this.elements = document.querySelectorAll('[data-reveal]');
    this.init();
  }

  init() {
    if (this.elements.length === 0) return;

    // Use IntersectionObserver for performant scroll detection
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersect(entries),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    this.elements.forEach(el => this.observer.observe(el));
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;

      // Calculate stagger delay: find siblings with same parent grid/container
      const delay = this.getStaggerDelay(el);
      const customDelay = parseInt(el.dataset.revealDelay) || 0;
      const totalDelay = delay + customDelay;

      if (totalDelay > 0) {
        setTimeout(() => el.classList.add('revealed'), totalDelay);
      } else {
        el.classList.add('revealed');
      }

      // Stop observing once revealed
      this.observer.unobserve(el);
    });
  }

  getStaggerDelay(el) {
    const parent = el.parentElement;
    if (!parent) return 0;

    // Only stagger elements within grid containers or .partners
    const isGrid = parent.classList.contains('grid') ||
                   parent.classList.contains('partners') ||
                   parent.classList.contains('stats__grid');
    if (!isGrid) return 0;

    const siblings = Array.from(parent.querySelectorAll(':scope > [data-reveal]'));
    const index = siblings.indexOf(el);
    return index * 100; // 100ms between each item
  }
}

// ==================== CONTACT FORM ====================

class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    if (!this.form) return;
    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    console.log('Contact form submitted:', data);

    // Show success message
    alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
    this.form.reset();

    // In production, send to backend:
    /*
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      alert('Mensagem enviada com sucesso!');
      this.form.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Ocorreu um erro. Por favor, tenta novamente.');
    });
    */
  }
}

// ==================== FLOATING BUTTONS ====================

class BackToTop {
  constructor() {
    this.createButton();
  }

  createButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top floating-btn';
    button.setAttribute('aria-label', 'Voltar ao topo');
    button.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 30px;
      width: 56px;
      height: 56px;
      background: var(--color-primary);
      color: white;
      border: none;
      border-radius: var(--radius-full);
      font-size: 20px;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: var(--transition-base);
      box-shadow: var(--shadow-lg);
      z-index: var(--z-fixed);
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    document.body.appendChild(button);

    // Show/hide on scroll
    window.addEventListener('scroll', debounce(() => {
      if (window.scrollY > 300) {
        button.style.opacity = '1';
        button.style.visibility = 'visible';
      } else {
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
      }
    }, 100));

    // Scroll to top on click
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Hover effect
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-5px)';
      button.style.boxShadow = 'var(--shadow-xl)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = 'var(--shadow-lg)';
    });
  }
}

// ==================== EXPANDABLE CARDS ====================

class ExpandableCards {
  constructor() {
    this.cards = document.querySelectorAll('.card[data-expandable]');
    if (this.cards.length === 0) return;
    this.init();
  }

  init() {
    this.cards.forEach(card => {
      // Click on expand button
      const btn = card.querySelector('.expand-btn');
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggle(card);
        });
      }

      // Click on the card header area (the colored side or top portion)
      card.addEventListener('click', (e) => {
        // Don't toggle if clicking inside the expanded details or on a link
        if (e.target.closest('.expandable-details') || e.target.closest('a')) return;
        this.toggle(card);
      });
    });
  }

  toggle(card) {
    const wasExpanded = card.classList.contains('expanded');

    // Close all other cards (accordion)
    this.cards.forEach(c => c.classList.remove('expanded'));

    // Toggle clicked card
    if (!wasExpanded) {
      card.classList.add('expanded');

      // Scroll into view smoothly after animation starts
      setTimeout(() => {
        const headerHeight = document.getElementById('header')?.offsetHeight || 80;
        const rect = card.getBoundingClientRect();
        if (rect.top < headerHeight) {
          window.scrollBy({ top: rect.top - headerHeight - 16, behavior: 'smooth' });
        }
      }, 100);
    }
  }
}

// ==================== LAZY LOADING IMAGES ====================

class LazyLoad {
  constructor() {
    this.images = document.querySelectorAll('img[data-src]');
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      });

      this.images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      this.images.forEach(img => {
        img.src = img.dataset.src;
      });
    }
  }
}

// ==================== INITIALIZE ALL ====================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  new Navigation();
  new StatsCounter();
  new MultiStepForm();
  new ProjectFilter();
  new SmoothScroll();
  new ScrollReveal();
  new ContactForm();
  new BackToTop();
  new LazyLoad();
  new ExpandableCards();

  console.log('VO.U. Website initialized successfully! 🎉');
});

// ==================== EXPORT FOR TESTING ====================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Navigation,
    StatsCounter,
    MultiStepForm,
    ProjectFilter,
    SmoothScroll,
    ScrollReveal,
    ContactForm,
    BackToTop,
    LazyLoad,
    ExpandableCards
  };
}
