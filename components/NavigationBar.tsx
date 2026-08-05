'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState} from 'react';

interface NavbarLink {
	icon?: ReactNode;
	displayItem: ReactNode;
	link: string;
}

const navbarItems: NavbarLink[] = [
	{
		displayItem: 'Home',
		link: '/',
	},
	{
		displayItem: 'Projects',
		link: '/projects',
	},
	{
		displayItem: 'Blog',
		link: 'https://blog.nabilridhwan.com',
	},

	// {
	// 	displayItem: "Resume",
	// 	link: "/resume",
	// },

	// {
	//     displayItem: "About",
	//     link: "/about",
	// },
];

const NavigationBar = () => {
	const pathname = usePathname();

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={classNames("transition-all duration-300 border border-muted/0 w-fit p-5 py-0 drop-shadow-[0px_0px_30px_rgba(0,0,0,1)] rounded-full text-sm overflow-hidden z-100", {
			"bg-primarylight border-muted/20": isScrolled
		})}>
			<ul className="flex gap-8">
				{navbarItems.map((item, index) => (
					<li key={index} className=" text-muted py-3 hover:text-white transition-all relative">
						<Link
							href={item.link}
							className={`py-3 transition-all ${classNames({
								'font-bold text-white/80': pathname === item.link,
							})}`}
						>
							{item.displayItem}
						</Link>

						<motion.div
							key={pathname}
							initial={{ height: 0, opacity: 0 }}
							animate={{
								opacity: pathname === item.link ? 100 : 0,
								y: pathname === item.link ? 0 : -10,
							}}
							className="w-full bg-accent absolute bottom-0 blur-sm h-px"
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavigationBar;
