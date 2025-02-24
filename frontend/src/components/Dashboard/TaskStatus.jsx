import { useEffect, useState } from "react";
import { FaClipboardList, FaHourglassHalf, FaCheckCircle } from "react-icons/fa";

const TaskStatus = () => {
  const [data, setData] = useState({
    todo: 0,
    inProgress: 0,
    completed: 0,
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/task-status`) // Using .env variable
      .then((response) => response.json())
      .then((result) => {
        setData({
          todo: result.todo || 0,
          inProgress: result.inProgress || 0,
          completed: result.completed || 0,
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const totalTasks = data.todo + data.inProgress + data.completed;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Task Status
      </h2>
      <div className="space-y-4">
        {/* To-Do Tasks */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaClipboardList className="text-gray-600 dark:text-gray-400 text-2xl" />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">To-Do</p>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">{data.todo}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-red-500 h-2 rounded-full"
            style={{ width: totalTasks ? `${(data.todo / totalTasks) * 100}%` : "0%" }}
          ></div>
        </div>

        {/* In Progress Tasks */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaHourglassHalf className="text-yellow-500 text-2xl" />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">In Progress</p>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">{data.inProgress}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-yellow-500 h-2 rounded-full"
            style={{ width: totalTasks ? `${(data.inProgress / totalTasks) * 100}%` : "0%" }}
          ></div>
        </div>

        {/* Completed Tasks */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Completed</p>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">{data.completed}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: totalTasks ? `${(data.completed / totalTasks) * 100}%` : "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
