import type { Metadata } from 'next';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import '../styles/globals.css';
import Providers from './providers';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--font-plus-jakarta',
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://nabilridhwan.com'),
	title: {
		default: 'Nabil Ridhwan | Software Engineer in sunny-side Singapore!',
		template: '%s | Nabil Ridhwan',
	},
	description:
		'A software engineer in sunny-side Singapore. Undergraduate at Singapore Management University pursuing Bachelors in Science, Computer Science.',
	openGraph: {
		siteName: 'Nabil Ridhwan',
		title: 'Nabil Ridhwan | Software Engineer in sunny-side Singapore!',
		description:
			'A software engineer in sunny-side Singapore. Undergraduate at Singapore Management University pursuing Bachelors in Science, Computer Science.',
		url: 'https://nabilridhwan.com',
		type: 'website',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Nabil Ridhwan | Software Engineer in sunny-side Singapore!',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Nabil Ridhwan | Software Engineer in sunny-side Singapore!',
		description:
			'A software engineer in sunny-side Singapore. Undergraduate at Singapore Management University pursuing Bachelors in Science, Computer Science.',
		images: ['/og-image.jpg'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={plusJakarta.variable}>
			<body>
				<Providers>
					<div className="sticky top-4 z-999 flex items-center justify-center w-full mt-10">
						<NavigationBar />
					</div>
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
