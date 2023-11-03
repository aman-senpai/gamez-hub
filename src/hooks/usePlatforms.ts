import planforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

interface Platforms {
    id: number;
    name: string;
    slug: string;
}

const usePlatfroms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
        apiClient
            .get<FetchResponse<Platforms>>("/platforms/lists/parents")
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: planforms.length, results: planforms }
})

export default usePlatfroms;