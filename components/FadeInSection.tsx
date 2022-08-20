import { NextComponentType } from 'next';
import { ReactNode } from 'react';
const FadeInSection: NextComponentType<{}, {}, { children: ReactNode }> = ({
	children,
}) => {
	return <section>{children}</section>;
};

export default FadeInSection;
