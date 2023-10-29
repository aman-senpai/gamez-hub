import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const heading = `${gameQuery.platform?.name || "👀ello!"} ${
        gameQuery.genre?.name || "find"
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
