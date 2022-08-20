export default async function getCurrentlyListeningSong() {
	return fetch('https://nabil-utils.netlify.app/api/currentlyListening', {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((json) => {
			console.log(json);
			return json;
		});
}
