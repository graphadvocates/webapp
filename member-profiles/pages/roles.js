import {
    Box,
    Heading,
    HStack,
    useColorModeValue,
    Img,
    Center,
    Stack,
    Container,
    SimpleGrid,
} from "@chakra-ui/react";

export default function roles() {
    const RoleCard = (props) => {
        return (
            <Stack
                overflow={"hidden"}
                bg="black"
                rounded={"xl"}
                align={"flex-start"}
            >
                <Img w={400} src={props.src} alt={props.alt} />
                <Box p={3}>
                    <p>{props.children}</p>
                </Box>
            </Stack>
        );
    };

    return (
        <Container p={5} maxW={"container.xl"}>
            <Box mb={10}>
                <Heading size={"xl"}>Overview</Heading>
                <p>
                    Becoming an Advocate offers flexibility: Advocates can focus
                    on different roles in the community based on their interests
                    and abilities. Echoing The Graph community&apos;s vision of
                    an internet without gatekeepers, Advocates of all walks of
                    life are encouraged to pursue what motivates them. There are
                    currently six different Advocate roles to embody:
                </p>
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
                <RoleCard
                    src="/assets/EventEvangelist1.PNG"
                    alt="Event evangelist"
                >
                    Proactively host and participate in The Graph events (online
                    or in-person), and attend regional industry events.
                </RoleCard>

                <RoleCard
                    src="/assets/ContentCreator1.PNG"
                    alt="Content Creator"
                >
                    Create original content related to The Graph or web3, such
                    as articles, video, infographics, memes or GIFs, how-to
                    guides, animations, and many other creative materials.
                </RoleCard>

                <RoleCard
                    src="/assets/TextTranslator.PNG"
                    alt="Text Translator"
                >
                    Translate The Graph documentation or other community
                    materials into other languages
                </RoleCard>

                <RoleCard src="/assets/TextTranslator.PNG" alt="Community Care">
                    Look out for the community, share content, answer community
                    questions, or provide directions to additional resources,
                    posted in The Graph&apos;s Telegram, Forum, Discord, or
                    Reddit channels.
                </RoleCard>

                <RoleCard
                    src="/assets/TextTranslator.PNG"
                    alt="Technical Teacher"
                >
                    Educate others on how to use or build subgraphs, participate
                    in The Graph Network, and coach community members on how
                    they can best contribute to The Graph.
                </RoleCard>

                <RoleCard src="/assets/TextTranslator.PNG" alt="Web3 Welcomer">
                    Facilitate the adoption of The Graph, speak or present at
                    conferences, and introduce people to The Graph and web3
                </RoleCard>

            </SimpleGrid>

        </Container>
    );
}
