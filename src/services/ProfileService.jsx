import axios from "axios";

class ProfileService    {
    static BASE_URL = "http://localhost:1010"

    static async getYourProfile(token){
        try{
            const response = await axios.get(`${ProfileService.BASE_URL}/adminstaffcus/profile`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async updateYourPassword(token, userData){
        try{
            const response = await axios.put(`${ProfileService.BASE_URL}/adminstaffcus/update/password`, userData,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async updateProfile(userData, token){
        try{
            const response = await axios.put(`${ProfileService.BASE_URL}/adminstaffcus/update`, userData,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
}

export default ProfileService;