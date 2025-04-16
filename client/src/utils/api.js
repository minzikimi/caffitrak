import axios from "axios";

const api = axios.create({
    baseURL: "https://caffitrak-backend.onrender.com/api/drinks",
    headers: {
        "content-type": "application/json",
    },
});
export default api;