import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      // sets a custom bg color for dark mode only
      bg: mode(
        // light mode value retrieved from theme
        props.theme.semanticTokens.colors['chakra-body-bg']._light,
        // your custom value for dark mode
        '#FF0000',
      )(props),
    },
  }),
};

const theme = extendTheme({ config, styles })

export default theme