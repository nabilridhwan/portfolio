import { motion } from "framer-motion";
import { NextComponentType } from "next";
import { ReactNode, useEffect, useState } from "react";
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import Link from "next/link";
import { IoHeadsetOutline } from "react-icons/io5";
import getCurrentlyListeningSong from "../../services/getCurrentlyListeningSong.service";
import getRecentlyPlayedSongs from "../../services/getRecentlyPlayedSongs.service";

// Component to wrap and fetch data
const MusicPlayerSection: NextComponentType<{}, {}, {}> = () => {
	const [error, setError] = useState(true);
	const [isCurrentlyListening, setIsCurrentlyListening] = useState(false);
	const [imageUrl, setImageUrl] = useState();
	const [spotifyLink, setSpotifyLink] = useState();
	const [songName, setSongName] = useState();
	const [artistString, setArtistString] = useState();

	const { data, isLoading, status } = useQuery(
		["getCurrentlyListeningSong"],
		async () => await getCurrentlyListeningSong(),
		{
			refetchOnMount: true,
			refetchOnWindowFocus: true,
			refetchInterval: 1000 * 15, // 15 seconds
			staleTime: 1000 * 15,
		}
	);

	useEffect(() => {
		if (status === "loading") {
			setIsCurrentlyListening(false);
		}

		if (status === "success") {
			if (Object.keys(data).length === 0) {
				setIsCurrentlyListening(false);
				return;
			}

			const image_url = data.item?.album.images[1].url;
			const spotify_link = data.item?.external_urls.spotify;
			const song_name = data.item?.name;
			const artist_string = data.item?.artists
				.map((a: any) => a.name)
				.join(", ");

			setImageUrl(image_url);
			setSpotifyLink(spotify_link);
			setSongName(song_name);
			setArtistString(artist_string);

			setError(false);

			setIsCurrentlyListening(true);
		}

		if (status === "error") {
			setIsCurrentlyListening(false);
			setError(true);
		}
	}, [status, data]);

	return (
		<>
			{isLoading && <div className="my-20 h-1" />}

			<AnimatedComponent>
				<div className="rounded-3xl border border-muted/30 p-8 w-full">
					<div className="flex items-center gap-2 mb-4 ">
						<IoHeadsetOutline className="text-muted" />

						<p className="text-muted">I&apos;m listening to</p>
					</div>

					{isCurrentlyListening && !error && (
						<CurrentlyPlayingMusicPlayerComponent
							imageUrl={imageUrl!}
							spotifyLink={spotifyLink!}
							songName={songName!}
							artistString={artistString!}
						/>
					)}

					{(!isCurrentlyListening || error) && (
						<RecentlyPlayedMusicPlayerComponent />
					)}
				</div>
			</AnimatedComponent>
		</>
	);
};

type MusicPlayerComponentProps = {
	imageUrl: string;
	spotifyLink: string;
	songName: string;
	artistString: string;
};

function AnimatedComponent({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -30 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: {
					type: "tween",
					ease: "easeOut",
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
			{children}
		</motion.div>
	);
}

function CurrentlyPlayingMusicPlayerComponent({
	imageUrl,
	spotifyLink,
	songName,
	artistString,
}: MusicPlayerComponentProps) {
	return (
		<>
			<Link href={spotifyLink}>
				<>
					<div className="flex items-center gap-5 cursor-pointer">
						<picture>
							<img
								src={imageUrl}
								alt={songName}
								className="aspect-square w-16 rounded-md"
							/>
						</picture>

						<div>
							<p className="text-white font-bold line-clamp-1">
								{songName}
							</p>
							<p className="muted line-clamp-1">{artistString}</p>
						</div>
					</div>

					<p className="text-sm text-right text-muted">Now</p>
				</>
			</Link>
			{/* <p className="text-xs my-2">Click to preview song!</p> */}
		</>
	);
}

function RecentlyPlayedMusicPlayerComponent() {
	const [error, setError] = useState(true);
	const [isRecentlyPlayed, setIsRecentlyPlayed] = useState(false);
	const [imageUrl, setImageUrl] = useState("");
	const [spotifyLink, setSpotifyLink] = useState("");
	const [songName, setSongName] = useState("");
	const [artistString, setArtistString] = useState("");
	const [playedAt, setPlayedAt] = useState("");

	const { data, isLoading, status } = useQuery(
		["getRecentlyPlayedSongs"],
		async () => await getRecentlyPlayedSongs(),
		{
			refetchOnMount: true,
			refetchOnWindowFocus: true,
			staleTime: 1000 * 15,
		}
	);

	useEffect(() => {
		if (status === "loading") {
			setIsRecentlyPlayed(false);
		}

		if (status === "success") {
			if (Object.keys(data).length === 0) {
				setIsRecentlyPlayed(false);
				return;
			}

			let track = data;

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

		if (status === "error") {
			setIsRecentlyPlayed(false);
			setError(true);
		}
	}, [status, data]);

	return (
		<>
			{isRecentlyPlayed && (
				<>
					<Link href={spotifyLink}>
						<>
							<div className="flex items-center gap-5 cursor-pointer">
								<picture>
									<img
										src={imageUrl}
										alt={songName}
										className="aspect-square w-16 rounded-md"
									/>
								</picture>

								<div>
									<p className="text-white font-bold line-clamp-1">
										{songName}
									</p>
									<p className="muted line-clamp-1">
										{artistString}
									</p>
								</div>
							</div>

							<p className="text-sm text-muted text-right">
								{DateTime.fromISO(playedAt).toRelative()}
							</p>
						</>
					</Link>
				</>
			)}
		</>
	);
}

export default MusicPlayerSection;
