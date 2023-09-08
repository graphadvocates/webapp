import "../styles/globals.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";
import MainNavigation from "../components/layout/MainNavigation.jsx";
import theme from "../styles/theme";
import Footer from "../components/layout/Footer";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>AdvocatesDAO</title>
				<link rel="shortcut icon" href="/assets/Icons/favicon.png" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-8X502DPTRG"
				></Script>

				<Script
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZM2S7SL5CD');
            `,
					}}
				></Script>
			</Head>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<MainNavigation />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	);
}

export default MyApp;
