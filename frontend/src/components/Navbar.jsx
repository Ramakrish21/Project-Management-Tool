import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FiBell, FiUser, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between fixed left-64 right-0 top-0 w-[calc(100%-16rem)] z-10">
      <h1 className="text-lg font-semibold">Project Management</h1>

      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md outline-none pr-10 w-full"
        />
        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <FiBell className="text-xl" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm">Welcome, {user.name}</span>
            <button 
              onClick={logout} 
              className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="text-sm text-blue-500">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
