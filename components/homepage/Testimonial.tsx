import Image from "next/image";

interface TestimonialComponentProps {
    name: string;
    position: string;
    testimonial: string;
    image: string;
}

export default function Testimonial(props: TestimonialComponentProps) {

    return (
        <div>
            <p className={'italic font-bold'}>&quot;{props.testimonial}&quot;</p>

            <div className="mt-3 flex items-center gap-2">
                <Image width={40} height={40} src={props.image} alt={props.name} className="rounded-full"/>
                <div className={'opacity-50'}>
                    <p>{props.name}</p>
                    <p>{props.position}</p>
                </div>
            </div>
        </div>
    )

}
