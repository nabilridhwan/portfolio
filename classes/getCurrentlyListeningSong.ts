export default async function getCurrentlyListeningSong() {
	return fetch('/api/currently_listening', {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((json) => {
			console.log(json);
			return json.data;
		});
}
