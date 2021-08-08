import { ChakraProvider } from "@chakra-ui/react"
import GlobalStyles from "../styles/GlobalStyles"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp