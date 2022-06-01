import { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import { ChakraProvider, ScaleFade } from "@chakra-ui/react"
import "@cubing/icons"

import { Layout } from "../components/Layout"

import { theme } from "../styles/theme"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <ScaleFade key={router.route} initialScale={0.9} in>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ScaleFade>
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp
