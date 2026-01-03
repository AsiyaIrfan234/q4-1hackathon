# Quickstart: Remove Blog from Docusaurus

## Overview
This guide explains how to completely remove the blog functionality from a Docusaurus-based AI Robotics textbook site while preserving all other site functionality.

## Prerequisites
- Node.js installed on your system
- Access to the Docusaurus project files
- Basic understanding of Docusaurus configuration

## Steps

### 1. Locate the Configuration File
Open the `physical_book/docusaurus.config.js` file in your project.

### 2. Remove Blog Plugin Configuration
Find the presets section (around lines 55-69) and remove the blog object:

```javascript
// Before
presets: [
  [
    'classic',
    {
      docs: { ... },
      blog: {  // <- Remove this entire blog object
        showReadingTime: true,
        feedOptions: { ... },
        editUrl: '...',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
      theme: { ... },
    },
  ],
],

// After
presets: [
  [
    'classic',
    {
      docs: { ... },
      theme: { ... },
    },
  ],
],
```

### 3. Remove Navbar Blog Link
Find the navbar items array (around line 98) and remove the blog link:

```javascript
// Before
{
  type: 'docSidebar',
  sidebarId: 'tutorialSidebar',
  position: 'left',
  label: 'Tutorial',
},
{to: '/blog', label: 'Blog', position: 'left'},  // <- Remove this line
{
  href: 'https://github.com/AsiyaIrfan234',
  label: 'GitHub',
  position: 'right',
},

// After
{
  type: 'docSidebar',
  sidebarId: 'tutorialSidebar',
  position: 'left',
  label: 'Tutorial',
},
{
  href: 'https://github.com/AsiyaIrfan234',
  label: 'GitHub',
  position: 'right',
},
```

### 4. Remove Footer Blog Link
Find the footer links array (around lines 138-141) and remove the blog link:

```javascript
// Before
{
  title: 'More',
  items: [
    {
      label: 'Blog',  // <- Remove this entire object
      to: '/blog',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/AsiyaIrfan234',
    },
  ],
},

// After
{
  title: 'More',
  items: [
    {
      label: 'GitHub',
      href: 'https://github.com/AsiyaIrfan234',
    },
  ],
},
```

### 5. Delete Blog Directory
Remove the entire `physical_book/blog/` directory and all its contents.

### 6. Save and Test
1. Save all changes to `docusaurus.config.js`
2. Delete the blog directory
3. Run the development server: `npm start` (or `yarn start`)
4. Verify that the blog link is gone and no /blog route exists

## Verification
- Blog link should no longer appear in the navbar
- No /blog route should be accessible
- Site should build and run without errors
- All other functionality should remain unchanged

## Troubleshooting
- If the site doesn't start, check for syntax errors in the configuration file
- If other navigation elements are affected, verify you only removed the blog-related entries
- If you get 404 errors on other pages, ensure you only removed blog-related configuration