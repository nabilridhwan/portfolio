import { DateTime } from "luxon";
import { FaGithub, FaInstagram } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<p className="text-sm mb-4">
				The ever-coolest Nabil Ridhwan &copy;{" "}
				{DateTime.now().toObject().year}
			</p>

			<div className="flex justify-center">
				<a
					href="https://github.com/nabilridhwan"
					className={styles.icon}
				>
					<FaGithub />
				</a>

				<a
					href="https://instagram.com/nabilridhwn"
					className={styles.icon}
				>
					<FaInstagram />
				</a>

				{/* <a href="https://sptfy.com/nabz" className={styles.icon}>
					<FaSpotify />
				</a> */}

				{/* <a
					href="https://www.codewars.com/users/nabilridhwan"
					className={styles.icon}
				>
					<SiCodewars />
				</a> */}

				{/* <a href="https://nabil.musicnapp.com" className={styles.icon}>
					<FaHeadphones />
				</a> */}
			</div>
		</div>
	);
}
