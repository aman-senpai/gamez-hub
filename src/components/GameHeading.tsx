import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenere from "../hooks/useGenere";
import usePlatform from "../hooks/usePlatform";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const genre = useGenere(gameQuery.genreId);
    const platform = usePlatform(gameQuery.platformId);

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
