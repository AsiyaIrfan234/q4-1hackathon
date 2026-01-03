# Quickstart: Docusaurus Setup for Course Modules

## Setup Instructions

### Prerequisites
- Node.js (LTS version 18+ recommended)
- npm or yarn package manager
- Git

### Installation Steps

1. **Install Docusaurus in website directory**
   ```bash
   mkdir website
   cd website
   npx create-docusaurus@latest . classic
   ```

2. **Create docs directory structure for modules**
   ```bash
   mkdir -p docs/modules/module-1
   ```

3. **Create Module 1 with three chapter pages**
   ```bash
   # Create the three chapter files as .md files
   touch docs/modules/module-1/chapter-1.md
   touch docs/modules/module-1/chapter-2.md
   touch docs/modules/module-1/chapter-3.md
   ```

4. **Add content to each chapter file with proper frontmatter**
   ```bash
   # Example for chapter-1.md
   cat > docs/modules/module-1/chapter-1.md << 'EOF'
   ---
   title: Chapter 1 - ROS 2 Fundamentals
   sidebar_label: Chapter 1
   ---

   # ROS 2 Fundamentals

   Content for Chapter 1 goes here...

   ## Topics Covered
   - ROS 2 architecture
   - Nodes, topics, and services
   - Data flow and communication model
   EOF
   ```

5. **Configure sidebar navigation for course modules**
   Create or update `sidebars.js`:
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

6. **Update Docusaurus configuration**
   Edit `docusaurus.config.js` to include the sidebar:
   ```javascript
   module.exports = {
     title: 'AI Robotics Course',
     tagline: 'Educational content for AI students and developers',
     // ... other config
     presets: [
       [
         '@docusaurus/preset-classic',
         {
           docs: {
             sidebarPath: require.resolve('./sidebars.js'),
             editUrl: 'https://github.com/your-org/your-repo/edit/main/',
           },
           // ... other presets
         },
       ],
     ],
   };
   ```

7. **Start development server**
   ```bash
   cd website
   npm run start
   ```

### Adding Additional Modules

1. **Create new module directory**
   ```bash
   mkdir -p docs/modules/module-2
   ```

2. **Create chapter files for the new module**
   ```bash
   touch docs/modules/module-2/chapter-1.md
   touch docs/modules/module-2/chapter-2.md
   touch docs/modules/module-2/chapter-3.md
   ```

3. **Update sidebar configuration** to include the new module in `sidebars.js`

### Deployment to GitHub Pages

1. **Configure deployment settings in `docusaurus.config.js`**
   ```javascript
   module.exports = {
     // ... other config
     deploymentBranch: 'gh-pages',
     // ... rest of config
   };
   ```

2. **Build the site**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### File Organization Summary
- All content files are .md format as required
- Content is organized in `docs/modules/module-X/` directories
- Each module has its own subdirectory with chapter files
- Navigation is configured in `sidebars.js` to link chapters under modules
- All configuration is in the `website` directory