import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import MainNavigation from "../components/layout/MainNavigation.jsx";

function ProfileItemID(props) {
    return (
        <Box>
            <MainNavigation />
            <h1> This a detail page </h1>
        </Box>
    );
}

export async function getStaticPaths() {
    const { Clickup } = require("clickup.js");
    //const token = "pk_54085711_UPTD4BLL3SPMJI2VUD5BYK359WQ0HRQA"; //100req/min API access token
    const token = "pk_42375693_4LS96USPE78O3OZ3PY9APWHZV35JMCJY"; //Full rights - token - dangerous
    const clickup = new Clickup(token);
    var memberProfs = [];
    var advocateProfs = [];

    try {
        //profile list id = 146225010
        //member list id = 13pgd4-7347
        //advocate list id = 13pgd4-7367

        //get member profiles
        var data = await clickup.views.getTasks("13pgd4-7347", 0);
        memberProfs = data.body.tasks;

        //get advocate profiles
        data = await clickup.lists.getTasks("13pgd4-7367", 0);
        advocateProfs = data.body.tasks;
    } catch (error) {
        console.log("Error::", error.message);
    }

    const allProfs = [...memberProfs, ...advocateProfs];
    var totLength = memberProfs.length + advocateProfs.length;
    console.log(totLength);

    return {
        fallback: "blocking",
        paths: allProfs.map((profs, idx) => ({
            params: { profileItemID: idx.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    //     //fetch data for single meetup
    //     const token = 'pk_54085711_UPTD4BLL3SPMJI2VUD5BYK359WQ0HRQA'; // API access token
    //     const clickup = new Clickup(token);

    //     //profile list id = 146225010
    //     const { body } = await clickup.lists.getTasks('146225010');
    //     //console.log(body.tasks[1]);
    //     const profiles = response.json(body.tasks);

    //     console.log(profiles);

    //     //const profileId = context.params.profileId;
    //     //console.log(profileId);

    return {
        props: {},
    };
}

export default ProfileItemID;
