import Image from "next/image";
import Link from "next/link";
import {IoLinkSharp} from "react-icons/io5";
import {Project} from "../../types/Project";


const ProjectItem = ({image, title, description, technologies, link}: Project) => {
    return (
        <div className="space-y-2">
            <Image
                src={require(`../../public/projects/${image}`)}
                alt="similarify"
                className="rounded-3xl"
            />

            <section className={'flex flex-row flex-wrap gap-2'}>
                {technologies.map((tech, index) => (
                    <p
                        key={index + tech}
                        className="text-sm bg-primarylight px-2 py-1 rounded-full"
                    >
                        {tech}
                    </p>
                ))}
            </section>

            <h3 className="text-2xl font-black">{title}</h3>
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
