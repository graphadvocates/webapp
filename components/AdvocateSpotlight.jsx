import { Text, VStack, Image, Box, Flex, SimpleGrid } from '@chakra-ui/react';

export default function AdvocateSpotlight(props) {
  return (
    <Flex w={'100%'} py={6}>
      <VStack
        w={'100%'}
        bg="gray.100"
        boxShadow="inset 0 0 25px rgba(0, 0, 0, 0.8)"
        borderRadius={'md'}
        p={4}
      >
        <Text fontWeight={'bold'} fontSize={24} color={'gray.700'} p={4}>
          Advocate Spotlight
        </Text>
        <SimpleGrid>
          <Image src="/assets/Icons/favicon.png" />
        </SimpleGrid>
      </VStack>
    </Flex>
  );
}
