import Image from 'next/image';

interface TestimonialComponentProps {
	name: string;
	position: string;
	testimonial: string;
	image: string;
}

export default function Testimonial(props: TestimonialComponentProps) {
	return (
		<div>
			<p className={'italic pb-5'}>&quot;{props.testimonial}&quot;</p>{' '}
			<div className="mt-3 flex items-center gap-2">
				<Image width={40} height={40} src={props.image} alt={props.name} className="rounded-full" />
				<div className={''}>
					<p className={'font-bold'}>{props.name}</p>
					<p className="text-sm opacity-50">{props.position}</p>
				</div>
			</div>
		</div>
	);
}
