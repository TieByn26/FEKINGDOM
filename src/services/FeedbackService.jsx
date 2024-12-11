import axios from "axios";

class FeedbackService {
    static BASE_URL = "http://localhost:1010"

    static async fetchFeedbackList(token){
        try{
            const response = await axios.get(`${FeedbackService.BASE_URL}/api/feedbacks`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async removeFeedbackById(selectedUids){
        try{
            const response = await axios.delete(`${FeedbackService.BASE_URL}/api/feedbacks/delete/${selectedUids}`,
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async addFeedback(Feedback, token){
        try{
            const response = await axios.post(`${FeedbackService.BASE_URL}/api/feedbacks/create`, Feedback,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async updateFeedback(feedback, token, id){
        try{
            const response = await axios.put(`${FeedbackService.BASE_URL}/api/feedbacks/update/${id}`, feedback,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
}

export default FeedbackService;