import type {NextPage} from "next";
import {ReactNode} from "react";

const Container: NextPage<{ children: ReactNode }> = ({children}) => {
    return (
        <div className="max-w-6xl mx-auto px-[30px]">
            {children}
        </div>
    );
};

export default Container;
