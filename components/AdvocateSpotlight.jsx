import { Text, VStack, Image, Box, Flex, SimpleGrid } from '@chakra-ui/react';

export default function AdvocateSpotlight(props) {
  return (
    <Flex w={'100%'}>
      <VStack
        w={'100%'}
        bg="gray.100"
        boxShadow="inset 0 0 25px rgba(0, 0, 0, 0.8)"
        borderRadius={'md'}
        py={14}
      >
        <Text
          fontFamily={'Open Sans'}
          fontWeight={'bold'}
          fontSize={30}
          color={'gray.700'}
          p={4}
        >
          Advocate Spotlight
        </Text>
        <SimpleGrid spacing={4} columns={3} textAlign={'center'}>
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/q1.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/intro.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/q2.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/backg.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/prof.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/q1.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/q1.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/q1.png" />
        </SimpleGrid>
        {/* <Image h={'400px'} src="/assets/LandingSpotlight/1.jpeg" /> */}
      </VStack>
    </Flex>
  );
}
