import styles from "../styles/FullHeightSection.module.css";

export default function FullHeightSection({
	ref,
	children,
}: {
	ref?: any;
	children: any;
}) {
	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// });

	// const y = useTransform(scrollYProgress, [0, 0.5, 1], [-400, 0, 200]);
	return (
		<div
			ref={ref}
			// style={{ y }}
			className={styles.full_height_section}
		>
			<div className="full-height-section-content snap-center">
				{children}
			</div>
		</div>
	);
}
