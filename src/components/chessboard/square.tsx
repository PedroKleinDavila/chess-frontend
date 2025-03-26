import { Box } from "@chakra-ui/react";

export default function Square({ color, children }: { color: string; children?: React.ReactNode }) {
    return (
        <Box
            bg={color}
            w="100%"
            h="100%"
            display="flex"
            position="relative"
            justifyContent="center"
            alignItems="center"
        >
            {children}
        </Box>
    );
}