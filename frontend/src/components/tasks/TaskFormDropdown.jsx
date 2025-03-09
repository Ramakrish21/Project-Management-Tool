import React, { useState } from "react";

const TaskFormDropdown = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "To-Do", // default status
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim() === "") return;
    addTask(task);
    // Reset the form
    setTask({
      title: "",
      description: "",
      status: "To-Do",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        className="border rounded p-2 w-full mb-2"
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        className="border rounded p-2 w-full mb-2"
      ></textarea>
      {/* Added dropdown for status selection */}
      <select
        name="status"
        value={task.status}
        onChange={handleChange}
        className="border rounded p-2 w-full mb-2"
      >
        <option value="To-Do">To-Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskFormDropdown;
