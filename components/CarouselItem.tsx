interface CarouselItemProps {
	children: React.ReactNode;
	className?: string;
}

const CarouselItem = ({ children, className }: CarouselItemProps) => {
	return (
		<div className={`snap-center w-full flex-shrink-0 ${className}`}>
			{children}
		</div>
	);
};

export default CarouselItem;
