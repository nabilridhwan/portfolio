'use client';

import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import {
	IoArrowForward,
	IoLogoGithub,
	IoLogoLinkedin,
	IoNewspaper,
} from "react-icons/io5";
import useMeasure from "react-use-measure";
import Container from "../components/Container";
import Figure from "../components/homepage/Figure";
import MusicPlayerSection from "../components/homepage/MusicPlayer";
import Swish from "../components/homepage/Swish";
import Testimonial from "../components/homepage/Testimonial";

interface HomePageProps {
	skills: string[];
	testimonials: Array<{
		_id: string;
		name: string;
		role: string;
		testimonial: string;
		image: string;
	}>;
}

export default function HomePage({ skills, testimonials }: HomePageProps) {
	const [ref, { width }] = useMeasure();
	const xTranslation = useMotionValue(0);

	useEffect(() => {
		const finalPosition = -width / 2 - 20;
		const controls = animate(xTranslation, [0, finalPosition], {
			duration: 10,
			repeat: Infinity,
			repeatType: "loop",
			ease: "linear",
		});

		return controls.stop;
	}, [width, xTranslation]);

	const age = useMemo(() => {
		const birthDate = new Date("2003-09-08");
		const currentDate = new Date();
		const diff = currentDate.getTime() - birthDate.getTime();
		return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
	}, []);

	return (
		<Container>
			<motion.div
				id="hero-section"
				className="relative mt-[40px] bg-primary rounded-[20px] grid md:grid-cols-2 md:grid-rows-1 grid-rows-0"
			>
				<section className="p-[60px] flex flex-col gap-4">
					<h1 className="relative font-extrabold text-[50px] lg:text-[90px] leading-[40px] lg:leading-[70px] drop-shadow-[0_0.2px_1.2px_rgba(0,0,0,0.8)] text-shadow-[0_0px_0px_rgba(0,0,0,1)] text-shadow-black">
						Nabil
						<br />
						Ridhwan
						<span className="absolute -bottom-[20px] md:-bottom-[25px] -z-10 left-0 w-[230px] md:w-[400px]">
							<Swish />
						</span>
					</h1>

					<p className="leading-relaxed mt-8">
						I enjoy building products that are simple, useful, and a
						little fun. Incoming {age}-year-old Computer Science
						undergraduate at SMU
					</p>

					<section className="my-5">
						<Link href="mailto:nabridhwan+p@gmail.com">
							<span className="flex flex-row items-center gap-2 cursor-pointer">
								<IoArrowForward size={22} />
								<p className="font-bold">
									If you&apos;ve got an idea, I&apos;d love to
									help bring it to life
								</p>
							</span>
						</Link>
					</section>

					<div className="flex gap-4 text-2xl text-muted">
						<Link href="https://github.nabilridhwan.com">
							<IoLogoGithub className="cursor-pointer" />
						</Link>

						<Link href="https://www.linkedin.com/in/nabilridhwan">
							<IoLogoLinkedin className="cursor-pointer" />
						</Link>

						<Link href="https://blog.nabilridhwan.com">
							<IoNewspaper className="cursor-pointer" />
						</Link>
					</div>
				</section>

				<section className="relative -z-[0]">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ type: "tween", ease: "easeOut" }}
						className="absolute bottom-0 -right-[14px]"
					>
						<Image
							src="/hero-image.png"
							alt="Portrait of Nabil Ridhwan"
							width={420}
							height={420}
							priority
						/>
					</motion.div>
				</section>

				<MusicPlayerSection />
			</motion.div>

			<section className="relative overflow-clip">
				<div className="absolute bg-gradient-to-r from-primarydark to-transparent h-full w-[150px] z-[10]" />

				<div className="absolute bg-gradient-to-l from-primarydark to-transparent right-0 h-full w-[150px] z-[10]" />

				<motion.div
					style={{ x: xTranslation }}
					className="py-6 flex gap-[20px] items-center"
					ref={ref}
				>
					{[...skills, ...skills].map((skill, index) => (
						<span
							key={`${skill}-${index}`}
							className="font-bold whitespace-nowrap"
						>
							{skill.toUpperCase()}
						</span>
					))}
				</motion.div>
			</section>

			<div className="lg:mx-[70px]">
				<div className="grid md:grid-cols-4 my-10 gap-10">
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						transition={{ type: "tween", ease: "easeOut" }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<Figure
							number={`${new Date().getFullYear() - 2021}+`}
							caption="years building and shipping real-world projects"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						transition={{ type: "tween", ease: "easeOut" }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<Figure
							number="6+"
							caption="clients I've worked with to turn ideas into real products"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						transition={{ type: "tween", ease: "easeOut" }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<Figure
							number={`${new Date().getFullYear() - 2019}+`}
							caption="years of programming experience"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						transition={{ type: "tween", ease: "easeOut" }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<Figure
							number="3+"
							caption="funny jokes made - results may vary"
						/>
					</motion.div>
				</div>

				<div className="grid md:grid-cols-2 my-20 gap-8">
					{testimonials.map((testimonial) => (
						<Testimonial
							key={testimonial._id}
							name={testimonial.name}
							position={testimonial.role}
							testimonial={testimonial.testimonial}
							image={testimonial.image}
						/>
					))}
				</div>
			</div>
		</Container>
	);
}
