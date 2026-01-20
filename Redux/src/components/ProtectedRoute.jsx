import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If token not found, redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If token exists, allow access
  return children;
};

export default ProtectedRoute;
