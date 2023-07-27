import { useRouter } from "next/router";
import { useState } from "react";
import { Box, Flex, VStack, Heading, Text, Button } from "@chakra-ui/react";
import ProfileList from "../../components/ProfileList";
import { getDaoMembers } from "../../utils/clickupUtils";

export default function DAOmembers({ memberProfiles, currentPage }) {
	const router = useRouter();
	const [currentPageState, setCurrentPageState] = useState(currentPage);

	const handleNextPage = () => {
		const nextPage = currentPageState + 1;
		router.push(`/daomembers?page=${nextPage}`, undefined, {
			shallow: true,
		});
		setCurrentPageState(nextPage);
	};

	return (
		<Box>
			<Flex justify="center">
				<VStack align="flex-start" w="80%">
					<Heading>DAO Overview</Heading>
					<Text fontSize="lg">
						DAO members are here to help. DAO members' role is to assist in the
						onboarding of new advocates and provide support for the growth of
						web3 and the Graph community.
					</Text>

					<Heading>Members</Heading>
				</VStack>
			</Flex>

			<ProfileList profiles={memberProfiles} />

			{/* <Button justify="center" colorScheme="blue" onClick={handleNextPage}>
				Next
			</Button> */}
		</Box>
	);
}

// This is server-side code
export async function getServerSideProps(context) {
	const { query } = context;

	// Extract the 'page' parameter from the query
	const currentPage = query.page ? parseInt(query.page) : 0;

	let memberProfs = [];

	try {
		memberProfs = await getDaoMembers(currentPage);
	} catch (error) {
		console.log("Error::", error.message);
	}

	return {
		props: {
			memberProfiles: memberProfs,
			currentPage: currentPage,
		},
	};
}
