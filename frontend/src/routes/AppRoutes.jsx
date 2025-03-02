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


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AuthProvider from "../context/AuthContext";
// import Dashboardpage from "../pages/DashboardPage";
// import Projects from "../pages/Projects";
// import Tasks from "../pages/Tasks";
// import Profile from "../pages/Profile";
// import Teams from "../pages/Teams";
// import Settings from "../pages/Settings";
// import DashboardLayout from "../layouts/DashboardLayout";
// import Login from "../components/Auth/Login";
// import Register from "../components/Auth/Register";

// const AppRoutes = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Authentication Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Temporary Open Dashboard Route (No ProtectedRoute) */}
//           <Route path="/dashboard" element={
//             <DashboardLayout>
//               <Dashboardpage />
//             </DashboardLayout>
//           } />

//           {/* Other Routes */}
//           <Route path="/" element={<DashboardLayout> <Dashboardpage /> </DashboardLayout>} />
//           <Route path="/projects" element={<DashboardLayout> <Projects /> </DashboardLayout>} />
//           <Route path="/tasks" element={<DashboardLayout> <Tasks /> </DashboardLayout>} />
//           <Route path="/profile" element={<DashboardLayout> <Profile /> </DashboardLayout>} />
//           <Route path="/teams" element={<DashboardLayout> <Teams /> </DashboardLayout>} />
//           <Route path="/settings" element={<DashboardLayout> <Settings /> </DashboardLayout>} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default AppRoutes;
