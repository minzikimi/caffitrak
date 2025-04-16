import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5004/api/drinks",  // 직접 URL을 작성
    headers: {
        "content-type": "application/json",
    },
});

export default api;
