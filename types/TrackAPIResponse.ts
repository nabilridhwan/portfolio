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