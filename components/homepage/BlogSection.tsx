import { motion } from 'framer-motion';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { IoLink } from 'react-icons/io5';
import fetchBlogItems, {
	BlogItem,
} from '../../services/fetchBlogItems.service';

export default function BlogSection() {
	const [blogItems, setBlogItems] = useState<BlogItem[] | []>([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const posts = await fetchBlogItems();
				setBlogItems(posts);
				setError(false);
			} catch (error) {
				setError(true);
			}
		})();
	}, []);

	return (
		<div className="w-full">
			{/* Grid */}

			{!error && (
				<div className="grid md:grid-cols-2 gap-5">
					{blogItems.length > 0 &&
						blogItems &&
						blogItems.map((item, i) => (
							<motion.div
								key={i}
								whileHover={{
									scale: 1.03,
									cursor: 'pointer',
								}}
								whileTap={{ scale: 0.9 }}
								onClick={() => {
									window.location.href = item.url;
								}}
								className="relative rounded-xl border border-white/20"
							>
								<img
									src={item.coverImage}
									className="rounded-xl"
									alt="Album cover image"
								/>

								{/* Gradient overlay */}
								<div className="absolute rounded-xl w-full h-full bg-gradient-to-b from-transparent to-black top-0 left-0" />

								{/* Text content */}
								<div className="absolute bottom-5 px-4">
									<h1 className="text-lg lg:text-3xl font-bold leading-snug">
										{item.title}
									</h1>

									{/* Bottom items */}
									<div className="flex justify-between my-2">
										<p className="font-light">
											{DateTime.fromISO(
												item.dateAdded
											).toRelative()}
										</p>

										<p className="font-light">
											Read More
											<IoLink className="inline ml-1 -rotate-45" />
										</p>
									</div>
								</div>
							</motion.div>
						))}
				</div>
			)}

			{error && (
				<p className="muted text-center py-10 text-sm">
					There was an error fetching the blog items. You can just
					view my blog on{' '}
					<a
						href="https://blog.nabilridhwan.com"
						target="_blank"
						rel="noreferrer"
						className="text-white underline"
					>
						https://blog.nabilridhwan.com
					</a>
				</p>
			)}
		</div>
	);
}
