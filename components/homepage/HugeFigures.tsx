import CountUp from "react-countup";

// TODO: Complete the type to show the sign
interface HugeFiguresProps {
    number: string;
    type?: 'gt' | 'lt' | 'estimated' | 'gte' | 'lte';
    caption: string;
}

export default function HugeFigures({number, caption}: HugeFiguresProps) {
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
