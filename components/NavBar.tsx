import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NavbarLink {
	displayItem: ReactNode;
	link: string;
}

const navbarItems: NavbarLink[] = [
	{
		displayItem: "Home",
		link: "/",
	},
	{
		displayItem: "Projects",
		link: "/work",
	},

	// {
	// 	displayItem: "Resume",
	// 	link: "/resume",
	// },

	// {
	// 	displayItem: "About",
	// 	link: "/about",
	// },
];

function isActive(location: Location, navbarLink: NavbarLink) {
	// console.log(location.pathname, navbarLink.link);
	// console.log(location.pathname == navbarLink.link);
	return location.pathname == navbarLink.link;
}

const NavBar = () => {
	const router = useRouter();

	console.log(router.route);

	return (
		<nav className="bg-primarylight  w-fit p-5 py-0  rounded-full border border-muted/20 text-sm overflow-hidden">
			<ul className="flex gap-8">
				{navbarItems.map((item, index) => (
					<li
						key={index}
						className=" text-muted py-3 hover:text-white transition-all relative"
					>
						<Link href={item.link}>
							<a className="py-3">{item.displayItem}</a>
						</Link>

						<motion.div
							key={router.route}
							initial={{ height: 0, opacity: 0 }}
							animate={{
								opacity:
									router.route === item.link ? "100" : "0px",
								height:
									router.route === item.link ? "3px" : "0px",
							}}
							className="w-full bg-accent absolute bottom-0 blur-sm"
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
