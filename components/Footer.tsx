import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 text-sm">
            <div className="flex justify-center gap-3 text-muted">
                <Link href="https://github.com/nabilridhwan/portfolio">
                    Made with &lt;3 by Nabil
                </Link>
            </div>
        </footer>
    );
}
