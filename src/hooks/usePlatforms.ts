import { useQuery } from "@tanstack/react-query";
import planforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms"

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
        staleTime: ms('24h'),
        initialData: planforms
    })

export default usePlatfroms;