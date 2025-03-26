import { Link } from "@chakra-ui/react";

export default function MyLink({ href, text, ...props }: { href: string; text: string }) {
    return (
        <Link
            href={href}
            {...props}
            bg="blue"
            color="white"
            p="1"
            borderRadius="md"
            w="100%"
            _hover={{ textDecoration: "none", bg: "light_blue" }}
        >
            {text}
        </Link>
    );
}