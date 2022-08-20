import { NextPage } from 'next';
import Image from 'next/image';
import Container from '../components/Container';
import ContentSection from '../components/ContentSection';
import FadeInSection from '../components/FadeInSection';

const About: NextPage = () => {
	return (
		<Container>
			<div className="flex items-center justify-center">
				<header className="mt-20 relative">
					<div className="absolute z-20">
						<h1>
							<span className="outline_text_transparent">
								About
							</span>
							<br />
							Me
						</h1>
					</div>

					<Image
						className="absolute top-0 z-10"
						src={require('../public/nabil-color.png')}
						alt="Nabil"
						width={400}
						height={400}
						objectFit="scale-down"
					/>
				</header>
			</div>

			<FadeInSection>
				<ContentSection>
					<h2>The Beginning</h2>
					<p>
						I dived into the world of web development around in
						2018, starting with HTML and all the way to creating
						full stack web applications using the MERN stack
						(MongoDB, Express, React and Node.JS) Before 2018, I was
						still finding my place in the programming world, trying
						different languages and getting excited when I printed
						“Hello, World!” in Java! I love creating my own projects
						because I can share them with the world, and I can be
						proud of them.
					</p>
				</ContentSection>
			</FadeInSection>

			<FadeInSection>
				<ContentSection>
					<h2>The Present</h2>
					<p>
						I am currently a student from Singapore Polytechnic
						pursuing in Information Technology. By being inside this
						course, I get to learn the fundamental concept of
						programming that you&apos;ll most likely miss when you
						self-learn. I learn more about Object Oriented
						Programming and more.
					</p>
				</ContentSection>
			</FadeInSection>

			<FadeInSection>
				<ContentSection>
					<h2>Why I Love Programming</h2>
					<p>
						My enthusiasm for programming revolved around my
						interest in computers and the feeling of satisfaction
						and contentment overcoming a big obstacle. Programming
						allows me to do that! Both the brief mental strain of
						challenges faced in programming and the feeling of joy
						gives me the adrenaline rush.
					</p>
				</ContentSection>
			</FadeInSection>
		</Container>
	);
};

export default About;
