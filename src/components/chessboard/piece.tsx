import { Flex, Image } from "@chakra-ui/react";
import black_bishop from "../../assets/pieces/alpha/bB.svg";
import black_king from "../../assets/pieces/alpha/bK.svg";
import black_knight from "../../assets/pieces/alpha/bN.svg";
import black_pawn from "../../assets/pieces/alpha/bP.svg";
import black_queen from "../../assets/pieces/alpha/bQ.svg";
import black_rook from "../../assets/pieces/alpha/bR.svg";
import white_bishop from "../../assets/pieces/alpha/wB.svg";
import white_king from "../../assets/pieces/alpha/wK.svg";
import white_knight from "../../assets/pieces/alpha/wN.svg";
import white_pawn from "../../assets/pieces/alpha/wP.svg";
import white_queen from "../../assets/pieces/alpha/wQ.svg";
import white_rook from "../../assets/pieces/alpha/wR.svg";
import { PieceComponentType } from "../../types/types";

const pieceImages: Record<string, string> = {
    "black_bishop": black_bishop,
    "black_king": black_king,
    "black_knight": black_knight,
    "black_pawn": black_pawn,
    "black_queen": black_queen,
    "black_rook": black_rook,
    "white_bishop": white_bishop,
    "white_king": white_king,
    "white_knight": white_knight,
    "white_pawn": white_pawn,
    "white_queen": white_queen,
    "white_rook": white_rook,
};
export default function Piece({ color, type, position }: PieceComponentType) {
    const pieceKey = `${color}_${type}`;
    const pieceSrc = pieceImages[pieceKey];

    if (!pieceSrc) {
        console.warn(`Peça inválida: ${pieceKey}`);
        return null;
    }
    return (
        <Flex key={position} position="absolute" color={color}>
            <Image
                src={pieceImages[pieceKey]}
                alt={type}
                boxSize="60px"
            />
        </Flex>
    );
}