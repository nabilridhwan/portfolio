import {motion} from "framer-motion";
import {useState} from "react";
import CurrentlyPlaying from "../music-player/CurrentlyPlayed";
import {RecentlyPlayed} from "../music-player/RecentlyPlayed";
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Component to wrap and fetch data
const MusicPlayerSection = () => {
    const [error, setError] = useState(false);
    const [type, setType] = useState<"current" | "recent">('current');

    if (error) {
        return <></>
    }

    return (
        <motion.div
            initial={{opacity: 0, y: -30}}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    type: "tween",
                    ease: "easeOut",
                    duration: 0.5,
                    delay: 0.2,
                },
            }}
            exit={{
                y: 30,
                opacity: 0,
            }}
            className="w-fit max-w-[310px] absolute -top-5 -right-5"
        >
            <div
                className="rounded-[20px] border-[4px] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] border-black px-4 py-2 bg-accent">
                {type === 'current' && !error && (
                    <CurrentlyPlaying setError={setError} setType={setType}/>
                )}

                {(type === 'recent' || error) && (
                    <RecentlyPlayed setError={setError} setType={setType}/>
                )}
            </div>
        </motion.div>
    );
};


export default MusicPlayerSection;
