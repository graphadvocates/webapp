import { Box, Heading, Text, Flex, VStack, Container } from "@chakra-ui/react";
import { useRouter } from "next/router.js";
import { useEffect } from "react";

import ProfileList from "../../components/ProfileList.jsx";

function DAOmembers(props) {

    useEffect(() => {

        //TODO: maybe if i move this out of this scope then the event is triggered when the router
        // object changes - router goes as a dependency
        const router = useRouter();

        // Always do navigations after the first render
        router.push("/daomembers?page=1", undefined, { shallow: true });
    }, []);

    return (
        <Container minW={"100%"}>
            <Flex justify="center">
                <VStack align="flex-start" w="80%">
                    <Heading>DAO Overview</Heading>
                    <Text fontSize="lg">
                        DAO members are here to help. DAO members role is to
                        assist in the onboarding of new advocates and provide
                        support for the growth of web3 and the Graph community.
                    </Text>

                    <Heading>Members</Heading>
                </VStack>
            </Flex>

            <ProfileList profiles={props.memberProfiles} />
        </Container>
    );
}

export default DAOmembers;

//This is server-side code
export async function getStaticProps(context) {
    const token = process.env.CLICKUP_API_KEY;

    const { Clickup } = require("clickup.js");
    const clickup = new Clickup(token);
    var memberProfs = [];

    try {
        //profile list id = 146225010
        //member list id = 13pgd4-7347
        //advocate list id = 13pgd4-7367

        //get member profiles
        var data = await clickup.views.getTasks("13pgd4-7347", 0);
        memberProfs = data.body.tasks;
    } catch (error) {
        console.log("Error::", error.message);
    }

    return {
        props: {
            memberProfiles: memberProfs,
        },

        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 60 seconds
        revalidate: 1000, // In seconds
    };
}
