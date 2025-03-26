import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        black: "#0a0c0d",
        white: "#f2f2f2",
        light_blue: "#348e91",
        dark_blue: "#213635",
        blue: "#1c5052"
    },
    fonts: {
    },
    styles: {
        global: {
            body: {
                bg: "blue",
                color: "black",
            },
        },
    },
});

export default theme;