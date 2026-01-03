# Quickstart Guide: Feature Cards Enhancement (Docusaurus)

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

3. **Add the feature card styling rules**
   Add the following CSS rules to `src/css/custom.css`:
   ```css
   /* Feature card headings */
   .feature__title,
   .feature__heading {
     color: #6E6E6D !important;
     font-weight: bold !important;
     font-size: 1.25rem !important;
     margin-bottom: 1rem !important;
     line-height: 1.4 !important;
   }

   /* Feature card paragraphs */
   .feature__description,
   .feature__paragraph {
     color: #4B4B4B !important;
     line-height: 1.7 !important;
     margin-bottom: 1.5rem !important;
     font-size: 1rem !important;
   }

   /* Feature card containers */
   .feature,
   .feature-item {
     background-color: #FAD0C9 !important;
     border-radius: 8px !important;
     padding: 1.5rem !important;
     box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
     transition: all 0.3s ease !important;
   }

   .feature:hover,
   .feature-item:hover {
     transform: scale(1.03) !important;
     box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
   }

   /* Feature icons and images */
   .feature__icon,
   .feature__image {
     border-radius: 6px !important;
     box-shadow: 0 4px 8px rgba(0,0,0,0.1) !important;
     transition: all 0.3s ease !important;
   }

   .feature__icon:hover,
   .feature__image:hover {
     box-shadow: 0 6px 12px rgba(0,0,0,0.15) !important;
     transform: translateY(-2px) !important;
   }
   ```

4. **Test the changes**
   ```bash
   npm run start
   ```
   Visit http://localhost:3000 and verify:
   - Feature card headings are clearly readable in dark gray
   - Feature card paragraphs are readable in medium dark color with good line-height
   - Card containers have attractive light peach background with rounded corners and subtle shadows
   - Hover effects provide visual feedback with slight scale-up and enhanced shadows
   - Icons/images have rounded corners and subtle hover effects
   - All elements work properly in both light and dark modes

## Verification Checklist

- [ ] Feature card headings clearly visible in dark gray (#6E6E6D)
- [ ] Feature card paragraphs readable in medium dark (#4B4B4B) with good line-height
- [ ] Card containers have attractive light peach background (#FAD0C9)
- [ ] Hover effects provide visual feedback (scale-up and enhanced shadows)
- [ ] Icons/images have rounded corners and subtle shadows
- [ ] No layout changes beyond styling enhancements
- [ ] Works in both light and dark modes
- [ ] All existing functionality preserved