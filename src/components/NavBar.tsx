import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack
            justifyContent="space-between"
            padding="10px"
            marginLeft={3}
        >
            <Flex
                marginRight={10}
                paddingTop={1}
            >
                <Image
                    src={logo}
                    boxSize="50px"
                />
                <Text
                    fontSize="2xl"
                    paddingTop={1}
                    fontFamily="monospace"
                    fontWeight="bold"
                >
                    GamezHub
                </Text>
            </Flex>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
