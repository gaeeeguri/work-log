import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';
import theme from '@/lib/theme';
import React from 'react';

export interface ChakraProps {
  cookies?: string;
  children: React.ReactNode;
}

const Chakra = ({ cookies, children }: ChakraProps) => {
  const colorModeManager =
    typeof cookies == 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

// TODO: SSR

export default Chakra;
