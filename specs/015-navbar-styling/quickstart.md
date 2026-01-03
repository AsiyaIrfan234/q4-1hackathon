# Quickstart Guide: Navbar Styling & Interactions

## Overview
This guide provides instructions for implementing navbar styling and interactions for the Docusaurus-based AI Robotics textbook homepage using the specified color scheme (#6E6E6D, #FAD0C9, #FFD1B8).

## Prerequisites
- Node.js and npm installed
- Docusaurus project set up
- Access to source code in `physical_book/` directory

## Setup Instructions

1. **Navigate to the project directory**:
   ```bash
   cd physical_book
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

## Implementation Steps

### 1. Modify Navbar Styling
Edit the file `src/css/custom.css`:

1. Add navbar background styling:
   ```css
   .navbar {
     background-color: #6E6E6D !important;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional subtle shadow */
   }
   ```

2. Update navbar link colors:
   ```css
   .navbar__link {
     color: #FAD0C9 !important;
     font-weight: 500; /* Medium to bold */
     transition: color 0.3s ease-in-out; /* Smooth transition */
   }
   ```

3. Add hover effects:
   ```css
   .navbar__link:hover {
     color: #FFD1B8 !important;
     text-decoration: underline; /* Optional underline */
   }
   ```

4. Style active links:
   ```css
   .navbar__link--active {
     color: #FAD0C9 !important;
     background-color: rgba(255, 255, 255, 0.1); /* Optional subtle background */
     border-radius: 4px;
     padding: 4px 8px;
   }
   ```

### 2. Dark Mode Adjustments
1. Add dark mode specific styles:
   ```css
   [data-theme='dark'] .navbar {
     background-color: #6E6E6D !important;
   }

   [data-theme='dark'] .navbar__link {
     color: #FAD0C9 !important;
   }

   [data-theme='dark'] .navbar__link:hover {
     color: #FFD1B8 !important;
   }
   ```

### 3. Spacing and Responsiveness
1. Ensure proper spacing between links:
   ```css
   .navbar__item {
     margin-left: 1rem;
     margin-right: 1rem;
   }
   ```

## Verification Steps

1. **Visual verification**:
   - Check navbar in both light and dark modes
   - Verify link colors match specifications (#FAD0C9, #FFD1B8)
   - Test hover effects and active state indicators

2. **Accessibility verification**:
   - Use browser tools to check contrast ratios
   - Test keyboard navigation
   - Verify semantic HTML structure

3. **Responsive testing**:
   - Test on different screen sizes
   - Verify mobile menu functionality
   - Check that hover effects don't interfere with touch targets

## Common Issues & Solutions

- **Link colors not changing**: Check CSS specificity with `!important` flag
- **Hover effects not working**: Verify CSS selector and transition properties
- **Active link not highlighted**: Confirm Docusaurus active link classes
- **Responsive issues**: Test on mobile and adjust spacing if needed