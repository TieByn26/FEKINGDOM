import axios from "axios";

class CustomerService {
    static BASE_URL = "http://localhost:1010"

    static async getCustomerList(token){
        try{
            const response = await axios.get(`${CustomerService.BASE_URL}/api/customer`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async softDeleteCustomerByid(selectedUids){
        try{
            const response = await axios.delete(`${CustomerService.BASE_URL}/api/customer/delete/${selectedUids}`,
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
}

export default CustomerService;