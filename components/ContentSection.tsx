import { motion } from 'framer-motion';
import { NextComponentType } from 'next';
import { ReactNode } from 'react';
const ContentSection: NextComponentType<{}, {}, { children: ReactNode }> = ({
	children,
}) => {
	return <motion.section className="my-20">{children}</motion.section>;
};

export default ContentSection;
