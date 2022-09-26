import { AnimatePresence, motion } from 'framer-motion';
import { NextComponentType } from 'next';
import { useEffect, useState } from 'react';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useQuery } from '@tanstack/react-query';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { Audio } from 'react-loader-spinner';
import getCurrentlyListeningSong from '../services/getCurrentlyListeningSong.service';
import getRecentlyPlayedSongs from '../services/getRecentlyPlayedSongs.service';

// Component to wrap and fetch data
const MusicPlayer: NextComponentType<{}, {}, {}> = () => {
	const [error, setError] = useState(true);
	const [isCurrentlyListening, setIsCurrentlyListening] = useState(false);
	const [imageUrl, setImageUrl] = useState();
	const [spotifyLink, setSpotifyLink] = useState();
	const [songName, setSongName] = useState();
	const [artistString, setArtistString] = useState();

	const { data, isLoading, status } = useQuery(
		['getCurrentlyListeningSong'],
		async () => await getCurrentlyListeningSong(),
		{
			refetchOnMount: true,
			refetchOnWindowFocus: true,
			refetchInterval: 1000 * 15, // 15 seconds
			staleTime: 1000 * 15,
		}
	);

	useEffect(() => {
		if (status === 'loading') {
			setIsCurrentlyListening(false);
		}

		if (status === 'success') {
			if (Object.keys(data).length === 0) {
				setIsCurrentlyListening(false);
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
		}

		if (status === 'error') {
			setIsCurrentlyListening(false);
			setError(true);
		}
	}, [status, data]);

	return (
		<AnimatePresence mode="sync">
			{isLoading ||
				(!isCurrentlyListening && <div className="my-20 h-1" />)}
			{isCurrentlyListening && !error && (
				<CurrentlyPlayingMusicPlayerComponent
					imageUrl={imageUrl!}
					spotifyLink={spotifyLink!}
					songName={songName!}
					artistString={artistString!}
				/>
			)}

			{!isCurrentlyListening && <RecentlyPlayedMusicPlayerComponent />}
		</AnimatePresence>
	);
};

type MusicPlayerComponentProps = {
	imageUrl: string;
	spotifyLink: string;
	songName: string;
	artistString: string;
};

function CurrentlyPlayingMusicPlayerComponent({
	imageUrl,
	spotifyLink,
	songName,
	artistString,
}: MusicPlayerComponentProps) {
	return (
		<motion.div
			key={'1'}
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

			<div>
				<p className="text-sm text-center my-3">
					I&apos;m currently listening to{' '}
					<Link href={spotifyLink}>
						<a>
							<span className="text-white underline cursor-pointer">
								{songName} by {artistString}
							</span>

							{/* <img
								src={imageUrl}
								alt={songName}
								className="mt-1 md:mt-0 ml-2 border-[0.8px] border-white w-6 h-6 inline"
							/> */}
						</a>
					</Link>
				</p>
			</div>
		</motion.div>
	);
}

function RecentlyPlayedMusicPlayerComponent() {
	const [error, setError] = useState(true);
	const [isRecentlyPlayed, setIsRecentlyPlayed] = useState(false);
	const [imageUrl, setImageUrl] = useState('');
	const [spotifyLink, setSpotifyLink] = useState('');
	const [songName, setSongName] = useState('');
	const [artistString, setArtistString] = useState('');
	const [playedAt, setPlayedAt] = useState('');

	const { data, isLoading, status } = useQuery(
		['getRecentlyPlayedSongs'],
		async () => await getRecentlyPlayedSongs(),
		{
			refetchOnMount: true,
			refetchOnWindowFocus: true,
			staleTime: 1000 * 15,
		}
	);

	useEffect(() => {
		if (status === 'loading') {
			setIsRecentlyPlayed(false);
		}

		if (status === 'success') {
			if (Object.keys(data).length === 0) {
				setIsRecentlyPlayed(false);
				return;
			}

			let track = data[0];

			const image_url = track.album_image;
			const spotify_link = track.url;
			const song_name = track.track;
			const artist_string = track.artists;
			const played_at = track.played_at;

			setImageUrl(image_url);
			setSpotifyLink(spotify_link);
			setSongName(song_name);
			setArtistString(artist_string);
			setPlayedAt(played_at);

			setError(false);
			setIsRecentlyPlayed(true);
		}

		if (status === 'error') {
			setIsRecentlyPlayed(false);
			setError(true);
		}
	}, [status, data]);

	return (
		<motion.div
			key={'2'}
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
			className="my-10 text-white/70 flex flex-col items-center gap-2"
		>
			{isRecentlyPlayed && (
				<>
					{/* <Audio
						height="20"
						width="20"
						color="white"
						ariaLabel="audio-waveform"
						// wrapperStyle={{}}
						// wrapperClass="wrapper-class"
						visible={true}
					/> */}

					<div>
						<p className="text-sm text-center my-3">
							I was listening to{' '}
							<Link href={spotifyLink}>
								<a>
									<span className="text-white underline cursor-pointer">
										{songName} by {artistString}
									</span>
									{/* <img
								src={imageUrl}
								alt={songName}
								className="mt-1 md:mt-0 ml-2 border-[0.8px] border-white w-6 h-6 inline"
							/> */}
								</a>
							</Link>{' '}
							{DateTime.fromISO(playedAt).toRelative()}
						</p>
					</div>
				</>
			)}
		</motion.div>
	);
}

export default MusicPlayer;
