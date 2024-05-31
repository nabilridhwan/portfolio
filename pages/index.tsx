import {useQuery} from "@tanstack/react-query";
import {motion, useScroll} from "framer-motion";
import type {NextPage} from "next";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {
    IoArrowForward,
    IoBriefcaseOutline,
    IoLogoGithub,
    IoLogoLinkedin,
    IoNewspaper,
    IoNewspaperOutline
} from "react-icons/io5";
import BlogItemComponent from "../components/BlogItem";
import Container from "../components/Container";
import Experience from "../components/homepage/Experience";
import MusicPlayerSection from "../components/homepage/MusicPlayer";
import fetchBlogItems from "../services/fetchBlogItems.service";
import Swish from "../public/swish";
import HugeFigures from "../components/HugeFigures";
import TestimonialComponent from "../components/TestimonialComponent";

const skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "React Native",
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
    const topDiv = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: topDiv,
    });

    const [error, setError] = useState(false);

    const {data, isLoading, status} = useQuery(
        ["getBlogItems"],
        async () => await fetchBlogItems(10),
        {
            refetchOnMount: true,
            refetchOnWindowFocus: true,
            staleTime: 1000 * 15,
        }
    );

    useEffect(() => {
        if (status === "error") {
            setError(true);
        }
    }, [status]);

    return (
        <div ref={topDiv}>
            <Container>
                <motion.div
                    id="hero-section"
                    className="mt-[40px] bg-primary rounded-[20px] grid md:grid-cols-2 md:grid-rows-1 grid-rows-0"
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
                            A software engineer in sunny-side Singapore. 21 Years Old (i know, I’m pretty old myself).
                            Undergraduate at SMU, pursuing Bachelors in Science, Computer Science. A pretty funny guy
                            too!
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
                        <img className={'absolute bottom-0 -right-[14px]'}
                             src={"/homepage-pics/hero-image.png"}/>
                    </section>
                </motion.div>

                <section className={'hidden lg:block relative overflow-clip'}>
                    <div
                        className={'absolute bg-gradient-to-r from-primarydark to-transparent h-full w-[150px] z-30'}/>

                    <div
                        className={'absolute  bg-gradient-to-l from-primarydark to-transparent right-0 h-full w-[150px] z-30'}/>

                    <motion.div className={'flex flex-row justify-between py-6 overflow-clip'}>
                        {skills.map(s => <span key={s} className={'font-bold'}>{s.toUpperCase()}</span>)}
                    </motion.div>
                </section>

                <div className={'lg:mx-[70px]'}>
                    <div className={'grid md:grid-cols-4  my-10 gap-10'}>
                        <HugeFigures number={"6+"} caption={"Years of Programming Experience"}/>
                        <HugeFigures number={"3+"} caption={"Years of Professional Experience"}/>
                        <HugeFigures number={"5+"} caption={"Clients helped, turning their ideas into a reality"}/>
                        <HugeFigures number={"40+"} caption={"Funny jokes made – you gotta trust me on this one"}/>
                    </div>

                    <div className={'text-center flex-col flex gap-10'}>
                        <p>
                            I’m Nabil Ridhwan. With over 6+ years of programming, 3+ years of professional experience,
                            and
                            over
                            5 clients helped turning their ideas into reality, I can instantly turn words you say into
                            ideas
                            (and code) – like AI but with the human aspect of it.
                        </p>

                        <p>
                            Want a site for your products? Done! How about a business idea of an innovative social media
                            app? Done! Anything you say, I help make it. Don’t take my word for it, let my testimonials
                            speak for themselves.
                        </p>
                    </div>

                    <div className={'grid md:grid-cols-2 my-20 gap-8'}>

                        <TestimonialComponent name={'Mr Tan Hu-Shien'}
                                              position={'Senior Lecturer, Singapore Polytechnic'}
                                              testimonial={'To be frank, even though I as an IT professional mentor to him, I couldn\'t implement such a system myself'}
                                              image={'/tan-hu-shien.png'}
                        />


                        <TestimonialComponent name={'Mr Dan Toh'} position={'CEO / Founder, RunningStream Ptd Ltd.'}
                                              testimonial={'He was essentially the technical forerunner for the team, enthusiastically paving the way for the team when it comes to new technical\n' +
                                                  'challenges.'} image={'/dan-toh.png'}/>

                    </div>


                </div>

                {/*<motion.div*/}
                {/*    initial={{opacity: 0}}*/}
                {/*    whileInView={{opacity: 1}}*/}
                {/*    viewport={{once: true}}*/}
                {/*    className="h-[350px] z-30 my-10 flex items-center"*/}
                {/*>*/}
                {/*    /!* Images *!/*/}
                {/*    <div*/}
                {/*        className="snap-x gap-10 lg:gap-14 absolute left-0 flex justify-center w-full overflow-x-scroll md:overflow-visible">*/}
                {/*        <div*/}
                {/*            className="snap-center relative w-60 left-0 rotate-3 shadow-2xl flex-none transition-all ease-out hover:scale-110">*/}
                {/*            <Image*/}
                {/*                src={require("../public/homepage-pics/1.png")}*/}
                {/*                className="absolute"*/}
                {/*                objectFit="cover"*/}
                {/*                alt="Nabil"*/}
                {/*            />*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className=" snap-center relative w-60 -rotate-3 shadow-2xl flex-none transition-all ease-out hover:scale-110">*/}
                {/*            <Image*/}
                {/*                src={require("../public/homepage-pics/2.png")}*/}
                {/*                className="absolute"*/}
                {/*                objectFit="cover"*/}
                {/*                alt="Nabil"*/}
                {/*            />*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="relative w-60 rotate-3 shadow-2xl flex-none transition-all ease-out hover:scale-110">*/}
                {/*            <Image*/}
                {/*                src={require("../public/homepage-pics/3.png")}*/}
                {/*                className="absolute"*/}
                {/*                objectFit="cover"*/}
                {/*                alt="Nabil"*/}
                {/*            />*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-60 relative -rotate-3 shadow-2xl flex-none transition-all ease-out hover:scale-110">*/}
                {/*            <Image*/}
                {/*                src={require("../public/homepage-pics/4.png")}*/}
                {/*                className="absolute"*/}
                {/*                objectFit="cover"*/}
                {/*                alt="Nabil"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</motion.div>*/}

                {/*<div className="md:grid grid-cols-2 gap-20 my-14">*/}
                {/*    <div className="space-y-10">*/}
                {/*        {JSON.stringify(data)}*/}
                {/*        {JSON.stringify(status)}*/}
                {/*        {data &&*/}
                {/*            data.map((item) => (*/}
                {/*                <BlogItemComponent*/}
                {/*                    key={item.slug}*/}
                {/*                    brief={item.brief}*/}
                {/*                    coverImage=""*/}
                {/*                    dateAdded={item.dateAdded}*/}
                {/*                    slug={item.slug}*/}
                {/*                    title={item.title}*/}
                {/*                    url={item.url}*/}
                {/*                />*/}
                {/*            ))}*/}
                {/*    </div>*/}

                {/*    <div className="space-y-5">*/}
                {/*        <div className="rounded-3xl border border-muted/30 p-8">*/}
                {/*            <div className="flex items-center gap-3 text-muted mb-3">*/}
                {/*                <IoBriefcaseOutline className="text-muted"/>*/}
                {/*                <p className="text-muted">*/}
                {/*                    Experience / Work / Education*/}
                {/*                </p>*/}
                {/*            </div>*/}

                {/*            <div className="space-y-5">*/}
                {/*                /!* Experience Column *!/*/}

                {/*                <Experience*/}
                {/*                    image={require("../public/sp.jpg")}*/}
                {/*                    institution="Singapore Polytechnic"*/}
                {/*                    role="Diploma in Information Technology"*/}
                {/*                    start="2021"*/}
                {/*                    end="Present"*/}
                {/*                />*/}

                {/*                <Experience*/}
                {/*                    image={require("../public/sp.jpg")}*/}
                {/*                    institution="Singapore Polytechnic"*/}
                {/*                    role="Polytechnic Foundation Programme"*/}
                {/*                    start="2020"*/}
                {/*                    end="2021"*/}
                {/*                />*/}

                {/*                <Experience*/}
                {/*                    image={require("../public/profile.png")}*/}
                {/*                    institution="Freelance Developer"*/}
                {/*                    role="Personal"*/}
                {/*                    start="2019"*/}
                {/*                    end="2021"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <MusicPlayerSection/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Container>
        </div>
    );
};

export default Home;
