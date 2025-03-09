import React, { useState } from "react";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localTask, setLocalTask] = useState(task);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLocalTask({
      ...localTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    setLoading(true);
    setError("");
    try {
      await updateTask(localTask._id || localTask.id, localTask);
      setIsEditing(false);
    } catch (err) {
      setError("Failed to update task.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={localTask.title}
            onChange={handleChange}
            className="border rounded p-1 w-full mb-2"
          />
          <textarea
            name="description"
            value={localTask.description}
            onChange={handleChange}
            className="border rounded p-1 w-full mb-2"
          ></textarea>
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-green-500 text-white px-2 py-1 rounded mr-2"
          >
            {loading ? "Saving..." : "Save"}
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-2 py-1 rounded"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3 className="font-semibold">{task.title}</h3>
          <p>{task.description}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(task._id || task.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </>
      )}
      {error && <div className="text-red-600 mt-1">{error}</div>}
    </div>
  );
};

export default TaskItem;
