# Research: Navbar Text and Icon Visibility Fix

## Target Elements Identification

### Navbar Text Links
- Docusaurus uses `.navbar__link` class for navigation links
- Additional classes may include `.navbar__item`, `.navbar__link--active`

### Navbar Icons
- Color mode toggle uses `.navbar__toggle` and related classes
- Other icons may use `.navbar__logo`, `.navbar__icon`, or SVG elements
- Search icon if present uses `.navbar__search`

## Color Strategy

### Default Colors
- Primary blue: `#0072CE` (accessible blue with good contrast)
- Alternative: `#1E88E5` (Google Material blue, good contrast ratio)

### Hover State
- Slightly brighter blue: `#42A5F5` (hover/lighter shade)
- Maintain accessibility standards with >4.5:1 contrast ratio

### CSS Implementation Strategy

#### Target Selectors for Text
- `.navbar__link` - for navigation links
- `.navbar__title` - for site title if applicable
- `.navbar__item` - for general navbar items

#### Target Selectors for Icons
- `.navbar__toggle` - for color mode toggle
- `.navbar__logo img` - for logo if needed
- `.navbar__icon` - for general icons
- SVG elements within navbar

#### CSS Rules Structure
```css
/* Default state */
.navbar__link {
  color: #0072CE !important;
}

.navbar__toggle {
  color: #0072CE !important;
}

/* Hover state */
.navbar__link:hover {
  color: #42A5F5 !important;
}

.navbar__toggle:hover {
  color: #42A5F5 !important;
}
```

## Testing Approach

1. Apply CSS changes to `physical_book/src/css/custom.css`
2. Start local Docusaurus server with `npm run start`
3. Verify visibility in both light and dark modes
4. Test hover effects
5. Ensure no layout or functionality changes