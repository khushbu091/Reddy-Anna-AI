import { Navigate } from "react-router-dom";
import { getUser } from "./Auth";

const ProtectedRoute = ({ children }) => {
  const user = getUser();
  return user && user.role === "admin" ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
