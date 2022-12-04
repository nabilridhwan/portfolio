import { motion } from "framer-motion";
import { DateTime } from "luxon";
import { forwardRef } from "react";
import { BlogItem } from "../services/fetchBlogItems.service";

const BlogItemComponent = forwardRef<HTMLDivElement, BlogItem>(
	({ dateAdded, slug, url, title, coverImage }, ref) => {
		return (
			<motion.div
				ref={ref}
				whileHover={{
					scale: 1.03,
					cursor: "pointer",
				}}
				whileTap={{ scale: 0.9 }}
				onClick={() => {
					window.location.href = url;
				}}
				className="w-[300px] md:w-[520px] h-[300px] md:h-[350px] relative rounded-xl border border-white/20"
			>
				{/* Cover image */}
				<picture>
					<img
						src={coverImage}
						className="rounded-xl h-full w-full object-cover"
						alt="Album cover image"
					/>
				</picture>

				{/* Gradient overlay */}
				<div className="absolute rounded-xl w-full h-full bg-gradient-to-b from-transparent to-black top-0 left-0" />

				{/* Text content */}
				<div className="absolute bottom-5 px-4 w-full">
					<h1 className="text-lg lg:text-3xl font-bold leading-snug">
						{title}
					</h1>

					{/* Bottom items */}
					<div className="flex justify-between my-2">
						<p className="font-light">
							{DateTime.fromISO(dateAdded).toRelative()}
						</p>

						<p className="font-light">Read More -&gt;</p>
					</div>
				</div>
			</motion.div>
		);
	}
);

BlogItemComponent.displayName = "BlogItemComponent";

export default BlogItemComponent;
