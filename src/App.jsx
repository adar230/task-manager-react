import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFooter from './components/TaskFooter';
import './App.css';

export default function App() {
  // Lazy initialization: Load tasks from localStorage immediately on mount
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error('Failed to load tasks from localStorage:', error);
      return [];
    }
  });
  
  const [filter, setFilter] = useState('all');

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Failed to save tasks to localStorage:', error);
    }
  }, [tasks]);

  // Handler: Add new task
  const handleAddTask = (description) => {
    const newTask = {
      id: crypto.randomUUID(),
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Handler: Toggle task completion status
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handler: Edit task description
  const handleEditTask = (id, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  // Handler: Delete task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Handler: Set filter
  const handleSetFilter = (filterName) => {
    setFilter(filterName);
  };

  // Handler: Clear all completed tasks
  const handleClearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Calculate active task count
  const activeCount = tasks.filter((task) => !task.completed).length;
  const hasCompletedTasks = tasks.some((task) => task.completed);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p className="subtitle">Stay organized and productive</p>
      </header>

      <main className="app-main">
        <TaskInput onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          filter={filter}
          onToggle={handleToggleTask}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
        <TaskFooter
          activeCount={activeCount}
          currentFilter={filter}
          onFilterChange={handleSetFilter}
          onClearCompleted={handleClearCompleted}
          hasCompletedTasks={hasCompletedTasks}
        />
      </main>
    </div>
  );
}
