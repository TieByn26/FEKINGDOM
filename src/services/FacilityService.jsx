import axios from "axios";

class FacilityService {
    static BASE_URL = "http://localhost:1010"

    static async getFacilityList(token){
        try{
            const response = await axios.get(`${FacilityService.BASE_URL}/api/facilities`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async searchFacilityList(token,name){
        try{
            const response = await axios.get(`${FacilityService.BASE_URL}/api/facilities/search/${name}`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getFacility(token,id){
        try{
            const response = await axios.get(`${FacilityService.BASE_URL}/api/facilities/${id}`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getTypeFacilityList(token){
        try{
            const response = await axios.get(`${FacilityService.BASE_URL}/api/type-facilities`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getTypeRentList(token){
        try{
            const response = await axios.get(`${FacilityService.BASE_URL}/api/type-rents`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async softDeleteFacilityByid(selectedUids){
        try{
            const response = await axios.delete(`${FacilityService.BASE_URL}/api/facilities/delete/${selectedUids}`,
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async createFacility(facility,token){
        try{
            const response = await axios.post(`${FacilityService.BASE_URL}/api/facilities/create`, facility,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async updateFacility(facility,token,id){
        try{
            const response = await axios.put(`${FacilityService.BASE_URL}/api/facilities/update/${id}`, facility,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
}

export default FacilityService;