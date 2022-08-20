import { motion } from 'framer-motion';
import { NextComponentType } from 'next';
import { ReactNode } from 'react';
const FadeInSection: NextComponentType<{}, {}, { children: ReactNode }> = ({
	children,
}) => {
	return <motion.section>{children}</motion.section>;
};

export default FadeInSection;
