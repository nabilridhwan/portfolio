'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface TemplateProps {
	children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
	const pathname = usePathname();

	return (
		<motion.div
			key={pathname}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			{children}
		</motion.div>
	);
}
