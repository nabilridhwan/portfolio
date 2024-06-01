import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-[200px] mb-[90px] text-sm">
            <div className="flex justify-center gap-3 text-muted italic">
                <Link href="https://github.com/nabilridhwan/portfolio">
                    this site is designed and coded with ❤️&nbsp;&nbsp;by Nabil
                </Link>
            </div>
        </footer>
    );
}
