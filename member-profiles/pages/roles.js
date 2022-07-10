import {
    Box,
    Heading,
    HStack,
    useColorModeValue,
    Img,
    Center,
    VStack,
} from "@chakra-ui/react";

export default function roles() {
    return (
        <Box maxW={1500}>
            <VStack>
                <Heading>Roles: </Heading>
                <p>
                    Becoming an Advocate offers flexibility: Advocates can focus
                    on different roles in the community based on their interests
                    and abilities. Echoing The Graph community’s vision of an
                    internet without gatekeepers, Advocates of all walks of life
                    are encouraged to pursue what motivates them. There are
                    currently six different Advocate roles to embody:
                </p>
                <HStack>
                    <Img p={5} w={400} src="/assets/EventEvangelist1.png" />
                    <p>
                        Proactively host and participate in The Graph events
                        (online or in-person), and attend regional industry
                        events.
                    </p>
                </HStack>
                <hr />
                <HStack>
                    <p>
                        Create original content related to The Graph or web3,
                        such as articles, video, infographics, memes or GIFs,
                        how-to guides, animations, and many other creative
                        materials.
                    </p>
                    <Img p={5} w={400} src="/assets/ContentCreator1.PNG" />
                </HStack>
                <hr />
                <HStack>
                    <Img src="/assets/TextTranslator.PNG" />
                    <p>
                        Translate The Graph documentation or other community
                        materials into other languages
                    </p>
                </HStack>
                <hr />
                <HStack>
                    <p>
                        Look out for the community, share content, answer
                        community questions, or provide directions to additional
                        resources, posted in The Graph&apos;s Telegram, Forum,
                        Discord, or Reddit channels.
                    </p>
                    <Heading>Community Care</Heading>
                </HStack>
                <hr />
                <HStack>
                    <Heading>Technical Teacher</Heading>
                    <p>
                        Educate others on how to use or build subgraphs,
                        participate in The Graph Network, and coach community
                        members on how they can best contribute to The Graph.
                    </p>
                </HStack>
                <hr />
                <HStack>
                    <p>
                        Facilitate the adoption of The Graph, speak or present
                        at conferences, and introduce people to The Graph and
                        web3
                    </p>
                    <Heading>Web3 Welcomer</Heading>
                </HStack>
            </VStack>
        </Box>
    );
}
