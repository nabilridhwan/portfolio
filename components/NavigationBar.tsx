import classNames from "classnames";
import {motion} from "framer-motion";
import Link from "next/link";
import {useRouter} from "next/router";
import {ReactNode} from "react";

interface NavbarLink {
    icon?: ReactNode;
    displayItem: ReactNode;
    link: string;
}

const navbarItems: NavbarLink[] = [
    {
        displayItem: "Home",
        link: "/",
    },
    {
        displayItem: "Projects",
        link: "/projects",
    },
    {
        displayItem: "Blog",
        link: "https://blog.nabilridhwan.com",
    },

    // {
    // 	displayItem: "Resume",
    // 	link: "/resume",
    // },

    // {
    //     displayItem: "About",
    //     link: "/about",
    // },
];

const NavigationBar = () => {
    const router = useRouter();
    return (
        <nav
            className="bg-primarylight w-fit p-5 py-0 my-[20px] drop-shadow-[0px_0px_30px_rgba(0,0,0,1)] rounded-full border border-muted/20 text-sm overflow-hidden fixed bottom-0 z-[999]">
            <ul className="flex gap-8">
                {navbarItems.map((item, index) => (
                    <li
                        key={index}
                        className=" text-muted py-3 hover:text-white transition-all relative"
                    >
                        <Link href={item.link} className={`py-3 transition-all ${classNames({
                            "font-bold text-white/80":
                                router.route === item.link,
                        })}`}>
                            {item.displayItem}
                        </Link>

                        <motion.div
                            key={router.route}
                            initial={{height: 0, opacity: 0}}
                            animate={{
                                opacity:
                                    router.route === item.link ? "100" : "0",
                                y: router.route === item.link ? "0" : "-10",
                            }}
                            className="w-full bg-accent absolute bottom-0 blur-sm h-px"
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;
