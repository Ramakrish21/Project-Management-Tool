import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("To-Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    
    const newTask = {
      id: Date.now().toString(),
      name: taskName,
      status,
    };
    
    addTask(newTask);
    setTaskName("");
    setStatus("To-Do");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Enter task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 rounded">
        <option value="To-Do">To-Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default TaskForm;
