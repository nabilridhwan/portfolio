'use client';

import { animate, motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { IoArrowForward, IoLogoGithub, IoLogoLinkedin, IoNewspaper } from 'react-icons/io5';
import useMeasure from 'react-use-measure';
import Container from '../components/Container';
import Figure from '../components/homepage/Figure';
import Testimonial from '../components/homepage/Testimonial';

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
		if (!width) return;

		xTranslation.set(0);
		const controls = animate(xTranslation, -width, {
			duration: 20,
			repeat: Infinity,
			repeatType: 'loop',
			ease: 'linear',
		});

		return () => controls.stop();
	}, [width, xTranslation]);

	return (
		<Container>
			<motion.div id="hero-section" className="relative mt-10">
				<div className="relative min-h-[760px] overflow-hidden rounded-[18px] md:min-h-[560px]">
					<div className="absolute inset-0 z-0 bg-[linear-gradient(140.08deg,_#3239D1_33.55%,_#E868B7_79.57%)]" aria-hidden="true" />

					<section className="relative z-20 flex max-w-[520px] flex-col px-7 pb-[330px] pt-10 sm:px-10 md:w-[49%] md:px-[62px] md:pb-[54px] md:pt-[62px]">
						<h1 className="hero-title relative w-fit font-extrabold">
							Nabil
							<br />
							Ridhwan
							<Image src="/name-swish.svg" alt="" width={513} height={43} className="absolute -bottom-6 left-0 -z-10 h-auto w-[104%]" />
						</h1>

						<p className="mt-12 max-w-[410px] text-[15px] leading-[1.58] text-white/95 md:text-base">
							I’m a Computer Science undergraduate at SMU, building simple, useful digital products with a little personality.
						</p>

						<Link
							href="mailto:nabridhwan+p@gmail.com"
							className="group my-8 flex w-fit items-center gap-3 text-sm font-bold underline decoration-1 underline-offset-2 transition-transform hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-[15px]"
						>
							<IoArrowForward size={24} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-1" />
							<span>Have an idea worth building? Let’s bring it to life.</span>
						</Link>

						<div className="flex gap-5 text-2xl text-white">
							<Link href="https://github.nabilridhwan.com" aria-label="GitHub" className="transition-transform hover:-translate-y-1">
								<IoLogoGithub />
							</Link>

							<Link
								href="https://www.linkedin.com/in/nabilridhwan"
								aria-label="LinkedIn"
								className="transition-transform hover:-translate-y-1"
							>
								<IoLogoLinkedin />
							</Link>

							<Link href="https://blog.nabilridhwan.com" aria-label="Blog" className="transition-transform hover:-translate-y-1">
								<IoNewspaper />
							</Link>
						</div>
					</section>

					<motion.div
						initial={{ opacity: 0, scale: 0.94, y: 24 }}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ type: 'tween', duration: 0.55, ease: 'easeOut' }}
						className="pointer-events-none absolute -bottom-1 -right-[12%] z-10 w-[118%] sm:-right-[4%] sm:w-[86%] md:-right-[4%] md:w-[62%] lg:-right-[2%] lg:w-[59%]"
					>
						<Image
							src="/hero-image.png"
							alt="Portrait of Nabil Ridhwan"
							width={858}
							height={913}
							priority
							sizes="(max-width: 640px) 118vw, (max-width: 768px) 86vw, 62vw"
							className="h-auto w-full"
						/>
					</motion.div>
				</div>
			</motion.div>

			<section className="relative overflow-clip">
				<div className="absolute bg-gradient-to-r from-primarydark to-transparent h-full w-[150px] z-[10]" />

				<div className="absolute bg-gradient-to-l from-primarydark to-transparent right-0 h-full w-[150px] z-[10]" />

				<motion.div style={{ x: xTranslation }} className="flex w-max items-center py-6">
					<div ref={ref} className="flex shrink-0 items-center gap-5 pr-5">
						{skills.map((skill, index) => (
							<span key={`${skill}-${index}`} className="whitespace-nowrap font-bold">
								{skill.toUpperCase()}
							</span>
						))}
					</div>

					<div aria-hidden="true" className="flex shrink-0 items-center gap-5 pr-5">
						{skills.map((skill, index) => (
							<span key={`${skill}-${index}`} className="whitespace-nowrap font-bold">
								{skill.toUpperCase()}
							</span>
						))}
					</div>
				</motion.div>
			</section>

			<div className="lg:mx-[70px]">
				<div className="grid md:grid-cols-4 my-10 gap-10">
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						transition={{ type: 'tween', ease: 'easeOut' }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<Figure number={`${new Date().getFullYear() - 2021}+`} caption="years building and shipping real-world projects" />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						transition={{ type: 'tween', ease: 'easeOut' }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<Figure number="6+" caption="clients I've worked with to turn ideas into real products" />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						transition={{ type: 'tween', ease: 'easeOut' }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<Figure number={`${new Date().getFullYear() - 2019}+`} caption="years of programming experience" />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						transition={{ type: 'tween', ease: 'easeOut' }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<Figure number="3+" caption="funny jokes made - results may vary" />
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
