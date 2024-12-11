import {Outlet, Navigate} from 'react-router-dom';
import AuthService from "../services/AuthService";
import Swal from "sweetalert2";
export const PrivateRoutes = () => {
    if (!AuthService.isAuthenticated() ) {
        Swal.fire({
            icon: 'warning',
            title: 'Please login first to use this feature',
            text: 'You need to login to access this page',
        });
        return <Navigate to="/login" />;
    }
    return <Outlet />;
}