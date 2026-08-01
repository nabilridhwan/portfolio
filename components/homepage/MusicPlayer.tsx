import { motion } from 'framer-motion';
import {useQuery} from "@tanstack/react-query";
import getCurrentlyListeningSong, {TrackAPIResponse} from "../../services/getCurrentlyListeningSong.service";
import Link from "next/link";
import AudioAnimated from "../AudioAnimated";
import Image from "next/image";

// Component to wrap and fetch data
const MusicPlayerSection = () => {
	const { data, status, error } = useQuery<TrackAPIResponse>({
		queryKey: ['getCurrentlyListeningSong'],
		queryFn: getCurrentlyListeningSong,
		refetchOnMount: true,
		refetchOnWindowFocus: true,
		refetchInterval: 1000 * 15,
		staleTime: 1000 * 15,
	});

	if (error || status !== 'success' || !data) {
		return <></>;
	}

	const track = data.track

	const imageUrl = track.images[1]['#text']
	const link = ''
	const songName = track.name
	const artistString = track.artistName
	const isCurrentlyPlaying = track.isCurrentlyPlaying

	return (
		<motion.div
			initial={{ opacity: 0, y: -30 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: {
					type: 'tween',
					ease: 'easeOut',
					duration: 0.5,
					delay: 0.2,
				},
			}}
			exit={{
				y: 30,
				opacity: 0,
			}}
			className="w-fit max-w-[320px] absolute -top-5 -right-5"
		>
			<div className="rounded-[20px] border-4 drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] border-black px-4 py-2 bg-accent">
				<Link href={link}>
					<div className="flex items-center gap-3 cursor-pointer">
						{isCurrentlyPlaying && (
							<AudioAnimated />
						)}

						{imageUrl && (
							<Image src={imageUrl} alt={songName || 'hi'} width={30} height={30} className="aspect-square rounded-md border border-white/50" />
						)}

						<div className={'flex-col flex gap-0'}>
							<p className="font-bold text-sm line-clamp-1">{songName}</p>

							<span className={'text-xs text-white/70'}>{artistString}</span>
						</div>
					</div>
				</Link>
			</div>
		</motion.div>
	);
};

export default MusicPlayerSection;
