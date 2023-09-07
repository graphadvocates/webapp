import {
	Box,
	Flex,
	HStack,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	Stack,
	Img,
	Text,
	Link,
	Divider,
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import {
	HamburgerIcon,
	CloseIcon,
	Search2Icon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@chakra-ui/icons";

export default function MainNavigation() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: applyIsOpen,
		onOpen: applyOnOpen,
		onClose: applyOnClose,
	} = useDisclosure();

	const Links = [
		// { name: 'Dashboard', path: '/dashboard' },
		// {
		//     name: "Team",
		//     path: "/",
		//     subLinks: [
		//         {
		//             name: "Roles",
		//             path: "/roles",
		//         },
		//         {
		//             name: "Members",
		//             path: "/daomembers",
		//         },
		//         {
		//             name: "Advocates",
		//             path: "/advocates",
		//         },
		//     ],
		// },
		// { name: "Docs", path: "https://docs.graphadvocates.com/" },
		{
			name: "Docs",
			path: "https://doc.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13387",
		},
		{ name: "Forum", path: "https://forum.graphadvocates.com/" },
		{ name: "Grants", path: "/grant", isExternal: false },
	];

	return (
		<Box
			bg={"rgba(12,10,29,1.0)"}
			px={4}
			sx={{
				position: "-webkit-sticky",
				/* Safari */ position: "sticky",
				top: "0",
				zIndex: "1",
			}}
			opacity={0.95}
		>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				{/* Side Bar Mobile Drop-Down Navigation */}
				{/* <Menu>
					<MenuButton
						as={IconButton}
						aria-label="Options"
						icon={<HamburgerIcon />}
						variant="outline"
						// size={"md"}
						// icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						// aria-label={"Open Menu"}
						display={{ md: "none" }}
						//onClick={isOpen ? onClose : onOpen}
					></MenuButton>
					<MenuList>
						<Text>test</Text>
					</MenuList>
				</Menu> */}

				{/* Main Navigation Header */}
				<HStack spacing={8} alignItems={"center"}>
					<Link href="/">
						<Img cursor={"pointer"} src={"/assets/Icons/graphIcon.svg"} />
					</Link>
					<NavLink LinkList={Links} />
				</HStack>

				<Flex alignItems={"center"}>
					<Menu>
						<MenuButton
							as={IconButton}
							onClick={applyIsOpen ? applyOnClose : applyOnOpen}
							aria-label="Apply"
							colorScheme={"purple"}
							fontSize={"18"}
							m={8}
							p={4}
						>
							{" "}
							Apply Here!
							{applyIsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
						</MenuButton>
						<MenuList
							bgGradient={"linear(to-l, rgba(123, 12, 235), rgba(188, 0, 209))"}
						>
							<Link
								href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7"
								_hover={{
									textDecoration: "none",
								}}
								isExternal
							>
								<MenuItem
									justifyContent={"center"}
									fontWeight={"700"}
									bg={"transparent"}
									_hover={{
										bg: "rgba(255, 255, 255, 0.2)",
									}}
								>
									Become an Advocate!
								</MenuItem>
							</Link>
							<Divider />
							<Link
								href="https://forms.clickup.com/37437860/f/13pgd4-3987/1HEIW31922QZ1CRS64"
								_hover={{
									textDecoration: "none",
								}}
								isExternal
							>
								<MenuItem
									justifyContent={"center"}
									fontWeight={"700"}
									bg={"transparent"}
									_hover={{
										bg: "rgba(255, 255, 255, 0.2)",
									}}
								>
									Community Grant
								</MenuItem>
							</Link>
						</MenuList>
					</Menu>
				</Flex>
			</Flex>
		</Box>
	);
}
