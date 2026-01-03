# Data Model: Feature Section Components

## Feature Card Entity

**Name**: FeatureCard
**Description**: Represents a single feature block in the homepage feature section

**Fields**:
- `id`: Unique identifier for the feature card
- `title`: String - The feature title (e.g., "Modern UI Design")
- `description`: String - The feature description text
- `icon`: String - Path to the SVG icon for the feature
- `className`: String - CSS class names for styling

**Relationships**:
- Contains: One icon, one title, one description
- Part of: FeatureList (collection of feature cards)

## Feature List Entity

**Name**: FeatureList
**Description**: Collection of feature cards displayed on the homepage

**Fields**:
- `features`: Array of FeatureCard entities
- `layout`: String - Layout configuration (responsive grid)

**Relationships**:
- Contains: Multiple FeatureCard entities (typically 3)

## Theme Context Entity

**Name**: ThemeContext
**Description**: Represents the current display theme (light/dark mode)

**Fields**:
- `theme`: String - Current theme ("light" or "dark")
- `cssVariables`: Object - CSS variables for the current theme

**Relationships**:
- Applied to: FeatureCard entities for styling