# Quickstart: Update GitHub Repository Link to Personal Account (Docusaurus)

## Overview
This guide explains how to update the GitHub repository link in your Docusaurus documentation site to point to your personal GitHub profile instead of the default Docusaurus repository.

## Prerequisites
- Node.js installed on your system
- Access to the Docusaurus project files
- GitHub account to link to

## Steps

### 1. Locate the Configuration File
Open the `physical_book/docusaurus.config.js` file in your project.

### 2. Update Navbar GitHub Link
Find the navbar items array (around line 99-103) and update the href value:

```javascript
// Before
{
  href: 'https://github.com/facebook/docusaurus',
  label: 'GitHub',
  position: 'right',
}

// After
{
  href: 'https://github.com/AsiyaIrfan234',
  label: 'GitHub',
  position: 'right',
}
```

### 3. Update Footer GitHub Link
Find the footer links array (around line 143-145) and update the href value:

```javascript
// Before
{
  label: 'GitHub',
  href: 'https://github.com/facebook/docusaurus',
}

// After
{
  label: 'GitHub',
  href: 'https://github.com/AsiyaIrfan234',
}
```

### 4. Save and Test
1. Save the changes to `docusaurus.config.js`
2. Run the development server: `npm start` (or `yarn start`)
3. Verify that clicking the GitHub icon in the navbar opens the correct URL
4. Verify that clicking the GitHub link in the footer also opens the correct URL

## Verification
- GitHub icon in navbar should open https://github.com/AsiyaIrfan234
- GitHub link in footer should open https://github.com/AsiyaIrfan234
- All other navbar functionality should remain unchanged
- Site should build and run without errors

## Troubleshooting
- If the site doesn't start, check for syntax errors in the configuration file
- If links don't work, verify the URL format is correct (https://github.com/username)
- If navbar appears broken, ensure you only changed the href values and not other properties