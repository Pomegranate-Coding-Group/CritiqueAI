import type { AppProps } from 'next/app'
import { globalStyles, darkTheme } from '@stitches-config';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <ThemeProvider
    disableTransitionOnChange
    attribute="class"
    value={{ light: 'light-theme'}}
  >
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
