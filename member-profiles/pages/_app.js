import '../styles/globals.css'
import {ChakraProvider}from '@chakra-ui/react'
import Head from 'next/head'
import MainNavigation from "../components/layout/MainNavigation.jsx";
import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import Footer from "../components/layout/Footer"

function MyApp({ Component, pageProps }) {

  const theme = extendTheme({
    styles: {
      global: (props) => ({
        body: {
          bg: mode("rgba(12,10,29,1.0)", "blue.200")(props),
          color: "gray.200"
        }
      })
    }
  });

  return(
    <ChakraProvider theme={theme}>
      <Head>
        <title>AdvocatesDAO</title>
        <link rel="shortcut icon" href="/assets/Icons/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNavigation />
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
