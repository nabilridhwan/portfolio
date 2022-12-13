import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>Nabil Ridhwan</title>
			</Head>

			<div className="flex items-center justify-center w-full mt-10">
				<NavBar />
			</div>

			<AnimatePresence>
				<motion.div
					key={router.route}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: "easeIn" }}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>

			{/* <Footer /> */}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default MyApp;
