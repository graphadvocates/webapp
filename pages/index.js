import {
	Box,
	Heading,
	useColorModeValue,
	Image,
	VStack,
	HStack,
	Button,
	Icon,
	Arrow,
	Text,
	Flex,
	Divider,
	Link,
	keyframes,
} from "@chakra-ui/react";

import RolesComp from "../components/RolesComp";
import Carousel from "framer-motion-carousel";
import AdvocateSpotlight from "../components/AdvocateSpotlight";
import CarouselComp from "../components/UpcomingEvents";
import { google } from "googleapis";
import { getHomeStats } from "../utils/clickupUtils";

import { gql } from "graphql-request";
import { hasuraAdminClient } from "../lib/hasura-admin-client";

const GetSpotlight = gql`
	query GetSpotlight {
		spotlights(order_by: { created_at: desc }, limit: 1) {
			spotlight_detail
		}
	}
`;

export default function Home(props) {
	const animation = keyframes`
    to {
       background-position: 200%;
     }
  `;
	return (
		<>
			<Flex justify={"center"} color={"whiteAlpha.900"} mt={20} p={10}>
				<Text textStyle="h1">Graph</Text>
				<Text fontWeight={800} textStyle="h1" fontFamily={"heading"}>
					Advocates
				</Text>
			</Flex>

			<Text
				bgGradient="linear(to-l, #fbbdff, #f5f2e9 )"
				bgClip="text"
				backgroundSize="200% auto"
				animation={`${animation} 7s ease-in-out`}
				fontSize={{ base: "xl", md: "3xl" }}
				fontWeight={"extrabold"}
				textAlign={"center"}
				maxW={"4xl"}
				mx={"auto"}
				py={"50"}
			>
				The mission of the Graph AdvocatesDAO is to drive greater participation
				in building a decentralized web3 and grow The Graph ecosystem by
				supporting community-based initiatives and through contributions of
				Graph Advocates.
			</Text>

			<Box
				bgGradient={"linear(to-b,rgba(10,10, 10, 0.1), rgba(100,100,200, 0.2))"}
				mt={100}
				py={145}
				pb={200}
			>
				<Text textStyle={"h2"} textAlign={"center"} mb={6}>
					Advocate Roles
				</Text>
				{/* </Flex> */}
				<Flex justify={"center"}>
					<RolesComp />
				</Flex>
			</Box>

			<Box>
				<Flex justify={"center"}>
					<Box bg={"blackAlpha.400"} borderRadius={"3xl"} overflow={"hidden"}>
						<Carousel interval={3000}>
							{[1, 2, 3, 4, 5].map((item, i) => (
								<Flex key={i} justify={"center"}>
									<Image
										draggable={"false"}
										src={"/assets/LandingCarousel/" + item + ".jpg"}
										alt="pic"
										maxH={600}
									/>
								</Flex>
							))}
						</Carousel>
					</Box>
				</Flex>

				<Flex my={260} justify={"center"}>
					<Box
						px={"8"}
						py={"14"}
						borderY={"4px"}
						bgImage={"/assets/Backgrounds/bg-footer.jpg"}
						bgRepeat={"no-repeat"}
						bgPos={"center"}
						bgSize={"cover"}
						borderRadius={"xl"}
						boxShadow={"dark-lg"}
					>
						<Text align={"center"} textStyle="h2" mb={14} fontWeight={900}>
							Community Insight
						</Text>
						<HStack>
							<VStack borderRight={"1px"} px={"20"}>
								<Text textStyle="h3">Advocates</Text>
								<Text textStyle="h1" p="5" pb={0}>
									{props.programStats.advocateCount}
								</Text>
								<Text fontSize={18}>Advocates</Text>
							</VStack>
							<VStack borderRight={"1px"} px={"20"}>
								<Text textStyle="h3">Grants</Text>
								<Text textStyle="h1" p="5" pb={0}>
									{props.programStats.numberOfGrants}
								</Text>
								<Text fontSize={18}>Issued</Text>
							</VStack>
							<VStack px={"20"}>
								<Text textStyle="h3">Grant Funds</Text>
								<Text textStyle="h1" p="5" pb={0}>
									{props.programStats.GRTissued % 1000}k
								</Text>
								<Text fontSize={18}>$GRT Issued for Completed Grants</Text>
							</VStack>
						</HStack>
					</Box>
				</Flex>
			</Box>

			<AdvocateSpotlight details={props.spotlightDetails} />

			<Flex justify={"center"} mt={100} mb={5}>
				<Text pt={35} fontFamily={"Open Sans"} fontSize={30}>
					Upcoming:
				</Text>
			</Flex>
			<CarouselComp events={props.eventList} />

			<Box my={"100"}></Box>

			{/* <VStack> */}
			{/* <VStack
        p={'8'}
        pt={'14'}
        pb={'14'}
        borderTop={'4px'}
        borderBottom={'4px'}
        borderRadius={'xl'}
        borderColor={'blue.200'}
      >
        <Text textStyle="h2">Community Grants</Text>
        <Text p="5" textStyle="h3">
          Want to support the Graph community? We want to support you! Apply for
          a community grant today!
        </Text>

        <Link
          href="https://forms.clickup.com/37437860/f/13pgd4-3987/1HEIW31922QZ1CRS64"
          isExternal
        >
          <Button
            border="2px"
            borderColor="blue.200"
            colorScheme={'blue'}
            m={8}
          >
            Apply for Grant
          </Button>
        </Link>
      </VStack> */}
			{/* </VStack> */}
		</>
	);
}

export async function getStaticProps(context) {
	let props = {
		eventList: [],
		spotlightDetails: {},
		programStats: {
			advocateCount: 250,
			numberOfGrants: 10,
			GRTissued: 10000,
		},
	};

	const jwtClient = new google.auth.JWT({
		scopes: ["https://www.googleapis.com/auth/calendar"],
		email: process.env.GOOGLE_CLIENT_EMAIL,
		keyFile: null,
		key: process.env.GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join("\n"),
	});

	const calendar = google.calendar({
		version: "v3",
		auth: jwtClient,
	});

	//Get calendar events
	try {
		const res = await calendar.events.list({
			calendarId: process.env.GOOGLE_CAL_ID,
			timeMin: new Date().toISOString(),
			maxResults: 10,
			singleEvents: true,
			orderBy: "startTime",
		});

		props.eventList = res.data.items;
	} catch (err) {
		console.error("The API returned an error:", err);
	}

	//Get advocate spotlight
	try {
		const getSpotlightOne = await hasuraAdminClient.request(GetSpotlight);
		getSpotlightOne.spotlights[0].spotlight_detail;
		props.spotlightDetails = getSpotlightOne.spotlights[0].spotlight_detail;
	} catch (err) {
		console.error("Failed to get advocate spotlight: ", err);
	}

	//Get Clickup Stats
	try {
		const data = await getHomeStats();
		props.programStats.advocateCount = data.activeAdvocates;
		props.programStats.numberOfGrants = data.numberOfGrants;
		props.programStats.GRTissued = data.GRTissued;
	} catch (err) {
		console.log("Error: ", err.message);
	}
	return { props: props, revalidate: 20000 };
}
