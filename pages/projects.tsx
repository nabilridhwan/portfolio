import {motion} from "framer-motion";
import {NextPage} from "next";
import Container from "../components/Container";
import ProjectItem from "../components/projects/ProjectItem";
import {Project} from "../types/Project";


const projects: Project[] = [
    {
        title: "Roast my music taste, please!",
        description: "Think you got superior musical taste? Let the gods of music be the judge of it. Powered by LangChain, OpenAI and Spotify",
        image: "roast-my-music-taste-please.png",
        link: "https://roastmymusictasteplease.vercel.app",
        technologies: ["Next.js", "Spotify API", "LangChain", "OpenAI", "Vercel"],
    },
    {
        title: "Thoughtful",
        description:
            "Cultivate gratitude and positivity with Thoughtful, your personalized journaling companion. Reflect on the good things in life and track your progress.",
        image: "thoughtful-ios-promo-2.png",
        link: "https://thoughtful.nabilridhwan.com",
        technologies: ["Swift", "SwiftUI", "SwiftData", "WidgetKit", "TipKit"],
    },

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
        technologies: ["React", "Express", "Socket.io", "PostgreSQL", "Supabase", "Prisma"],
    },
    {
        title: "Musicn",
        description:
            "Get a glimpse into the musical tastes of your friends and discover new tracks with the Next.js-powered Spotify Social app!",
        image: "musicn.png",
        link: "https://musicnapp.com",
        technologies: ["Next.js", "Spotify API", "Lucia Auth", "PostgreSQL", "Supabase", "Prisma"],
    },


    // {
    //     title: "Thoughtful.",
    //     description:
    //         "Cultivate gratitude and positivity with Thoughtful, your personalized journaling companion. Reflect on the good things in life and track your progress.",
    //     image: "thoughtful.png",
    //     link: "https://github.com/nabilridhwan/Thoughtful",
    //     technologies: ["Dart", "Flutter", "Bloc", "SQLite"]
    // },

    {
        title: "Hacker Hotel",
        description:
            "Created for Republic Polytechnic's Open House 2024 with a team, \"Hacker Hotel\" is a Roblox game teaching cybersecurity through attacking, defending, capture-the-flag, and quizzes.",
        image: "hacker-hotel.png",
        link: "https://www.roblox.com/games/15193691719/Main-Menu",
        technologies: ["Roblox Studio", "Lua", "Game Development"]
    }
]


const ProjectPage: NextPage = () => {
    return (
        <Container>
            <header
                className="mt-[80px]"
            >
                <h1 className="text-4xl lg:text-5xl font-semibold font-header">
                    My Projects
                </h1>

                <div className="my-[30px]">
                    <p className="muted leading-relaxed">
                        I am proud of all my programming projects, but these stand out as particularly challenging and
                        rewarding, helping me grow and push my abilities.
                    </p>
                </div>
            </header>

            <div
                className="lg:grid grid-cols-3 gap-10 mb-10 space-y-10 lg:space-y-0"
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
