import { useEffect, useState } from 'react';

interface HeroTitleProps {
	title: string;
}

export default function HeroTitle({ title }: HeroTitleProps): JSX.Element {
	const [heroTitle, setHeroTitle] = useState<string>('...');

	useEffect((): (() => void) => {
		const delay = setTimeout(() => {
			setHeroTitle(title);
		}, 1);

		return (): void => {
			clearTimeout(delay);
		};
	}, [title]);

	return (
		<h1 className="text-4xl font-semibold leading-none tracking-wide md:text-5xl">
			{heroTitle}
		</h1>
	);
}
