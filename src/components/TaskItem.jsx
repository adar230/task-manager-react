import { useState } from 'react';

export default function TaskItem({
  id,
  description,
  completed,
  onToggle,
  onEdit,
  onDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(description);

  const handleSave = () => {
    if (editValue.trim()) {
      onEdit(id, editValue.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(description);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <div className="task-edit-mode">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="task-edit-input"
            autoFocus
          />
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      ) : (
        <div className="task-display-mode">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggle(id)}
            className="task-checkbox"
          />
          <span className={`task-description ${completed ? 'completed' : ''}`}>
            {description}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="edit-button"
            title="Edit task"
          >
            ✎
          </button>
          <button
            onClick={() => onDelete(id)}
            className="delete-button"
            title="Delete task"
          >
            ✕
          </button>
        </div>
      )}
    </li>
  );
}
