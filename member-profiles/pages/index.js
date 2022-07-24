import {
  Box, 
  Heading,
  useColorModeValue,
  Image,
  VStack,
  HStack
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <VStack>
        <Image maxW={1500} alt="Home banner" src="/assets/Banners/banner.jpeg"/>

        <HStack maxW={1500}>
          <Heading p="5">
            Open community updates supporting the Graph Protocol and Web3 community
          </Heading>
          <Image alt="Community Talk banner" src="/assets/Banners/CommunityTalk.jpg"/>
        </HStack>
        
        <Image alt="advocateDAO banner" src="/assets/InfoGraphics/AdvocateDAO@2x.png"/>

      </VStack>
    </Box> 
  )
}

