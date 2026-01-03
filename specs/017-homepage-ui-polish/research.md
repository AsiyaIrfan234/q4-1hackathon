# Research: Polished Homepage UI & Feature Section (Docusaurus)

## Target Elements Identification

### Navbar Elements
- Docusaurus uses `.navbar` class for the main navigation bar
- Navbar text links use `.navbar__link` class
- Navbar items use `.navbar__item` class
- Navbar toggle (color mode) uses `.navbar__toggle` class
- SVG icons within navbar use `.navbar__items svg` selector

### Hero Section Elements
- Main hero container typically uses `.hero` or `.hero__banner` class
- Title uses `.hero__title` class
- Subtitle uses `.hero__subtitle` class
- Logo container uses `.hero__logo` or similar
- Button elements use `.button` or `.button--primary` classes

### Feature Section Elements
- Feature container uses `.features` or `.feature` classes
- Feature headings use `.feature__title` or `.feature__heading` classes
- Feature paragraphs use `.feature__paragraph` or `.feature__description` classes
- Feature icons/images use `.feature__icon` or `.feature__image` classes

### Homepage Structure
- Main page container uses `.main` or `.container` classes
- Section containers use `.section` or similar classes
- Button components use `.button` classes with variants

## Color Strategy

### Primary Colors
- Navbar text and icons: `#3498DB` (clean blue with good contrast)
- Hover state: `#2980B9` (slightly darker blue for hover effect)
- Hero section gradient: `linear-gradient(135deg, #3498DB, #1a73e8)` or similar

### Typography Colors
- Headings: `#2c3e50` (dark gray for better readability)
- Paragraphs: `#555555` (medium-dark neutral color)
- Subtle text: `#7f8c8d` (lighter gray for secondary text)

## CSS Implementation Strategy

### Navbar Styling
```css
/* Navbar background */
.navbar {
  background-color: #000000 !important;
}

/* Navbar text links */
.navbar__link {
  color: #3498DB !important;
}

.navbar__link:hover {
  color: #2980B9 !important;
}

/* Navbar icons */
.navbar__toggle {
  color: #3498DB !important;
}

.navbar__toggle:hover {
  color: #2980B9 !important;
}

/* SVG icons in navbar */
.navbar__items svg {
  color: #3498DB !important;
}
```

### Hero Section Styling
```css
/* Hero section gradient background */
.hero {
  background: linear-gradient(135deg, #3498DB, #1a73e8);
  text-align: center;
  padding: 4rem 2rem;
}

/* Hero title */
.hero__title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Hero subtitle */
.hero__subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

/* Hero logo centering */
.hero__logo {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
```

### Feature Section Styling
```css
/* Feature headings */
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

/* Feature paragraphs */
.feature__description,
.feature__paragraph {
  color: #555555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

/* Feature icons/images */
.feature__icon,
.feature__image {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```

### Button Styling
```css
/* Buttons with rounded corners and hover effects */
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

## Testing Approach

1. Apply CSS changes to `physical_book/src/css/custom.css`
2. Start local Docusaurus server with `npm run start`
3. Verify visibility in both light and dark modes
4. Test hover effects on all interactive elements
5. Ensure no layout or functionality changes
6. Check responsiveness on different screen sizes