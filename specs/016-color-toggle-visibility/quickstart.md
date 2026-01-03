# Quickstart Guide: Color Mode Toggle Visibility Fix

## Overview
This guide provides instructions for implementing improved visibility for the color mode toggle (sun/moon icons) in the Docusaurus-based AI Robotics textbook, ensuring clear visibility in both light and dark modes.

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

### 1. Locate Toggle Component
Identify the color mode toggle in the header/navbar:
- Usually located in the top-right corner
- Class names typically include `.navbar__toggle` or `.clean-btn`

### 2. Modify Toggle Styling
Edit the file `src/css/custom.css`:

1. Add light mode toggle icon styling:
   ```css
   html[data-theme='light'] .navbar__toggle {
     color: #6E6E6D !important; /* Darker than light background for visibility */
   }
   ```

2. Add dark mode toggle icon styling:
   ```css
   html[data-theme='dark'] .navbar__toggle {
     color: #FAD0C9 !important; /* Lighter than dark background for visibility */
   }
   ```

3. Add smooth transition effects:
   ```css
   .navbar__toggle {
     transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
   }
   ```

4. Add hover effects:
   ```css
   .navbar__toggle:hover {
     opacity: 0.8;
     transform: scale(1.1);
   }
   ```

### 3. Dark Mode Specific Adjustments
1. Ensure dark mode icon visibility:
   ```css
   [data-theme='dark'] .navbar__toggle {
     color: #FAD0C9 !important;
   }
   ```

2. Adjust hover effects for dark mode:
   ```css
   [data-theme='dark'] .navbar__toggle:hover {
     color: #FFD1B8 !important; /* Slightly lighter on hover */
   }
   ```

### 4. Accessibility Considerations
1. Add focus states for keyboard navigation:
   ```css
   .navbar__toggle:focus {
     outline: 2px solid #FAD0C9;
     outline-offset: 2px;
   }
   ```

## Verification Steps

1. **Visual verification**:
   - Check toggle icon visibility in both light and dark modes
   - Verify smooth transitions when switching themes
   - Test hover effects and interactive feedback

2. **Accessibility verification**:
   - Use browser tools to check contrast ratios meet WCAG 2.1 AA standards
   - Test keyboard navigation to the toggle element
   - Verify screen reader accessibility

3. **Responsive testing**:
   - Test on different screen sizes
   - Verify mobile menu functionality
   - Check that hover effects don't interfere with touch targets

## Common Issues & Solutions

- **Icon colors not changing**: Check CSS specificity with `!important` flag
- **Transitions not working**: Verify transition property syntax
- **Layout shifts occurring**: Check for absolute positioning issues
- **Hover effects not appearing**: Verify CSS selector and transition properties