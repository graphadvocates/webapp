import {
  Box, 
  Heading,
  useColorModeValue,
  Image,
  VStack,
  HStack
} from "@chakra-ui/react";
import MainNavigation from '../components/layout/MainNavigation.jsx'

export default function Home() {
  return (
    <Box bg={useColorModeValue("rgba(12,10,29,1.0)", "blue.900")}>
      <MainNavigation />
      <VStack>
        <Image src="/assets/banner.jpeg"/>
        
        <HStack>
          <Heading p="5" color="gray.200">
            Open community updates supporting the Graph and Web3 community
          </Heading>
          <Image src="/assets/CommunityTalk.jpg"/>
        </HStack>
        <Image src="/assets/AdvocateDAO@2x.png"/>
      </VStack>
    </Box> 
  )
}

