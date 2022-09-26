import axios from 'axios';
export default async function getRecentlyPlayedSongs() {
	const data = await axios.get('/api/recently_played', {
		method: 'GET',
	});

	return data.data.data;
}
