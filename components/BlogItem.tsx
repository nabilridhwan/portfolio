import { DateTime } from "luxon";
import Link from "next/link";
import { forwardRef } from "react";
import { BlogItem } from "../services/fetchBlogItems.service";

const BlogItemComponent = forwardRef<HTMLDivElement, BlogItem>(
	({ dateAdded, slug, url, title, coverImage }, ref) => {
		return (
			<>
				{/* Blog item */}
				<div className="p-4 rounded-2xl relative space-y-4">
					<p className="muted before:border before:border-l before:border-muted">
						<span className="ml-3 muted">
							{DateTime.fromISO(dateAdded).toFormat(
								"dd LLL yyyy"
							)}
						</span>
					</p>

					<div className="space-y-1">
						<p>{title}</p>

						<p className="muted">
							Strongly typing, Debugging, Security and End-to-end
							encryption.
						</p>
					</div>

					<Link href={url}>
						<p className="text-accent">Read Article &gt;</p>
					</Link>
				</div>
			</>
		);
	}
);

BlogItemComponent.displayName = "BlogItemComponent";

export default BlogItemComponent;
