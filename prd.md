# Task Manager Application - Product Requirements Document (PRD)

## Project Overview

A modern, responsive Task Manager application built with **React 19** and **Vite**. This application enables users to efficiently manage their daily tasks with a clean, intuitive interface. The app emphasizes clean code architecture, separation of concerns, and persistent data storage using browser's localStorage.

---

## Core Features

### 1. **Add Tasks**
- Input field to add new tasks with text descriptions
- Quick-add functionality with Enter key support
- Visual feedback when adding tasks

### 2. **Toggle Status**
- Checkbox to mark tasks as completed/active
- Immediate visual feedback (strikethrough text for completed tasks)
- Toggle state without losing task data

### 3. **Edit Tasks**
- Click to edit existing task descriptions
- Save edited changes
- Cancel editing without saving changes
- Inline edit mode within task items

### 4. **Delete Tasks**
- Delete button for individual tasks
- Immediate removal from the list

### 5. **Filtering System**
- **Show All:** Display all tasks
- **Show Active:** Display only incomplete tasks
- **Show Completed:** Display only completed tasks
- Visual indication for currently selected filter (highlight/underline)
- Filter state persists during session

### 6. **Task Counter**
- Display count of remaining active (incomplete) tasks
- Updates in real-time as tasks are toggled or added/deleted

### 7. **Clear Completed**
- Single button to remove all completed tasks at once
- Confirmation or immediate action
- Updates task counter

### 8. **Persistence**
- Auto-save tasks to localStorage
- Auto-load tasks on application startup
- Handles empty states gracefully
- Data persists between browser sessions

---

## Technical Architecture (Strict Separation of Concerns)

### Component Structure

```
src/
├── App.jsx                          (Main container, state management)
├── components/
│   ├── TaskInput.jsx               (Add new task input)
│   ├── TaskList.jsx                (Filtered task collection)
│   ├── TaskItem.jsx                (Individual task with edit/delete)
│   └── TaskFooter.jsx              (Filters, counter, clear completed)
├── App.css                         (Main styles)
└── index.css                       (Global styles)
```

### Component Responsibilities

1. **`App.jsx` (TaskContainer)**
   - Manages main state: `tasks` array and `filter` string
   - Implements `useEffect` for localStorage read/write
   - Defines all handler functions:
     - `handleAddTask(description)` → adds new task
     - `handleToggleTask(id)` → toggles task status
     - `handleEditTask(id, newDescription)` → updates task description
     - `handleDeleteTask(id)` → removes task
     - `handleSetFilter(filterName)` → updates current filter
     - `handleClearCompleted()` → removes all completed tasks
   - Passes props to child components
   - Root component for the application

2. **`TaskInput.jsx`**
   - Controlled input component for new tasks
   - Local state for input value
   - Handles form submission (Enter key + button click)
   - Calls parent callback: `onAddTask(description)`
   - Validates input (non-empty)

3. **`TaskList.jsx`**
   - Receives: `tasks` array, `filter` string, handler callbacks
   - Filters tasks based on current filter
   - Renders array of `<TaskItem>` components
   - Handles empty state messaging
   - Maps unique IDs to TaskItem instances

4. **`TaskItem.jsx`**
   - Represents a single task
   - States: normal view, edit mode
   - Displays: checkbox, task text, edit button, delete button
   - Handles: toggle, edit mode toggle, save edit, delete
   - Callbacks: `onToggle(id)`, `onEdit(id, text)`, `onDelete(id)`
   - Visual styling for completed tasks (strikethrough)

5. **`TaskFooter.jsx`**
   - Displays active task counter
   - Renders filter buttons (All, Active, Completed)
   - Visual indication for selected filter
   - "Clear Completed" button
   - Callbacks: `onFilterChange(filter)`, `onClearCompleted()`

---

## Technical Constraints

- ✅ **React 19** with Functional Components
- ✅ **Hooks only:** `useState`, `useEffect`
- ✅ **NO class components**
- ✅ **NO external state libraries** (Redux, Zustand, Context API preferred minimal)
- ✅ **NO external routing libraries** (single page app)
- ✅ **Unique IDs:** Use `crypto.randomUUID()` or timestamp-based IDs
- ✅ **Clean code:** No console errors/warnings
- ✅ **Styling:** Standard CSS or CSS Modules (clean, modern design)
- ✅ **Build tool:** Vite (already configured)

---

## Proposed File Structure

```
task manager/
├── eslint.config.js
├── vite.config.js
├── package.json
├── prd.md                          (This document)
├── README.md                       (Updated with component docs)
├── index.html
├── public/
├── src/
│   ├── main.jsx
│   ├── App.jsx                     (Main component & state)
│   ├── App.css                     (Main styles)
│   ├── index.css                   (Global styles)
│   ├── components/
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskFooter.jsx
│   └── assets/
```

---

## Deliverables Checklist

- [ ] File structure created as per proposal
- [ ] `App.jsx` - Main component with state management and localStorage integration
- [ ] `TaskInput.jsx` - Input component for adding tasks
- [ ] `TaskList.jsx` - Component for displaying filtered tasks
- [ ] `TaskItem.jsx` - Individual task component with edit/delete capabilities
- [ ] `TaskFooter.jsx` - Filter controls, task counter, and clear completed button
- [ ] `App.css` - Main application styles (clean, responsive design)
- [ ] `index.css` - Global styles and CSS resets
- [ ] `README.md` - Comprehensive documentation with:
  - Project overview
  - Component descriptions
  - Feature list
  - Installation instructions (`npm install`)
  - Development server instructions (`npm run dev`)
  - Usage guide
- [ ] No console errors or warnings
- [ ] localStorage persistence working correctly
- [ ] All features functional and tested

---

## Development Workflow

1. **Phase 1:** Create component files and basic structure
2. **Phase 2:** Implement `App.jsx` with state and handlers
3. **Phase 3:** Implement child components with proper prop passing
4. **Phase 4:** Integrate localStorage (read/write)
5. **Phase 5:** Style components (CSS)
6. **Phase 6:** Test all features and polish
7. **Phase 7:** Create/Update README.md

---

## Data Structure

### Task Object
```javascript
{
  id: "unique-id-string",           // crypto.randomUUID() or Date.now()
  description: "Task description",   // String
  completed: false                   // Boolean
}
```

### App State
```javascript
{
  tasks: [Task, Task, ...],         // Array of task objects
  filter: "all"                      // "all" | "active" | "completed"
}
```

---

## Success Criteria

- ✅ Application runs without errors on `npm run dev`
- ✅ All core features are functional
- ✅ Data persists across browser sessions
- ✅ UI is clean, responsive, and user-friendly
- ✅ Code is well-organized with clear separation of concerns
- ✅ No external dependencies beyond React 19 and Vite
- ✅ Component architecture is maintainable and scalable

---

**Status:** Ready for development
**Target:** React 19 + Vite Task Manager
**Version:** 1.0
