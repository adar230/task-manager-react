export default function TaskFooter({
  activeCount,
  currentFilter,
  onFilterChange,
  onClearCompleted,
  hasCompletedTasks,
}) {
  return (
    <footer className="task-footer">
      <div className="task-counter">
        {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
      </div>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Completed
        </button>
      </div>

      <button
        className="clear-completed-btn"
        onClick={onClearCompleted}
        disabled={!hasCompletedTasks}
      >
        Clear Completed
      </button>
    </footer>
  );
}
