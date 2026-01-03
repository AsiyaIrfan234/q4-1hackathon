# Quickstart: Navbar Text and Icon Visibility Fix

## Prerequisites

- Node.js and npm installed
- Docusaurus project set up (physical_book directory)
- Access to `physical_book/src/css/custom.css`

## Implementation Steps

1. **Navigate to the project directory**
   ```bash
   cd physical_book
   ```

2. **Edit the custom CSS file**
   ```bash
   # Open src/css/custom.css for editing
   ```

3. **Add the navbar styling rules**
   Add the following CSS rules to `src/css/custom.css`:
   ```css
   /* Navbar text visibility fix */
   .navbar__link {
     color: #0072CE !important;
   }

   .navbar__link:hover {
     color: #42A5F5 !important;
   }

   /* Navbar icon visibility fix */
   .navbar__toggle {
     color: #0072CE !important;
   }

   .navbar__toggle:hover {
     color: #42A5F5 !important;
   }

   /* Additional navbar items */
   .navbar__item {
     color: #0072CE !important;
   }

   .navbar__item:hover {
     color: #42A5F5 !important;
   }
   ```

4. **Test the changes**
   ```bash
   npm run start
   ```
   Visit http://localhost:3000 and verify:
   - Navbar text is clearly visible against black background
   - Navbar icons are clearly visible
   - Hover effects work properly
   - Both light and dark modes work correctly

## Verification Checklist

- [ ] Navbar text visible without hover
- [ ] Navbar icons visible at all times
- [ ] Hover effects provide visual feedback
- [ ] No layout changes
- [ ] Works in both light and dark modes
- [ ] All functionality preserved