import { NextPage } from "next";
import Image from "next/image";
import { IoDownloadOutline } from "react-icons/io5";
import Container from "../components/Container";

const Project: NextPage = () => {
	return (
		<Container>
			<header className="mt-36 mb-14">
				<div className="lg:grid grid-cols-3 gap-10 justify-center items-center">
					<div className="col-span-2">
						<h1 className="text-4xl lg:text-5xl font-semibold font-header">
							Hi, I&apos;m Nabil, a software engineer based in
							Singapore.
						</h1>

						<div className="my-10">
							<p className="muted leading-relaxed text-justify">
								Hello, my name is Nabil and I enjoy creating
								side hobby projects to explore new technologies
								and stay up-to-date with the latest developments
								in the field.
							</p>

							{/* Download button */}
							<div className="my-5 text-sm">
								<button
									onClick={() =>
										(window.location.href = "/resume.pdf")
									}
									className="flex items-center gap-2 bg-primarylight px-4 py-3 rounded-xl text-white/60 border border-white/10 shadow-lg"
								>
									<IoDownloadOutline />
									View / Download my Resume
								</button>
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="mx-auto w-52 lg:w-60 rotate-3 shadow-2xl flex-none">
							<Image
								src={require("../public/homepage-pics/3.png")}
								objectFit="cover"
								alt="Nabil"
							/>
						</div>
					</div>
				</div>
			</header>

			<div className="space-y-14">
				<div className="space-y-4">
					<h3 className="font-body font-semibold text-2xl my-2">
						Why I love Programming
					</h3>
					<p className="text-muted text-justify">
						My enthusiasm for programming revolved around my
						interest in computers and the feeling of satisfaction
						and contentment overcoming a big obstacle. Programming
						allows me to do that! Both the brief mental strain of
						challenges faced in programming and the feeling of joy
						gives me the adrenaline rush.
					</p>
				</div>

				<div className="space-y-4">
					<h3 className="font-body font-semibold text-2xl my-2">
						In the beginning...
					</h3>
					<p className="text-muted text-justify">
						I dived into the world of web development around in
						2018, starting with HTML and all the way to creating
						full stack web applications using the MERN stack
						(MongoDB, Express, React and Node.JS)
					</p>

					<p className="text-muted text-justify">
						Before 2018, I was still finding my place in the
						programming world, trying different languages and
						getting excited when I printed “Hello, World!” in Java!
					</p>

					<p className="text-muted text-justify">
						I love creating my own projects because I can share them
						with the world, and I can be proud of them.
					</p>
				</div>

				<div className="space-y-4">
					<h3 className="font-body font-semibold text-2xl my-2">
						The Present
					</h3>
					<p className="text-muted text-justify">
						I am currently a student from Singapore Polytechnic
						pursuing in Information Technology. By being inside this
						course, I get to learn the fundamental concept of
						programming that you&apos;ll most likely miss when you
						self-learn. I learn more about Object Oriented
						Programming and more.
					</p>
				</div>
			</div>
		</Container>
	);
};

export default Project;
