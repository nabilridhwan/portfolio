import { NextResponse } from "next/server";
import Spotify from "../../../lib/Spotify";

export const dynamic = "force-dynamic";

export async function GET() {
	try {
		const { access_token } = await Spotify.getAccessToken(
			process.env.REFRESH_TOKEN!,
		);

		const data = await Spotify.getRecentlyPlayedSongs(access_token);
		const tracks = data.map((track: any) => ({
			played_at: track.played_at,
			artists: track.track.artists.map((artist: any) => artist.name).join(", "),
			track: track.track.name,
			album: track.track.album.name,
			album_image: track.track.album.images[0].url,
			url: track.track.external_urls.spotify,
		}));

		return NextResponse.json({ data: tracks });
	} catch (error) {
		return NextResponse.json({ data: error }, { status: 500 });
	}
}
