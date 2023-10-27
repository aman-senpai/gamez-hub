import axios from "axios";
import { api_key } from "../../key";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: api_key
    }
})