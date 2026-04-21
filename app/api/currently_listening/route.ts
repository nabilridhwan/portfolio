import { NextResponse } from "next/server";
import Spotify from "../../../lib/Spotify";

export const dynamic = "force-dynamic";

export async function GET() {
	try {
		const { access_token } = await Spotify.getAccessToken(
			process.env.REFRESH_TOKEN!,
		);

		const data = await Spotify.getCurrentlyListening(access_token);
		return NextResponse.json({ data });
	} catch (error) {
		return NextResponse.json({ data: error }, { status: 500 });
	}
}
