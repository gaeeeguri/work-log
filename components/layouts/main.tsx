import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';

export interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => (
  <Box as="main" pb={8}>
    <Head>
      <meta name="viewport" content="width=device-width initial-scale=1" />
      <meta name="description" content="work log generator" />
      <meta name="author" content="Seongjin Park" />
    </Head>

    <Container maxW="container.md" pt={14}>
      {children}
    </Container>
  </Box>
);

export default Main;
