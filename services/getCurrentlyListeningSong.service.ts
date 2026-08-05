import {TrackAPIResponse} from "../types";

export default async function getCurrentlyListeningSong() {
	return fetch('https://track.nabilridhwan.com', {
		method: 'GET',
	}).then(res => res.json()) as unknown as TrackAPIResponse
}
