import { ColorModeScript, extendTheme, ThemeConfig } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({config})

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument