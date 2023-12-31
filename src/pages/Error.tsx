import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const Error = () => {
    const error = useRouteError();

    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Heading>Oppsi!</Heading>
                <Text>
                    {isRouteErrorResponse(error)
                        ? "This page does not exist"
                        : "An unexpected error occured."}
                </Text>
            </Box>
        </>
    );
};

export default Error;
