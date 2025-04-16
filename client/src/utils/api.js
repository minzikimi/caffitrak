import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5004/api/drinks",
    headers: {
        "content-type": "application/json",
    },
});
export default api;