import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Skeleton,
} from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data: genres, isLoading, error } = useGeneres();

    return (
        <>
            <Heading
                fontSize="2xl"
                marginBottom={3}
            >
                Genres
            </Heading>
            <List>
                {genres?.results.map((genre) => (
                    <ListItem
                        key={genre.id}
                        paddingY="5px"
                    >
                        <HStack>
                            <Image
                                boxSize="32px"
                                objectFit="cover"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={
                                    genre.id === selectedGenre?.id
                                        ? "bold"
                                        : "normal"
                                }
                                variant="link"
                                fontSize="lg"
                                onClick={() => onSelectGenre(genre)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;

GenreList.Skeleton = () => {
    return (
        <ListItem paddingY="5px">
            <Skeleton
                height="30px"
                borderRadius={8}
            />
        </ListItem>
    );
};
