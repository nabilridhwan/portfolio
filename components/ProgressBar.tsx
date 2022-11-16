import { motion } from "framer-motion";

const Progress = ({ progress }: { progress: number }) => {
	return (
		<div className="">
			<motion.div
				className="w-full h-5 bg-gray-300 rounded-full"
				initial={{ width: 0 }}
				animate={{ width: progress * 3, transition: { duration: 2 } }}
			/>
		</div>
	);
};

export default Progress;
