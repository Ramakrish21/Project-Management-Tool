import { FaClipboardList, FaHourglassHalf, FaCheckCircle } from "react-icons/fa";

const TaskStatus = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Task Status</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaClipboardList className="text-gray-600 text-2xl" />
            <p className="text-lg font-medium">To-Do</p>
          </div>
          <span className="font-bold text-gray-700">8</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-red-500 h-2 rounded-full" style={{ width: "30%" }}></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaHourglassHalf className="text-yellow-500 text-2xl" />
            <p className="text-lg font-medium">In Progress</p>
          </div>
          <span className="font-bold text-gray-700">5</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "50%" }}></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <p className="text-lg font-medium">Completed</p>
          </div>
          <span className="font-bold text-gray-700">12</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
