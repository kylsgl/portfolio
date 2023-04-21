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
			className="fixed inset-0 flex h-full w-full cursor-zoom-out items-center justify-start overflow-auto backdrop-blur-sm"
			onClick={onClick}
		>
			<img
				alt={alt}
				className="mx-auto max-h-screen"
				decoding="async"
				loading="lazy"
				src={src}
			/>
		</div>
	);
}
