import axios, { AxiosRequestConfig } from "axios";

const rawgApiKey = import.meta.env.VITE_RAWG_API_KEY;

if (!rawgApiKey) {
    throw new Error("Missing VITE_RAWG_API_KEY environment variable.");
}

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}


const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: rawgApiKey
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }

    get = (id: number | string) => {
        return axiosInstance
            .get<T>(this.endpoint + "/" + id)
            .then(res => res.data)
    }

}

export default APIClient;
