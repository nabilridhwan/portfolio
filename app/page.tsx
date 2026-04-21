import { SanityDocument } from "next-sanity";
import HomePage from "./home-page";
import { client, urlFor } from "../sanity-client";

export const metadata = {
	title: "Home",
};

export const dynamic = "force-dynamic";

async function getSkills() {
	const query = `*[_type == "overallTechStack"][0] {skills}`;
	const result = await client.fetch<{ skills?: string[] }>(query);
	return result.skills ?? [];
}

async function getTestimonials() {
	const query = `*[
  _type == "testimonial"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, image, testimonial, name, role, publishedAt}`;
	const testimonialData = await client.fetch<SanityDocument[]>(query, {});

	return testimonialData.map((testimonial) => ({
		_id: testimonial._id,
		name: testimonial.name,
		role: testimonial.role,
		testimonial: testimonial.testimonial,
		image: urlFor(testimonial.image)?.width(1200).url() ?? "",
	}));
}

export default async function Page() {
	const [skills, testimonials] = await Promise.all([
		getSkills(),
		getTestimonials(),
	]);

	return <HomePage skills={skills} testimonials={testimonials} />;
}
