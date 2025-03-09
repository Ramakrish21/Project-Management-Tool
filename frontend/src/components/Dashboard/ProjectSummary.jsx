import { useState, useEffect } from "react";
import { FaProjectDiagram, FaCheckCircle, FaTasks } from "react-icons/fa";
import { getProjects } from "../../utils/api"; 

const ProjectSummary = () => {
  const [data, setData] = useState({
    totalProjects: 0,
    activeProjects: 0,
    completedProjects: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching projects...");
        const response = await getProjects();
        const projects = Array.isArray(response?.data) ? response.data : [];
        console.log("Fetched projects:", projects);
        if (projects.length === 0) {
          console.warn("Warning: No projects found.");
        }
        const totalProjects = projects.length;
        const completedProjects = projects.filter(
          (project) => project.status === "Completed"
        ).length;
        const activeProjects = totalProjects - completedProjects;
        console.log(
          `Computed Summary => Total: ${totalProjects}, Active: ${activeProjects}, Completed: ${completedProjects}`
        );
        setData({ totalProjects, activeProjects, completedProjects });
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Error fetching project summary");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading project summary...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Project Summary
      </h2>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <FaProjectDiagram className="text-blue-500 text-3xl" />
          <div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400">
              Total Projects
            </p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {data.totalProjects}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaTasks className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400">
              Active Projects
            </p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {data.activeProjects}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaCheckCircle className="text-green-500 text-3xl" />
          <div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400">
              Completed
            </p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {data.completedProjects}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
