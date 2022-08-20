import { AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import getAllGithubRepos from '../classes/getAllGithubRepos';
import Container from '../components/Container';
import FadeInSection from '../components/FadeInSection';
import ProjectCard from '../components/ProjectCard';

import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/LoadingSpinner';

const Project: NextPage = () => {
	const [repoData, setRepoData] = useState<any>([]);

	const {
		data: repoFetchData,
		status: repoDataStatus,
		isLoading: repoLoading,
	} = useQuery(
		['getAllGithubRepos'],
		async () => await getAllGithubRepos('nabilridhwan'),
		{
			refetchOnMount: true,
			cacheTime: 1000 * 60 * 5, // 5 minutes
			staleTime: 1000 * 60 * 5, // 5 minutes
		}
	);

	useEffect(() => {
		if (repoDataStatus === 'success') {
			setRepoData(repoFetchData);
		}
	}, [repoDataStatus, repoFetchData]);

	return (
		<Container>
			<FadeInSection>
				<header className="my-20">
					<h1>
						<span className="outline_text">My</span>
						<br />
						Works
					</h1>

					<div className="my-10">
						<p className="muted">
							My complete set of works from my Github profile
						</p>
					</div>
				</header>

				<AnimatePresence>
					{repoLoading && (
						<div className="my-10 w-full flex items-center justify-center">
							<LoadingSpinner />
						</div>
					)}

					{repoLoading || (
						<div className="md:grid md:grid-cols-2 gap-5">
							{repoData.map((repo: any) => (
								<ProjectCard
									key={repo.id}
									title={repo.name}
									description={repo.description}
									language={repo.language}
									stars={repo.stargazers_count}
									tags={repo.topics}
									fork={repo.fork}
									createdAt={new Date(repo.created_at)}
									links={{
										github: repo.html_url,
										page: repo.has_pages
											? `https://nabilridhwan.github.io/${repo.name}`
											: undefined,
									}}
								/>
							))}
						</div>
					)}
				</AnimatePresence>
			</FadeInSection>
		</Container>
	);
};

export default Project;
