import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    // const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user?.email) {
        return children
    }
    return <Navigate to='/login' replace></Navigate>
    // return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoutes;