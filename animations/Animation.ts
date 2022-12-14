export namespace AnimationVariants {
	export const fadeFromBottom = {
		initial: {
			y: 100,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
				staggerChildren: 1,
			},
		},
		exit: {
			y: 100,
			opacity: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};
}
