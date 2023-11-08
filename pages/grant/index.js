import {
	Avatar,
	Box,
	chakra,
	Container,
	Text,
	Flex,
	Icon,
	ListItem,
	SimpleGrid,
	UnorderedList,
	useColorModeValue,
	HStack,
	VStack,
	Link,
} from "@chakra-ui/react";
import { getCompletedGrants } from "../../utils/clickupUtils";

function TestimonialCard(props) {
	const {
		grantName,
		forumLink,
		projectVision,
		projectCategory,
		projectShortDescription,
	} = props;
	return (
		<Flex
			boxShadow={"2xl"}
			maxW={"640px"}
			direction={{ base: "column-reverse", md: "row" }}
			width={"full"}
			rounded={"xl"}
			p={8}
			justifyContent={"space-between"}
			bgGradient="linear(to-b, purple.50, purple.100, purple.50)"
		>
			<VStack>
				<chakra.h3
					color={"blackAlpha.800"}
					fontSize={18}
					fontWeight={"extrabold"}
				>
					{grantName}
				</chakra.h3>
				<Text
					fontWeight={"medium"}
					fontSize={"15px"}
					mb={4}
					color={"gray.600"}
					noOfLines={3}
					textAlign={"left"}
				>
					{projectVision}
				</Text>
				<Box>
					<chakra.span
						bg={"gray.200"}
						color={"purple.700"}
						borderRadius={"md"}
						p={2}
						m={2}
					>
						{projectCategory}
					</chakra.span>
					<Link
						href={forumLink}
						fontWeight={"medium"}
						color={"gray.500"}
						isExternal
					>
						Learn More...
					</Link>
				</Box>
			</VStack>
			<Avatar
				src={"/assets/Square 1_1/Copy of TheGraph_1080x1080_v12.jpg"}
				height={"80px"}
				width={"80px"}
				alignSelf={"center"}
				m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
			/>
		</Flex>
	);
}

function GrantReqList(props) {
	return (
		<Box
			border={"1px"}
			borderColor={"gray.500"}
			borderRadius={"lg"}
			boxShadow={"lg"}
			color={"purple.200"}
			fontSize={16}
			bg={"rgba(250,250,250,0.1)"}
			p={2}
			px={4}
			m={6}
		>
			<Text fontSize={18} fontWeight={"bold"}>
				{props.title}
			</Text>
			{props.children}
		</Box>
	);
}

export default function Grant(props) {
	// const { grantName, forumLink, projectVision, projectCategory } =
	// 	props.completedGrants;

	return (
		<Flex
			textAlign={"center"}
			pt={10}
			justifyContent={"center"}
			direction={"column"}
			width={"full"}
			overflow={"hidden"}
		>
			<Box width={{ base: "full", sm: "lg", lg: "2xl" }} margin={"auto"}>
				<chakra.h1
					fontFamily={"Work Sans"}
					fontWeight={"bold"}
					fontSize={48}
					textTransform={"uppercase"}
				>
					Community Grants
				</chakra.h1>
				<chakra.h3
					py={5}
					fontSize={28}
					fontFamily={"Work Sans"}
					fontWeight={"bold"}
					fontStyle={"italic"}
					color={useColorModeValue("purple.300", "purple.50")}
				>
					Supporting Our Community
				</chakra.h3>
			</Box>
			<Flex justify={"center"}>
				<Box
					width={{ base: "full", sm: "md", lg: "3xl", xl: "6xl" }}
					fontFamily={"Inter"}
					fontWeight={"medium"}
					fontSize={20}
					textAlign={"center"}
					color={useColorModeValue("gray.300", "gray.200")}
				>
					<Box textIndent={40}>
						The Graph AdvocatesDAO oversees Community Grants and RFPs focused on
						"community-building" efforts in The Graph ecosystem. Community
						building means increasing the community's awareness, engagement,
						understanding, or participation in The Graph or web3 ecosystem.
					</Box>
					<Box textIndent={40} mb={"4px"}>
						Grants are distributed in GRT and are intended for grantees to use
						in the network, such as being Indexers, Delegators, Curators,
						Subgraph Developers or subgraph users (like dApps and data
						dashboards). The DAO sets a guideline of approving Community Grants.
						The GRT conversion rate will be set with a 30-day TWAP (time
						weighted average price). All Community Grants above that proposed
						amount will be deferred to The Graph Council and The Graph
						Foundation's existing grant application process.
					</Box>

					<Flex>
						<GrantReqList title="Community grants">
							<UnorderedList spacing={3} textAlign={"left"}>
								<ListItem>Podcasts & Multimedia (eg. GRTiQ Podcast)</ListItem>
								<ListItem>
									Hackathons and Blockchain Event Sponsorship (eg. ETHDenver,
									Graph Events)
								</ListItem>
								<ListItem>
									Guides, Tutorials & Educational Content (eg. The Graph
									Academy, docs){" "}
								</ListItem>
								<ListItem>
									Graph Communities (eg. Graphtronauts, Curation Station,
									Regional Communities)
								</ListItem>
								<ListItem>
									Educational Programs (eg. Rabbithole, FreeCodeCamp)
								</ListItem>
								<ListItem>
									Community Tooling (eg. delegator tools, notification bots)
								</ListItem>
								<ListItem>
									Marketing & Branding (eg. swag, marketing materials)
								</ListItem>
							</UnorderedList>
						</GrantReqList>
						<GrantReqList title="Not Community grants">
							<UnorderedList spacing={3} textAlign={"left"}>
								<ListItem>
									Subgraph development, Protocol & subgraph tooling (Matchstick,
									GraphGen, POIFIER)
								</ListItem>
								<ListItem>Protocol support or upgrades</ListItem>
								<ListItem>
									DeFi applications (SimpleFi, liquid delegations, Tenderize,
									GRT integrations/white listing)
								</ListItem>
								<ListItem>dApp/product integration</ListItem>
							</UnorderedList>
						</GrantReqList>
					</Flex>
				</Box>
			</Flex>

			<VStack bgGradient="linear(to-b, purple.600, purple.400)">
				<chakra.h3
					py={5}
					fontSize={28}
					fontFamily={"Work Sans"}
					fontWeight={"bold"}
					fontStyle={"italic"}
					color={useColorModeValue("purple.200", "purple.50")}
				>
					Examples of Past Completed Grants
				</chakra.h3>
				<SimpleGrid
					overflowY="auto"
					maxHeight="700px"
					columns={{ base: 1, xl: 2 }}
					spacing={"6"}
					mt={16}
					mb={16}
					mx={"auto"}
					boxShadow={"dark-lg"}
				>
					{props.completedGrants.map((grant, index) => (
						<TestimonialCard {...grant} key={index} />
					))}
				</SimpleGrid>
				<Box p={4}>
					<Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={"purple.100"}>
						<path
							fill={"currentColor"}
							d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
						/>
					</Icon>
				</Box>
			</VStack>
		</Flex>
	);
}

//This is server-side code
export async function getStaticProps(context) {
	let completedGrants = [];

	try {
		completedGrants = await getCompletedGrants();
	} catch (error) {
		console.log("Error::", error.message);
	}

	return {
		props: {
			completedGrants: completedGrants,
		},

		// Next.js will attempt to re-generate the page:
		revalidate: 40000, // In seconds
	};
}
