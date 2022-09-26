import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<Link href="/">
						<a>
							Home
							<div className="h-0.5 w-100 bg-white" />
						</a>
					</Link>
				</li>

				<li>
					<Link href="/work">
						<a>
							My Works
							<div className="h-0.5 w-100 bg-white" />
						</a>
					</Link>
				</li>

				<li>
					<Link href="https://blog.nabilridhwan.com">
						<a>
							Blog
							<FaExternalLinkAlt className="inline-block ml-2" />
							<div className="h-0.5 w-100 bg-white" />
						</a>
					</Link>
				</li>

				<li>
					<Link href="/about">About</Link>
					<div className="h-0.5 w-100 bg-white" />
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
