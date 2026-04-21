import {ReactNode} from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container = ({children}: ContainerProps) => {
    return (
        <div className="max-w-6xl mx-auto px-[30px]">
            {children}
        </div>
    );
};

export default Container;
