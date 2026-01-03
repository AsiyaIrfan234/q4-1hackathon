# Data Model: Navbar Components

## Navbar Component Entity

**Name**: NavbarComponent
**Description**: The top navigation bar containing background, links, and interactive elements

**Properties**:
- `backgroundColor`: String - The background color (#6E6E6D)
- `textColor`: String - Default link color (#FAD0C9)
- `hoverColor`: String - Hover state color (#FFD1B8)
- `activeColor`: String - Active link color (#FAD0C9)
- `transitionDuration`: String - Hover transition duration (0.3s)
- `transitionTiming`: String - Hover transition timing (ease-in-out)

## Navigation Link Entity

**Name**: NavLinkEntity
**Description**: Individual navigation links with default, hover, and active states

**Properties**:
- `defaultColor`: String - Default state color (#FAD0C9)
- `hoverColor`: String - Hover state color (#FFD1B8)
- `activeColor`: String - Active state color (#FAD0C9)
- `fontWeight`: String - Font weight (medium to bold)
- `spacing`: String - Spacing between links
- `transition`: String - Transition properties (0.3s ease-in-out)

**Relationships**:
- Part of: NavbarComponent (collection of navigation links)

## Theme Context Entity

**Name**: ThemeContext
**Description**: Represents the current display theme (light/dark mode) that affects navbar styling

**Properties**:
- `theme`: String - Current theme ("light" or "dark")
- `navbarColors`: Object - Color scheme for the current theme

**Relationships**:
- Applied to: NavbarComponent for styling