import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

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
		displayItem: "My Works",
		link: "/work",
	},

	// {
	// 	displayItem: (
	// 		<>
	// 			Blog
	// 			<FaExternalLinkAlt size={13} className="inline-block ml-2" />
	// 		</>
	// 	),
	// 	link: "https://blog.nabilridhwan.com",
	// },

	// {
	// 	displayItem: "Resume",
	// 	link: "/resume",
	// },

	{
		displayItem: "About",
		link: "/about",
	},
];

function isActive(location: Location, navbarLink: NavbarLink) {
	// console.log(location.pathname, navbarLink.link);
	// console.log(location.pathname == navbarLink.link);
	return location.pathname == navbarLink.link;
}

const NavBar = () => {
	const [loc, setLoc] = useState<Location | null>(null);

	useEffect(() => {
		setLoc(window.location);
	}, []);

	return (
		<nav className={styles.navbar}>
			<ul>
				{navbarItems.map((item, index) => (
					<li
						key={index}
						className="flex flex-col justify-center items-center relative"
					>
						<Link href={item.link}>
							<a>{item.displayItem}</a>
						</Link>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								width:
									loc && isActive(loc, item) ? "20px" : "0",
								height:
									loc && isActive(loc, item) ? "3px" : "0px",
							}}
							exit={{
								opacity: 0,
								width: "0%",
								height: "0px",
							}}
							style={{
								backgroundColor: "white",
								position: "absolute",
								bottom: "-10px",
								borderRadius: "5px",
							}}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
