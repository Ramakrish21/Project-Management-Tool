import { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/Sidebar.css"; // Import CSS file
import { FiHome, FiList, FiUser, FiSettings, FiCheckSquare, FiLogOut, FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    
    <div className={`bg-gray-900 text-white flex flex-col  ${isCollapsed ? "w-20" : "w-64"} min-h-screen transition-all duration-300`}>
      {/* Logo & Toggle Button */}
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h1 className="text-lg font-bold">Project Management</h1>}
        <button onClick={toggleSidebar}>
          <FiMenu className="text-xl" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 mt-4 px-4">
        <Link to="/dashboard" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded" title="Dashboard">
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



        <Link to="/teams" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded" title="Teams">
        <svg class="h-6 w-6 text-sky-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
          {!isCollapsed && <span>Teams</span>}
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
