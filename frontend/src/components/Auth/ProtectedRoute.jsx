import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log("ProtectedRoute: User is:", user);
  return user ? children : <Navigate to="/login" replace />;
};


export default ProtectedRoute;
