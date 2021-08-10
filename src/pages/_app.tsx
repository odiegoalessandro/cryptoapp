import { ChakraProvider } from "@chakra-ui/react"
import GlobalStyles from "../styles/GlobalStyles"
import customTheme from '../themes/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp