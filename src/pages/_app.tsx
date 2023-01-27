import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
