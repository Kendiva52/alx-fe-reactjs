import { Navigate } from "react-router-dom";

const isAuthenticated = false; // ❌ change to true to simulate login

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
