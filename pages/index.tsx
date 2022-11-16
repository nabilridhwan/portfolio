import { useScroll, useSpring, useTransform } from "framer-motion";
import type { NextPage } from "next";
import { useRef } from "react";
import Container from "../components/Container";
import FadeInSection from "../components/FadeInSection";
import FullHeightSection from "../components/FullHeightSection";
import AboutMe from "../components/homepage/AboutMe";
import BlogSection from "../components/homepage/BlogSection";
import Header from "../components/homepage/Header";
import Project from "../components/Project";

import musicn from "../public/musicn.png";
import similarify from "../public/similarify.png";

const Home: NextPage = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end end"],
	});

	const scrollYProgressSpring = useSpring(scrollYProgress, {
		stiffness: 400,
		damping: 100,
	});

	const y = useTransform(scrollYProgressSpring, [0, 0.85], ["100px", "0px"]);

	return (
		<Container>
			<div className="my-36">
				<FadeInSection>
					<Header />
				</FadeInSection>
			</div>

			<FadeInSection>
				<div className="my-5">
					<h2 className="section-title">Blog</h2>

					<p className="muted">
						Read my blog:{" "}
						<a
							href="https://blog.nabilridhwan.com"
							className="underline text-white"
						>
							Nabil&apos;s Developer Adventures
						</a>
					</p>
				</div>
				<BlogSection />
			</FadeInSection>

			{/* About me section */}
			<FullHeightSection>
				<FadeInSection>
					<AboutMe />
				</FadeInSection>
			</FullHeightSection>

			{/* Skills section */}
			{/* <FullHeightSection>
				<FadeInSection>
					<h2>Skills</h2>

					<div className="skills">
						<div className="skill bg-red-500 grid grid-cols-3 items-center justify-start gap-2">
							<div className="">
								<p>Javascript</p>
							</div>

							<div className="col-span-2">
								<Progress progress={100} />
							</div>
						</div>

						<div className="skill bg-red-500 grid grid-cols-3 items-center justify-start gap-2">
							<div className="">
								<p>Docker</p>
							</div>

							<div className="col-span-2">
								<Progress progress={80} />
							</div>
						</div>
					</div>
				</FadeInSection>
			</FullHeightSection> */}

			<FullHeightSection ref={ref}>
				<FadeInSection>
					{/* <motion.h2
						style={{
							letterSpacing: y,
							overflow: "hidden",
							textTransform: "uppercase",
						}}
						className="section-title text-center"
					>
						Projects
					</motion.h2> */}

					<Project
						img_src={similarify}
						tags={["React"]}
						title="Similarify"
						links={{
							page: "https://similarify.netlify.com",
						}}
						description="A fully client-side web application to allow Spotify users to discover new songs that they already like!"
					/>

					<Project
						img_src={musicn}
						tags={["Next.js"]}
						title="Musicn"
						links={{
							page: "https://musicn.vercel.app",
						}}
						description="A Next.js application rebuild of Musicn, An application to discover other users' music profile, what they're listening to, their top songs and more!"
					/>
				</FadeInSection>
			</FullHeightSection>
		</Container>
	);
};

export default Home;
