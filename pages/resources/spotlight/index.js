import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Text,
  Textarea,
  Text as Textc,
  useDisclosure,
} from '@chakra-ui/react';

import { addNewSpotlight } from '../../../lib/context/hasura-call';

export default function spotlight() {
  const [verified, setVerified] = useState(false);
  const [rawKey, setRawKey] = useState('');
  const [name, setName] = useState('');
  const [picUrl, setPicUrl] = useState('');
  const [discord, setDiscord] = useState('');
  const [twitter, setTwitter] = useState('');
  const [role, setRole] = useState('');
  const [region, setRegion] = useState('');
  const [background, setBackground] = useState('');
  const [q1, setQ1] = useState('');
  const [fullArticle, setFullArticle] = useState('');
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function verifyKey(key) {
    const response = await fetch('/api/simpleVerify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key }),
    });

    const data = await response.json();

    if (response.ok) {
      setVerified(data.success);
    } else {
      setVerified(false);
    }
  }

  return verified ? (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color={'blackAlpha.900'}>
          <ModalHeader>Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>New Spotlight Added!</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex justify={'center'}>
        <Box
          m={5}
          p={5}
          w={'600px'}
          color={'blackAlpha.900'}
          borderWidth={1}
          borderColor="blackAlpha.900"
          bg={'gray.200'}
          borderRadius="md"
        >
          <Box mb={5}>
            <Textc fontSize="xl" fontWeight="bold">
              Spotlight Update Form{' '}
              {!verified && (
                <Text>
                  You are viewing this page <i>Unverified</i>. No submission
                  will be accepted
                </Text>
              )}
            </Textc>
          </Box>
          <Box>
            <FormControl mb={3} isRequired>
              <FormLabel>Name:</FormLabel>
              <Input
                bg={'gray.300'}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>Discord:</FormLabel>
              <Input
                bg={'gray.300'}
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
              />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>Twitter Link:</FormLabel>
              <Input
                bg={'gray.300'}
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>Role(s):</FormLabel>
              <Input
                bg={'gray.300'}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>Region:</FormLabel>
              <Input
                bg={'gray.300'}
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>
                Display Image URL (twitter, discord, etc - Can also upload one
                to github or something similar and use that url):
              </FormLabel>
              <Input
                bg={'gray.300'}
                value={picUrl}
                onChange={(e) => setPicUrl(e.target.value)}
              />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>Background:</FormLabel>
              <Textarea
                bg={'gray.300'}
                value={background}
                onChange={(e) => setBackground(e.target.value)}
              />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>What Inspired you to select advocate role?:</FormLabel>
              <Textarea
                bg={'gray.300'}
                value={q1}
                onChange={(e) => setQ1(e.target.value)}
              />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>Link to full article (twitter,etc):</FormLabel>
              <Input
                bg={'gray.300'}
                value={fullArticle}
                onChange={(e) => setFullArticle(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box mt={5}>
            <Button
              colorScheme="blue"
              disabled={isSubmittingForm}
              onClick={() => {
                setIsSubmittingForm(true);
                addNewSpotlight(rawKey, {
                  details: {
                    name: name,
                    discord: discord,
                    twitter: twitter,
                    picUrl: picUrl,
                    role: role,
                    region: region,
                    background: background,
                    q1: q1,
                    fullArticle: fullArticle,
                  },
                }).then((res) => {
                  if (res.success) {
                    console.log('Successful user added');
                    onOpen();
                  } else {
                    console.log('failed to add');
                  }
                });
              }}
            >
              Add New Spotlight
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  ) : (
    <Flex justify={'center'} p={20}>
      <Box maxW={'500px'}>
        <Heading>Protected Page</Heading>
        <FormControl>
          <FormLabel>Please enter the access code to view this page:</FormLabel>
          <Input
            m={3}
            type="password"
            value={rawKey}
            isRequired
            onChange={(e) => setRawKey(e.target.value)}
          />
        </FormControl>
        <Button
          onClick={() => {
            verifyKey(rawKey);
          }}
          colorScheme="blue"
          type="submit"
        >
          Verify
        </Button>
      </Box>
    </Flex>
  );
}
