import FadeInSection from '../components/FadeInSection';
import FullHeightSection from '../components/FullHeightSection';
import styles from '../styles/NotFoundPage.module.css';

export default function NotFoundPage() {
	return (
		<FadeInSection>
			<FullHeightSection>
				<div className="text-center">
					<h1 className={styles.title + ' ' + styles.outline_text}>
						404
					</h1>
					<p className="muted my-5 text-lg">
						Whatever you&apos;re looking for, it&apos;s not here!
					</p>
				</div>
			</FullHeightSection>
		</FadeInSection>
	);
}
