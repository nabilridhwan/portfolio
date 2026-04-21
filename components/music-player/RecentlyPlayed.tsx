"use client";

import {useQuery} from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import getRecentlyPlayedSongs from "../../services/getRecentlyPlayedSongs.service";
import {MusicPlayerProps} from "./CurrentlyPlayed";

export function RecentlyPlayed({setError, setType}: MusicPlayerProps) {
    const [imageUrl, setImageUrl] = useState("");
    const [spotifyLink, setSpotifyLink] = useState("");
    const [songName, setSongName] = useState("");
    const [artistString, setArtistString] = useState("");
    const [playedAt, setPlayedAt] = useState("");

    const {data, status} = useQuery({
        queryKey: ["getRecentlyPlayedSongs"],
        queryFn: async () => await getRecentlyPlayedSongs(),
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        staleTime: 1000 * 15,
    });

    useEffect(() => {
        if (status === "pending") {
            setType('recent');
        }

        if (status === "success") {
            if (!data || Object.keys(data).length === 0) {
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
    }, [data, setError, setType, status]);

    return (
        <Link href={spotifyLink}>
            <div className="flex items-center gap-3 cursor-pointer">
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={songName}
                        width={30}
                        height={30}
                        className="aspect-square rounded-md border border-white"
                    />
                )}

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
