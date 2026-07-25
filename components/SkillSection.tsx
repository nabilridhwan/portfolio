import { motion, MotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

const SkillSection = ({
	xTranslation,
	skills,
	ref,
}: {
	xTranslation: MotionValue<number>;
	skills: string[];
	ref: ReturnType<typeof useMeasure>[0];
}) => {
	return (
		<section className="relative overflow-clip">
			<div className="absolute bg-gradient-to-r from-primarydark to-transparent h-full w-[150px] z-[10]" />

			<div className="absolute bg-gradient-to-l from-primarydark to-transparent right-0 h-full w-[150px] z-[10]" />

			<motion.div style={{ x: xTranslation }} className="flex w-max items-center py-6">
				<div ref={ref} className="flex shrink-0 items-center gap-5 pr-5">
					{skills.map((skill, index) => (
						<span key={`${skill}-${index}`} className="whitespace-nowrap font-bold">
							{skill.toUpperCase()}
						</span>
					))}
				</div>

				<div aria-hidden="true" className="flex shrink-0 items-center gap-5 pr-5">
					{skills.map((skill, index) => (
						<span key={`${skill}-${index}`} className="whitespace-nowrap font-bold">
							{skill.toUpperCase()}
						</span>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default SkillSection;
