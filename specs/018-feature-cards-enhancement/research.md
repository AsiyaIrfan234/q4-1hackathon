# Research: Feature Cards Enhancement (Docusaurus)

## Target Elements Identification

### Feature Card Structure
- Docusaurus uses `.feature` or `.feature-card` classes for feature sections
- Headings typically use `.feature__title`, `.feature__heading`, or `.feature__headline` classes
- Paragraphs use `.feature__description`, `.feature__paragraph`, or `.feature__text` classes
- Card containers use `.feature__container`, `.feature__card`, or `.feature__item` classes

### CSS Classes Investigation
Based on typical Docusaurus feature section structure:
- Main feature container: `.features` or `.feature-section`
- Individual feature items: `.feature` or `.feature-item`
- Feature headings: `.feature__title` or `.feature__heading`
- Feature descriptions: `.feature__description` or `.feature__text`
- Feature icons: `.feature__icon` or `.feature__image`

## Color Strategy

### Primary Colors
- Heading color: `#6E6E6D` (dark gray for better contrast)
- Paragraph color: `#4B4B4B` (medium dark neutral for readability)
- Card background: `#FAD0C9` (light peach for visual appeal)

### Hover Effects
- Slight scale-up: `transform: scale(1.03)`
- Enhanced shadow: `box-shadow: 0 8px 25px rgba(0,0,0,0.15)`
- Alternative: Slight color shift for interactive feedback

## CSS Implementation Strategy

### Headings Styling
```css
/* Feature headings */
.feature__title,
.feature__heading {
  color: #6E6E6D !important;
  font-weight: bold !important;
  margin-bottom: 1rem !important;
  font-size: 1.25rem !important;
  line-height: 1.4 !important;
}

/* Add hover effect if needed */
.feature__title:hover,
.feature__heading:hover {
  color: #5a5a5a !important;  /* Slightly darker on hover */
}
```

### Paragraphs Styling
```css
/* Feature paragraphs */
.feature__description,
.feature__paragraph {
  color: #4B4B4B !important;
  line-height: 1.7 !important;
  margin-bottom: 1.5rem !important;
  font-size: 1rem !important;
}
```

### Card Container Styling
```css
/* Feature card containers */
.feature,
.feature-item {
  background-color: #FAD0C9 !important;
  border-radius: 8px !important;
  padding: 1.5rem !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
  transition: all 0.3s ease !important;
}

.feature:hover {
  transform: scale(1.03) !important;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}
```

### Icons/Images Styling
```css
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

## Testing Approach

1. Apply CSS changes to `physical_book/src/css/custom.css`
2. Start local Docusaurus server with `npm run start`
3. Verify readability of headings and paragraphs
4. Check visual appeal of card containers
5. Test hover effects on cards and visual elements
6. Verify appearance in both light and dark modes
7. Ensure no layout or functionality changes