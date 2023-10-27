import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
    return (
        <HStack>
            <Image
                src={logo}
                boxSize="50px"
            />
            <Text>GamezHub</Text>
        </HStack>
    );
};

export default NavBar;
