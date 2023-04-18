export default function SocialNavBar() {
  return (
    <Flex w="full" position={'fixed'} mt={20} zIndex={999}>
      <Spacer />
      <VStack
        as={'nav'}
        spacing={3}
        display={'flex'}
        roundedBottomLeft={'md'}
        roundedTopLeft={'md'}
        bg={'yokai.primary'}
        p={2}
      >
        {Links.map((link) => (
          <IconButton
            variant={'unstyled'}
            aria-label="Social"
            icon={<BsTwitter />}
            color={'white'}
            key={link}
          />
        ))}
      </VStack>
    </Flex>
  );
}
