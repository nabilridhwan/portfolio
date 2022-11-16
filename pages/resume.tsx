import { motion, useScroll, useTransform } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import Container from "../components/Container";
import ContentSection from "../components/ContentSection";
import FadeInSection from "../components/FadeInSection";

// @ts-ignore
// import pdf from "../public/resume.pdf";

const About: NextPage = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 25, 200], [0, 15, 150]);
	const opacity = useTransform(scrollY, [0, 50, 200], [1, 0.3, 0]);
	return (
		<Container>
			<div className="flex items-center justify-center">
				<header className="mt-20 relative">
					<motion.div style={{ y }} className="absolute z-20">
						<h1>
							<span className="outline_text_transparent">My</span>
							<br />
							Resume
						</h1>
					</motion.div>

					<motion.div style={{ opacity }}>
						<Image
							className="absolute top-0 z-10"
							src={require("../public/nabil-color.png")}
							alt="Nabil"
							width={400}
							height={400}
							objectFit="scale-down"
						/>
					</motion.div>
				</header>
			</div>

			<FadeInSection>
				<ContentSection>
					<h2>Download my resume below!</h2>

					<iframe src={"resume.pdf"} />
				</ContentSection>
			</FadeInSection>
		</Container>
	);
};

export default About;
