import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
    return (
        <HStack
            justifyContent="space-between"
            padding="10px"
            marginLeft={3}
        >
            <Link to="/">
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
            </Link>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
