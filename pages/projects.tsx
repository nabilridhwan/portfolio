import {
	createImageUrlBuilder,
	type SanityImageSource,
} from "@sanity/image-url";
import { NextPage } from "next";
import { type SanityDocument } from "next-sanity";
import { useCallback, useEffect, useState } from "react";
import Container from "../components/Container";
import ProjectItem from "../components/projects/ProjectItem";
import { client } from "../sanity-client";

const ProjectPage: NextPage = () => {
	const { dataset, projectId } = client.config();
	const [projectsSanity, setProjectsSanity] = useState<SanityDocument[]>([]);

	const urlFor = useCallback(
		(source: SanityImageSource) => {
			if (!projectId || !dataset) return null;
			return createImageUrlBuilder({ projectId, dataset }).image(source);
		},
		[projectId, dataset],
	);

	useEffect(() => {
		const QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, description, image, link, technologies, slug, publishedAt}`;
		(async () => {
			const projects = await client.fetch<SanityDocument[]>(QUERY, {});

			const updatedProjects = projects.map((p) => {
				return {
					...p,
					image: urlFor(p.image)?.width(1200).url() ?? undefined,
				};
			});

			console.log(updatedProjects);
			setProjectsSanity(updatedProjects);
		})();
	}, [urlFor]);

	return (
		<Container>
			<header className="mt-[80px]">
				<h1 className="text-4xl lg:text-5xl font-semibold font-header">
					My Projects
				</h1>

				<div className="my-[30px]">
					<p className="muted leading-relaxed">
						I am proud of all my programming projects, but these
						stand out as particularly challenging and rewarding,
						helping me grow and push my abilities.
					</p>
				</div>
			</header>

			<div className="lg:grid grid-cols-2 gap-10 mb-10 space-y-10 lg:space-y-0">
				{projectsSanity.map((project, index) => (
					// eslint-disable-next-line react/jsx-no-undef
					// <ProjectItem {...project} key={index} />
					<ProjectItem
						title={project.title}
						description={project.description}
						image={project.image}
						link={project.link}
						technologies={project.technologies}
						key={index}
					/>
				))}
			</div>
		</Container>
	);
};

export default ProjectPage;
