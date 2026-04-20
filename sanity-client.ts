import { createClient } from "next-sanity";

export const client = createClient({
	projectId: "n4raszbf",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false,
});
