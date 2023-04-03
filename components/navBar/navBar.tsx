import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import ThemeToggleButton from '@/components/navBar/themeToggleButton';

const NavBar = () => (
  <Box
    position="fixed"
    as="nav"
    w="100%"
    style={{ backdropFilter: 'blur(10px)' }}
    zIndex={1}
    bg={useColorModeValue('#ffffff40', '#20202380')}
  >
    <Container
      display="flex"
      p={2}
      maxW="container.md"
      flexWrap="wrap"
      textAlign="center"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing="tighter">
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            ml={3}
          >
            근무일지 생성기
          </Text>
        </Heading>
      </Flex>
      <Box display="flex" alignContent="right" mr={3}>
        <ThemeToggleButton />
      </Box>
    </Container>
  </Box>
);

export default NavBar;
