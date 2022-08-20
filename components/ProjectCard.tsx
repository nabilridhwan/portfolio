import Link from 'next/link';
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

export default function ProjectCard(props: ProjectCardProps) {
	return (
		<div className={styles.project_card}>
			<div className={styles.tag_section}>
				{props.tags.map((tag, index) => (
					<div key={index}>{tag}</div>
				))}
			</div>

			<h4>{props.title}</h4>

			<p className="muted">{props.description}</p>

			<div className={styles.stats}>
				<p>{props.stars}</p>
				<p>{props.createdAt.toString()}</p>
				<p>{props.language}</p>
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
