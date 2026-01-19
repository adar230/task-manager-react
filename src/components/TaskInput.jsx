import { useState } from 'react';

export default function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button onClick={handleSubmit} className="add-button">
        Add Task
      </button>
    </div>
  );
}
