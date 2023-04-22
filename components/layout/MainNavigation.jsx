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
  useColorModeValue,
  Stack,
  Img,
  Text,
  Link,
} from '@chakra-ui/react';
import NavLink from './NavLink';
import NextLink from 'next/link';
import { HamburgerIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons';

export default function MainNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    { name: 'Docs', path: 'https://docs.graphadvocates.com/' },
    { name: 'Forum', path: 'https://forum.graphadvocates.com/' },

    // { name: 'Live', path: '/live' },
  ];

  return (
    <Box
      bg={useColorModeValue('rgba(12,10,29,1.0)', 'blue.900')}
      px={4}
      sx={{
        position: '-webkit-sticky',
        /* Safari */ position: 'sticky',
        top: '0',
        zIndex: '1',
      }}
      opacity={0.95}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            // size={"md"}
            // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            // aria-label={"Open Menu"}
            display={{ md: 'none' }}
            //onClick={isOpen ? onClose : onOpen}
          ></MenuButton>
          <MenuList>
            <Text>test</Text>
          </MenuList>
        </Menu>

        <HStack spacing={8} alignItems={'center'}>
          <NextLink href="/">
            <Img cursor={'pointer'} src={'/assets/Icons/graphIcon.svg'} />
          </NextLink>

          <NavLink LinkList={Links} />
        </HStack>

        <Flex alignItems={'center'}>
          <Link
            href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7"
            isExternal
          >
            <Button
              border="2px"
              borderColor="blue.200"
              colorScheme={'blue'}
              fontSize={'18'}
              m={8}
              p={4}
            >
              Apply Here!
            </Button>
          </Link>

          {/* <Search2Icon /> */}
          {/* <Menu>
                        <MenuButton
                            as={Button}
                            rounded={"full"}
                            variant={"link"}
                            cursor={"pointer"}
                            minW={0}
                        >
                            <Search2Icon />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Link 1</MenuItem>
                            <MenuItem>Link 2</MenuItem>
                            <MenuDivider />
                            <MenuItem>Link 3</MenuItem>
                        </MenuList>
                    </Menu> */}
        </Flex>
      </Flex>

      {/* {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        {Links.map((link, idx) => (
                            <NavLink key={idx}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null} */}
    </Box>
  );
}
