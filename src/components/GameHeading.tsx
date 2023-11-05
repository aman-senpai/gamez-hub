import { Heading } from "@chakra-ui/react";
import useGenere from "../hooks/useGenere";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
    const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const genre = useGenere(genreId);

    const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const platform = usePlatform(platformId);

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
