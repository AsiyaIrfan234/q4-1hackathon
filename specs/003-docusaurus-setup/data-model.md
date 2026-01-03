# Data Model: Docusaurus Setup for Course Modules

## Content Structure

### Module
- **id**: Unique identifier for the module (e.g., "module-1", "module-2")
- **title**: Display title for the module (e.g., "The Robotic Nervous System (ROS 2)")
- **description**: Brief description of the module's content
- **chapters**: Array of chapter references
- **order**: Numeric ordering for navigation
- **sidebar_label**: Label to display in sidebar navigation

### Chapter
- **id**: Unique identifier for the chapter (e.g., "chapter-1", "chapter-2")
- **title**: Display title for the chapter
- **sidebar_label**: Label to display in sidebar navigation
- **content**: Markdown content for the chapter
- **module_id**: Reference to parent module
- **order**: Numeric ordering within the module
- **prerequisites**: Array of prerequisite chapter IDs (optional)
- **tags**: Array of tags for categorization and search

### Navigation Category
- **type**: Always "category" for module groupings
- **label**: Display name for the category
- **items**: Array of navigation item references (chapters or subcategories)
- **link**: Optional link for the category itself
- **collapsed**: Boolean indicating if category is collapsed by default

### Navigation Document
- **type**: Always "doc" for document links
- **id**: Reference to the document file
- **label**: Display text for navigation
- **className**: Optional CSS class for styling

## Validation Rules
- Module titles must be unique within the platform
- Chapter titles must be unique within a module
- Module IDs must follow the format "module-[number]"
- Chapter IDs must follow the format "chapter-[number]" within their module
- All content must be in valid Markdown format with proper frontmatter
- Navigation items must have valid references to existing content files
- All file paths must use .md extension as required

## Relationships
- Module 1-* Chapter (one-to-many)
- Chapter -> Module (many-to-one, parent relationship)
- Navigation Category -> Module/Chapter (references)
- Navigation Document -> Chapter (reference)