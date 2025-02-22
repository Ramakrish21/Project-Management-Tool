import { FiBell, FiSearch, FiUser } from "react-icons/fi";

const Navbar = ({ pageTitle }) => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Page Title */}
      <h1 className="text-lg font-semibold">{pageTitle}</h1>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
           className="px-4 py-2 border rounded-md outline-none pr-10 w-full"
        />
       <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Icons - Notifications & Profile */}
      <div className="flex items-center gap-4" title="notification">
        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <FiBell className="text-xl" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </div>

        {/* Profile Avatar */}
        <div className="relative cursor-pointer" title="Profile">
          <FiUser className="text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
