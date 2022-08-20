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

		const data = await Spotify.getCurrentlyListening(access_token);
		return res.status(200).json({ data });
	} catch (error: any) {
		return res.status(500).json({ data: error });
	}
}
