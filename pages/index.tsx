import { useScroll, useSpring, useTransform } from "framer-motion";
import type { NextPage } from "next";
import { useRef } from "react";
import Container from "../components/Container";
import FadeInSection from "../components/FadeInSection";
import AboutMe from "../components/homepage/AboutMe";
import BlogSection from "../components/homepage/BlogSection";
import Header from "../components/homepage/Header";
import Project from "../components/Project";

import musicn from "../public/musicn.png";
import similarify from "../public/similarify.png";
import similarifyLogo from "../public/similarify_logo.png";
import troof from "../public/troof_promo.png";

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

	const y = useTransform(scrollYProgressSpring, [0, 0.85], ["100px", "5px"]);

	return (
		<Container>
			<div className="mt-32 mb-14">
				<FadeInSection>
					<Header />
				</FadeInSection>
			</div>

			<FadeInSection>
				<div className="my-1">
					<h2 className="section-title text-2xl">
						Latest Blog Posts
					</h2>

					{/* <p className="muted">
						Hi, I&apos;m Nabil and this is my blog,{" "}
						<a
							href="https://blog.nabilridhwan.com"
							className="underline text-white"
						>
							Nabil&apos;s Developer Adventures!
						</a>
						. I share the challenges and valuable lessons I learn
						while creating my hobbies and solving code. Follow along
						for an exciting journey into the world of web
						development.{" "}
					</p> */}
				</div>
				<BlogSection />
			</FadeInSection>

			{/* About me section */}

			<div className="my-48">
				<AboutMe />
			</div>

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

			<h2 className="section-title text-center overflow-hidden">
				Projects
			</h2>

			<p className="text-center muted text-lg">
				(that I&apos;m proud of!~~)
			</p>

			<div className="lg:grid lg:grid-cols-3 place-items-center gap-3">
				<Project
					img_src={troof}
					tags={["Next.js"]}
					title="Troof!"
					titleClassName="font-Playfair text-5xl"
					links={{
						page: "https://troof.nabilridhwan.com",
					}}
					description="Experience the ultimate social truth or dare game with Troof! - see, chat, and react together with your friends!
							"
				/>

				<Project
					img_src={similarify}
					logo={similarifyLogo}
					tags={["React"]}
					title="Similarify"
					links={{
						page: "https://similarify.netlify.com",
					}}
					description="Expand your musical horizons with the Similarify - find new tunes based on the songs you already love! (Powered by Spotify)"
				/>

				<Project
					img_src={musicn}
					tags={["Next.js"]}
					title="Musicn"
					links={{
						page: "https://musicn.vercel.app",
					}}
					description="Get a glimpse into the musical tastes of your friends and discover new tracks with the Next.js-powered Spotify Social app!"
				/>
			</div>
		</Container>
	);
};

export default Home;
