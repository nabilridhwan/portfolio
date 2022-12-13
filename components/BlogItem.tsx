import { motion } from "framer-motion";
import { DateTime } from "luxon";
import Link from "next/link";
import { forwardRef } from "react";
import { BlogItem } from "../services/fetchBlogItems.service";

const BlogItemComponent = forwardRef<HTMLDivElement, BlogItem>(
	({ dateAdded, slug, url, title, brief, coverImage }, ref) => {
		return (
			<>
				{/* Blog item */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.5 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="p-4 rounded-2xl relative space-y-4"
				>
					<p className="muted before:border before:border-l before:border-muted">
						<span className="ml-3 muted">
							{DateTime.fromISO(dateAdded).toFormat(
								"LLLL d, yyyy"
							)}
						</span>
					</p>

					<div className="space-y-1">
						<p>{title}</p>

						<p className="muted line-clamp-2">{brief}</p>
					</div>

					<Link href={url}>
						<p className="text-accent cursor-pointer">
							Read Article &gt;
						</p>
					</Link>
				</motion.div>
			</>
		);
	}
);

BlogItemComponent.displayName = "BlogItemComponent";

export default BlogItemComponent;
