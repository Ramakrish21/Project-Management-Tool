import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiList, FiUser, FiSettings, FiCheckSquare, FiLogOut, FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-gray-900 text-white flex flex-col ${isCollapsed ? "w-20" : "w-64"} min-h-screen transition-all duration-300`}>
      {/* Logo & Toggle Button */}
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h1 className="text-lg font-bold">Project Management</h1>}
        <button onClick={toggleSidebar}>
          <FiMenu className="text-xl" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 mt-4 px-4">
        <Link to="/dashbord" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded" title="Dashboard">
          <FiHome className="text-xl" />
          {!isCollapsed && <span>Dashboard</span>}
        </Link>

        <Link to="/projects" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded" title="Projects">
          <FiList className="text-xl" />
          {!isCollapsed && <span>Projects</span>}
        </Link>

        <Link to="/tasks" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded" title="Tasks">
          <FiCheckSquare className="text-xl" />
          {!isCollapsed && <span>Tasks</span>}
        </Link>

        <Link to="/profile" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded" title="Profile">
          <FiUser className="text-xl" />
          {!isCollapsed && <span>Profile</span>}
        </Link>

        <Link to="/settings" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded" title="Settings">
          <FiSettings className="text-xl" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto p-4">
        <button className="flex items-center gap-2 w-full hover:bg-red-600 p-2 rounded" title="Logout">
          <FiLogOut className="text-xl" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
