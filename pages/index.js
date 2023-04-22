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
} from '@chakra-ui/react';

import RolesComp from '../components/RolesComp';
import Carousel from 'framer-motion-carousel';
import AdvocateSpotlight from '../components/AdvocateSpotlight';
import CarouselComp from '../components/UpcomingEvents';
import { google } from 'googleapis';

import { gql } from 'graphql-request';
import { hasuraAdminClient } from '../lib/hasura-admin-client';

const GetSpotlight = gql`
  query GetSpotlight {
    spotlights(order_by: { created_at: desc }, limit: 1) {
      spotlight_detail
    }
  }
`;

export default function Home(props) {
  return (
    <>
      <Flex justify={'center'} color={'whiteAlpha.900'} m={2} p={4}>
        <Text textStyle="h1">Graph</Text>
        <Text fontWeight={800} textStyle="h1" fontFamily={'heading'}>
          Advocates
        </Text>
      </Flex>

      <Flex justify={'center'} mb={100}>
        <Box
          maxW={1200}
          bg={'blackAlpha.400'}
          borderRadius={'3xl'}
          overflow={'hidden'}
        >
          <Carousel interval={3000}>
            {[1, 2, 3, 4, 5].map((item, i) => (
              <Flex key={i} justify={'center'}>
                <Image
                  draggable={'false'}
                  src={'/assets/LandingCarousel/' + item + '.jpg'}
                  alt="pic"
                  maxH={600}
                />
              </Flex>
            ))}
          </Carousel>
        </Box>
      </Flex>

      <AdvocateSpotlight details={props.spotlightDetails} />

      <Flex justify={'center'} mt={100}>
        <Text fontFamily={'Open Sans'} fontSize={30}>
          Advocate Roles
        </Text>
      </Flex>
      <Flex justify={'center'}>
        <RolesComp />
      </Flex>

      <Flex mt={100} justify={'center'}>
        <Box
          px={'8'}
          py={'14'}
          borderY={'4px'}
          borderRadius={'xl'}
          borderColor={'blue.200'}
        >
          <Text align={'center'} textStyle="h2" mb={14}>
            Community
          </Text>
          <HStack>
            <VStack borderRight={'1px'} px={'20'}>
              <Text textStyle="h3">Advocates</Text>
              <Text textStyle="h1" p="5" pb={0}>
                ~280
              </Text>
              <Text fontSize={18}>Advocates</Text>
            </VStack>
            <VStack borderRight={'1px'} px={'20'}>
              <Text textStyle="h3">Grants</Text>
              <Text textStyle="h1" p="5" pb={0}>
                ~25
              </Text>
              <Text fontSize={18}>Issued</Text>
            </VStack>
            <VStack px={'20'}>
              <Text textStyle="h3">Total Grants</Text>
              <Text textStyle="h1" p="5" pb={0}>
                ~$100k
              </Text>
              <Text fontSize={18}>grant funding</Text>
            </VStack>
          </HStack>
        </Box>
      </Flex>

      <Flex justify={'center'} mt={100} mb={5}>
        <Text pt={35} fontFamily={'Open Sans'} fontSize={30}>
          Upcoming:
        </Text>
      </Flex>
      <CarouselComp events={props.eventList} />

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
    revalidate: 18000,
  };

  const jwtClient = new google.auth.JWT({
    scopes: ['https://www.googleapis.com/auth/calendar'],
    email: process.env.GOOGLE_CLIENT_EMAIL,
    keyFile: null,
    key: process.env.GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join('\n'),
  });

  const calendar = google.calendar({
    version: 'v3',
    auth: jwtClient,
  });

  //Get calendar events
  try {
    const res = await calendar.events.list({
      calendarId: process.env.GOOGLE_CAL_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    props.eventList = res.data.items;
  } catch (err) {
    console.error('The API returned an error:', err);
  }

  //Get advocate spotlight
  try {
    const getSpotlightOne = await hasuraAdminClient.request(GetSpotlight);
    getSpotlightOne.spotlights[0].spotlight_detail;
    props.spotlightDetails = getSpotlightOne.spotlights[0].spotlight_detail;
  } catch (err) {
    console.error('Failed to get advocate spotlight: ', err);
  }
  return { props: props };
}
