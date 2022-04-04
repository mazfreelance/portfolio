import { Box, ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import App, { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"
import AppLayout from "../components/layouts/app"
import * as gtag from '../library/google-analytics'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <ChakraProvider>
            <AppLayout>
                <AnimatePresence
                    exitBeforeEnter
                    initial={ false }
                    onExitComplete={ () => window.scrollTo(0, 0) }
                >
                    <Box key={ router.route }>
                        <Component { ...pageProps } />
                    </Box>
                </AnimatePresence>
            </AppLayout>
        </ChakraProvider>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
}

export default MyApp