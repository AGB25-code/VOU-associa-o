# VO.U. - Associação de Voluntariado Universitário
## Website Redesign Plan & Documentation

---

## 📋 Executive Summary

This document outlines the complete redesign of the VO.U. website, transforming it from a Wix-based platform to a modern, custom-built responsive website with enhanced UX/UI, improved accessibility, and contemporary design patterns.

---

## 🎯 Project Overview

**Original Site:** https://criativo06.wixsite.com/vou-associacao
**Organization:** VO.U. - Associação de Voluntariado Universitário
**Founded:** 2008, Porto, Portugal
**Mission:** Promote health and animal welfare, protect nature, provide social support for children and youth, and defend human rights through university student volunteers.

---

## 🏗️ Site Structure

### Navigation Hierarchy

```
├── Início (Home)
├── Sobre (About)
│   └── História & Missão
├── Núcleos (Cores)
│   ├── Núcleo de Gestão
│   ├── Núcleo Interno
│   ├── Núcleo Externo
│   ├── Núcleo Criativo
│   └── Núcleo Cultural
├── Projetos (Projects)
│   ├── VO.U. Formar
│   ├── VO.U. Pela Natureza
│   ├── VO.U. Acompanhar
│   ├── VO.U. Cuidar
│   ├── VO.U. Dançar
│   ├── VO.U. Criar
│   ├── VO.U. com Saúde
│   ├── VO.U. pelos Direitos
│   ├── VO.U. com Animais
│   └── VO.U. Cultura
├── Inscreve-te (Join Us)
└── Contactos (Contact)
```

---

## 🎨 Design System

### Color Palette

**Primary Colors:**
- Primary: `#2D5F8D` (Deep Blue) - Trust, professionalism, stability
- Primary Light: `#4A7BA7` - Lighter accent
- Primary Dark: `#1A3A5C` - Headers and emphasis

**Secondary Colors:**
- Secondary: `#F7941D` (Vibrant Orange) - Energy, youth, action
- Secondary Light: `#FFA94D`
- Secondary Dark: `#D67A0D`

**Accent Colors:**
- Success: `#27AE60` (Green) - Nature, growth
- Info: `#3498DB` (Sky Blue)
- Warning: `#F39C12` (Amber)
- Danger: `#E74C3C` (Red)

**Neutral Colors:**
- Dark: `#2C3E50` - Text
- Medium: `#7F8C8D` - Secondary text
- Light: `#ECF0F1` - Backgrounds
- White: `#FFFFFF`
- Off-White: `#F8F9FA`

### Typography

**Font Stack:**
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-headings: 'Poppins', 'Inter', sans-serif;
--font-monospace: 'Fira Code', 'Courier New', monospace;
```

**Type Scale:**
- H1: 3.5rem (56px) / 3rem mobile - Bold 700
- H2: 2.5rem (40px) / 2rem mobile - SemiBold 600
- H3: 2rem (32px) / 1.75rem mobile - SemiBold 600
- H4: 1.5rem (24px) / 1.5rem mobile - Medium 500
- H5: 1.25rem (20px) - Medium 500
- H6: 1.125rem (18px) - Medium 500
- Body: 1rem (16px) - Regular 400
- Small: 0.875rem (14px) - Regular 400
- Tiny: 0.75rem (12px) - Regular 400

**Line Heights:**
- Headings: 1.2
- Body: 1.6
- Condensed: 1.4

### Spacing System

Based on 8px grid:
```
--space-xs: 0.5rem (8px)
--space-sm: 1rem (16px)
--space-md: 1.5rem (24px)
--space-lg: 2rem (32px)
--space-xl: 3rem (48px)
--space-2xl: 4rem (64px)
--space-3xl: 6rem (96px)
```

### Border Radius

```
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-full: 9999px
```

### Shadows

```
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
--shadow-md: 0 4px 6px rgba(0,0,0,0.07)
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1)
--shadow-xl: 0 20px 25px rgba(0,0,0,0.15)
```

---

## 📄 Page Breakdown

### 1. Homepage (index.html)

**Sections:**

1. **Hero Section**
   - Full-viewport height with gradient overlay
   - Main headline: "Transforma Vidas Através do Voluntariado"
   - Subheadline: Organization description
   - CTA buttons: "Junta-te a Nós" | "Conhece os Projetos"
   - Background: High-quality image of volunteers in action

2. **About Preview**
   - Brief introduction to VO.U.
   - Founded in 2008
   - Mission statement
   - Key statistics (members, projects, hours)

3. **Featured Projects**
   - Grid of 6 main projects with cards
   - Hover effects with image overlays
   - Quick description
   - "Saber Mais" link

4. **Impact Numbers**
   - Animated counter section
   - Volunteers, Projects, Partners, Hours
   - Icon-based visual representation

5. **Call-to-Action**
   - Large centered section
   - "Faz a Diferença Hoje"
   - Registration button

6. **Latest News/Updates** (Optional)
   - 3-column blog-style preview
   - Recent activities

**Content:**
```html
Hero:
- H1: "Transforma Vidas Através do Voluntariado"
- Subtitle: "Somos a VO.U., uma associação de voluntariado universitário dedicada a fazer a diferença nas áreas da saúde, natureza, direitos humanos e bem-estar social."

About:
- "Desde 2008, a VO.U. reúne jovens universitários do Porto e não só, canalizando o seu potencial para combater necessidades sociais e ambientais. Com 5 núcleos e 10 projetos ativos, trabalhamos em saúde, animais, natureza, cultura, artes e direitos humanos."

Stats:
- 500+ Voluntários
- 10 Projetos Ativos
- 15+ Anos de Impacto
- 20.000+ Horas de Voluntariado
```

---

### 2. Sobre (About) - sobre.html

**Sections:**

1. **Page Header**
   - Breadcrumb navigation
   - Page title with decorative element

2. **História**
   - Timeline design (vertical on mobile, horizontal on desktop)
   - Key milestones from 2008 to present
   - Accompanying images

3. **Missão e Valores**
   - 3-column grid
   - Missão | Visão | Valores
   - Icon-based presentation

4. **Estrutura Organizacional**
   - Visual diagram of 5 cores
   - Brief description of each
   - Links to detailed pages

5. **Conquistas**
   - Award/recognition section
   - Partnerships
   - Certifications

**Content:**
```
História:
"A VO.U. nasceu em 2008 na cidade do Porto, resultado do reconhecimento do múltiplo potencial dos jovens estudantes universitários para combater algumas necessidades da sociedade..."

Missão:
"Promover o voluntariado universitário, capacitando jovens para intervirem de forma estruturada e sustentável em causas sociais, ambientais e culturais."

Visão:
"Ser uma referência nacional no voluntariado universitário, criando impacto positivo e duradouro nas comunidades que servimos."

Valores:
- Solidariedade
- Compromisso
- Inclusão
- Sustentabilidade
- Inovação Social
```

---

### 3. Núcleos (Cores) - nucleos.html

**Sections:**

1. **Page Header**
   - "Os Nossos Núcleos"
   - Introduction text

2. **Núcleo Cards (5 sections)**
   - Large visual cards
   - Each nucleus with:
     - Icon/illustration
     - Name
     - Description
     - Responsibilities
     - Team size
     - "Saber Mais" link

**Content:**

```
1. Núcleo de Gestão
- Coordena as atividades da associação
- Gestão administrativa e financeira
- Representação institucional

2. Núcleo Interno
- Gestão de membros e recrutamento
- Formação de voluntários
- Bem-estar interno

3. Núcleo Externo
- Parcerias e networking
- Comunicação externa
- Angariação de fundos

4. Núcleo Criativo
- Design e identidade visual
- Marketing digital
- Produção de conteúdo

5. Núcleo Cultural
- Organização de eventos
- Atividades culturais
- Workshops e formações
```

---

### 4. Projetos (Projects) - projetos.html

**Sections:**

1. **Page Header**
   - Hero image collage
   - "Os Nossos Projetos"

2. **Filter/Category Bar**
   - All | Saúde | Natureza | Social | Cultura | Direitos

3. **Project Grid**
   - Masonry/card layout
   - 10 projects with:
     - Featured image
     - Project name
     - Category tag
     - Short description
     - Action button

**Projects Content:**

```
1. VO.U. Formar
   Category: Educação
   "Formação e capacitação de voluntários e comunidades através de workshops e ações educativas."

2. VO.U. Pela Natureza
   Category: Ambiente
   "Preservação ambiental através de limpezas, reflorestação e sensibilização ecológica."

3. VO.U. Acompanhar
   Category: Social
   "Acompanhamento de idosos, proporcionando companhia, apoio e momentos de convívio."

4. VO.U. Cuidar
   Category: Saúde
   "Apoio a instituições de saúde e ações de promoção de bem-estar físico e mental."

5. VO.U. Dançar
   Category: Cultura
   "Expressão artística através da dança, promovendo inclusão e bem-estar."

6. VO.U. Criar
   Category: Artes
   "Desenvolvimento de competências artísticas e criativas em crianças e jovens."

7. VO.U. com Saúde
   Category: Saúde
   "Campanhas de sensibilização e promoção de estilos de vida saudáveis."

8. VO.U. pelos Direitos
   Category: Direitos Humanos
   "Defesa e promoção dos direitos humanos e igualdade social."

9. VO.U. com Animais
   Category: Bem-Estar Animal
   "Apoio a animais abandonados e sensibilização para adoção responsável."

10. VO.U. Cultura
    Category: Cultura
    "Promoção e dinamização cultural através de eventos, exposições e atividades."
```

---

### 5. Inscreve-te (Join Us) - inscricoes.html

**Sections:**

1. **Hero Section**
   - Motivational message
   - "Faz Parte da Mudança"

2. **Why Join Section**
   - Benefits of volunteering
   - Personal growth opportunities
   - Skill development
   - Network building

3. **Requirements**
   - Who can join
   - Commitment expectations
   - Application process steps

4. **Registration Form**
   - Modern multi-step form
   - Step 1: Personal Information
   - Step 2: Motivations & Interests
   - Step 3: Availability & Experience
   - Progress indicator
   - Form validation

5. **FAQ Section**
   - Accordion-style answers
   - Common questions

**Form Fields:**

```
Personal Info:
- Nome Completo*
- Email*
- Telefone*
- Data de Nascimento*
- Universidade/Instituição*
- Curso
- Ano Académico

Motivations:
- Porque queres ser voluntário? (textarea)
- Áreas de interesse (checkboxes):
  □ Saúde
  □ Ambiente
  □ Social
  □ Cultura
  □ Direitos Humanos
  □ Animais

Availability:
- Disponibilidade semanal (dropdown)
- Período preferencial (manhã/tarde/noite)
- Experiência anterior em voluntariado? (Yes/No)
- Competências especiais (textarea)

□ Aceito os termos e condições*
□ Autorizo o tratamento de dados pessoais*
```

---

### 6. Contactos (Contact) - contactos.html

**Sections:**

1. **Contact Info Cards**
   - Address
   - Email
   - Phone
   - Social Media

2. **Contact Form**
   - Name, Email, Subject, Message
   - reCAPTCHA
   - Send button

3. **Map Integration**
   - Embedded Google Maps
   - Location marker

4. **Social Media Feed** (Optional)
   - Instagram/Facebook widget

**Content:**

```
Address:
VO.U. - Associação de Voluntariado Universitário
Rua [Address Line 1]
Porto, Portugal

Email: geral@vou-associacao.pt
Phone: +351 XXX XXX XXX

Social Media:
Facebook | Instagram | LinkedIn
```

---

## 🎯 Modern Design Improvements

### From Original to Redesigned

| Aspect | Original (Wix) | Redesigned (Modern) |
|--------|---------------|---------------------|
| **Layout** | Grid-based Wix blocks | Custom CSS Grid + Flexbox |
| **Typography** | Generic web fonts | Inter + Poppins (Google Fonts) |
| **Colors** | Muted, dated palette | Vibrant, accessible contrast |
| **Images** | Static placement | Lazy loading, WebP format, responsive |
| **Navigation** | Standard menu | Sticky header with smooth scroll |
| **Animations** | Basic transitions | GSAP/CSS animations, scroll reveals |
| **Forms** | Wix forms | Custom multi-step with validation |
| **Mobile** | Responsive but basic | Mobile-first, touch-optimized |
| **Performance** | Heavy Wix framework | Lightweight, optimized assets |
| **Accessibility** | Basic WCAG | WCAG 2.1 AA compliant |

---

## 🚀 Technical Stack

### Frontend
- **HTML5**: Semantic markup, ARIA labels
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (Vanilla)**: Minimal dependencies, modular ES6+
- **Optional**: Alpine.js for reactive components

### Libraries & Tools
- **Icons**: Font Awesome 6 or Heroicons
- **Animations**: GSAP or CSS-only
- **Forms**: Custom validation with Constraint API
- **Maps**: Google Maps API or Leaflet
- **Image Optimization**: WebP with fallbacks

### Performance
- Lighthouse Score Target: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

### Accessibility
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader optimization
- Focus management
- Color contrast ratios: 4.5:1 minimum

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px   /* Small devices */
--breakpoint-md: 768px   /* Tablets */
--breakpoint-lg: 1024px  /* Desktops */
--breakpoint-xl: 1280px  /* Large desktops */
--breakpoint-2xl: 1536px /* Extra large */
```

---

## 🎨 UI Components Library

### Reusable Components

1. **Buttons**
   - Primary, Secondary, Outline, Ghost
   - Sizes: Small, Medium, Large
   - States: Default, Hover, Active, Disabled

2. **Cards**
   - Project Card
   - Team Member Card
   - Stats Card
   - Blog Post Card

3. **Forms**
   - Input fields
   - Textareas
   - Select dropdowns
   - Checkboxes & Radios
   - File upload
   - Validation messages

4. **Navigation**
   - Header (sticky)
   - Mobile menu (hamburger)
   - Breadcrumbs
   - Footer

5. **Sections**
   - Hero variants
   - Content sections
   - Gallery grids
   - Testimonials
   - CTAs

---

## 📊 Content Strategy

### Tone of Voice
- **Inspirational**: Motivate action and participation
- **Friendly**: Approachable and welcoming
- **Professional**: Credible and trustworthy
- **Inclusive**: Welcoming to all

### Writing Guidelines
- Use active voice
- Short paragraphs (2-3 sentences)
- Clear CTAs
- Bilingual consideration (PT primary)
- Storytelling approach for impact stories

---

## 🔍 SEO Optimization

### On-Page SEO
- Semantic HTML5 structure
- Meta titles (50-60 characters)
- Meta descriptions (150-160 characters)
- Open Graph tags for social sharing
- Schema.org markup (Organization, Volunteer Action)
- Alt text for all images
- Descriptive URLs

### Example Meta Tags

```html
<!-- Homepage -->
<title>VO.U. - Associação de Voluntariado Universitário | Porto</title>
<meta name="description" content="Junta-te à VO.U. e faz a diferença! Associação de voluntariado universitário em Porto com projetos em saúde, natureza, cultura e direitos humanos.">

<!-- Projects Page -->
<title>Projetos de Voluntariado | VO.U. Associação</title>
<meta name="description" content="Descobre os 10 projetos da VO.U.: VO.U. Formar, Pela Natureza, Acompanhar, Cuidar e mais. Áreas de saúde, ambiente, social e cultura.">
```

---

## 🎭 Animation Strategy

### Scroll Animations
- Fade in on scroll
- Slide from sides
- Scale up
- Stagger animations for grids

### Micro-interactions
- Button hover effects
- Card lift on hover
- Smooth page transitions
- Loading states
- Form input focus
- Menu transitions

### Performance Considerations
- Use `will-change` sparingly
- Prefer `transform` and `opacity`
- requestAnimationFrame for JS animations
- Reduce motion for accessibility (`prefers-reduced-motion`)

---

## 📈 Analytics & Tracking

### Recommended Tools
- Google Analytics 4
- Hotjar (heatmaps, session recordings)
- Google Search Console
- Social media pixels (Facebook, Instagram)

### Key Metrics to Track
- Page views
- Bounce rate
- Form submission rate
- Button click tracking
- Scroll depth
- Time on page

---

## 🔐 Security & Privacy

### Implementation
- HTTPS only
- Content Security Policy headers
- GDPR-compliant cookie consent
- Privacy policy page
- Terms of service
- Form sanitization
- reCAPTCHA on forms

---

## 🚀 Deployment Strategy

### Hosting Options
1. **Netlify** (Recommended)
   - Free tier available
   - Automatic HTTPS
   - Form handling
   - Continuous deployment

2. **Vercel**
   - Excellent performance
   - Edge network
   - Analytics included

3. **GitHub Pages**
   - Free for public repos
   - Custom domain support

### Domain
- Custom domain: vou-associacao.pt
- SSL certificate (Let's Encrypt - free)

---

## ✅ Launch Checklist

### Pre-Launch
- [ ] All pages created and content reviewed
- [ ] Responsive testing (all breakpoints)
- [ ] Browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility audit (WAVE, axe)
- [ ] Performance testing (Lighthouse)
- [ ] Form testing (all fields, validation)
- [ ] SEO metadata complete
- [ ] Analytics installed
- [ ] Cookie consent implemented
- [ ] Privacy policy & terms added
- [ ] Contact information verified
- [ ] Social media links working
- [ ] Images optimized (WebP)
- [ ] 404 page created
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured

### Post-Launch
- [ ] Submit to Google Search Console
- [ ] Social media announcement
- [ ] Monitor analytics
- [ ] Gather user feedback
- [ ] A/B testing on CTAs
- [ ] Regular content updates

---

## 📚 File Structure

```
VO.U/
│
├── index.html
├── sobre.html
├── nucleos.html
├── projetos.html
├── inscricoes.html
├── contactos.html
├── politica-privacidade.html
├── 404.html
│
├── css/
│   ├── main.css
│   ├── variables.css
│   ├── reset.css
│   ├── components.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── form-validation.js
│   ├── animations.js
│   └── navigation.js
│
├── images/
│   ├── hero/
│   ├── projects/
│   ├── team/
│   ├── logos/
│   └── icons/
│
├── fonts/
│   └── (if self-hosting)
│
└── assets/
    ├── favicon.ico
    ├── sitemap.xml
    └── robots.txt
```

---

## 🎨 Brand Guidelines

### Logo Usage
- Primary logo: Full color on light backgrounds
- Secondary logo: White on dark backgrounds
- Minimum size: 120px width
- Clear space: Equal to height of "O" in VO.U.

### Voice & Tone
- Empowering and action-oriented
- Warm and community-focused
- Professional yet approachable
- Optimistic about social change

---

## 📞 Support & Maintenance

### Recommended Updates
- Monthly: Review analytics, update blog/news
- Quarterly: Content refresh, broken link check
- Annually: Design review, technology updates

### Content Management
- Assign content owners for each section
- Editorial calendar for blog/news
- Image library organization
- Backup strategy

---

## Sources

- [VO.U. Homepage](https://criativo06.wixsite.com/vou-associacao)
- [VO.U. Projects](https://criativo06.wixsite.com/vou-associacao/projetos)
- [VO.U. Núcleos](https://criativo06.wixsite.com/vou-associacao/n%C3%BAcleos)

---

**Document Version:** 1.0
**Last Updated:** 2025-11-28
**Prepared by:** Claude Code - Website Redesign Specialist
