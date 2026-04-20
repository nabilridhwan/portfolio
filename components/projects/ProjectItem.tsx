import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import { Project } from "../../types/Project";

const ProjectItem = ({
	image,
	title,
	description,
	technologies,
	link,
}: Project) => {
	return (
		<div className="space-y-2">
			<img
				src={image}
				alt={`Promo image for project named ${title}`}
				className="rounded-3xl"
			/>

			<h3 className="text-2xl font-black">{title}</h3>

			<section className={"flex flex-row flex-wrap gap-2"}>
				{technologies.map((tech, index) => (
					<p
						key={index + tech}
						className="text-opacity-75 text-xs bg-primarylight px-2 py-1 my-0 rounded-full"
					>
						{tech}
					</p>
				))}
			</section>
			<p className="muted">{description}</p>

			<Link href={link}>
				<span className="flex my-3 items-center gap-2 cursor-pointer">
					<TbExternalLink />
					View Project
				</span>
			</Link>
		</div>
	);
};

export default ProjectItem;
