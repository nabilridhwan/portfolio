// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Spotify from '../../classes/Spotify';

type Data = {
	data: any;
	error?: any;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	try {
		const { access_token } = await Spotify.getAccessToken(
			process.env.REFRESH_TOKEN!
		);

		const data = await Spotify.getRecentlyPlayedSongs(access_token);

		const d = data.map((track: any) => ({
			played_at: track.played_at,
			artists: track.track.artists
				.map((artist: any) => artist.name)
				.join(', '),
			track: track.track.name,
			album: track.track.album.name,
			album_image: track.track.album.images[0].url,
			url: track.track.external_urls.spotify,
		}));

		return res.status(200).json({ data: d });
	} catch (error: any) {
		return res.status(500).json({ data: error });
	}
}
