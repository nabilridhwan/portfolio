import axios from 'axios';

export default class Spotify {
	static async getAccessToken(refreshToken: string) {
		const formData = new URLSearchParams();
		formData.append('grant_type', 'refresh_token');
		formData.append('refresh_token', refreshToken);

		const tokenResponse = await axios({
			method: 'POST',
			url: 'https://accounts.spotify.com/api/token',
			data: formData,
			headers: {
				Authorization: `Basic ${Buffer.from(
					`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
				).toString('base64')}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});

		if (tokenResponse.data.error) {
			throw new Error(tokenResponse.data.error);
		} else {
			return tokenResponse.data;
		}
	}

	static async getCurrentlyListening(accessToken: string) {
		const response = await axios({
			method: 'GET',
			url: `https://api.spotify.com/v1/me/player/currently-playing`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		if (!response.data || !response.data.item) {
			return {};
		}

		return response.data;
	}
}

module.exports = Spotify;
