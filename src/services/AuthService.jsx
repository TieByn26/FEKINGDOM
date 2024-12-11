import axios from "axios";
import Swal from "sweetalert2";

class AuthService    {
    static BASE_URL = "http://localhost:1010"

    static async login(username, password){
        try{
            const response = await axios.post(`${AuthService.BASE_URL}/auth/login`, {username, password})
            setTimeout(() => {
                localStorage.clear();
            }, 10000000);
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async register(username,password,email,name,dob,idCard,address,phoneNumber,gender){
        try{
            const response = await axios.post(`${AuthService.BASE_URL}/auth/register`, {username,password,email,name,dob,idCard,address,phoneNumber,gender})
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getAllUsers(token){
        try{
            const response = await axios.get(`${AuthService.BASE_URL}/admin/get-all-users`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async getYourProfile(token){
        try{
            const response = await axios.get(`${AuthService.BASE_URL}/adminstaff/profile`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getYourPassword(token){
        try{
            const response = await axios.get(`${AuthService.BASE_URL}/adminstaff/password`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getUserById(userId, token){
        try{
            const response = await axios.get(`${AuthService.BASE_URL}/admin/get-users/${userId}`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async deleteUser(userId, token){
        try{
            const response = await axios.delete(`${AuthService.BASE_URL}/admin/delete/${userId}`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async updateUser(userData, token){
        try{
            const response = await axios.put(`${AuthService.BASE_URL}/adminstaffcus/update`, userData,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    /**AUTHENTICATION CHECKER */
    static logout() {
        localStorage.clear();
        Swal.fire(
            'Logged out!',
            'You have been logged out.',
            'success'
        );
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('role')
        return role === 'ROLE_ADMIN'
    }

    static isReceptionist(){
        const role = localStorage.getItem('role')
        return role === 'ROLE_RECEPTIONIST'
    }

    static isCustomer(){
        const role = localStorage.getItem('role')
        return role === 'ROLE_CUSTOMER';
    }
    static isManager(){
        const role = localStorage.getItem('role')
        return role === 'ROLE_MANAGER'
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin();
    }
    static receptionistOnly(){
        return this.isAuthenticated() && this.isReceptionist();
    }
    static managerOnly(){
        return this.isAuthenticated() && this.isManager
    }

}

export default AuthService;