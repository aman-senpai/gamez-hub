import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data: games, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    if (error) return <Text>{error.message}</Text>;

    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
            spacing={6}
            padding="10px"
        >
            {isLoading &&
                skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton}>
                        <GameCard.Skeleton />
                    </GameCardContainer>
                ))}
            {games?.results.map((game) => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    );
};

export default GameGrid;
