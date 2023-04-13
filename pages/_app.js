import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import MainNavigation from '../components/layout/MainNavigation.jsx';
import theme from '../styles/theme';
import Footer from '../components/layout/Footer';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>AdvocatesDAO</title>
        <link rel="shortcut icon" href="/assets/Icons/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNavigation />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
