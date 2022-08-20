import { AnimatePresence, motion } from 'framer-motion';
import { NextComponentType } from 'next';
import { useState } from 'react';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Audio } from 'react-loader-spinner';
import getCurrentlyListeningSong from '../classes/getCurrentlyListeningSong';

// Component to wrap and fetch data
const MusicPlayer: NextComponentType<{}, {}, {}> = () => {
	const [error, setError] = useState(true);
	const [isCurrentlyListening, setIsCurrentlyListening] = useState(false);
	const [imageUrl, setImageUrl] = useState();
	const [spotifyLink, setSpotifyLink] = useState();
	const [songName, setSongName] = useState();
	const [artistString, setArtistString] = useState();

	const query = useQuery(
		['getCurrentlyListeningSong'],
		async () => await getCurrentlyListeningSong(),
		{
			refetchOnMount: true,
			refetchOnWindowFocus: true,
			refetchInterval: 1000 * 15, // 15 seconds
			staleTime: 1000 * 15,
			onSuccess: (data) => {
				if (Object.keys(data).length === 0) {
					return;
				}

				const image_url = data.item?.album.images[2].url;
				const spotify_link = data.item?.external_urls.spotify;
				const song_name = data.item?.name;
				const artist_string = data.item?.artists
					.map((a: any) => a.name)
					.join(', ');

				setImageUrl(image_url);
				setSpotifyLink(spotify_link);
				setSongName(song_name);
				setArtistString(artist_string);

				setError(false);

				setIsCurrentlyListening(true);
			},

			onError: () => {
				setError(true);
			},
		}
	);

	return (
		<AnimatePresence mode="sync">
			{isCurrentlyListening && !error && (
				<MusicPlayerComponent
					imageUrl={imageUrl!}
					spotifyLink={spotifyLink!}
					songName={songName!}
					artistString={artistString!}
				/>
			)}
		</AnimatePresence>
	);
};

type MusicPlayerComponentProps = {
	imageUrl: string;
	spotifyLink: string;
	songName: string;
	artistString: string;
};

function MusicPlayerComponent({
	imageUrl,
	spotifyLink,
	songName,
	artistString,
}: MusicPlayerComponentProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
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
			className="my-10 text-white/70 flex flex-col items-center gap-2"
		>
			<Audio
				height="20"
				width="20"
				color="white"
				ariaLabel="audio-waveform"
				// wrapperStyle={{}}
				// wrapperClass="wrapper-class"
				visible={true}
			/>
			<p className="text-sm text-center my-3">
				I&apos;m currently listening to{' '}
				<Link href={spotifyLink}>
					<span className="text-white underline cursor-pointer">
						{songName} by {artistString}
					</span>
				</Link>
			</p>
		</motion.div>
	);
}

export default MusicPlayer;
