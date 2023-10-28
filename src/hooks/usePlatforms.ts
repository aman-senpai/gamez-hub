import useData from "./useData";

interface Platforms {
    id: number;
    name: string;
    slug: string;
}

const usePlatfroms = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatfroms;