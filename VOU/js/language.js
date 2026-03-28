/**
 * VO.U. - Language Switching System
 * Handles multilingual support for PT/EN
 */

class LanguageSwitcher {
  constructor() {
    this.currentLang = this.getStoredLanguage() || 'pt';
    this.init();
  }

  init() {
    // Set initial language
    this.setLanguage(this.currentLang, false);

    // Add event listeners to language toggle buttons
    document.addEventListener('DOMContentLoaded', () => {
      const langButtons = document.querySelectorAll('.language-toggle__btn');
      langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const lang = e.target.dataset.lang;
          this.setLanguage(lang);
        });
      });

      // Update active state
      this.updateActiveButton();
    });
  }

  getStoredLanguage() {
    return localStorage.getItem('vou-language');
  }

  setStoredLanguage(lang) {
    localStorage.setItem('vou-language', lang);
  }

  setLanguage(lang, save = true) {
    if (!translations[lang]) {
      console.error(`Language "${lang}" not found`);
      return;
    }

    this.currentLang = lang;

    if (save) {
      this.setStoredLanguage(lang);
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all translatable elements
    this.updatePageContent(lang);

    // Update active button state
    this.updateActiveButton();
  }

  updatePageContent(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
      const key = element.dataset.i18n;
      const translation = this.getTranslation(key, lang);

      if (translation) {
        // Check if element is an input/textarea with placeholder
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
  }

  getTranslation(key, lang) {
    const keys = key.split('.');
    let translation = translations[lang];

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        console.warn(`Translation not found: ${key} for language: ${lang}`);
        return null;
      }
    }

    return translation;
  }

  updateActiveButton() {
    const langButtons = document.querySelectorAll('.language-toggle__btn');
    langButtons.forEach(btn => {
      if (btn.dataset.lang === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Initialize language switcher
const languageSwitcher = new LanguageSwitcher();
