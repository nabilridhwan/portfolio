import type { NextPage } from 'next';
import { ReactNode } from 'react';

const Container: NextPage<{ children: ReactNode }> = ({ children }) => {
	return <div className="container">{children}</div>;
};

export default Container;
