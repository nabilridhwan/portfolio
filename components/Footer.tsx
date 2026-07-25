import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="mt-[200px] mb-[90px] text-xs ">
			<div className="flex justify-center gap-3">
				<Link href="https://github.com/nabilridhwan/portfolio" className={'text-white/30'}>
					Designed and built with &lt;3&nbsp;by Nabil
				</Link>
			</div>
		</footer>
	);
}
