import {
	Text,
	Link,
	VStack,
	Image,
	Box,
	Flex,
	Tag,
	SimpleGrid,
	WrapItem,
	Wrap,
	Divider,
} from "@chakra-ui/react";

export default function AdvocateSpotlight(props) {
	return (
		<Flex w={"100%"}>
			<VStack
				w={"100%"}
				bg="gray.100"
				boxShadow="inset 0 0 25px rgba(0, 0, 0, 0.8)"
				borderRadius={"md"}
				py={14}
			>
				<Flex
					fontFamily={"Open Sans"}
					fontWeight={"bold"}
					fontSize={30}
					color={"gray.700"}
					p={4}
				>
					<Text alignSelf={"center"}>Advocate Spotlight:</Text>
					<Text ml={4} fontWeight={800} color={"blue.800"}>
						{" "}
						{props.details.name}
					</Text>
				</Flex>
				<Flex justify={"center"}>
					<Box
						p={5}
						border={"1px"}
						borderColor={"gray.300"}
						borderRadius={"lg"}
						boxShadow="0 0 15px rgba(0, 0, 0, 0.9)"
						maxW={800}
					>
						<Flex alignItems="center">
							<Image
								m={4}
								float={"left"}
								src={props.details.picUrl}
								alt="Image"
							/>
							<Box color={"blackAlpha.700"}>
								<Text fontSize="md" fontWeight="bold" mb="2">
									Advocate Role(s):
									{props.details.role.split(",").map((role, index) => (
										<Tag
											key={index}
											bg={"blue.100"}
											fontWeight={"extrabold"}
											alignSelf={"center"}
											ml={index > 0 ? 2 : 0} // add some spacing between tags
										>
											{role.trim()}{" "}
											{/* trim() removes any whitespace around the role */}
										</Tag>
									))}
								</Text>
								<Text fontSize="md" fontWeight="bold" mb="2">
									Region:{" "}
									<Tag
										bg={"red.100"}
										fontWeight={"extrabold"}
										alignSelf={"center"}
									>
										{props.details.region}
									</Tag>
								</Text>
								<Text fontSize="md" fontWeight="bold" mb="2">
									Twitter:{" "}
									<Tag
										bg={"purple.100"}
										fontWeight={"extrabold"}
										alignSelf={"center"}
									>
										{props.details.twitter}
									</Tag>
								</Text>
								<Text fontSize="md" fontWeight={"extrabold"} mb="2">
									Discord:{" "}
									<Tag
										bg={"pink.100"}
										fontWeight={"extrabold"}
										alignSelf={"center"}
									>
										{props.details.discord}
									</Tag>
								</Text>
							</Box>
						</Flex>

						<Text
							as={"i"}
							color={"blackAlpha.800"}
							borderBottom={"1px"}
							borderColor={"gray.300"}
							fontSize={20}
							fontWeight={800}
						>
							Background{"\n"}
						</Text>
						<Text
							pb={"10px"}
							fontSize={18}
							fontWeight={600}
							color={"blackAlpha.800"}
						>
							I am originally from Ecuador where I lived before coming to the US
							for college. I worked as a civil engineer for 3 years out of
							college, then switched to finance doing business valuations for
							about 5 years. Most recently I founded a food manufacturing and
							marketing company in Chicago which I managed for 10 years and sold
							in 2022.
							{props.details.background}
						</Text>

						<Text
							as={"i"}
							color={"blackAlpha.800"}
							borderBottom={"1px"}
							borderColor={"gray.300"}
							fontSize={20}
							fontWeight={800}
						>
							What Inspired you to select advocate role?:
						</Text>
						<Text fontSize={18} fontWeight={600} color={"blackAlpha.800"}>
							{props.details.q1}
						</Text>
						<Text
							fontSize={"lg"}
							mt={5}
							justifySelf={"center"}
							color={"blackAlpha.800"}
						>
							*View the entire Article{" "}
							<Link
								color={"blue.400"}
								href={props.details.fullArticle}
								isExternal
							>
								Here
							</Link>
						</Text>
					</Box>
				</Flex>
				{/* <SimpleGrid spacing={4} columns={3} textAlign={'center'}>
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/q1.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/intro.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/q2.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/backg.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/prof.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/q1.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/q1.png" />
          <Image borderRadius={'lg'} src="/assets/LandingSpotlight/q1.png" />
        </SimpleGrid> */}
				{/* <Image h={'400px'} src="/assets/LandingSpotlight/1.jpeg" /> */}
			</VStack>
		</Flex>
	);
}
