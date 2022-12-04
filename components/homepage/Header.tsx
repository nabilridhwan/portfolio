import Image from "next/image";
import styles from "../../styles/Header.module.css";
import ArrowDownIndicator from "../ArrowDownIndicator";
import MusicPlayerSection from "./MusicPlayer";

const Header = () => {
	return (
		<header className="md:grid md:grid-cols-2 md:gap-40">
			<Image
				src={require("../../public/nabil-color.png")}
				alt="Nabil"
				objectFit="scale-down"
				width={500}
				height={500}
			/>

			<div className={styles.header_content}>
				<div>
					<div className="mb-10">
						<h1 className="relative">
							<span className="outline_text">
								Hello! <br /> I&lsquo;m
							</span>{" "}
							Nabil
						</h1>
					</div>

					<div>
						<p className={styles.muted}>
							Web Developer • Problem Solver • Programmer •
							Designer
						</p>
					</div>

					<MusicPlayerSection />

					<ArrowDownIndicator />
				</div>
			</div>
		</header>
	);
};

export default Header;
