import useGeneres from "./useGeneres";

const useGenere = (id?: number) => {
    const { data: genres } = useGeneres();

    return genres?.results.find((g) => g.id === id);
}

export default useGenere;