import {motion} from "framer-motion";
import {NextComponentType} from "next";
import {ReactNode, useEffect, useState} from "react";
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {useQuery} from "@tanstack/react-query";
import {DateTime} from "luxon";
import Link from "next/link";
import {IoHeadsetOutline} from "react-icons/io5";
import getCurrentlyListeningSong from "../../services/getCurrentlyListeningSong.service";
import getRecentlyPlayedSongs from "../../services/getRecentlyPlayedSongs.service";
import Image from "next/image";
import AudioAnimated from "../AudioAnimated";

// Component to wrap and fetch data
const MusicPlayerSection = () => {
    const [error, setError] = useState(false);
    const [type, setType] = useState<"current" | "recent">('current');

    if (error) {
        return <></>
    }

    return (
        <motion.div
            initial={{opacity: 0, y: -30}}
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
            className="w-fit max-w-[310px] absolute -top-5 -right-5"
        >
            <div
                className="rounded-[20px] border-[4px] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] border-black px-4 py-2 bg-accent">
                {type === 'current' && !error && (
                    <CurrentlyPlaying setError={setError} setType={setType}/>
                )}

                {(type === 'recent' || error) && (
                    <RecentlyPlayed setError={setError} setType={setType}/>
                )}
            </div>
        </motion.div>
    );
};

interface MusicPlayerProps {
    setError: (error: boolean) => void;
    setType: (type: "current" | "recent") => void;
}

function CurrentlyPlaying({setError, setType}: MusicPlayerProps) {
    const [imageUrl, setImageUrl] = useState('');
    const [spotifyLink, setSpotifyLink] = useState('');
    const [songName, setSongName] = useState('');
    const [artistString, setArtistString] = useState('');

    const {data, isLoading, status} = useQuery(
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
        if (status === "success") {
            if (Object.keys(data).length === 0) {
                setType('recent')
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
            setType('current');
        }

        if (status === "error") {
            setType('recent');
            setError(true);
        }
    }, [status, data]);

    return (
        <Link href={spotifyLink}>
            <div className="flex items-center gap-3 cursor-pointer">
                <AudioAnimated/>

                <img
                    src={imageUrl}
                    alt={songName}
                    className="aspect-square w-[30px] rounded-md border border-white"
                />

                <div className={'flex-col flex gap-0'}>
                    <p className="italic font-bold text-sm line-clamp-1">
                        {songName}
                    </p>

                    <span className={'text-xs text-white/70'}>{artistString}</span>
                </div>
            </div>
        </Link>
    );
}

function RecentlyPlayed({setError, setType}: MusicPlayerProps) {
    const [imageUrl, setImageUrl] = useState("");
    const [spotifyLink, setSpotifyLink] = useState("");
    const [songName, setSongName] = useState("");
    const [artistString, setArtistString] = useState("");
    const [playedAt, setPlayedAt] = useState("");

    const {data, isLoading, status} = useQuery(
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
            setType('recent');
        }

        if (status === "success") {
            if (Object.keys(data).length === 0) {
                setError(true);
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
            setType('recent');
        }

        if (status === "error") {
            setError(true);
        }
    }, [status, data]);

    return (
        <Link href={spotifyLink}>
            <div className="flex items-center gap-3 cursor-pointer">
                <img
                    src={imageUrl}
                    alt={songName}
                    className="aspect-square w-[30px] rounded-md border border-white"
                />

                <div className={'flex-col flex gap-0'}>
                    <p className="italic font-bold text-sm line-clamp-1">
                        {songName}
                    </p>

                    <span className={'text-xs text-white/70'}>{artistString}</span>
                </div>
            </div>
        </Link>
    );
}

export default MusicPlayerSection;
