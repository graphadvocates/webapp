import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
	initialColorMode: "light",
	useSystemColorMode: false,

	styles: {
		global: (props) => ({
			body: {
				// bg: "rgba(12,10,29,1.0)",
				// bgImage: "/assets/Backgrounds/bg-hero.jpg",
				// bgRepeat: "repeat-y",
				bgImage: "/assets/Backgrounds/bg-hero.jpg",
				bgSize: "cover",
				bgAttachment: "fixed",
				bgPos: "50% 100%",
				pos: "relative",
				bgRepeat: "no-repeat",
				color: "gray.200",
				font: "Montserrat",
			},
		}),
	},

	shadows: {
		purple: "0 0 0 5px rgba(159, 122, 234, 0.6)",
	},

	textStyles: {
		h1: {
			fontSize: ["48px", "72px"],
			fontWeight: "bold",
			lineHeight: "100%",
			letterSpacing: "-2%",
		},
		h2: {
			fontSize: ["36px", "48px"],
			fontWeight: "900",
			lineHeight: "100%",
			letterSpacing: "-1%",
		},
		h3: {
			fontSize: ["10px", "24px", "32px"],
			fontWeight: "semibold",
			lineHeight: "100%",
			letterSpacing: "0%",
		},
	},

	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Raleway', sans-serif`,
	},
});

export default theme;
