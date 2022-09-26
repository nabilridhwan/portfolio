import axios from 'axios';
export default async function getCurrentlyListeningSong() {
	const data = await axios.get('/api/currently_listening', {
		method: 'GET',
	});

	return data.data.data;
}
