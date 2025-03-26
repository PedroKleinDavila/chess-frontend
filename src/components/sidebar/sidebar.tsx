import { Flex } from "@chakra-ui/react";
import MyLink from "./link";

export default function Sidebar() {
    return (
        <Flex w="15vw" h="100vh" bg="dark_blue" color="white" direction="column" align="center" p={4}>
            <Flex direction="column" w="100%" gap={2}>
                <MyLink href="/" text="Home" />
                <MyLink href="/chessboard" text="Chessboard" />
            </Flex>
            <Flex flexGrow={1} />
            <MyLink href="/profile" text="Profile" />
        </Flex>
    );
}
