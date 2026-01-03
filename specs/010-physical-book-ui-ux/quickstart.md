# Quickstart Guide: UI/UX Enhancement of Physical Book (Docusaurus)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git
- A modern web browser for testing

## Setup Instructions

### 1. Clone and Navigate to Project

```bash
git clone <repository-url> # if needed
cd physical_book
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

The development server will start at `http://localhost:3000`.

## Key Configuration Files

### Main Configuration
- `docusaurus.config.js` - Main Docusaurus configuration
- `src/css/custom.css` - Custom CSS overrides
- `sidebars.js` - Sidebar navigation structure

### Customization Points
- `src/pages/index.js` - Homepage/hero section
- `src/components/` - Custom React components
- `static/img/` - Static images and assets

## Making UI/UX Changes

### 1. Update Color Scheme

Modify CSS custom properties in `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #your-primary-color;
  --ifm-color-primary-dark: #your-darker-shade;
  /* Add more color variables as needed */
}

[data-theme='dark'] {
  --ifm-color-primary: #your-dark-primary;
  /* Dark mode color overrides */
}
```

### 2. Customize Typography

Update font-related CSS variables in `src/css/custom.css`:

```css
:root {
  --ifm-font-family-base: 'Your-Font-Stack';
  --ifm-font-size-base: 16px;
  --ifm-line-height-base: 1.6;
}
```

### 3. Enhance Code Blocks

Modify prism theme settings in `docusaurus.config.js`:

```javascript
prism: {
  theme: prismThemes.yourLightTheme,
  darkTheme: prismThemes.yourDarkTheme,
  additionalLanguages: ['your-language'],
},
```

### 4. Customize Sidebar

Update styling in `src/css/custom.css`:

```css
/* Sidebar customizations */
.menu {
  /* Your sidebar styles */
}

.menu__list {
  /* Sidebar list styles */
}

.menu__link {
  /* Sidebar link styles */
}
```

## Testing Your Changes

### 1. Development Testing

- Use `npm start` to run the development server
- Changes to CSS will hot-reload automatically
- Changes to configuration files may require server restart

### 2. Production Build Test

```bash
npm run build
npm run serve
```

### 3. Responsive Testing

- Use browser developer tools to test different screen sizes
- Test on actual devices when possible
- Verify that navigation works on mobile

## Quality Checks

### 1. Accessibility Validation

- Use browser accessibility tools
- Verify color contrast ratios (minimum 4.5:1 for normal text)
- Test keyboard navigation
- Validate screen reader compatibility

### 2. Performance Testing

- Check page load times
- Use Lighthouse for performance auditing
- Verify that custom CSS doesn't significantly impact performance

### 3. Cross-Browser Testing

- Test in Chrome, Firefox, Safari, and Edge
- Verify that CSS custom properties work in target browsers
- Check that responsive design works across browsers

## Common Customization Tasks

### Updating the Hero Section

1. Modify `src/pages/index.js` or create a custom component
2. Update hero section styles in `src/css/custom.css`
3. Add any required assets to `static/img/`

### Customizing Navigation

1. Update `docusaurus.config.js` for top-level navigation
2. Modify `sidebars.js` for documentation navigation
3. Add custom styles to `src/css/custom.css`

### Adding Custom Components

1. Create new components in `src/components/`
2. Use Docusaurus' component swizzling when needed
3. Import and use components in MDX files or pages

## Troubleshooting

### CSS Not Applying

- Ensure CSS files are imported correctly
- Check for CSS specificity issues
- Verify that custom classes don't conflict with Docusaurus classes

### Theme Switching Issues

- Verify that both light and dark theme variables are defined
- Check that the colorMode configuration is correct in `docusaurus.config.js`
- Ensure CSS selectors properly target both themes

### Responsive Design Problems

- Verify that responsive breakpoints match Docusaurus defaults
- Check that mobile navigation works correctly
- Test on actual mobile devices, not just browser emulators

## Deployment

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

1. Ensure GitHub Pages is enabled in repository settings
2. Push changes to the main branch
3. The site will be automatically built and deployed

## Next Steps

1. Review the detailed [Implementation Plan](plan.md) for comprehensive implementation guidance
2. Check the [Data Model](data-model.md) for structure and relationships
3. Refer to the [Research](research.md) document for technical details
4. Follow the [API Contracts](contracts/) for any API-related customizations