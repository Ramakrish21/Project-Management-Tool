import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboardpage from "../pages/DashboardPage";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import Profile from "../pages/Profile";
import Teams from "../pages/Teams";
import Settings from "../pages/Settings";
import DashboardLayout from "../layouts/DashboardLayout";


const AppRoutes = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboardpage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/teams" element={<Teams />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default AppRoutes;
