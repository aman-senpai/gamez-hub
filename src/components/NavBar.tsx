import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack
            justifyContent="space-between"
            padding="10px"
        >
            <HStack>
                <Image
                    src={logo}
                    boxSize="50px"
                />
                <Text>GamezHub</Text>
            </HStack>
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
