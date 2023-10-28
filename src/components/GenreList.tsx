import {
    HStack,
    Image,
    List,
    ListItem,
    Skeleton,
    Text,
} from "@chakra-ui/react";
import useGeneres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data: genres, isLoading, error } = useGeneres();
    const skeleton = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

    if (error) null;
    return (
        <List>
            {isLoading && skeleton.map((l) => <GenreList.Skeleton />)}
            {genres.map((genre) => (
                <ListItem
                    key={genre.id}
                    paddingY="5px"
                >
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
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
