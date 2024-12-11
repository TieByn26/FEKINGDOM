import { Outlet, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const PublicRoutes = () => {
    if (localStorage.getItem('token')) {
        Swal.fire({
            title: 'Please logout before',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
        return <Navigate to="/user/profile" />;
    }
    return <Outlet />;
}