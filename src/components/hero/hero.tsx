import Link from 'next/link';

import Button from '@/components/common/button';
import { type Hero as IHero } from '@/lib/sanity';

import HeroLink, { type IHeroLink } from './hero-link';
import HeroTitle from './hero-title';

interface HeroProps {
	hero: IHero;
	links: IHeroLink[];
}

export default function Hero({
	hero: { title, subtitle, cta },
	links,
}: HeroProps): JSX.Element {
	return (
		<section className="flex items-center justify-center">
			<div className="relative flex flex-col items-center gap-8 text-center uppercase text-black dark:text-white">
				<div className="flex flex-col gap-2 font-mono">
					<HeroTitle title={title} />

					<h2 className="text-xl font-light leading-none text-neutral-400 dark:text-neutral-500 md:text-2xl md:leading-none">
						{subtitle}
					</h2>
				</div>

				<Link href="/contact">
					<Button className="text-md" tabIndex={-1}>
						{cta}
					</Button>
				</Link>

				<div className="flex flex-row flex-wrap items-center justify-center gap-4">
					{links.map(
						(link: IHeroLink): JSX.Element => (
							<HeroLink key={link.url} link={link} />
						)
					)}
				</div>
			</div>
		</section>
	);
}
