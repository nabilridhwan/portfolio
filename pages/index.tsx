import type { NextPage } from 'next';
import Container from '../components/Container';
import FadeInSection from '../components/FadeInSection';
import FullHeightSection from '../components/FullHeightSection';
import AboutMe from '../components/homepage/AboutMe';
import BlogSection from '../components/homepage/BlogSection';
import Header from '../components/homepage/Header';
import Project from '../components/Project';

import musicn from '../public/musicn.png';
import similarify from '../public/similarify.png';

const Home: NextPage = () => {
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
						Read my blog:{' '}
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

			<FullHeightSection>
				<FadeInSection>
					<AboutMe />
				</FadeInSection>
			</FullHeightSection>

			<FullHeightSection>
				<FadeInSection>
					<h2 className="section-title text-center">Projects</h2>

					<Project
						img_src={similarify}
						tags={['React']}
						title="Similarify"
						links={{
							page: 'https://similarify.netlify.com',
						}}
						description="A fully client-side web application to allow Spotify users to discover new songs that they already like!"
					/>

					<Project
						img_src={musicn}
						tags={['Next.js']}
						title="Musicn"
						links={{
							page: 'https://musicn.vercel.app',
						}}
						description="A Next.js application rebuild of Musicn, An application to discover other users' music profile, what they're listening to, their top songs and more!"
					/>
				</FadeInSection>
			</FullHeightSection>
		</Container>
	);
};

export default Home;
