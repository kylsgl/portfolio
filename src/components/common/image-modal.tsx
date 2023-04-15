/* eslint-disable @next/next/no-img-element */

export interface ImageModalProps {
	alt: string;
	onClick: () => void;
	src: string;
}

export default function ImageModal({
	alt,
	onClick,
	src,
}: ImageModalProps): JSX.Element {
	return (
		<div
			className="backdrop-blur-sm cursor-zoom-out fixed flex h-full inset-0 items-center justify-start overflow-auto w-full"
			onClick={onClick}
		>
			<img
				alt={alt}
				className="max-h-screen mx-auto"
				decoding="async"
				loading="lazy"
				src={src}
			/>
		</div>
	);
}
