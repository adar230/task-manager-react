# Task Manager

## Project Description

A modern task manager application built with React and Vite. Manage your daily tasks with an intuitive interface and automatic persistence using browser localStorage.

## Installation & Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Component Structure

- **App:** Manages global state, task CRUD operations, and data persistence.
- **TaskInput:** Handles task creation with form submission and validation.
- **TaskList:** Renders filtered tasks based on the current filter status.
- **TaskItem:** Displays individual tasks with edit, toggle, and delete functionality.
- **TaskFooter:** Shows task counter, filter controls, and clear completed button.

## Known Limitations

- Data is stored in LocalStorage only and does not sync across different devices or browsers.
- Clearing browser cache will reset all stored tasks.
- LocalStorage has a size limit (typically 5-10MB); very large task lists may exceed quota.
