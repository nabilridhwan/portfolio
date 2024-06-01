import CountUp from "react-countup";

/**
 * A figure component that shows a number and a caption (e.g. 3+ Years of Professional Experience)
 */

// TODO: Complete the type to show the sign
interface FigureProps {
    number: string;
    type?: 'gt' | 'lt' | 'estimated' | 'gte' | 'lte';
    caption: string;
}

export default function Figure({number, caption}: FigureProps) {
    return (
        <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-7xl font-bold bg-gradient-to-b from-white to-primarydark bg-clip-text text-transparent">
                <CountUp
                    className={"text-7xl font-bold bg-gradient-to-b from-white to-primarydark bg-clip-text text-transparent"}
                    end={
                        parseInt(number)
                    } duration={2} separator=","/>
                +
            </h1>
            <p className={'text-white/40'}>{caption}</p>
        </div>
    )
}
