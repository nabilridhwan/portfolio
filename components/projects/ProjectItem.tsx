import Image from "next/image";
import Link from "next/link";
import {IoLinkSharp} from "react-icons/io5";


export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
}

const ProjectItem = ({image, title, description, technologies, link}: Project) => {
    return (
        <div className="space-y-2">
            <Image
                src={require(`../../public/projects/${image}`)}
                alt="similarify"
                className="rounded-3xl"
            />

            <section>

                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="text-sm bg-primarylight px-2 py-1 mr-2 rounded-full"
                    >
                    {tech}
                </span>
                ))}
            </section>

            <h3 className="text-2xl">{title}</h3>
            <p className="muted">
                {description}
            </p>

            <Link href={link}>
							<span className="flex items-center gap-2 cursor-pointer">
								<IoLinkSharp className="-rotate-45"/>
                                View Project
							</span>
            </Link>
        </div>
    )
}

export default ProjectItem;
