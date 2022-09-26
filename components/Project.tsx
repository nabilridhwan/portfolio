import { NextComponentType } from 'next';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from '../styles/Project.module.css';
import FadeInSection from './FadeInSection';

type ProjectProps = {
	img_src: string | StaticImageData;
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
					src={props.img_src}
					alt=""
					className="border border-white"
				/>

				<div>
					{/* <div className={styles.tag_section}>
						{props.tags.map((tag, index) => (
							<div key={index}>{tag}</div>
						))}
					</div> */}

					<h1 className={styles.title}>{props.title}</h1>
					<p className="text-sm">{props.description}</p>

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
