import {motion} from "framer-motion";
import {NextPage} from "next";
import {AnimationVariants} from "../animations/Animation";
import Container from "../components/Container";
import ProjectItem, {Project} from "../components/projects/ProjectItem";


const projects: Project[] = [
    {
        title: "Similarify",
        description:
            "Expand your musical horizons with the Similarify - find new tunes based on the songs you already love! (Powered by Spotify)",
        image: "similarify.png",
        link: "https://similarify.netlify.app",
        technologies: ["React", "Spotify Web API"],
    },
    {
        title: "Troof",
        description:
            "Experience the ultimate social truth or dare game with Troof! - see, chat, and react together with your friends! (Currently disabled so save on hosting costs)",
        image: "troof.png",
        link: "https://troof.nabilridhwan.com",
        technologies: ["React", "Express", "Socket.io", "PostgreSQL", "Supabase"],
    },
    {
        title: "Musicn",
        description:
            "Get a glimpse into the musical tastes of your friends and discover new tracks with the Next.js-powered Spotify Social app!",
        image: "musicn.png",
        link: "https://musicnapp.com",
        technologies: ["Next.js", "Spotify API", "Lucia Auth"],
    },
    {
        title: "Thoughtful.",
        description:
            "Cultivate gratitude and positivity with Thoughtful, your personalized journaling companion. Reflect on the good things in life and track your progress.",
        image: "thoughtful.png",
        link: "https://github.com/nabilridhwan/Thoughtful",
        technologies: ["Dart", "Flutter", "Bloc", "SQLite"]
    }
]


const ProjectPage: NextPage = () => {
    return (
        <Container>
            <header
                className="mt-36"
            >
                <h1 className="text-4xl lg:text-5xl font-semibold font-header">
                    My Projects
                </h1>

                <div className="my-10">
                    <p className="muted leading-relaxed">
                        While I am proud of all of the programming projects
                        that I have done over the years, the following are
                        some of the ones that stand out to me as
                        particularly challenging and rewarding. These
                        projects have helped me grow as a programmer and
                        allowed me to push the boundaries of my abilities.
                    </p>
                </div>
            </header>

            <div
                className="lg:grid grid-cols-2 gap-10 mb-10 space-y-10 lg:space-y-0"
            >
                {projects.map((project, index) => (
                    // eslint-disable-next-line react/jsx-no-undef
                    <ProjectItem {...project} key={index}/>
                ))}
            </div>
        </Container>
    );
};

export default ProjectPage;
