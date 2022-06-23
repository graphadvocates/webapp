import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function MainNavigation() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {/* <Box >bg={useColorModeValue("purple.900", "blue.600")} px={4}> */}
            <Box 
                bgGradient='linear(to-r, purple.800, purple.900, purple.800)'
                pl="3" pr="3"
            >
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    
                    <HStack>
                        <Avatar name='logo' src='/assets/defaultProf.png' />
                        <Link color="gray.200" href="/">Graph Advocates</Link>
                    </HStack>
                    
                    <HStack spacing={8} alignItems={"center"}>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                            color="gray.200"
                        >
                            <Link href="/">Advocates</Link>
                            <Link href="/daomembers">DAO Members</Link>
                            <Link href="https://docs.graphadvocates.com/">Docs</Link>
                        </HStack>
                    </HStack>

                </Flex>
            </Box>
        </>
    );
}
