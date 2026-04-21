import type { Metadata } from "next";
import { SanityDocument } from "next-sanity";
import Container from "../../components/Container";
import ProjectItem from "../../components/projects/ProjectItem";
import { client, urlFor } from "../../sanity-client";

export const metadata: Metadata = {
	title: "Projects",
};

export const dynamic = "force-dynamic";

async function getProjects() {
	const query = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, description, image, link, technologies, slug, publishedAt}`;
	const projects = await client.fetch<SanityDocument[]>(query, {});

	return projects.map((project) => ({
		title: project.title,
		description: project.description,
		image: urlFor(project.image)?.width(1200).url() ?? "",
		link: project.link,
		technologies: project.technologies ?? [],
	}));
}

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<Container>
			<header className="mt-[80px]">
				<h1 className="text-4xl lg:text-5xl font-semibold font-header">
					My Projects
				</h1>

				<div className="my-[30px]">
					<p className="muted leading-relaxed">
						I am proud of all my programming projects, but these stand
						out as particularly challenging and rewarding, helping me
						grow and push my abilities.
					</p>
				</div>
			</header>

			<div className="lg:grid grid-cols-2 gap-10 mb-10 space-y-10 lg:space-y-0">
				{projects.map((project, index) => (
					<ProjectItem
						title={project.title}
						description={project.description}
						image={project.image}
						link={project.link}
						technologies={project.technologies}
						key={`${project.title}-${index}`}
					/>
				))}
			</div>
		</Container>
	);
}
