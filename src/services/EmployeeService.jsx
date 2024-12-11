import axios from "axios";

class EmployeeService {
    static BASE_URL = "http://localhost:1010"

    static async getEmployeeList(token){
        try{
            const response = await axios.get(`${EmployeeService.BASE_URL}/api/employee`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async searchEmployeeList(token,name){
        try{
            const response = await axios.get(`${EmployeeService.BASE_URL}/api/employee/search/${name}`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getEmployee(token,id){
        try{
            const response = await axios.get(`${EmployeeService.BASE_URL}/api/employee/${id}`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getDivisions(token){
        try{
            const response = await axios.get(`${EmployeeService.BASE_URL}/api/division`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getPositions(token){
        try{
            const response = await axios.get(`${EmployeeService.BASE_URL}/api/position`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getRoles(token){
        try{
            const response = await axios.get(`${EmployeeService.BASE_URL}/api/role`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getDegrees(token){
        try{
            const response = await axios.get(`${EmployeeService.BASE_URL}/api/degrees`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async softDeleteEmployeeByid(selectedUids){
        try{
            const response = await axios.delete(`${EmployeeService.BASE_URL}/api/employee/delete/${selectedUids}`,
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async createEmployee(facility,token){
        try{
            const response = await axios.post(`${EmployeeService.BASE_URL}/api/employee/create`, facility,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async updateEmployee(employee,token,id){
        try{
            const response = await axios.put(`${EmployeeService.BASE_URL}/api/employee/update/${id}`, employee,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
}

export default EmployeeService;