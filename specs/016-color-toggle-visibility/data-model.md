# Data Model: Color Mode Toggle Components

## ColorModeToggle Component Entity

**Name**: ColorModeToggleComponent
**Description**: The color mode toggle button containing sun/moon icons and interactive behavior

**Properties**:
- `lightModeColor`: String - The icon color in light mode (#6E6E6D)
- `darkModeColor`: String - The icon color in dark mode (#FAD0C9)
- `transitionDuration`: String - Theme switching transition duration (0.3s)
- `transitionTiming`: String - Theme switching transition timing (ease-in-out)
- `hoverEffect`: String - Hover effect properties (color change or brightness adjustment)

## Theme State Entity

**Name**: ThemeStateEntity
**Description**: The current theme state (light/dark) that affects toggle icon visibility and styling

**Properties**:
- `theme`: String - Current theme ("light" or "dark")
- `iconColor`: String - Current icon color based on theme
- `backgroundColor`: String - Background color for contrast calculation

**Relationships**:
- Applied to: ColorModeToggleComponent for styling

## Icon Visibility System Entity

**Name**: IconVisibilitySystem
**Description**: The styling system ensuring appropriate contrast between icons and backgrounds in both modes

**Properties**:
- `lightModeContrast`: Number - Contrast ratio in light mode
- `darkModeContrast`: Number - Contrast ratio in dark mode
- `colorStrategy`: Object - Color selection strategy for both modes
- `accessibilityCompliance`: Boolean - Whether WCAG standards are met

**Relationships**:
- Governs: ColorModeToggleComponent styling
- Validates: ThemeStateEntity contrast ratios