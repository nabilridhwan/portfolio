import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
