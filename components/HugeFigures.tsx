interface HugeFiguresProps {
    number: string;
    caption: string;
}

export default function HugeFigures({number, caption}: HugeFiguresProps) {
    return (
        <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-7xl font-bold bg-gradient-to-b from-white to-primarydark bg-clip-text text-transparent">{number}</h1>
            <p className={'text-white/40'}>{caption}</p>
        </div>
    )
}
