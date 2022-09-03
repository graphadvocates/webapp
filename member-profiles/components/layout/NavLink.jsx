import {
    Link,
    HStack,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Button,
    Box,
    Flex,
    useDisclosure,
    textDecoration,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, Search2Icon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function NavLink(props) {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

    return (
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {props.LinkList.map((link, index) => (
                <Box
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                        textDecoration: "none",
                        bg: "gray.200",
                        color: "black",
                    }}
                    color="gray.200"
                    key={index}
                >
                    {link.hasOwnProperty("subLinks") ? (
                        <Flex alignItems={"center"}>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rightIcon={
                                        isOpen ? (
                                            <ChevronUpIcon />
                                        ) : (
                                            <ChevronDownIcon />
                                        )
                                    }
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                    color={isOpen ? "black" : "gray.200"}
                                    _hover={{
                                        textDecoration: "none",
                                        bg: "gray.200",
                                        color: "black",
                                    }}
                                >
                                    {link.name}
                                </MenuButton>

                                <MenuList textDecoration="none">
                                    {link.subLinks.map((sLink, idx) => (
                                        <NextLink href={sLink.path} key={idx}>
                                            <MenuItem>{sLink.name}</MenuItem>
                                        </NextLink>
                                    ))}
                                </MenuList>
                            </Menu>
                        </Flex>
                    ) : (
                        <Link
                            href={link.path}
                            _hover={{
                                textDecoration: "none",
                                bg: "gray.200",
                                color: "black",
                            }}
                        >
                            {link.name}
                        </Link>
                    )}
                </Box>
            ))}
        </HStack>
    );
}
