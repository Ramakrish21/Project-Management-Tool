import { FaClipboardList, FaHourglassHalf, FaCheckCircle } from "react-icons/fa";

const TaskStatus = () => {
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
          <span className="font-bold text-gray-700 dark:text-gray-300">8</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-red-500 h-2 rounded-full" style={{ width: "30%" }}></div>
        </div>

        {/* In Progress Tasks */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaHourglassHalf className="text-yellow-500 text-2xl" />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">In Progress</p>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">5</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "50%" }}></div>
        </div>

        {/* Completed Tasks */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Completed</p>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">12</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
