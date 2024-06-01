import {gql} from "@apollo/client";

import client from "../lib/ApolloClient";

export interface BlogItem {
    dateAdded: string;
    slug: string;
    brief: string;
    url: string;
    title: string;
    coverImage: string;
}

const fetchBlogItems = async (limit: number = 10): Promise<BlogItem[]> => {
    const {data} = await client("https://gql.hashnode.com").query({
        query: gql`
            query Publication {
  publication(host: "blog.nabilridhwan.com") {
    isTeam
    title
    posts(first: 10) {
      edges {
        node {
          title
          brief
          url
        }
      }
    }
  }
}
		`,
    });

    const clonedData = {...data};

    let {
        data: {
            publication: {posts: {edges: posts}},
        },
    } = clonedData;

    // posts = posts.map((post: any) => ({
    //     ...post,
    //     url: `https://blog.nabilridhwan.com/${post.slug}`,
    // }));

    console.log('clonedData', clonedData);

    return clonedData;
};

export default fetchBlogItems;
