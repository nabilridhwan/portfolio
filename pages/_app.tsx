import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
