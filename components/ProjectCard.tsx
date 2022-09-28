import { motion } from 'framer-motion';
import { DateTime } from 'luxon';
import Link from 'next/link';
import {
	IoCodeSlashOutline,
	IoLogoGithub,
	IoStarOutline,
	IoTimeOutline,
} from 'react-icons/io5';
import styles from '../styles/ProjectCard.module.css';

type ProjectCardProps = {
	key: string | number;
	title: string;
	description: string;
	tags: string[];
	stars: number;
	language: string;
	createdAt: Date;
	fork: boolean;
	links: {
		page?: string;
		github?: string;
	};
};

function convertToDateString(date: string) {
	// Return first letter capitalised
	return date.charAt(0).toUpperCase() + date.slice(1);
}

export default function ProjectCard(props: ProjectCardProps) {
	return (
		<motion.div
			layout="position"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{
				backgroundColor: 'black',
				boxShadow: 'none',
			}}
			whileHover={{
				scale: 1.2,
				backgroundColor: 'black',
				transition: { ease: 'easeOut' },
				boxShadow: '0px 10px 50px rgba(0, 0, 0, 1)',
			}}
			className={styles.project_card}
		>
			{/* <div className={styles.tag_section + ' mb-4'}>
				{props.tags.map((tag, index) => (
					<div key={index}>{tag}</div>
				))}
			</div> */}

			<h4>{props.title}</h4>

			<p className="muted text-sm my-3">
				{props.description || 'No description provided'}
			</p>

			<div className={styles.stats}>
				<p>
					<IoStarOutline className="inline" /> {props.stars}
				</p>
				<p>
					<IoTimeOutline className="inline" />{' '}
					{convertToDateString(
						DateTime.fromJSDate(
							props.createdAt
						).toRelativeCalendar()!
					)}
				</p>

				{props.language && (
					<p>
						<IoCodeSlashOutline className="inline" />{' '}
						{props.language}
					</p>
				)}
			</div>

			<div className={styles.link_wrapper}>
				<Link href={props.links.github!}>
					<motion.a
						href={props.links.github!}
						style={{ cursor: 'pointer' }}
						whileHover={{ scale: 1.05 }}
						whileTap={{
							scale: 0.95,
						}}
						className={styles.button}
					>
						<IoLogoGithub className="inline mr-1" />
						Github
					</motion.a>
				</Link>

				{props.links.page && (
					<Link
						className={styles.button_secondary}
						href={props.links.page!}
					>
						<motion.a
							style={{ cursor: 'pointer' }}
							href={props.links.page!}
							whileHover={{ scale: 1.05 }}
							whileTap={{
								scale: 0.95,
							}}
							className={styles.button_secondary}
						>
							View Page →
						</motion.a>
					</Link>
				)}
			</div>
		</motion.div>
	);
}
