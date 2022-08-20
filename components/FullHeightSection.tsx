import { motion } from 'framer-motion';
import styles from '../styles/FullHeightSection.module.css';

export default function FullHeightSection({ children }: { children: any }) {
	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// });

	// const y = useTransform(scrollYProgress, [0, 0.5, 1], [-400, 0, 200]);
	return (
		<motion.div
			// ref={ref}
			// style={{ y }}
			className={styles.full_height_section + ' my-14'}
		>
			<div className="full-height-section-content">{children}</div>
		</motion.div>
	);
}
