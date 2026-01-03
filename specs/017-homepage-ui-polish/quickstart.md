# Quickstart: Polished Homepage UI & Feature Section (Docusaurus)

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
   /* Navbar styling for polished UI */
   .navbar {
     background-color: #000000 !important;
   }

   .navbar__link {
     color: #3498DB !important;
   }

   .navbar__link:hover {
     color: #2980B9 !important;
   }

   .navbar__toggle {
     color: #3498DB !important;
   }

   .navbar__toggle:hover {
     color: #2980B9 !important;
   }

   .navbar__items svg {
     color: #3498DB !important;
   }
   ```

4. **Add hero section styling**
   ```css
   /* Hero section styling */
   .hero {
     background: linear-gradient(135deg, #3498DB, #1a73e8);
     text-align: center;
     padding: 4rem 2rem;
   }

   .hero__title {
     font-size: 2.5rem;
     font-weight: bold;
     margin-bottom: 1rem;
     color: white;
   }

   .hero__subtitle {
     font-size: 1.2rem;
     opacity: 0.8;
     margin-bottom: 2rem;
     color: white;
   }

   .hero__logo {
     display: flex;
     justify-content: center;
     margin-bottom: 2rem;
   }
   ```

5. **Add feature section styling**
   ```css
   /* Feature section styling */
   .feature__title,
   .feature__heading {
     color: #2c3e50;
     font-weight: bold;
     margin-bottom: 1rem;
   }

   .feature__title:hover,
   .feature__heading:hover {
     color: #3498DB;
   }

   .feature__description,
   .feature__paragraph {
     color: #555555;
     line-height: 1.7;
     margin-bottom: 1.5rem;
   }

   .feature__icon,
   .feature__image {
     border-radius: 8px;
     box-shadow: 0 4px 8px rgba(0,0,0,0.1);
   }
   ```

6. **Add button styling**
   ```css
   /* Button styling */
   .button {
     border-radius: 8px;
     transition: all 0.3s ease;
   }

   .button:hover {
     background-color: #2980B9 !important;
     transform: translateY(-2px);
     box-shadow: 0 4px 12px rgba(0,0,0,0.15);
   }
   ```

7. **Test the changes**
   ```bash
   npm run start
   ```
   Visit http://localhost:3000 and verify:
   - Navbar text and icons are clearly visible in blue
   - Hero section has gradient background with centered content
   - Feature section headings are distinct from paragraphs
   - Buttons have rounded corners and hover effects
   - All elements work properly in both light and dark modes

## Verification Checklist

- [ ] Navbar text visible without hover
- [ ] Navbar icons visible at all times
- [ ] Hero section has engaging gradient background
- [ ] Feature section headings are visually distinct
- [ ] Paragraphs have improved readability
- [ ] Buttons have consistent styling and hover effects
- [ ] No layout changes beyond styling
- [ ] Works in both light and dark modes
- [ ] All functionality preserved