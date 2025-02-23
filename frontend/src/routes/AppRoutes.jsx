import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "../context/AuthContext"; 
import Dashboardpage from "../pages/DashboardPage";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import Profile from "../pages/Profile";
import Teams from "../pages/Teams";
import Settings from "../pages/Settings";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ProtectedRoute from "../components/Auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Authentication Routes (Accessible without login) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes (Require Login) */}
          <Route path="/" element={<ProtectedRoute><DashboardLayout><Dashboardpage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout><Dashboardpage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/projects" element={<ProtectedRoute><DashboardLayout><Projects /></DashboardLayout></ProtectedRoute>} />
          <Route path="/tasks" element={<ProtectedRoute><DashboardLayout><Tasks /></DashboardLayout></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><DashboardLayout><Profile /></DashboardLayout></ProtectedRoute>} />
          <Route path="/teams" element={<ProtectedRoute><DashboardLayout><Teams /></DashboardLayout></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><DashboardLayout><Settings /></DashboardLayout></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
