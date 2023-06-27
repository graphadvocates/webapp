import ProfileItem from "./layout/ProfileItem";
import { Wrap, Button, Box, Container, Flex, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

function ProfileList(props) {
	const router = useRouter();

	function pageifyHandler() {
		router.push("/");
	}

	return (
		<Flex p={10} pt={0} justify="center">
			<VStack maxWidth={"1650px"}>
				<Wrap justify="center" spacing={4} m={5}>
					{props.profiles.map((profile, idx) => (
						<ProfileItem key={idx} prof={profile} idx={idx} />
					))}
				</Wrap>
				<Button justify="center" onClick={pageifyHandler} colorScheme="blue">
					Next
				</Button>
			</VStack>
		</Flex>
	);
}
export default ProfileList;
