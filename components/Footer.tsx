import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="mt-50 mb-22.5 text-xs ">
			<div className="flex justify-center gap-3">
				<Link href="https://github.com/nabilridhwan/portfolio" className={'text-white/30'}>
					Designed and built with &lt;3&nbsp;by Nabil. And it&apos;s not vibecoded. This design was made before the vibecoding era!
				</Link>
			</div>
		</footer>
	);
}
