import Image, { StaticImageData } from "next/image";

interface ExperienceProps {
	image: StaticImageData;
	institution: string;
	role: string;
	start: string;
	end: string;
	description?: string;
}

export default function Experience({
	image,
	institution,
	role,
	start,
	end,
	description,
}: ExperienceProps) {
	return (
		<div className="flex gap-2 items-center w-full">
			<div className="w-10">
				<Image
					src={image}
					className="absolute rounded-full"
					alt={institution}
				/>
			</div>

			<div className="flex-1">
				<p className="text-sm">{institution}</p>
				<p className="text-xs muted">{role}</p>

				<p className="text-xs muted">
					{start}—{end}
				</p>
			</div>
		</div>
	);
}
