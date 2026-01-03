# Quickstart: Physical Book Documentation Platform

## Setup Instructions

### Prerequisites
- Node.js (LTS version 18+ recommended)
- npm or yarn package manager
- Git

### Getting Started

1. **Navigate to the physical_book directory**
   ```bash
   cd physical_book
   ```

2. **Install dependencies (if not already installed)**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run start
   ```

### Content Creation

1. **Create a new module directory**
   ```bash
   mkdir -p docs/modules/module-1
   ```

2. **Create chapter files in the module directory**
   ```bash
   touch docs/modules/module-1/chapter-1.md
   touch docs/modules/module-1/chapter-2.md
   touch docs/modules/module-1/chapter-3.md
   ```

3. **Add content to each chapter file with proper frontmatter**
   ```markdown
   ---
   title: Chapter Title
   sidebar_label: Chapter X
   ---

   # Chapter Title

   Content goes here...
   ```

### Navigation Configuration

1. **Update sidebars.js to include new modules and chapters**
   ```javascript
   module.exports = {
     tutorialSidebar: [
       'intro',
       {
         type: 'category',
         label: 'Module 1: Module Title',
         items: [
           'modules/module-1/chapter-1',
           'modules/module-1/chapter-2',
           'modules/module-1/chapter-3',
         ],
       },
     ],
   };
   ```

### Building and Deployment

1. **Build the site for production**
   ```bash
   npm run build
   ```

2. **Serve the built site locally for testing**
   ```bash
   npm run serve
   ```

### File Organization Summary
- All content files are .md format as required
- Content is organized in `docs/modules/module-X/` directories
- Each module has its own subdirectory with chapter files
- Navigation is configured in `sidebars.js` to link chapters under modules
- All configuration is in the `physical_book` directory