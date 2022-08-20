import { motion } from 'framer-motion';
import { IoArrowDown } from 'react-icons/io5';
export default function ArrowDownIndicator() {
	return (
		<motion.p
			className="flex items-center justify-center"
			initial={{ y: 30 }}
			animate={{
				y: 60,
				transition: {
					repeat: Infinity,
					repeatType: 'reverse',
					type: 'tween',
					ease: 'easeInOut',
					duration: 1.1,
				},
			}}
		>
			<IoArrowDown />
		</motion.p>
	);
}
