import ProfileItem from "./layout/ProfileItem";
import { Wrap, Button, Box } from "@chakra-ui/react";
import {useRouter} from "next/router";

function ProfileList(props) {

    const router = useRouter();

    function pageifyHandler(){
        router.push('/');
    }

    return (
        <Box>
            <Wrap justify="center" spacingY={4} m={5}>
                {props.profiles.map((profile, idx) => (
                    <ProfileItem key={idx} prof={profile} idx={idx} />
                ))}
            </Wrap>
            <Button justify="center" onClick={pageifyHandler} colorScheme="blue">Next</Button>
        </Box>
    );
}
export default ProfileList;
