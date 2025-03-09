import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskFormDropdown from "../components/tasks/TaskFormDropdown";
import TaskItem from "../components/tasks/TaskItem";
import { getTasks, createTask, updateTask as updateTaskAPI, deleteTask as deleteTaskAPI } from "../utils/api";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (err) {
        setError("Failed to fetch tasks.");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const response = await createTask(task);
      setTasks([...tasks, response.data]);
    } catch (err) {
      console.error("Failed to add task", err);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await updateTaskAPI(id, updatedTask);
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    } catch (err) {
      console.error("Failed to update task", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteTaskAPI(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    
    updateTask(movedTask._id || movedTask.id, movedTask);
    updatedTasks.splice(result.destination.index, 0, movedTask);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Management</h1>
      <TaskFormDropdown addTask={addTask} />
      {loading ? (
        <p>Loading tasks...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["To-Do", "In Progress", "Completed"].map((status) => (
              <Droppable key={status} droppableId={status}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="p-4 border rounded-md bg-gray-100 min-h-[200px] shadow-md"
                  >
                    <h2 className="font-semibold text-lg mb-2 text-center">{status}</h2>
                    {tasks
                      .filter((task) => task.status === status)
                      .map((task, index) => (
                        <Draggable key={task._id || task.id} draggableId={task._id || task.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mb-2 p-3 bg-white rounded shadow hover:shadow-lg transition duration-200 w-full max-w-md break-words overflow-hidden"
                            >
                              <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      )}
    </div>
  );
};

export default Tasks;
