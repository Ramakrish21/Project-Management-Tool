import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children, pageTitle }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar pageTitle={pageTitle} />

        {/* Main Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
