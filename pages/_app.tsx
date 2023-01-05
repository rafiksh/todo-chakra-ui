import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "../styles/globals.css";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="system" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
