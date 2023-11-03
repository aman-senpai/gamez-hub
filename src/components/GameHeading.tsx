import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGeneres from "../hooks/useGeneres";
import usePlatfroms from "../hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const { data: genres } = useGeneres();
    const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
    const { data: platforms } = usePlatfroms();
    const platform = platforms?.results.find(
        (p) => p.id === gameQuery.platformId
    );

    const heading = `${platform?.name || "👀ello!"} ${
        genre?.name || "find"
    } gamz`;

    return (
        <Heading
            as="h1"
            fontFamily="mono"
            marginY={5}
            fontSize="5xl"
        >
            {heading}
        </Heading>
    );
};

export default GameHeading;
