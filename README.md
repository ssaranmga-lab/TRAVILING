# Digital Saran Travel Blog

A professional travel blog website for Digital Saran, featuring SEO-optimized, mobile-responsive design with high-quality imagery and monetization features.

## Project Overview

- **Niche:** Travel Blogging
- **Technologies:** HTML5, Tailwind CSS, JavaScript
- **Focus:** SEO-optimized, mobile-responsive travel website with high-quality imagery and monetization features

## Service Level Objectives (SLO) Requirements

### Performance Standards
- **Page Load Speed:** All pages must load in under 3 seconds on 3G connections
- **Mobile Performance:** Achieve 90+ Google PageSpeed Insights score on mobile devices
- **Image Optimization:** All images compressed to under 500 KB while maintaining visual quality
- **SEO Target:** Achieve first-page rankings for target travel keywords within 6 months
- **User Experience:** Maintain under 2% bounce rate from mobile devices

### Technical Requirements
- **Uptime Objective:** 99.9% website availability
- **Responsive Design:** Perfect display across all devices (mobile-first approach)
- **Accessibility Standard:** WCAG 2.1 AA compliance for inclusive user experience

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Development

1. Start the Tailwind CSS build process:
   ```
   npm run build:css
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:8080`

### Production Build

1. Build the production-ready CSS:
   ```
   npm run build
   ```

## SLO Testing Guidelines

### Performance Testing

1. **Page Load Speed Testing:**
   - Use [WebPageTest](https://www.webpagetest.org/) to simulate 3G connections
   - Target: < 3 seconds load time
   - Test all pages monthly

2. **Mobile Performance Testing:**
   - Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - Target: 90+ score on mobile
   - Test all pages monthly

3. **Image Optimization Verification:**
   - Use browser developer tools to check image sizes
   - Target: All images < 500 KB
   - Verify after each new image addition

### SEO Monitoring

1. **Keyword Ranking Tracking:**
   - Use [SEMrush](https://www.semrush.com/) or [Ahrefs](https://ahrefs.com/)
   - Target: First-page rankings for target keywords
   - Track monthly

2. **User Experience Monitoring:**
   - Use Google Analytics to track bounce rates
   - Target: < 2% bounce rate from mobile devices
   - Review weekly

### Accessibility Testing

1. **WCAG 2.1 AA Compliance:**
   - Use [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
   - Target: 0 errors
   - Test after each major update

## Project Structure

```
/TravelBlog
├── assets/
│   ├── css/
│   │   ├── input.css     # Tailwind CSS input file
│   │   └── style.css     # Compiled CSS (generated)
│   ├── js/
│   │   └── main.js       # Main JavaScript file
│   ├── images/           # Optimized images
│   └── fonts/            # Web fonts
├── components/           # Reusable HTML components
├── pages/                # Individual page templates
├── index.html            # Home page
├── destinations.html     # Destinations page
├── guides.html           # Travel Guides page
├── gallery.html          # Photo Gallery page
├── about.html            # About Me page
├── contact.html          # Contact & Collaborate page
├── resources.html        # Resources page
├── blog.html             # Blog Archive page
├── advertise.html        # Advertise page (optional)
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── README.md             # Project documentation
```

## Style Guide

### Colors

- **Primary Colors:**
  - Forest: `#3B5249`
  - Ocean: `#4A6D8C`
  - Sand: `#E6D2B5`
  - Coral: `#E76F51`

- **Secondary Colors:**
  - Clay: `#C1A98C`
  - Moss: `#8A9A5B`
  - Sunset: `#D98F6A`
  - Midnight: `#1F2937`

### Typography

- **Headings:** Playfair Display (serif)
- **Body:** Montserrat (sans-serif)
- **Accents:** Merriweather (serif)

### Component Usage

- **Buttons:**
  - Primary: Use for main calls-to-action
  - Secondary: Use for alternative actions

- **Cards:**
  - Use for destination previews, blog posts, and resources

- **Navigation:**
  - Desktop: Horizontal navigation bar
  - Mobile: Hamburger menu with slide-out drawer

## Analytics & Monitoring

- **Google Analytics:** For user behavior tracking
- **Google Search Console:** For SEO performance monitoring
- **Lighthouse CI:** For automated performance testing
- **Uptime Robot:** For website availability monitoring

## License

ISC © Digital Saran