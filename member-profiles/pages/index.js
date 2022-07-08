import {
  Box, 
  Heading,
  useColorModeValue,
  Image,
  VStack,
  HStack
} from "@chakra-ui/react";
import SmallWithSocial from "../components/layout/Footer.jsx";

export default function Home() {
  return (
    <Box>
      <VStack>
        <Image maxW={1500} src="/assets/banner.jpeg"/>

        <HStack maxW={1500}>
          <Heading p="5">
            Open community updates supporting the Graph Protocol and Web3 community
          </Heading>
          <Image src="/assets/CommunityTalk.jpg"/>
        </HStack>
        
        <Image src="/assets/AdvocateDAO@2x.png"/>

        <SmallWithSocial />

      </VStack>
    </Box> 
  )
}

