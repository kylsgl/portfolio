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
		<section className="flex justify-center items-center">
			<div className="items-center flex flex-col gap-8 text-center relative text-black uppercase dark:text-white">
				<div className="font-mono flex flex-col gap-2">
					<HeroTitle title={title} />

					<h2 className="font-light text-xl leading-none md:leading-none md:text-2xl text-neutral-400 dark:text-neutral-500">
						{subtitle}
					</h2>
				</div>

				<Link href="/contact">
					<Button className="text-md" tabIndex={-1}>
						{cta}
					</Button>
				</Link>

				<div className="flex flex-row gap-4 flex-wrap items-center justify-center">
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
