import {
    Box,
    Button,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function SmallWithSocial() {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}
            >
                <Text>© 2022 Graph Advocates</Text>
                <Stack direction={"row"} spacing={6}>
                    <Button
                        bg={useColorModeValue(
                            "blackAlpha.100",
                            "whiteAlpha.100"
                        )}
                        rounded={"full"}
                        w={8}
                        h={8}
                        cursor={"pointer"}
                        as={"a"}
                        href={""}
                        display={"inline-flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        transition={"background 0.3s ease"}
                        _hover={{
                            bg: useColorModeValue(
                                "blackAlpha.200",
                                "whiteAlpha.200"
                            ),
                        }}
                    >
                        {/* <VisuallyHidden>Social</VisuallyHidden> */}
                        
                    </Button>
                    {/* <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton> */}
                </Stack>
            </Container>
        </Box>
    );
}
