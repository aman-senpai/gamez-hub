import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenereId: (genereId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenereId: (genreId) => set(() => ({ gameQuery: { genreId } })),
    setPlatformId: (platformId) => set(() => ({ gameQuery: { platformId } })),
    setSortOrder: (sortOrder) => set(() => ({ gameQuery: { sortOrder } }))

}))

export default useGameQueryStore;