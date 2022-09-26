import { AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Container from '../components/Container';
import FadeInSection from '../components/FadeInSection';
import ProjectCard from '../components/ProjectCard';
import getAllGithubRepos from '../services/getAllGithubRepos.service';

import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/LoadingSpinner';

const Project: NextPage = () => {
	const [repoData, setRepoData] = useState<any>([]);
	const [filteredRepoData, setFilteredRepoData] = useState<any>([]);
	const [searchInput, setSearchInput] = useState('');

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
			setFilteredRepoData(repoFetchData);
		}
	}, [repoDataStatus, repoFetchData]);

	useEffect(() => {
		if (searchInput.length === 0) {
			setFilteredRepoData(repoData);
		}

		// Filter off set of repos based on search input
		const filteredRepoData = repoData.filter((repo: any) => {
			console.log(repo);
			return (
				repo.name.toLowerCase().includes(searchInput.toLowerCase()) ||
				repo.description
					?.toLowerCase()
					.includes(searchInput.toLowerCase())
			);
		});

		setFilteredRepoData(filteredRepoData);
	}, [searchInput, repoData]);

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

				<input
					className="my-20 p-3 rounded-lg bg-transparent border border-white/50 focus:border-white outline-none placeholder:text-white/50 w-full"
					value={searchInput}
					placeholder="Search"
					onChange={(e) => setSearchInput(e.target.value)}
				/>

				{repoLoading && (
					<div className="my-10 w-full flex items-center justify-center">
						<LoadingSpinner />
					</div>
				)}

				{repoLoading || (
					<>
						{filteredRepoData.length === 0 && (
							<div className="my-10 w-full flex items-center justify-center">
								<p className="muted">
									No repos found matching your search
								</p>
							</div>
						)}
					</>
				)}

				{repoLoading || (
					<div className="md:grid md:grid-cols-3 gap-5">
						<AnimatePresence mode="popLayout">
							{filteredRepoData.map((repo: any) => (
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
										page: repo.homepage
											? repo.homepage
											: repo.has_pages
											? repo.html_url
											: '',
									}}
								/>
							))}
						</AnimatePresence>
					</div>
				)}
			</FadeInSection>
		</Container>
	);
};

export default Project;
