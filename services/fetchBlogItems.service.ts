import { gql } from "@apollo/client";

import client from "../utils/apolloClient";

export interface BlogItem {
	dateAdded: string;
	slug: string;
	url: string;
	title: string;
	coverImage: string;
}

const fetchBlogItems = async (limit: number = 10): Promise<BlogItem[]> => {
	const { data } = await client("https://api.hashnode.com").query({
		query: gql`
			query {
				user(username: "nabilridhwan") {
					_id
					name
					publication {
						title
						posts {
							title
							slug
							dateAdded
							coverImage
							slug
						}
					}
				}
			}
		`,
	});

	const clonedData = { ...data };

	let {
		user: {
			name,
			publication: { posts },
		},
	} = clonedData;

	posts = posts.map((post: any) => ({
		...post,
		url: `https://blog.nabilridhwan.com/${post.slug}`,
	}));

	console.log(clonedData);

	return posts;
};

export default fetchBlogItems;
