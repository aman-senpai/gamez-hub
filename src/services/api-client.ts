import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "706f49bc1b014e8a9bf14bd9112f279f"
    }
})