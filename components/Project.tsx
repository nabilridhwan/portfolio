import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Project.module.css';
import FadeInSection from './FadeInSection';

type ProjectProps = {
	img_src: string;
	title: string;
	tags: string[];
	description: string;
	links?: {
		page?: string;
		github?: string;
		read_more?: string;
	};
};

const Project: NextComponentType<{}, {}, ProjectProps> = (
	props: ProjectProps
) => {
	return (
		<FadeInSection>
			<section className={styles.project_card}>
				<Image
					style={{
						width: '100%',
						height: 'auto',
					}}
					src={require('../public/similarify.png')}
					alt=""
				/>

				<div>
					<div className={styles.tag_section}>
						{props.tags.map((tag, index) => (
							<div key={index}>{tag}</div>
						))}
					</div>

					<h1 className={styles.title}>{props.title}</h1>
					<p>{props.description}</p>

					{props.links?.page && (
						<Link className={styles.links} href={props.links.page}>
							Try it out! →
						</Link>
					)}
				</div>
			</section>
		</FadeInSection>
	);
};

export default Project;
