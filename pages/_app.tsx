import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {AnimatePresence, motion} from "framer-motion";
import type {AppProps} from "next/app";
import Head from "next/head";
import {useRouter} from "next/router";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();

    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <title>Nabil Ridhwan | Software Engineer in sunny-side Singapore!</title>

                <meta name="description"
                      content="A software engineer in sunny-side Singapore. Undergraduate at Singapore Management University pursuing Bachelors in Science, Computer Science."/>

                <meta property="og:title" content="Nabil Ridhwan | Software Engineer in sunny-side Singapore!"/>
                <meta property="og:description"
                      content="A software engineer in sunny-side Singapore. Undergraduate at Singapore Management University pursuing Bachelors in Science, Computer Science."/>
                <meta property="og:image" content="/og-image.png"/>
                <meta property="og:url" content="https://nabilridhwan.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta property="og:image:alt" content="Nabil Ridhwan | Software Engineer in sunny-side Singapore!"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@yourtwitterhandle"/>
                <meta name="twitter:title" content="Nabil Ridhwan | Software Engineer in sunny-side Singapore!"/>
                <meta name="twitter:description"
                      content="A software engineer in sunny-side Singapore. Undergraduate at Singapore Management University pursuing Bachelors in Science, Computer Science."/>
                <meta name="twitter:image" content="/og-image.png"/>
            </Head>

            <div className="flex items-center justify-center w-full mt-10">
                <NavigationBar/>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={router.route}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3, ease: "easeInOut"}}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>

            <Footer/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default MyApp;
