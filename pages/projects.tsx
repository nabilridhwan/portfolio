import {motion} from "framer-motion";
import {NextPage} from "next";
import Image from "next/image";
import Link from "next/link";
import {IoLinkSharp} from "react-icons/io5";
import {AnimationVariants} from "../animations/Animation";
import Container from "../components/Container";

const Project: NextPage = () => {
    return (
        <Container>
            <motion.div
                animate={{
                    transition: {
                        when: "beforeChildren",
                        staggerChildren: 0.5,
                    },
                }}
            >
                <motion.header
                    variants={AnimationVariants.fadeFromBottom}
                    initial="initial"
                    animate="animate"
                    className="mt-36"
                >
                    <h1 className="text-4xl lg:text-5xl font-semibold font-header">
                        Projects and applications I&apos;ve made trying to get
                        my feet wet
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
                </motion.header>

                <motion.div
                    variants={AnimationVariants.fadeFromBottom}
                    initial="initial"
                    animate="animate"
                    className="lg:grid grid-cols-2 gap-10 mb-10 space-y-10 lg:space-y-0"
                >
                    {/* Item */}
                    <div className="space-y-2">
                        <Image
                            src={require("../public/projects/similarify.png")}
                            alt="similarify"
                            className="rounded-3xl"
                        />

                        <h3 className="text-2xl">Similarify</h3>
                        <p className="muted">
                            Expand your musical horizons with the Similarify -
                            find new tunes based on the songs you already love!
                            (Powered by Spotify)
                        </p>

                        <Link href="https://similarify.netlify.app">
							<span className="flex items-center gap-2 cursor-pointer">
								<IoLinkSharp className="-rotate-45"/>
								similarifyapp.netlify.app
							</span>
                        </Link>
                    </div>

                    <div className="space-y-2">
                        <Image
                            src={require("../public/projects/troof.png")}
                            alt="Troof"
                            className="rounded-3xl"
                        />

                        <h3 className="text-2xl">Troof</h3>
                        <p className="muted">
                            Experience the ultimate social truth or dare game
                            with Troof! - see, chat, and react together with
                            your friends!
                        </p>

                        <Link href="https://troof.nabilridhwan.com">
							<span className="flex items-center gap-2 cursor-pointer">
								<IoLinkSharp className="-rotate-45"/>
								troof.nabilridhwan.com
							</span>
                        </Link>
                    </div>

                    <div className="space-y-2">
                        <Image
                            src={require("../public/projects/musicn.png")}
                            alt="Musicn"
                            className="rounded-3xl"
                        />

                        <h3 className="text-2xl">Musicn</h3>
                        <p className="muted">
                            Get a glimpse into the musical tastes of your
                            friends and discover new tracks with the
                            Next.js-powered Spotify Social app!
                        </p>

                        <Link href="https://musicnapp.com">
							<span className="flex items-center gap-2 cursor-pointer">
								<IoLinkSharp className="-rotate-45"/>
								musicnapp.com
							</span>
                        </Link>
                    </div>

                    <div className="space-y-2">
                        <Image
                            src={require("../public/projects/thoughtful.png")}
                            alt="Thoughtful Promo"
                            className="rounded-3xl"
                        />

                        <h3 className="text-2xl">Thoughtful.</h3>
                        <p className="muted">
                            Cultivate gratitude and positivity with Thoughtful, your personalized journaling companion.
                            Reflect on the good things in life and track your progress.
                        </p>

                        <Link href="https://github.com/nabilridhwan/Thoughtful">
							<span className="flex items-center gap-2 cursor-pointer">
								<IoLinkSharp className="-rotate-45"/>
								Project Page
							</span>
                        </Link>
                    </div>

                </motion.div>
            </motion.div>
        </Container>
    );
};

export default Project;
