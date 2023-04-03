import type { AppProps } from 'next/app';
import Main from '@/components/layouts/main';
import Chakra from '@/components/chakra';
import { RecoilRoot } from 'recoil';

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Chakra cookies={pageProps.cookies}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </Chakra>
  </RecoilRoot>
);

export default App;
