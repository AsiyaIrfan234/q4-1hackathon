# UI/UX Enhancement for Physical Book (Docusaurus) Development Guidelines

Auto-generated from feature plan. Last updated: 2025-12-30

## Active Technologies

- Docusaurus: Documentation platform and static site generator
- React: Component-based UI development
- CSS/SCSS: Styling and theming with Infima framework
- Node.js: Runtime environment
- npm: Package management
- Prism: Syntax highlighting for code blocks
- Infima: CSS framework for Docusaurus

## Project Structure

```text
physical_book/
├── docs/
│   ├── modules/
│   │   ├── module-1/
│   │   │   ├── chapter-1.md    # Introduction to Physical Book
│   │   │   ├── chapter-2.md    # Getting Started
│   │   │   └── chapter-3.md    # Advanced Topics
│   │   └── _category_.json
│   └── _category_.json
├── src/
│   ├── components/             # Custom React components
│   ├── css/                    # Custom CSS styling
│   │   └── custom.css          # Main custom styles
│   └── pages/                  # Custom page components
├── static/                     # Static assets
│   └── img/                    # Images and graphics
├── docusaurus.config.js        # Main Docusaurus configuration
├── sidebars.js                 # Sidebar navigation structure
└── package.json                # Project dependencies
```

## Commands

### Development
```bash
# Navigate to physical_book directory
cd physical_book

# Install dependencies
npm install

# Start development server
npm start
```

### Building & Deployment
```bash
# Build for production
npm run build

# Serve production build locally for testing
npm run serve
```

### Customization
```bash
# Swizzle a component to customize it
npm run swizzle @docusaurus/theme-classic ComponentName

# Generate new documentation
npm run write-translations
```

## Code Style

### CSS/SCSS Styling
- Use CSS custom properties for theming consistency
- Follow BEM methodology for class naming
- Maintain accessibility standards (WCAG 2.1 AA)
- Use relative units (rem, em) for scalable designs
- Implement responsive design with mobile-first approach

### React Components
- Follow Docusaurus component conventions
- Use TypeScript for component definitions when possible
- Maintain component reusability and modularity
- Implement proper prop validation
- Include accessibility attributes (ARIA labels, roles)

### Docusaurus Configuration
- Organize documentation in logical hierarchies
- Use consistent sidebar navigation structure
- Maintain clear document titles and descriptions
- Implement proper metadata for SEO

## Recent Changes

- UI/UX Enhancement: Modern hero section with engaging design elements
- Navigation Improvements: Enhanced sidebar with clear visual hierarchy
- Code Block Styling: Improved syntax highlighting and visual distinction
- Typography Enhancement: Better readability with proper spacing
- Theme System: Balanced light/dark mode experience

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->