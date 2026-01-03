---
description: "Task list for homepage UI polish implementation"
---

# Tasks: Polished Homepage UI & Feature Section (Docusaurus)

**Input**: Design documents from `/specs/017-homepage-ui-polish/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Verify physical_book Docusaurus project structure
- [X] T002 [P] Locate src/css/custom.css file for modification
- [X] T003 [P] Verify Docusaurus development environment setup

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Research Docusaurus homepage CSS classes and selectors
- [X] T005 [P] Identify all homepage elements requiring color changes
- [X] T006 [P] Verify CSS color accessibility standards for contrast ratios

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Enhanced Homepage Navigation (Priority: P1) 🎯 MVP

**Goal**: Ensure all navbar text and icons are clearly visible against black background

**Independent Test**: Visit the homepage and verify that navbar text and icons are clearly visible against the black background without needing to hover over them

### Implementation for User Story 1

- [X] T007 [US1] Add CSS rules for navbar background in physical_book/src/css/custom.css
- [X] T008 [US1] Add CSS rules for navbar text links in physical_book/src/css/custom.css
- [X] T009 [US1] Add CSS rules for navbar icons including color mode toggle in physical_book/src/css/custom.css
- [X] T010 [US1] Implement hover effects for navbar elements in physical_book/src/css/custom.css
- [X] T011 [US1] Test visibility in both light and dark modes using localhost
- [X] T012 [US1] Validate contrast ratios meet accessibility standards

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Engaging Hero Section (Priority: P1)

**Goal**: Create an attractive and modern hero section that draws attention and clearly presents the main value proposition

**Independent Test**: Visit the homepage and verify the hero section has an appealing gradient background, centered logo, clear title and subtitle, and attractive buttons

### Implementation for User Story 2

- [X] T013 [US2] Add gradient background styling to hero section in physical_book/src/css/custom.css
- [X] T014 [US2] Center logo in hero section in physical_book/src/css/custom.css
- [X] T015 [US2] Style hero section title with large, bold text in physical_book/src/css/custom.css
- [X] T016 [US2] Style hero section subtitle with slight opacity in physical_book/src/css/custom.css
- [X] T017 [US2] Style hero buttons with rounded corners and hover effects in physical_book/src/css/custom.css
- [X] T018 [US2] Test hero section readability on gradient background

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Readable Feature Section (Priority: P2)

**Goal**: Create well-organized and readable feature blocks with clear headings and descriptions that are easy to scan

**Independent Test**: Verify that feature section headings are distinct from paragraphs, proper spacing exists, and elements have good contrast

### Implementation for User Story 3

- [X] T019 [US3] Style feature section headings to be darker and bolder in physical_book/src/css/custom.css
- [X] T020 [US3] Style feature section paragraphs with medium-dark color and proper line-height in physical_book/src/css/custom.css
- [X] T021 [US3] Add soft shadows or rounded corners to feature section images/icons in physical_book/src/css/custom.css
- [X] T022 [US3] Implement hover effects for feature section elements in physical_book/src/css/custom.css
- [X] T023 [US3] Verify contrast works in both light and dark modes

**Checkpoint**: At this point, User Stories 1, 2 AND 3 should all work independently

---

## Phase 6: User Story 4 - Consistent Button Interactions (Priority: P3)

**Goal**: Provide consistent visual feedback for button interactions throughout the homepage

**Independent Test**: Check that all buttons on the homepage have consistent styling and hover effects

### Implementation for User Story 4

- [X] T024 [US4] Apply consistent rounded corners to all buttons in physical_book/src/css/custom.css
- [X] T025 [US4] Implement hover color change for all buttons in physical_book/src/css/custom.css
- [X] T026 [US4] Add translateY effect to all buttons on hover in physical_book/src/css/custom.css
- [X] T027 [US4] Ensure button transitions are smooth in physical_book/src/css/custom.css

**Checkpoint**: All user stories should now be independently functional

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T028 [P] Document CSS changes in README if needed
- [X] T029 Code cleanup and CSS optimization
- [X] T030 [P] Final testing across different screen sizes
- [X] T031 Run quickstart.md validation
- [X] T032 Verify solution works consistently across browsers
- [X] T033 Test typography readability and spacing
- [X] T034 Validate all hover interactions work smoothly

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable
- **User Story 4 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2/US3 but should be independently testable

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all implementation tasks for User Story 1 together:
Task: "Add CSS rules for navbar background in physical_book/src/css/custom.css"
Task: "Add CSS rules for navbar text links in physical_book/src/css/custom.css"
Task: "Add CSS rules for navbar icons including color mode toggle in physical_book/src/css/custom.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
   - Developer D: User Story 4
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence