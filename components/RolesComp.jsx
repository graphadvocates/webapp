import {
	Box,
	Heading,
	HStack,
	useColorModeValue,
	Img,
	Center,
	Stack,
	Container,
	Text,
	Flex,
} from "@chakra-ui/react";

const roles = [
	{
		title: "Event Evangelist",
		src: "/assets/Logos/EventEvangelistLogo.png",
		alt: "Event evangelist",
		desc: "Proactively host and participate in The Graph events (online or in-person), and attend regional industry events.",
	},
	{
		title: "Content Creator",
		src: "/assets/Logos/ContentCreatorLogo.png",
		alt: "Content Creator",
		desc: "Create original content related to The Graph or web3, such as articles, video, infographics, memes or GIFs, how-to guides, animations, and many other creative materials.",
	},
	{
		title: "Text Translator",
		src: "/assets/Logos/TextTranslatorLogo.png",
		alt: "Text Translator",
		desc: "Translate The Graph documentation or other community materials into other languages",
	},
	{
		title: "Community Care",
		src: "/assets/Logos/CommunityCareLogo.png",
		alt: "Community Care",
		desc: "Look out for the community, share content, answer community questions, or provide directions to additional resources, posted in The Graph's Telegram, Forum, Discord, or Reddit channels.",
	},
	{
		title: "Technical Teacher",
		src: "/assets/Logos/TechnicalTeacherLogo.png",
		alt: "Technical Teacher",
		desc: "Educate others on how to use or build subgraphs, participate in The Graph Network, and coach community members on how they can best contribute to The Graph.",
	},
	//   {
	//     title: 'Web3 Welcomer*',
	//     src: '/assets/Logos/Web3WelcomerLogo.png',
	//     alt: 'Web3 Welcomer',
	//     desc: 'Facilitate the adoption of The Graph, speak or present at conferences, and introduce people to The Graph and web3. *Legacy Role',
	//   },
];

export default function RolesComp() {
	const RoleCard = (props) => {
		return (
			<Stack
				overflow={"hidden"}
				bgImage="/assets/Backgrounds/Advocates-01.png"
				boxShadow="0 0 15px rgba(0, 0, 0, 0.9)"
				bgSize="cover"
				bgPosition="center"
				rounded={"xl"}
				minH={["300px", "400px"]}
				_hover={{
					transform: "translateY(-5px)",
					boxShadow: "0 0 15px rgba(0, 0, 0, 0.9)",
				}}
			>
				<Img
					p={3}
					mx={"auto"}
					w={100}
					h={100}
					src={props.src}
					alt={props.alt}
				/>
				<Box p={3}>
					<Text
						fontSize={["lg", "xl", "2xl", "3xl"]}
						fontWeight={"extrabold"}
						color={"purple.200"}
						align="center"
					>
						{props.title}
					</Text>
					<Text fontWeight={200} maxW={"300"} fontSize={["lg", "xl"]}>
						{props.children}
					</Text>
				</Box>
			</Stack>
		);
	};

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { x: 800, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
		},
	};

	// const RolesMotion = () => (
	// 	<motion.ul
	// 		className="container"
	// 		variants={container}
	// 		initial="hidden"
	// 		whileInView="visible"
	// 		viewport={{ once: true, amount: 0.8 }}
	// 	>
	// 		{roles.map((role, index) => (
	// 			<motion.li
	// 				key={index}
	// 				className="item"
	// 				variants={item}
	// 				style={{ display: "inline-block", margin: "15px" }}
	// 			>
	// 				<RoleCard title={role.title} src={role.src} alt={role.alt}>
	// 					{role.desc}
	// 				</RoleCard>
	// 			</motion.li>
	// 		))}
	// 	</motion.ul>
	// );

	const RolesStatic = () => (
		<ul>
			{roles.map((role, index) => (
				<li
					key={index}
					className="item"
					variants={item}
					style={{ display: "inline-block", margin: "15px" }}
				>
					<RoleCard title={role.title} src={role.src} alt={role.alt}>
						{role.desc}
					</RoleCard>
				</li>
			))}
		</ul>
	);

	return <RolesStatic />;
}
