import {animate, motion, useMotionValue} from "framer-motion";
import type {NextPage} from "next";
import Link from "next/link";
import {useEffect, useMemo} from "react";
import {IoArrowForward, IoLogoGithub, IoLogoLinkedin, IoNewspaper} from "react-icons/io5";
import Container from "../components/Container";
import MusicPlayerSection from "../components/homepage/MusicPlayer";
import Swish from "../components/homepage/Swish";
import Figure from "../components/homepage/Figure";
import Testimonial from "../components/homepage/Testimonial";
import useMeasure from "react-use-measure";

const skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Native",
    "Mobile",
    "SQL",
    "Supabase",
    "AWS",
    "Node.js",
    "Nest.js",
    "Next.js",
    "Dart",
    "Flutter",
    "Python",
    "Swift",
    "Java"
]

const Home: NextPage = () => {
    // Scrolling animation: https://www.youtube.com/watch?v=Ot4nZ6UjJLE
    const [ref, {width}] = useMeasure();
    const xTranslation = useMotionValue(0);
    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 20;

        controls = animate(xTranslation, [0, finalPosition], {
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
        })

        // cleanup
        return controls.stop
    }, [xTranslation, width]);

    // calculate age
    const age = useMemo(() => {
        const birthDate = new Date("2003-09-08");
        const currentDate = new Date();
        const diff = currentDate.getTime() - birthDate.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }, [])

    return (
        <Container>
            <motion.div
                id="hero-section"
                className="relative mt-[40px] bg-primary rounded-[20px] grid md:grid-cols-2 md:grid-rows-1 grid-rows-0"
            >

                <section className={'p-[60px] flex flex-col gap-4'}>
                    <h1
                        className="relative font-extrabold text-[50px] lg:text-[90px] leading-[40px] lg:leading-[70px] drop-shadow-[0_0.2px_1.2px_rgba(0,0,0,0.8)]"
                    >
                        Nabil<br/>Ridhwan

                        <span
                            className={'absolute -bottom-[20px] md:-bottom-[25px] -z-10 left-0 w-[230px] md:w-[400px]'}>
                                <Swish/>
                            </span>
                    </h1>

                    <p className="leading-relaxed mt-8">
                        A software engineer in sunny-side Singapore. {age} Years Old (i know, I’m pretty old
                        myself).
                        Undergraduate at SMU, pursuing Bachelors in Science, Computer Science. <span
                        className={'underline'}>A pretty funny guy
                            too!</span>
                    </p>

                    <section className={'my-5'}>
                        <Link href={'mailto:nabridhwan+p@gmail.com'}>
                            <span className={'flex flex-row items-center gap-2'}>
                            <IoArrowForward size={22}/>
                            <p className={'font-bold underline'}>
                                Turn your ideas into reality, with my help
                            </p>
                            </span>
                        </Link>
                    </section>

                    <div className="flex gap-4 text-2xl text-muted">
                        <Link href="https://github.nabilridhwan.com">
                            <IoLogoGithub className="cursor-pointer"/>
                        </Link>

                        <Link href="https://www.linkedin.com/in/nabilridhwan">
                            <IoLogoLinkedin className="cursor-pointer"/>
                        </Link>

                        <Link href="https://blog.nabilridhwan.com">
                            <IoNewspaper className="cursor-pointer"/>
                        </Link>

                        {/* <IoLogoInstagram className="text-muted" /> */}
                    </div>
                </section>

                <section className={'relative -z-[0]'}>
                    <motion.img
                        initial={{opacity: 0, scale: 0}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{type: "tween", ease: "easeOut"}}
                        className={'absolute bottom-0 -right-[14px]'}
                        src={"/hero-image.png"}/>
                </section>


                <MusicPlayerSection/>
            </motion.div>

            <section className={'relative overflow-clip'}>
                <div
                    className={'absolute bg-gradient-to-r from-primarydark to-transparent h-full w-[150px] z-[10]'}/>

                <div
                    className={'absolute bg-gradient-to-l from-primarydark to-transparent right-0 h-full w-[150px] z-[10]'}/>

                {/*Scrolling animation: https://www.youtube.com/watch?v=Ot4nZ6UjJLE*/}
                <motion.div style={{x: xTranslation}} className={'py-6 flex gap-[20px] items-center'} ref={ref}>
                    {[...skills, ...skills].map(s => <span key={s} className={'font-bold'}>{s.toUpperCase()}</span>)}
                </motion.div>
            </section>

            <div className={'lg:mx-[70px]'}>
                <div className={'grid md:grid-cols-4  my-10 gap-10'}>
                    <motion.div
                        initial={{opacity: 0, y: 100}}
                        transition={{type: "tween", ease: "easeOut"}}
                        whileInView={{
                            opacity: 1, y: 0
                        }}
                        viewport={{once: true}}
                    >
                        <Figure number={"3+"} caption={"Years of Professional Experience"}/>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 100}}
                        transition={{type: "tween", ease: "easeOut"}}

                        viewport={{once: true}}
                        whileInView={{
                            opacity: 1, y: 0
                        }}
                    >
                        <Figure number={"5+"} caption={"Clients helped, turning their ideas into a reality"}/>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 100}}
                        transition={{type: "tween", ease: "easeOut"}}

                        viewport={{once: true}}
                        whileInView={{
                            opacity: 1, y: 0
                        }}
                    >
                        <Figure number={"6+"} caption={"Years of Programming Experience"}/>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 100}}
                        transition={{type: "tween", ease: "easeOut"}}

                        viewport={{once: true}}
                        whileInView={{
                            opacity: 1, y: 0
                        }}
                    >
                        <Figure number={"40+"} caption={"Funny jokes made – you gotta trust me on this one"}/>
                    </motion.div>
                </div>

                {/*<div className={'text-center flex-col flex gap-10'}>*/}
                {/*    <p>*/}
                {/*        Want a site for your products? Done! How about a business idea of an innovative social media*/}
                {/*        app? Done! Anything you say, I make it. Don’t take my word for it, let my testimonials*/}
                {/*        speak for themselves.*/}
                {/*    </p>*/}
                {/*</div>*/}

                <div className={'grid md:grid-cols-2 my-20 gap-8'}>

                    <Testimonial name={'Mr Tan Hu-Shien'}
                                 position={'Senior Lecturer, Singapore Polytechnic'}
                                 testimonial={'To be frank, even though I as an IT professional mentor to him, I couldn\'t implement such a system myself'}
                                 image={'/testimonials/tan-hu-shien.png'}
                    />


                    <Testimonial name={'Mr Dan Toh'} position={'CEO / Founder, RunningStream Ptd Ltd.'}
                                 testimonial={'He was essentially the technical forerunner for the team, enthusiastically paving the way for the team when it comes to new technical\n' +
                                     'challenges.'} image={'/testimonials/dan-toh.png'}/>

                </div>
            </div>
        </Container>
    );
};

export default Home;
