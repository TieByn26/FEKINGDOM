import axios from "axios";

class ContractService {
    static BASE_URL = "http://localhost:1010"

    static async fetchContracts(token){
        try{
            const response = await axios.get(`${ContractService.BASE_URL}/api/contracts`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async fetchContractsByCustomer(token){
        try{
            const response = await axios.get(`${ContractService.BASE_URL}/api/contracts/customer`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async fetchContractById(token,id){
        try{
            const response = await axios.get(`${ContractService.BASE_URL}/api/contracts/${id}`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async removeContractById(selectedUids){
        try{
            const response = await axios.delete(`${ContractService.BASE_URL}/api/contracts/delete/${selectedUids}`,
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async addContract(contract, token){
        try{
            const response = await axios.post(`${ContractService.BASE_URL}/api/contracts/create`, contract,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async updateContract(contract, token, id){
        try{
            const response = await axios.put(`${ContractService.BASE_URL}/api/contracts/update/${id}`, contract,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
}

export default ContractService;