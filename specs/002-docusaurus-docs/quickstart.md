# Quickstart: Docusaurus Documentation Platform

## Setup Instructions

### Prerequisites
- Node.js (LTS version recommended)
- npm or yarn package manager
- Git

### Installation Steps

1. **Install Docusaurus**
   ```bash
   npx create-docusaurus@latest website classic
   cd website
   ```

2. **Create docs directory structure**
   ```bash
   mkdir -p docs/modules/module-1
   ```

3. **Create Module 1 with three chapters**
   ```bash
   touch docs/modules/module-1/chapter-1.md
   touch docs/modules/module-1/chapter-2.md
   touch docs/modules/module-1/chapter-3.md
   ```

4. **Configure sidebar navigation**
   Edit `sidebar.js` or add sidebar configuration to `docusaurus.config.js`:
   ```javascript
   module.exports = {
     // ... other config
     presets: [
       [
         '@docusaurus/preset-classic',
         {
           docs: {
             sidebarPath: require.resolve('./sidebars.js'),
           },
           // ... other presets
         },
       ],
     ],
   };
   ```

5. **Create sidebar configuration**
   Create `sidebars.js`:
   ```javascript
   module.exports = {
     docs: [
       {
         type: 'category',
         label: 'Module 1: The Robotic Nervous System (ROS 2)',
         items: [
           'modules/module-1/chapter-1',
           'modules/module-1/chapter-2',
           'modules/module-1/chapter-3',
         ],
       },
     ],
   };
   ```

6. **Start development server**
   ```bash
   npm run start
   ```

### Adding Content to Chapters

1. Edit each chapter file with appropriate markdown content:
   ```markdown
   ---
   title: Chapter Title
   sidebar_label: Chapter X
   ---

   # Chapter Title

   Content goes here...
   ```

2. Ensure each chapter follows the educational structure required for AI students and developers.

### Deployment to GitHub Pages

1. Configure deployment settings in `docusaurus.config.js`
2. Use GitHub Actions or manual deployment to publish to GitHub Pages
3. Ensure all content aligns with the educational objectives