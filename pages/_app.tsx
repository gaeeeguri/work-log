import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Main from '@/components/layouts/main';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Main>
      <Component {...pageProps} />
    </Main>
  </ChakraProvider>
);

export default App;
