import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import Square from "./square";
import Piece from "./piece";

export default function Chessboard() {
    const renderSquares = () => {
        const initialBoard: { type: string, color: string, position: string }[] = [
            { type: "rook", color: "black", position: "1-1" },
            { type: "knight", color: "black", position: "1-2" },
            { type: "bishop", color: "black", position: "1-3" },
            { type: "queen", color: "black", position: "1-4" },
            { type: "king", color: "black", position: "1-5" },
            { type: "bishop", color: "black", position: "1-6" },
            { type: "knight", color: "black", position: "1-7" },
            { type: "rook", color: "black", position: "1-8" },
            { type: "pawn", color: "black", position: "2-1" },
            { type: "pawn", color: "black", position: "2-2" },
            { type: "pawn", color: "black", position: "2-3" },
            { type: "pawn", color: "black", position: "2-4" },
            { type: "pawn", color: "black", position: "2-5" },
            { type: "pawn", color: "black", position: "2-6" },
            { type: "pawn", color: "black", position: "2-7" },
            { type: "pawn", color: "black", position: "2-8" },
            { type: "rook", color: "white", position: "8-1" },
            { type: "knight", color: "white", position: "8-2" },
            { type: "bishop", color: "white", position: "8-3" },
            { type: "queen", color: "white", position: "8-4" },
            { type: "king", color: "white", position: "8-5" },
            { type: "bishop", color: "white", position: "8-6" },
            { type: "knight", color: "white", position: "8-7" },
            { type: "rook", color: "white", position: "8-8" },
            { type: "pawn", color: "white", position: "7-1" },
            { type: "pawn", color: "white", position: "7-2" },
            { type: "pawn", color: "white", position: "7-3" },
            { type: "pawn", color: "white", position: "7-4" },
            { type: "pawn", color: "white", position: "7-5" },
            { type: "pawn", color: "white", position: "7-6" },
            { type: "pawn", color: "white", position: "7-7" },
            { type: "pawn", color: "white", position: "7-8" },
        ]
        const squares = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const isDarkSquare = (row + col) % 2 === 1;
                const key = `${row + 1}-${col + 1}`;
                squares.push(
                    <Square key={key} color={isDarkSquare ? "dark_blue" : "white"}>
                        {key.charAt(2) === "1" ?
                            <Text
                                fontSize="1rem"
                                top="-1px"
                                left="3px"
                                position="absolute"
                                color={isDarkSquare ? "white" : "dark_blue"}>{9 - Number(key.charAt(0))}
                            </Text>
                            : ""
                        }
                        {key.charAt(0) === "8" ?
                            <Text
                                fontSize="1rem"
                                bottom="-1px"
                                right="3px"
                                position="absolute"
                                color={isDarkSquare ? "white" : "dark_blue"}>{String.fromCharCode(96 + Number(key.charAt(2)))}
                            </Text>
                            : ""
                        }
                        {
                            /* key.charAt(0) === "2" && key.charAt(2) === "2" ?
                                <Box position={"absolute"}>a</Box> : "" */
                        }
                        {
                            initialBoard.find((piece) => piece.position === key) && (
                                <Piece
                                    color={initialBoard.find((piece) => piece.position === key)?.color || ""}
                                    type={initialBoard.find((piece) => piece.position === key)?.type || ""}
                                    position={key}
                                />
                            )
                        }
                    </Square>
                );
            }
        }
        return squares;
    };

    return (
        <Flex w="100vw" h="100vh" justify="center" align="center">
            <Box
                w="45%"
                aspectRatio={1}
                borderRadius="md"
                overflow="hidden"
            >
                <SimpleGrid columns={8} w="100%" h="100%" gap={0}>
                    {renderSquares()}
                </SimpleGrid>
            </Box>
        </Flex>
    );
}
