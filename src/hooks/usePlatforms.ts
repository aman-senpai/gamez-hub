import planforms from "../data/platforms";

interface Platforms {
    id: number;
    name: string;
    slug: string;
}

const usePlatfroms = () => ({ data: planforms, isLoading: false, error: null })

export default usePlatfroms;