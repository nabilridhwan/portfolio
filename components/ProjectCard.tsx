import { DateTime } from 'luxon';
import Link from 'next/link';
import {
	IoCodeSlashOutline,
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
		<div className={styles.project_card}>
			<div className={styles.tag_section + ' mb-4'}>
				{props.tags.map((tag, index) => (
					<div key={index}>{tag}</div>
				))}
			</div>

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
					<a className={styles.button}>Github</a>
				</Link>

				{props.links.page && (
					<Link className={styles.button} href={props.links.page!}>
						<a className={styles.button}>Try it out</a>
					</Link>
				)}
			</div>
		</div>
	);
}
