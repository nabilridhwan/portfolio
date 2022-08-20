import type { NextPage } from 'next';
import Container from '../components/Container';
import FadeInSection from '../components/FadeInSection';
import FullHeightSection from '../components/FullHeightSection';
import AboutMe from '../components/homepage/AboutMe';
import Header from '../components/homepage/Header';
import Project from '../components/Project';

const Home: NextPage = () => {
	return (
		<Container>
			<div className="my-10">
				<FullHeightSection>
					<FadeInSection>
						<Header />
					</FadeInSection>
				</FullHeightSection>
			</div>

			<FullHeightSection>
				<FadeInSection>
					<AboutMe />
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
