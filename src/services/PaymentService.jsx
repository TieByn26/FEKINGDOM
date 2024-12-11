import axios from "axios";

class PaymentService {
    static BASE_URL = "http://localhost:1010"

    static async getPaymentList(token){
        try{
            const response = await axios.get(`${PaymentService.BASE_URL}/api/payments`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getPaymentListByCustomer(token){
        try{
            const response = await axios.get(`${PaymentService.BASE_URL}/api/payments/customer`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getPayment(token,id){
        try{
            const response = await axios.get(`${PaymentService.BASE_URL}/api/payments/${id}`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async softDeletePaymentByid(selectedUids){
        try{
            const response = await axios.delete(`${PaymentService.BASE_URL}/api/payments/delete/${selectedUids}`,
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async createPayment(payment,token){
        try{
            const response = await axios.post(`${PaymentService.BASE_URL}/api/payments/create`, payment,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async updatePayment(payment,token,id){
        try{
            const response = await axios.put(`${PaymentService.BASE_URL}/api/payments/update/${id}`, payment,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
}

export default PaymentService;