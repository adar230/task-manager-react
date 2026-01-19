import TaskItem from './TaskItem';

export default function TaskList({
  tasks,
  filter,
  onToggle,
  onEdit,
  onDelete,
}) {
  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'all':
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="task-list-container">
      {filteredTasks.length === 0 ? (
        <p className="empty-state">
          {filter === 'all'
            ? 'No tasks yet. Add one to get started!'
            : filter === 'active'
              ? 'No active tasks.'
              : 'No completed tasks yet.'}
        </p>
      ) : (
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              description={task.description}
              completed={task.completed}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
