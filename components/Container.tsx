import type {NextPage} from "next";
import {ReactNode} from "react";

const Container: NextPage<{ children: ReactNode }> = ({children}) => {
    return (
        <div className="max-w-6xl mx-auto px-[30px]">
            {/* <div className="bg-primary border border-white/10 top-0 min-h-screen lg:max-w-[65%] max-w-full fixed"></div> */}
            {children}

            {/*<div className="px-10 lg:px-10">{children}</div>*/}
        </div>
    );
};

export default Container;
