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
	Avatar,
} from "@chakra-ui/react";

export default function AdvocateSpotlight(props) {
	return (
		<Flex w={"100%"}>
			<VStack
				w={"100%"}
				py={14}
				bgGradient={"radial(rgba(200, 140, 255, 0.1), rgba(200,200,255, 0.4))"}
			>
				<Text alignSelf={"center"} textAlign={"center"} textStyle={"h2"} mb={8}>
					Advocate Spotlight
				</Text>
				<Flex justify={"center"}>
					<Box
						p={5}
						borderRadius={"lg"}
						boxShadow="0 0 15px rgba(0, 0, 0, 0.9)"
						bgGradient={
							"linear(to-tl, rgba(200, 140, 255, 0.6), rgba(255,255,255, 0.7) 80%)"
						}
						maxW={800}
					>
						<Flex
							fontFamily={"Open Sans"}
							fontWeight={"bold"}
							fontSize={30}
							color={"gray.700"}
							p={4}
						>
							<Text ml={4} fontWeight={800} color={"blue.800"}>
								{" "}
								{props.details.name}
							</Text>
						</Flex>
						<Flex alignItems="center">
							<Avatar
								m={4}
								float={"left"}
								src={props.details.picUrl}
								alt="Image"
							/>
							<Box color={"blackAlpha.700"}>
								<Text fontSize="lg" fontWeight="bold" mb="2">
									Role(s):
									{props.details.role.split(",").map((role, index) => (
										<Tag
											key={index}
											bgGradient={"linear(to-r, red.400,pink.400)"}
											fontWeight={"extrabold"}
											color={"blackAlpha.900"}
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
										bgGradient={"linear(to-r, purple.400,pink.400)"}
										fontWeight={"extrabold"}
										alignSelf={"center"}
									>
										{props.details.region}
									</Tag>
								</Text>
								{/* <Text fontSize="md" fontWeight="bold" mb="2">
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
								</Text> */}
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
								color={"blue.700"}
								href={props.details.fullArticle}
								isExternal
							>
								Here
							</Link>
						</Text>
					</Box>
				</Flex>
			</VStack>
		</Flex>
	);
}
