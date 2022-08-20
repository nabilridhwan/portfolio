import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<Link href="/">Home</Link>

					<div className="h-0.5 w-100 bg-white" />
				</li>
				{/* <li>
					<Link href="/about">About</Link>
					<div className="h-0.5 w-100 bg-white" />
				</li>
				<li>
					<Link href="/projects">Projects</Link>
					<div className="h-0.5 w-100 bg-white" />
				</li> */}
			</ul>
		</nav>
	);
};

export default NavBar;
