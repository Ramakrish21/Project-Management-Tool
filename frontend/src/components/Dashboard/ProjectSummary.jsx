import { FaProjectDiagram, FaCheckCircle, FaTasks } from "react-icons/fa";

const ProjectSummary = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Project Summary
      </h2>

      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <FaProjectDiagram className="text-blue-500 text-3xl" />
          <div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400">Total Projects</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">15</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaTasks className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400">Active Projects</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">5</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaCheckCircle className="text-green-500 text-3xl" />
          <div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400">Completed</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
