import { useRouter } from "next/router";

import {
    Badge,
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    WrapItem,
    Box
} from "@chakra-ui/react";


export default function ProfileItem(props) {

    console.log(props.prof.custom_fields);

    //Find the correct values in the custom_fields objects for this Item display
    // - This seems a little ineffecient but works for now
    const nameField = props.prof.custom_fields.find((field) => {
        return field.id === "b8bca308-5797-4fc7-9038-0dcec7851b39";
    })
    const discordField = props.prof.custom_fields.find((field) => {
        return field.id === "760ac8c2-c4a2-4d75-868c-b41575373ee3";
    })
    const imgURL = props.prof.custom_fields.find((field) => {
        return field.id === "d2d56a31-fe9f-428b-9430-f3318372cfc5";
    })
    
    //Check value of field
    const name_val = nameField.hasOwnProperty("value") ? nameField.value : "Graph";
    const dsicordName = discordField.hasOwnProperty("value") ? discordField.value : "Graph";
    const imgURL_val = imgURL.hasOwnProperty("value") ? imgURL.value : "assets/Logos/defaultProf.png";

    const router = useRouter();
    function showDetailsHandler(){
        // router.push('/' + props.idx);
    }

    return (
        <WrapItem>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: "100%", md: "250px" }}
                height={{ sm: "255px", md: "16rem" }}
                direction={{ base: "column", md: "column" }}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                padding={4}
            >
                <Flex justifyContent="center" flex={1}>
                    <Image
                        borderRadius='full'
                        boxSize='100px'
                        alt="Profile Image"
                        src={imgURL_val}
                    />
                </Flex>
                <Stack
                    flex={2}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Heading color={"rgba(12,10,30,1.0)"} fontSize={"2xl"} fontFamily={"body"} noOfLines={1}>
                        { name_val }
                    </Heading>

                    <Text fontWeight={600} color={"gray.500"} size="sm" mb={4} noOfLines={1}>
                        { dsicordName }
                    </Text>
                    
                    {/* <Text
                        textAlign={"center"}
                        color={useColorModeValue("gray.700", "gray.400")}
                        px={3}
                    >
                        Actress, musician, songwriter and artist. PM for work
                        inquires or
                        <Link href={"#"} color={"blue.400"}>
                            #tag
                        </Link>
                        me in your posts
                    </Text> */}

                    {/* <Stack
                        align={"center"}
                        justify={"center"}
                        direction={"row"}
                        mt={6}
                    >
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue("gray.50", "gray.800")}
                            fontWeight={"400"}
                        >
                            #art
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue("gray.50", "gray.800")}
                            fontWeight={"400"}
                        >
                            #photography
                        </Badge>

                    </Stack> */}

                    <Stack
                        width={"100%"}
                        mt={"2rem"}
                        direction={"row"}
                        padding={2}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Button
                            flex={1}
                            fontSize={"sm"}
                            rounded={"full"}
                            _focus={{
                                bg: "gray.200",
                            }}
                        >
                            Message
                        </Button>
                        <Button
                            flex={1}
                            fontSize={"sm"}
                            rounded={"full"}
                            bg={"blue.400"}
                            color={"white"}
                            boxShadow={
                                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                            }
                            _hover={{
                                bg: "blue.500",
                            }}
                            _focus={{
                                bg: "blue.500",
                            }}
                        >
                            Follow
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </WrapItem>
    );
}

