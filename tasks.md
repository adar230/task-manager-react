# Task Manager - Executable Tasks

## Phase 1: Create Component Files and Basic Structure

- [x] **1.1** Create `src/components/` directory
- [x] **1.2** Create empty component files:
  - `src/components/TaskInput.jsx`
  - `src/components/TaskList.jsx`
  - `src/components/TaskItem.jsx`
  - `src/components/TaskFooter.jsx`

---

## Phase 2: Implement App.jsx with State and Handlers

- [x] **2.1** Create `App.jsx` with:
  - [x] Import React hooks: `useState`, `useEffect`
  - [x] Import child components (TaskInput, TaskList, TaskFooter)
  - [x] Define initial state: `tasks` (empty array) and `filter` ("all")
  
- [x] **2.2** Implement state management:
  - [x] `const [tasks, setTasks] = useState([])`
  - [x] `const [filter, setFilter] = useState("all")`
  
- [x] **2.3** Implement handler functions:
  - [x] `handleAddTask(description)` - Create new task with unique ID (crypto.randomUUID()), add to tasks array
  - [x] `handleToggleTask(id)` - Toggle task completed status
  - [x] `handleEditTask(id, newDescription)` - Update task description
  - [x] `handleDeleteTask(id)` - Remove task from array
  - [x] `handleSetFilter(filterName)` - Update filter state
  - [x] `handleClearCompleted()` - Remove all completed tasks

- [x] **2.4** Implement component rendering:
  - [x] Render `<TaskInput onAddTask={handleAddTask} />`
  - [x] Render `<TaskList tasks={tasks} filter={filter} onToggle={handleToggleTask} onEdit={handleEditTask} onDelete={handleDeleteTask} />`
  - [x] Render `<TaskFooter activeCount={...} currentFilter={filter} onFilterChange={handleSetFilter} onClearCompleted={handleClearCompleted} />`

---

## Phase 3: Implement Child Components with Proper Prop Passing

### TaskInput Component
- [x] **3.1** Create controlled input:
  - [x] Local state: `const [inputValue, setInputValue] = useState("")`
  - [x] Input field with value binding
  - [x] Submit button
  
- [x] **3.2** Implement handlers:
  - [x] `handleSubmit` - Validate input (non-empty), call `onAddTask()`, clear input
  - [x] Support Enter key submission
  - [x] Handle onChange to update local state

### TaskList Component
- [x] **3.3** Implement filtering logic:
  - [x] Create filtered array based on `filter` prop:
    - "all" → all tasks
    - "active" → tasks where `completed === false`
    - "completed" → tasks where `completed === true`
  
- [x] **3.4** Render tasks:
  - [x] Map filtered tasks to `<TaskItem>` components
  - [x] Pass all necessary props: `id`, `description`, `completed`, callbacks
  - [x] Handle empty state message when no tasks match filter

### TaskItem Component
- [x] **3.5** Create task display (normal mode):
  - [x] Checkbox for toggle status
  - [x] Task description text
  - [x] Edit button
  - [x] Delete button
  - [x] Apply strikethrough styling for completed tasks
  
- [x] **3.6** Create edit mode:
  - [x] Toggle state: `const [isEditing, setIsEditing] = useState(false)`
  - [x] When editing: show input field with current description
  - [x] Save button (call `onEdit()`, exit edit mode)
  - [x] Cancel button (exit edit mode without saving)
  
- [x] **3.7** Implement callbacks:
  - [x] Checkbox onChange → call `onToggle(id)`
  - [x] Edit button onClick → enter edit mode
  - [x] Save button onClick → call `onEdit(id, newDescription)`
  - [x] Delete button onClick → call `onDelete(id)`

### TaskFooter Component
- [x] **3.8** Implement task counter:
  - [x] Display count of active tasks
  - [x] Accept `activeCount` prop from parent
  
- [x] **3.9** Implement filter buttons:
  - [x] Three buttons: "All", "Active", "Completed"
  - [x] Visual indication (highlight/underline) for current filter
  - [x] onClick handlers call `onFilterChange(filterName)`
  
- [x] **3.10** Implement "Clear Completed" button:
  - [x] Button with onClick → call `onClearCompleted()`
  - [x] Disable button if no completed tasks exist

---

## Phase 4: Integrate localStorage (Read/Write)

- [x] **4.1** Implement localStorage save:
  - [x] Use `useEffect` to listen for changes in `tasks`
  - [x] When `tasks` changes, save to localStorage: `localStorage.setItem('tasks', JSON.stringify(tasks))`
  
- [x] **4.2** Implement localStorage load:
  - [x] Use `useEffect` with empty dependency array (runs on mount)
  - [x] Load tasks from localStorage: `JSON.parse(localStorage.getItem('tasks'))`
  - [x] Set initial state if data exists, otherwise use empty array
  - [x] Handle errors gracefully (invalid JSON, missing data)

- [ ] **4.3** Test persistence:
  - [ ] Add tasks in browser
  - [ ] Refresh page and verify tasks are still there
  - [ ] Close and reopen browser tab and verify tasks persist

---

## Phase 5: Style Components (CSS)

### App.css
- [ ] **5.1** Create main container styling:
  - [ ] Centered layout, max-width constraint
  - [ ] Padding and margin for spacing
  - [ ] Background color and overall theme
  
- [ ] **5.2** Style TaskInput:
  - [ ] Input field styling (padding, border, font)
  - [ ] Button styling (background, hover effects)
  - [ ] Layout (flex row for input + button)
  
- [ ] **5.3** Style TaskList:
  - [ ] Container styling
  - [ ] Empty state message styling
  
- [ ] **5.4** Style TaskItem:
  - [ ] Task container with borders/shadow
  - [ ] Checkbox styling
  - [ ] Text styling (normal and strikethrough for completed)
  - [ ] Button styling (edit, delete)
  - [ ] Edit mode input styling
  
- [ ] **5.5** Style TaskFooter:
  - [ ] Counter display styling
  - [ ] Filter buttons styling (normal and active states)
  - [ ] "Clear Completed" button styling
  - [ ] Flex layout for buttons

### index.css
- [ ] **5.6** Global styles:
  - [ ] CSS reset (margin, padding, box-sizing)
  - [ ] Font selection and sizing
  - [ ] Color scheme definition
  - [ ] Body background and text color

- [ ] **5.7** Ensure responsive design:
  - [ ] Mobile-friendly layout
  - [ ] Touch-friendly button sizes
  - [ ] Readable on all screen sizes

---

## Phase 6: Test All Features and Polish

- [ ] **6.1** Test "Add Tasks" feature:
  - [ ] Add task with valid text
  - [ ] Verify task appears in list
  - [ ] Test Enter key submission
  - [ ] Test button click submission
  - [ ] Verify input clears after submission
  - [ ] Prevent adding empty tasks

- [ ] **6.2** Test "Toggle Status" feature:
  - [ ] Click checkbox to mark task complete
  - [ ] Verify strikethrough styling applied
  - [ ] Click again to mark incomplete
  - [ ] Verify strikethrough removed
  - [ ] Verify task data is preserved

- [ ] **6.3** Test "Edit Tasks" feature:
  - [ ] Click edit button
  - [ ] Verify edit mode activates
  - [ ] Modify task description
  - [ ] Click save
  - [ ] Verify changes applied
  - [ ] Test cancel (discard changes)

- [ ] **6.4** Test "Delete Tasks" feature:
  - [ ] Click delete button
  - [ ] Verify task removed from list
  - [ ] Verify no errors in console

- [ ] **6.5** Test "Filtering" feature:
  - [ ] Click "All" filter → verify all tasks shown
  - [ ] Click "Active" filter → verify only incomplete tasks shown
  - [ ] Click "Completed" filter → verify only complete tasks shown
  - [ ] Verify visual indication of current filter

- [ ] **6.6** Test "Task Counter" feature:
  - [ ] Verify counter shows correct active task count
  - [ ] Add task → counter increments
  - [ ] Complete task → counter decrements
  - [ ] Delete task → counter updates
  - [ ] Clear completed → counter updates

- [ ] **6.7** Test "Clear Completed" button:
  - [ ] Complete several tasks
  - [ ] Click "Clear Completed"
  - [ ] Verify all completed tasks removed
  - [ ] Verify active tasks remain
  - [ ] Verify button disabled when no completed tasks

- [ ] **6.8** Test "Persistence" feature:
  - [ ] Add, edit, delete, toggle tasks
  - [ ] Refresh page (F5)
  - [ ] Verify all changes persisted
  - [ ] Close tab and reopen
  - [ ] Verify data still there
  - [ ] Clear localStorage and verify clean state

- [ ] **6.9** Code quality check:
  - [ ] Open browser console (F12)
  - [ ] Verify no errors or warnings
  - [ ] Verify no console.log statements remain
  - [ ] Check for any unhandled exceptions

- [ ] **6.10** UI Polish:
  - [ ] Verify layout is clean and organized
  - [ ] Check spacing and alignment
  - [ ] Verify colors are consistent
  - [ ] Test on mobile devices/responsive view
  - [ ] Ensure buttons have hover states
  - [ ] Verify text is readable

---

## Phase 7: Create/Update README.md

- [ ] **7.1** Create comprehensive README.md with sections:
  - [ ] Project title and description
  - [ ] Features list
  - [ ] Technology stack
  - [ ] File structure explanation
  - [ ] Component descriptions and responsibilities
  
- [ ] **7.2** Add installation instructions:
  - [ ] `npm install`
  - [ ] Prerequisites (Node.js version)
  
- [ ] **7.3** Add development instructions:
  - [ ] `npm run dev`
  - [ ] Access URL (http://localhost:5173 or similar)
  
- [ ] **7.4** Add usage guide:
  - [ ] How to add tasks
  - [ ] How to edit tasks
  - [ ] How to delete tasks
  - [ ] How to use filters
  - [ ] How data persists
  
- [ ] **7.5** Add component documentation:
  - [ ] Props for each component
  - [ ] State management approach
  - [ ] Data flow diagram (optional)
  
- [ ] **7.6** Add troubleshooting section:
  - [ ] Common issues and solutions

---

## Final Validation Checklist

- [ ] **8.1** Application starts without errors: `npm run dev`
- [ ] **8.2** All 8 core features work as specified
- [ ] **8.3** Data persists across browser sessions
- [ ] **8.4** UI is clean, responsive, and professional
- [ ] **8.5** Code is well-organized with clear separation of concerns
- [ ] **8.6** No external dependencies beyond React 19 and Vite
- [ ] **8.7** Component architecture is maintainable and scalable
- [ ] **8.8** README.md is complete and accurate
- [ ] **8.9** No console errors or warnings
- [ ] **8.10** All tasks marked complete

---

## Notes
- Each task in Phase 1-4 should be completed before moving to the next phase
- Testing (Phase 6) should be thorough - test both happy path and edge cases
- Keep code clean - avoid temporary console.log statements
- CSS should be organized and maintainable
- Commit changes regularly to version control

---

**Status:** Ready to execute
**Target:** Complete Task Manager application
**Estimated Duration:** 2-3 hours of development
