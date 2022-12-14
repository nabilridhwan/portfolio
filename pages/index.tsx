import { useQuery } from "@tanstack/react-query";
import { motion, useScroll } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoBriefcaseOutline, IoLogoGithub } from "react-icons/io5";
import BlogItemComponent from "../components/BlogItem";
import Container from "../components/Container";
import Experience from "../components/homepage/Experience";
import MusicPlayerSection from "../components/homepage/MusicPlayer";
import fetchBlogItems from "../services/fetchBlogItems.service";

const Home: NextPage = () => {
	const topDiv = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: topDiv,
	});

	const [error, setError] = useState(false);

	const { data, isLoading, status } = useQuery(
		["getBlogItems"],
		async () => await fetchBlogItems(10),
		{
			refetchOnMount: true,
			refetchOnWindowFocus: true,
			staleTime: 1000 * 15,
		}
	);

	useEffect(() => {
		if (status === "error") {
			setError(true);
		}
	}, [status]);

	return (
		<div ref={topDiv}>
			<Container>
				<motion.div
					id="hero-section"
					className="flex flex-col gap-10 mt-28 space-y-3"
				>
					<motion.div
						animate={{
							scale: [0.5, 1.2, 1],
						}}
						className="w-[60px]"
					>
						<Image
							src={require("../public/profile.png")}
							className="absolute"
							objectFit="cover"
							alt="Nabil"
						/>
					</motion.div>

					<motion.h1
						transition={{
							delayChildren: 0.5,
						}}
						className="font-extrabold text-5xl lg:text-6xl w-4/4"
					>
						<motion.span
							className="font-header"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
						>
							Web Developer,{" "}
						</motion.span>

						<motion.span
							className="font-header"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							Problem Solver,{" "}
						</motion.span>

						<motion.span
							className="font-header"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
						>
							Programmer{" "}
						</motion.span>

						<motion.span
							className="font-header"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6 }}
						>
							and Designer.
						</motion.span>
					</motion.h1>

					<motion.p className="w-3/3 md:w-5/6 text-lg leading-relaxed muted">
						{"I'm Nabil, a software developer based in Singapore. I'm a student from Singapore Polytechnic, and I love creating software!"
							.split(" ")
							.map((word, index) => {
								return (
									<motion.span
										key={index}
										initial={{
											y: 10,
											opacity: 0,
										}}
										animate={{
											y: 0,
											opacity: 1,
										}}
										className="text-muted inline-block mr-1"
										transition={{
											opacity: 0.6,
											delay: 1 + index * 0.05,
										}}
									>
										<>{word} </>
									</motion.span>
								);
							})}
					</motion.p>

					<div className="flex gap-4 text-3xl text-muted">
						<Link href="https://github.nabilridhwan.com">
							<IoLogoGithub className="cursor-pointer" />
						</Link>

						{/* <IoLogoInstagram className="text-muted" /> */}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="h-[350px] z-30 my-10 flex items-center"
				>
					{/* Images */}
					<div className="snap-x gap-10 lg:gap-14 absolute left-0 flex justify-center w-full overflow-x-scroll md:overflow-visible">
						<div className="snap-center relative w-60 left-0 rotate-3 shadow-2xl flex-none transition-all ease-out hover:scale-110">
							<Image
								src={require("../public/homepage-pics/1.png")}
								className="absolute"
								objectFit="cover"
								alt="Nabil"
							/>
						</div>

						<div className=" snap-center relative w-60 -rotate-3 shadow-2xl flex-none transition-all ease-out hover:scale-110">
							<Image
								src={require("../public/homepage-pics/2.png")}
								className="absolute"
								objectFit="cover"
								alt="Nabil"
							/>
						</div>

						<div className="relative w-60 rotate-3 shadow-2xl flex-none transition-all ease-out hover:scale-110">
							<Image
								src={require("../public/homepage-pics/3.png")}
								className="absolute"
								objectFit="cover"
								alt="Nabil"
							/>
						</div>

						<div className="w-60 relative -rotate-3 shadow-2xl flex-none transition-all ease-out hover:scale-110">
							<Image
								src={require("../public/homepage-pics/4.png")}
								className="absolute"
								objectFit="cover"
								alt="Nabil"
							/>
						</div>
					</div>
				</motion.div>

				<div className="md:grid grid-cols-2 gap-20 my-14">
					<div className="space-y-10">
						{data &&
							data.map((item) => (
								<BlogItemComponent
									key={item.slug}
									brief={item.brief}
									coverImage=""
									dateAdded={item.dateAdded}
									slug={item.slug}
									title={item.title}
									url={item.url}
								/>
							))}
					</div>

					<div className="space-y-5">
						<div className="rounded-3xl border border-muted/30 p-8">
							<div className="flex items-center gap-3 text-muted mb-3">
								<IoBriefcaseOutline className="text-muted" />
								<p className="text-muted">
									Experience / Work / Education
								</p>
							</div>

							<div className="space-y-5">
								{/* Experience Column */}

								<Experience
									image={require("../public/sp.jpg")}
									institution="Singapore Polytechnic"
									role="Diploma in Information Technology"
									start="2021"
									end="Present"
								/>

								<Experience
									image={require("../public/sp.jpg")}
									institution="Singapore Polytechnic"
									role="Polytechnic Foundation Programme"
									start="2020"
									end="2021"
								/>

								<Experience
									image={require("../public/profile.png")}
									institution="Freelance Developer"
									role="Personal"
									start="2019"
									end="2021"
								/>
							</div>
						</div>

						<MusicPlayerSection />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Home;
