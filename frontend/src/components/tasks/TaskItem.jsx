import React, { useState } from "react";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleEdit = () => {
    if (isEditing) {
      updateTask(task.id, { ...task, name: newName });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-3 border rounded bg-gray-100 flex justify-between items-center mb-2">
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border p-1 rounded w-full"
        />
      ) : (
        <span>{task.name}</span>
      )}

      <div className="flex gap-2">
        <button onClick={handleEdit} className="bg-yellow-400 px-2 py-1 rounded text-white">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteTask(task.id)} className="bg-red-500 px-2 py-1 rounded text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
