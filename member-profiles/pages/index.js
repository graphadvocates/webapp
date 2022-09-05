import {
    Box,
    Heading,
    useColorModeValue,
    Image,
    VStack,
    HStack,
    Button,
    Icon,
    Arrow,
    Text,
    Flex,
    Divider,
    Link,
} from "@chakra-ui/react";

import RolesComp from "../components/RolesComp";

export default function Home() {
    return (
        <Flex
            justifyContent={"center"}
            bgImage="/assets/Backgrounds/bg-hero.jpg"
            bgRepeat="no-repeat"
            p={5}
        >
            <VStack maxW={"1200px"}>
                <Box color={"whiteAlpha.900"} m={2} pb={20}>
                    <Text textStyle="h2" align={"center"}>
                        Graph
                    </Text>
                    <Text as="b" textStyle="h1" fontFamily={"heading"}>
                        Advocates
                    </Text>
                </Box>

                <VStack
                    borderTop={"4px"}
                    borderBottom={"4px"}
                    borderRadius={"xl"}
                    borderColor={"blue.200"}
                    p={"8"}
                    pt={"14"}
                    pb={"14"}
                >
                    <Text align={"center"} textStyle={"h3"}>
                        Advocates focus on different roles in the community
                        based on their interests and abilities.
                    </Text>
                    <Link href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7" isExternal>
                        <Button
                            border="2px"
                            borderColor="blue.200"
                            colorScheme={"blue"}
                        >
                            Apply
                        </Button>
                    </Link>
                </VStack>

                <VStack>
                    <Text pt={20} mb={"-6"} textStyle="h2">
                        How It Works
                    </Text>
                    <Image
                        pb={20}
                        alt="advocateDAO banner"
                        src="/assets/InfoGraphics/AdvocateDAO@2x2.png"
                    />
                </VStack>

                <VStack
                    p={"8"}
                    pt={"14"}
                    pb={"14"}
                    borderTop={"4px"}
                    borderBottom={"4px"}
                    borderRadius={"xl"}
                    borderColor={"blue.200"}
                >
                    <Text textStyle="h2">Community Talk</Text>
                    <Text p="5" textStyle="h3">
                        Host community updates for the Graph Protocol and Web3
                        community!
                    </Text>
                </VStack>

                <Box pt={28} mb={10}>
                    <Text textStyle="h2">Advocate Roles</Text>
                </Box>

                <RolesComp />
            </VStack>
        </Flex>
    );
}
