# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Strategy**: Drawing inspiration from Linear's typography and spacing precision, Stripe's color restraint, and modern developer portfolios like those on Dribbble. Focus on creating a clean, professional showcase that lets work speak for itself while maintaining visual sophistication.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- Background: 12 8% 6% (deep charcoal)
- Surface: 12 8% 10% (card backgrounds)
- Border: 12 8% 15% (subtle dividers)
- Primary Text: 0 0% 98%
- Secondary Text: 0 0% 70%
- Primary Brand: 210 100% 60% (professional blue)
- Accent: 165 80% 45% (teal for CTAs and highlights)

**Light Mode**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Border: 0 0% 90%
- Primary Text: 12 8% 10%
- Secondary Text: 0 0% 40%
- Primary Brand: 210 90% 50%
- Accent: 165 70% 40%

### B. Typography

**Fonts**: Inter for UI and body text, JetBrains Mono for code snippets (via Google Fonts CDN)

- Hero Headline: 4rem (desktop) / 2.5rem (mobile), font-weight 700, tight line-height (1.1)
- Section Headings: 2.5rem (desktop) / 1.75rem (mobile), font-weight 600
- Subsection Headings: 1.5rem, font-weight 600
- Body Text: 1rem, font-weight 400, line-height 1.6
- Small Text: 0.875rem for metadata and captions

### C. Layout System

**Spacing Units**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24, 32 for consistency
- Section padding: py-24 md:py-32 (generous vertical breathing room)
- Container: max-w-6xl mx-auto px-6 md:px-8
- Card spacing: gap-8 between cards, p-6 internal padding
- Element spacing: mb-4 for paragraphs, mb-8 for section elements

### D. Component Library

**Navigation**
- Sticky header with blur backdrop (backdrop-blur-md bg-background/80)
- Logo/name on left, nav links center/right
- Smooth scroll behavior to sections
- Mobile: Hamburger menu with slide-in drawer

**Hero Section**
- Full viewport height (min-h-screen) with centered content
- Professional photo/illustration: 300px circular avatar (md:400px) with subtle glow effect
- Tagline below name in muted color
- Two-button CTA group: Primary "View My Work" + Outline "Contact Me" with blur backdrop
- Subtle animated gradient background or geometric patterns

**Skills/Tech Stack**
- Grid layout: grid-cols-3 md:grid-cols-4 lg:grid-cols-6
- Icon cards with technology logos (use CDN-based icon libraries)
- Hover effect: subtle lift (translate-y-1) and glow
- Each card: icon + label, clean minimal design

**Projects Section**
- Two-column masonry grid on desktop (grid-cols-1 lg:grid-cols-2)
- Project cards with: large preview image, title, 2-3 line description, tech tags, links
- Card design: rounded-xl border with hover elevation effect
- Image: aspect-video with object-cover
- Action buttons: "Live Demo" + "GitHub" with appropriate icons (Heroicons)

**Experience Timeline**
- Vertical timeline with connecting line
- Each entry: company/role, date range, 3-4 bullet points of achievements
- Alternating emphasis or left-aligned with timeline marker
- Icons for each role type (use Font Awesome or Heroicons)

**Contact Section**
- Clean centered layout with email as primary CTA
- Social icons row (GitHub, LinkedIn, Twitter) - large, interactive
- Optional: Simple contact form (name, email, message) if desired
- Background: subtle gradient or pattern different from other sections

**Footer**
- Three-column layout (desktop): Quick links | Social | Copyright
- Mobile: Stacked single column
- Minimal height, muted colors
- "Built with [tech stack]" tagline

### E. Interactions & Animations

**Minimalist Approach**
- Smooth scroll behavior for anchor navigation
- Card hover: subtle scale (scale-105) + shadow enhancement
- Button hover: brightness adjustment, no elaborate animations
- Intersection Observer: fade-in-up for sections as they enter viewport (translate-y-4 opacity-0 to normal)
- No parallax, no heavy scroll-triggered effects

## Images

**Hero Section**: Include a professional headshot or illustrated avatar (circular, 300-400px diameter). Alternative: geometric illustration representing developer/designer role. Image should have subtle glow/shadow effect.

**Project Cards**: Each project needs a preview image (16:9 aspect ratio). Screenshots of live projects, mockups, or creative representations. Optimize for web, use lazy loading.

**Background**: Hero section can use subtle gradient mesh or geometric patterns (CSS-generated, not image files).

## Accessibility & Polish

- All images with descriptive alt text
- Keyboard navigation for all interactive elements
- Focus states clearly visible with ring-2 ring-accent
- Sufficient contrast ratios (WCAG AA minimum)
- Semantic HTML throughout (nav, section, article tags)
- Meta tags for SEO and Open Graph sharing