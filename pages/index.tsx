import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
	IoBriefcaseOutline,
	IoLogoGithub,
	IoLogoInstagram,
} from "react-icons/io5";
import BlogItemComponent from "../components/BlogItem";
import Container from "../components/Container";
import fetchBlogItems from "../services/fetchBlogItems.service";

const Home: NextPage = () => {
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
		<>
			<Container>
				<motion.div
					id="hero-section"
					className="flex flex-col gap-10 mt-28 space-y-3"
				>
					<div className="w-[60px]">
						<Image
							src={require("../public/profile.png")}
							className="absolute"
							objectFit="cover"
							alt="Nabil"
						/>
					</div>

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
							transition={{ delay: 0.4 }}
						>
							Problem Solver,{" "}
						</motion.span>

						<motion.span
							className="font-header"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6 }}
						>
							Programmer{" "}
						</motion.span>

						<motion.span
							className="font-header"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							and Designer.
						</motion.span>
					</motion.h1>

					<p className="w-3/3 md:w-5/6 text-lg leading-relaxed muted">
						I&apos;m Nabil, a software developer based in Singapore.
						I&apos;m a student from Singapore Polytechnic, and I
						love creating software!
					</p>

					<div className="flex gap-4 text-3xl text-muted">
						<IoLogoGithub className="text-muted" />
						<IoLogoInstagram />
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="h-[350px] z-30 mt-32 flex items-center"
				>
					{/* Images */}
					<div className="gap-10 lg:gap-14 absolute left-0 flex justify-center w-full overflow-hidden">
						<div className="relative w-60 left-0 rotate-3 shadow-2xl flex-none">
							<Image
								src={require("../public/homepage-pics/1.png")}
								className="absolute"
								objectFit="cover"
								alt="Nabil"
							/>
						</div>

						<div className="relative w-60 -rotate-3 shadow-2xl flex-none">
							<Image
								src={require("../public/homepage-pics/2.png")}
								className="absolute"
								objectFit="cover"
								alt="Nabil"
							/>
						</div>

						<div className="relative w-60 rotate-3 shadow-2xl flex-none">
							<Image
								src={require("../public/homepage-pics/3.png")}
								className="absolute"
								objectFit="cover"
								alt="Nabil"
							/>
						</div>

						<div className="w-60 relative -rotate-3 shadow-2xl flex-none">
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
					<div className="space-y-6">
						{data &&
							data.map((item) => (
								<BlogItemComponent
									key={item.slug}
									coverImage=""
									dateAdded={item.dateAdded}
									slug={item.slug}
									title={item.title}
									url={item.url}
								/>
							))}
					</div>

					<div className="space-y-5">
						{/* <div className="rounded-3xl border border-muted/30 p-8">
							<div className="flex items-center gap-3 text-muted">
								<IoHeadset className="text-muted" />
								<p className="text-muted">
									I&apos;m listening to
								</p>
							</div>
						</div> */}

						<div className="rounded-3xl border border-muted/30 p-8">
							<div className="flex items-center gap-3 text-muted mb-3">
								<IoBriefcaseOutline className="text-muted" />
								<p className="text-muted">
									Experience / Work / Education
								</p>
							</div>

							<div className="space-y-3">
								{/* Experience Column */}
								<div className="flex gap-2 items-center w-full">
									<div className="w-10 rounded-full">
										<Image
											src={require("../public/sp.jpg")}
											alt="Nabil"
											className="absolute rounded-full"
											objectFit="cover"
										/>
									</div>

									<div className="flex-1">
										<p className="text-sm">
											Singapore Polytechnic
										</p>
										<p className="float-left text-xs muted">
											Diploma in Information Technology
										</p>

										<p className="float-right text-xs muted">
											2021-Present
										</p>
									</div>
								</div>

								<div className="flex gap-2 items-center w-full">
									<div className="w-10">
										<Image
											src={require("../public/sp.jpg")}
											className="absolute rounded-full"
											alt="Nabil"
										/>
									</div>

									<div className="flex-1">
										<p className="text-sm">
											Singapore Polytechnic
										</p>
										<p className="float-left text-xs muted">
											Polytechnic Foundation Programme
										</p>

										<p className="float-right text-xs muted">
											2020-2021
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Home;
