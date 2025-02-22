import { FaProjectDiagram, FaCheckCircle, FaTasks } from "react-icons/fa";

const ProjectSummary = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Project Summary</h2>
      <div className="w-full flex justify-between text-gray-600">
        <div className="flex items-center gap-3">
          <FaProjectDiagram className="text-blue-500 text-2xl" />
          <div>
            <p className="text-lg font-medium">Total Projects</p>
            <p className="text-xl font-bold">15</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaTasks className="text-yellow-500 text-2xl" />
          <div>
            <p className="text-lg font-medium">Active Projects</p>
            <p className="text-xl font-bold">5</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-500 text-2xl" />
          <div>
            <p className="text-lg font-medium">Completed</p>
            <p className="text-xl font-bold">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
