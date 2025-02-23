import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children, pageTitle }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="w-64 h-screen fixed">
        <Sidebar />
      </div>

      {/* Main Content (Scrollable) */}
      <div className="flex-1 flex flex-col ml-64 h-screen overflow-y-auto">
        {/* Navbar */}
        <Navbar pageTitle={pageTitle} />

        {/* Main Content */}
        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
