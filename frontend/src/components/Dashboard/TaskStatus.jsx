import { useEffect, useState } from "react";
import { FaClipboardList, FaHourglassHalf, FaCheckCircle } from "react-icons/fa";
import { getTasks } from "../../utils/api";

const TaskStatus = () => {
  const [counts, setCounts] = useState({
    toDo: 0,
    inProgress: 0,
    completed: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTaskCounts = async () => {
      try {
        const response = await getTasks();
        const tasks = response.data;
        const toDo = tasks.filter((task) => task.status === "To-Do").length;
        const inProgress = tasks.filter((task) => task.status === "In Progress").length;
        const completed = tasks.filter((task) => task.status === "Completed").length;
        setCounts({ toDo, inProgress, completed });
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setError("Error fetching tasks");
      } finally {
        setLoading(false);
      }
    };
    fetchTaskCounts();
  }, []);

  const totalTasks = counts.toDo + counts.inProgress + counts.completed;

  if (loading) return <p>Loading task status...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

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
          <span className="font-bold text-gray-700 dark:text-gray-300">{counts.toDo}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-red-500 h-2 rounded-full"
            style={{ width: totalTasks ? `${(counts.toDo / totalTasks) * 100}%` : "0%" }}
          ></div>
        </div>

        {/* In Progress Tasks */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaHourglassHalf className="text-yellow-500 text-2xl" />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">In Progress</p>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">{counts.inProgress}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-yellow-500 h-2 rounded-full"
            style={{ width: totalTasks ? `${(counts.inProgress / totalTasks) * 100}%` : "0%" }}
          ></div>
        </div>

        {/* Completed Tasks */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Completed</p>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">{counts.completed}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: totalTasks ? `${(counts.completed / totalTasks) * 100}%` : "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
