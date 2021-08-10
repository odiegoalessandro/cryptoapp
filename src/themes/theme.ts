import { extendTheme, Theme } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";

const customTheme = {
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    mono: 'Roboto, system-ui, sans-serif'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    bold: 700
  }
}

export default extendTheme(customTheme)