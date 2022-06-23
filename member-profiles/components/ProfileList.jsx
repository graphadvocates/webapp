import ProfileItem from "./layout/ProfileItem";
import { Wrap } from "@chakra-ui/react";

function ProfileList(props) {
    console.log(props.profiles);
    return (
        <Wrap>
            {props.profiles.map((profile, idx) => (
                <ProfileItem key={idx} prof={profile} idx={idx} />
            ))}
        </Wrap>
    );
}
export default ProfileList;