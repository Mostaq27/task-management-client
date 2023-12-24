
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
 
    if (loading) {
        return <div className="text-center "><span className="loading loading-infinity loading-lg"></span></div>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;