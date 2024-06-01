import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import getCurrentlyListeningSong from "../../services/getCurrentlyListeningSong.service";
import Link from "next/link";
import AudioAnimated from "../AudioAnimated";

export interface MusicPlayerProps {
    setError: (error: boolean) => void;
    setType: (type: "current" | "recent") => void;
}

export default function CurrentlyPlaying({setError, setType}: MusicPlayerProps) {
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

