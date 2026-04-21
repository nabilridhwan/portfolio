import createImageUrlBuilder, {
	type SanityImageSource,
} from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
	projectId: "n4raszbf",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false,
});

const { dataset, projectId } = client.config();

export function urlFor(source: SanityImageSource) {
	if (!projectId || !dataset) {
		return null;
	}

	return createImageUrlBuilder({ projectId, dataset }).image(source);
}
