import type { NextPage } from 'next';
import Image from 'next/image';
import Container from '../components/Container';
import FadeInSection from '../components/FadeInSection';
import Project from '../components/Project';
import styles from '../styles/Home.module.css';

import ArrowDownIndicator from '../components/ArrowDownIndicator';
import FullHeightSection from '../components/FullHeightSection';
import MusicPlayer from '../components/MusicPlayer';

const Home: NextPage = () => {
	return (
		<Container>
			<FullHeightSection>
				<FadeInSection>
					<header className="md:grid md:grid-cols-2 md:gap-40">
						<Image
							src={require('../public/nabil-color.png')}
							alt="Nabil"
						/>
						{/* <div></div> */}

						<div className={styles.header_content}>
							<div>
								<div className="mb-10">
									<h1 className="relative">
										<span className="outline_text">
											Hello! <br /> I&lsquo;m
										</span>{' '}
										Nabil
									</h1>
								</div>

								<div>
									<p className={styles.muted}>
										Web Developer • Problem Solver •
										Programmer • Designer
									</p>
								</div>

								<MusicPlayer />

								<ArrowDownIndicator />

								{/* <div className="stats">
								<h2>#06 Years</h2>

								<p>
									(of becoming a programmer, and still
									counting!)
								</p>
							</div> */}
							</div>
						</div>
					</header>
				</FadeInSection>
			</FullHeightSection>

			<FullHeightSection>
				<FadeInSection>
					<h2>About Me</h2>
					<p className="w-10/12 mx-auto my-10">
						Hi. This is Nabil. I&lsquo;m a full-stack developer. My
						enthusiasm for programming revolved around my interest
						in computers and the feeling of satisfaction and
						contentment overcoming a big obstacle. Programming
						allows me to do that! Both the brief mental strain of
						challenges faced in programming and the feeling of joy
						gives me the adrenaline rush.
					</p>
				</FadeInSection>
			</FullHeightSection>

			<FullHeightSection>
				<FadeInSection>
					<h2 className="section-title text-center">Projects</h2>

					<Project
						img_src="../public/similarify.png"
						tags={['React']}
						title="Similarify"
						links={{
							page: 'https://similarify.netlify.com',
						}}
						description="A fully client-side web application to allow Spotify users to discover new songs that they already like!"
					/>
				</FadeInSection>
			</FullHeightSection>
		</Container>
	);
};

export default Home;
