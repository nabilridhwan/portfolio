'use client';

import { animate, motion, MotionValue, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { IoArrowForward, IoLogoGithub, IoLogoLinkedin, IoNewspaper } from 'react-icons/io5';
import useMeasure from 'react-use-measure';
import Container from '../components/Container';
import Figure from '../components/homepage/Figure';
import Testimonial from '../components/homepage/Testimonial';
import HeroSection from '../components/HeroSection';
import SkillSection from '../components/SkillSection';

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
			<HeroSection />

			<SkillSection xTranslation={xTranslation} skills={skills} ref={ref} />

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
