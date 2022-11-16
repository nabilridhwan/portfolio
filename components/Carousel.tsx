import { motion } from "framer-motion";
import { Children, cloneElement, useEffect, useRef, useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

interface CarouselProps {
	children?: React.ReactNode;
	itemsToMoveBy?: number;
	numberOfItems?: number;
}

const Carousel = ({
	children,
	itemsToMoveBy = 1,
	numberOfItems = 1,
}: CarouselProps) => {
	const mainCarouselRef = useRef<HTMLDivElement>(null);
	const firstItemRef = useRef<any>(null);
	const lastItemRef = useRef<HTMLDivElement>(null);

	const [firstItemVisible, setFirstItemVisible] = useState(false);
	const [lastItemVisible, setLastItemVisible] = useState(false);

	// A hook for the first item
	useEffect(() => {
		let firstItem: any;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setFirstItemVisible(true);
					} else {
						setFirstItemVisible(false);
					}
				});
			},
			{ threshold: 0.8 }
		);

		if (firstItemRef.current) {
			firstItem = firstItemRef.current;
			observer.observe(firstItemRef.current);
		}

		return () => {
			if (firstItem) {
				observer.unobserve(firstItem);
			}
		};
	}, [firstItemRef, children]);

	// A hook for the last item
	useEffect(() => {
		let lastItem: any;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setLastItemVisible(true);
					} else {
						setLastItemVisible(false);
					}
				});
			},
			{ threshold: 0.8 }
		);

		if (lastItemRef.current) {
			lastItem = lastItemRef.current;
			observer.observe(lastItemRef.current);
		}

		return () => {
			if (lastItem) {
				observer.unobserve(lastItem);
			}
		};
	}, [lastItemRef, children]);

	const scrollLeft = () => {
		const widthToMoveBy =
			firstItemRef.current.getBoundingClientRect().width;
		if (mainCarouselRef.current) {
			mainCarouselRef.current.scrollBy({
				left: -widthToMoveBy * itemsToMoveBy,
				behavior: "smooth",
			});
		}
	};

	const scrollRight = () => {
		const widthToMoveBy =
			firstItemRef.current.getBoundingClientRect().width;
		if (mainCarouselRef.current) {
			mainCarouselRef.current.scrollBy({
				left: widthToMoveBy * itemsToMoveBy,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="relative flex items-center py-10">
			{/* Buttons */}
			<div className="absolute flex items-center justify-between w-full px-3 ">
				{!firstItemVisible ? (
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={scrollLeft}
						className="flex z-20 items-center justify-center w-12 h-12 bg-white bg-opacity-30 rounded-full drop-shadow-lg hover:bg-opacity-20 focus:outline-none"
					>
						<IoArrowBack />
					</motion.button>
				) : (
					<div />
				)}

				{!lastItemVisible ? (
					<motion.button
						onClick={scrollRight}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="flex z-20 items-center justify-center w-12 h-12 bg-white bg-opacity-30 rounded-full drop-shadow-xl hover:bg-opacity-20 focus:outline-none"
					>
						<IoArrowForward />
					</motion.button>
				) : (
					<div />
				)}
			</div>

			<div
				ref={mainCarouselRef}
				className="w-full snap-x flex gap-6 flex-nowrap overflow-x-visible md:overflow-x-hidden overflow-y-hidden scroll-m-0 "
			>
				{/* Left and right buttons */}

				{/* {items.map((item, i) => (
					<div key={i} className="snap-center flex-shrink-0">
						<Element
							ref={
								i === 0
									? firstItemRef
									: i === items.length - 1
									? lastItemRef
									: null
							}
							key={i}
							{...item}
						/>
					</div>
				))} */}

				{Children.map(children, (child, index) => (
					<div key={index} className="snap-center flex-shrink-0">
						{/* @ts-ignore */}
						{cloneElement(child, {
							ref:
								index === 0
									? firstItemRef
									: index === numberOfItems - 1
									? lastItemRef
									: null,
						})}
					</div>
				))}

				{/* {<Item {.} />} */}
				{/* {children} */}
			</div>
		</div>
	);
};

export default Carousel;
