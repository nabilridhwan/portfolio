export interface TrackAPIResponse {
	track: {
		name: string;
		artistName: string;
		images: {
			size: "small" | "medium" | "large" | "extralarge";
			"#text": string;
		}[];
		isCurrentlyPlaying: boolean;
	};
}

export default async function getCurrentlyListeningSong() {
	return fetch('https://track.nabilridhwan.com', {
		method: 'GET',
	}).then(res => res.json()) as unknown as TrackAPIResponse
}
