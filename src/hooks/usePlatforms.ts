import { useQuery } from "@tanstack/react-query";
import planforms from "../data/platforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents")

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatfroms = () =>
    useQuery({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: planforms.length, results: planforms }
    })

export default usePlatfroms;