import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	if (loading) {
		return <span className="loading loading-ring loading-xl"></span>;
	}
	if (!user) {
		return <Navigate to="/login" from={window.location.pathname} replace />;
	}
	return children;
};

export default PrivateRoute;
