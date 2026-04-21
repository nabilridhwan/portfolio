import type { Metadata } from "next";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import Providers from "./providers";
import "../styles/globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://nabilridhwan.com"),
	title: {
		default: "Nabil Ridhwan | Software Engineer in sunny-side Singapore!",
		template: "%s | Nabil Ridhwan",
	},
	description:
		"A software engineer in sunny-side Singapore. Undergraduate at Singapore Management University pursuing Bachelors in Science, Computer Science.",
	openGraph: {
		title: "Nabil Ridhwan | Software Engineer in sunny-side Singapore!",
		description:
			"A software engineer in sunny-side Singapore. Undergraduate at Singapore Management University pursuing Bachelors in Science, Computer Science.",
		url: "https://nabilridhwan.com",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Nabil Ridhwan | Software Engineer in sunny-side Singapore!",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Nabil Ridhwan | Software Engineer in sunny-side Singapore!",
		description:
			"A software engineer in sunny-side Singapore. Undergraduate at Singapore Management University pursuing Bachelors in Science, Computer Science.",
		images: ["/og-image.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<div className="flex items-center justify-center w-full mt-10">
						<NavigationBar />
					</div>
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
