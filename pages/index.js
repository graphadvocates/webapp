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

export default function Home() {
  return (
    // <Flex justifyContent={'center'} p={5}>
    <VStack border={'1px'} borderColor={'green.300'}>
      <Box color={'whiteAlpha.900'} m={2} p={4}>
        <Text textStyle="h2" align={'center'}>
          Graph
        </Text>
        <Text fontWeight={800} textStyle="h1" fontFamily={'heading'}>
          Advocates
        </Text>
      </Box>

      <Box
        maxW={1200}
        bg={'blackAlpha.400'}
        borderRadius={'3xl'}
        overflow={'hidden'}
      >
        <Carousel interval={3000}>
          {[1, 2, 3, 4].map((item, i) => (
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

      {/* <Divider /> */}
      <AdvocateSpotlight />

      <Box mb={10}>
        <Text textStyle="h2">Advocate Roles</Text>
      </Box>

      <RolesComp />

      {/* <VStack>
        <Text pt={20} mb={'-6'} textStyle="h2">
          How It Works
        </Text>
        <Image
          pb={20}
          alt="advocateDAO banner"
          src="/assets/InfoGraphics/AdvocateDAO@2x2.png"
        />
      </VStack> */}

      <VStack
        p={'8'}
        pt={'14'}
        pb={'14'}
        borderTop={'4px'}
        borderBottom={'4px'}
        borderRadius={'xl'}
        borderColor={'blue.200'}
      >
        <Text textStyle="h2">Community Talk</Text>
        <Text p="5" textStyle="h3">
          Host community updates for the Graph Protocol and Web3 community!
        </Text>
      </VStack>

      <Box pt={28} mb={10}>
        <Text textStyle="h2">Advocate Roles</Text>
      </Box>

      <RolesComp />

      <VStack
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
      </VStack>
    </VStack>
    // </Flex>
  );
}
