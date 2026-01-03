---
id: 17
title: "Create Tasks for Homepage UI Polish"
stage: tasks
date_iso: "2026-01-02"
surface: "agent"
model: "Claude Sonnet 4.5"
feature: "homepage-ui-polish"
branch: "017-homepage-ui-polish"
user: "AA"
command: "/sp.tasks"
labels: ["tasks", "docusaurus", "homepage", "ui-ux", "css"]
links:
  spec: "specs/017-homepage-ui-polish/spec.md"
  plan: "specs/017-homepage-ui-polish/plan.md"
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - specs/017-homepage-ui-polish/tasks.md
  - history/prompts/017-homepage-ui-polish/17-create-tasks-homepage-ui-polish.tasks.prompt.md
tests_yaml: |
  - specs/017-homepage-ui-polish/tasks.md
---

## Prompt

```
Create Actionable Tasks for Homepage UI Polish (Docusaurus)

Context:
- Docusaurus-based AI Robotics textbook (physical_book)
- Goal: Modernize and polish homepage UI including navbar, hero section, feature blocks, buttons, typography

Target Files:
- src/css/custom.css
- src/pages/index.js (for class references)
- static/img/logo.svg (optional for hero/logo styling)

Tasks:

1. Navbar Styling:
   - Set text and icon color to #3498DB (blue) for default state
   - Ensure hover effect slightly brightens blue (#5AA0E0)
   - Preserve black navbar background
   - Apply consistent spacing between links
   - Test in light and dark mode

2. Hero Section:
   - Apply gradient background
   - Center logo
   - Set large title and subtitle with slight opacity
   - Style hero buttons: rounded corners, hover color change, slight translateY effect
   - Ensure text readability on gradient

3. Feature Blocks (Modern UI, Responsive Experience, Accessibility First):
   - Headings: darker than paragraphs, bold, proper spacing
   - Paragraphs: medium-dark neutral color (#6E6E6D), line-height optimized
   - Images/Icons: soft shadow or rounded corners
   - Hover: subtle elevation or color shift
   - Ensure contrast in light/dark mode

4. Buttons:
   - Rounded corners
   - Hover color change and slight translateY
   - Consistent style across homepage

5. Typography & Readability:
   - Headings and paragraph font-size, weight, spacing adjusted
   - Line-height optimized for comfort
   - Consistent font colors for visibility on backgrounds

6. Color Mode Toggle:
   - Sun/moon icon visible in light (#6E6E6D) and dark mode (#FAD0C9)
   - Smooth transition between modes
   - Hover brightness effect
   - Ensure no layout shift

7. Testing & Validation:
   - Preview locally (npm run start)
   - Verify text and icons visible in all sections
   - Check responsiveness on different devices
   - Confirm hover interactions work as intended
   - Ensure no content is broken

Constraints:
- Only use custom.css and Docusaurus defaults
- Maintain Markdown structure and existing content
- No external CSS frameworks

Success Criteria:
- Homepage looks polished, modern, and professional
- Navbar, hero, feature blocks, buttons, typography clearly visible
- All interactions (hover, toggle) work smoothly
- Works in both light and dark modes
```

## Response

Created complete task breakdown for homepage UI polish implementation with:

- tasks.md: Detailed task list organized by user story with proper format (checkbox, ID, story labels, file paths)
- 7 phases: Setup, Foundational, 4 User Stories (P1, P1, P2, P3), and Polish phase
- 34 total tasks from T001 to T034
- Parallel execution opportunities identified
- Dependencies clearly marked
- MVP strategy focusing on User Story 1 (navbar) as the core functionality

The tasks are organized by user story priority to enable independent implementation and testing:
- User Story 1: Enhanced Homepage Navigation (P1)
- User Story 2: Engaging Hero Section (P1)
- User Story 3: Readable Feature Section (P2)
- User Story 4: Consistent Button Interactions (P3)

Each task follows the required format with clear file paths and specific actions.

## Outcome

Task list is complete and ready for implementation. The tasks are structured to allow for incremental delivery with User Story 1 as the MVP, followed by additional features in priority order.