# Data Model: Update GitHub Repository Link to Personal Account (Docusaurus)

## Entities

### GitHub Configuration
- **Name**: githubConfig
- **Description**: Configuration object for GitHub repository links in Docusaurus
- **Fields**:
  - href (string): The URL to the GitHub repository/profile
  - label (string): The display text for the link (default: "GitHub")
  - position (string): Position in navbar (left/right) or footer
- **Validation**:
  - href must be a valid URL starting with https://
  - href must point to a valid GitHub profile/repository

### Navbar Item
- **Name**: navbarItem
- **Description**: Individual item in the Docusaurus navigation bar
- **Fields**:
  - type (string, optional): Type of navigation item (doc, docSidebar, etc.)
  - to (string, optional): Internal route
  - href (string, optional): External URL
  - label (string): Display text
  - position (string): Position in navbar (left/right)
- **Relationships**: Contains GitHub Configuration when it's a GitHub link

## State Transitions

### Configuration Update Process
1. **Initial State**: GitHub links point to default Docusaurus repository (https://github.com/facebook/docusaurus)
2. **Update Action**: Modify href values in docusaurus.config.js
3. **Final State**: GitHub links point to user's GitHub profile (https://github.com/AsiyaIrfan234)

## Constraints

- All GitHub links must maintain the same structure and properties
- Position and label properties should remain unchanged
- Only the href value should be updated
- Configuration must remain valid for Docusaurus to process