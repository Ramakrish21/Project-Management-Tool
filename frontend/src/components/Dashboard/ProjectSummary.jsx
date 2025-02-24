import { useState, useEffect } from "react";
import { FaProjectDiagram, FaCheckCircle, FaTasks } from "react-icons/fa";

const ProjectSummary = () => {
  const [data, setData] = useState({
    totalProjects: 0,
    activeProjects: 0,
    completedProjects: 0,
  });

  useEffect(() => {
    // Simulating API Call (Replace with your actual API)
    fetch("/api/project-summary")  // Replace with real endpoint
      .then((response) => response.json())
      .then((result) => {
        setData({
          totalProjects: result.total || 0,
          activeProjects: result.active || 0,
          completedProjects: result.completed || 0,
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
            <p className="text-xl font-bold text-gray-900 dark:text-white">{data.totalProjects}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaTasks className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400">Active Projects</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{data.activeProjects}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaCheckCircle className="text-green-500 text-3xl" />
          <div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400">Completed</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{data.completedProjects}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
