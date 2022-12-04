import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import fetchBlogItems from "../../services/fetchBlogItems.service";
import BlogItemComponent from "../BlogItem";
import Carousel from "../Carousel";
import LoadingSpinner from "../LoadingSpinner";

export default function BlogSection() {
	const [error, setError] = useState(false);

	const { data, isLoading, status } = useQuery(
		["getBlogItems"],
		async () => await fetchBlogItems(10),
		{
			refetchOnMount: true,
			refetchOnWindowFocus: true,
			staleTime: 1000 * 15,
		}
	);

	useEffect(() => {
		if (status === "error") {
			setError(true);
		}
	}, [status]);

	return (
		<div className="w-full">
			{/* Grid */}

			{isLoading && <LoadingSpinner />}

			{!error && data && data?.length > 0 && (
				<Carousel numberOfItems={data.length} itemsToMoveBy={1}>
					{data.map((item, index) => (
						<BlogItemComponent key={index} {...item} />
					))}
				</Carousel>
			)}

			{error && (
				<p className="muted text-center py-10 text-sm">
					There was an error fetching the blog items. You can just
					view my blog:{" "}
					<a
						href="https://blog.nabilridhwan.com"
						target="_blank"
						rel="noreferrer"
						className="text-white underline"
					>
						blog.nabilridhwan.com
					</a>
				</p>
			)}
		</div>
	);
}
