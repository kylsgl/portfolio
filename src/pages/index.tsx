import { type GetStaticPropsResult } from 'next';
import {
	type TablerIconsProps,
	IconBrandGithub,
	IconCircleKey,
	IconMail,
} from '@tabler/icons-react';

import { type IHeroLink, Hero } from '@/components/hero';
import { type Hero as IHero, type Link, getHero, getLinks } from '@/lib/sanity';

const TablerIcons: Record<string, (props: TablerIconsProps) => JSX.Element> = {
	IconBrandGithub,
	IconCircleKey,
	IconMail,
};

interface StaticProps {
	hero: IHero;
	links: Link[];
}

export default function HomePage({ hero, links }: StaticProps): JSX.Element {
	const heroLinks: IHeroLink[] = links.map(
		(link: Link): IHeroLink => ({
			...link,
			icon: TablerIcons[link.icon],
		})
	);

	return <Hero hero={hero} links={heroLinks} />;
}

export async function getStaticProps(): Promise<
	GetStaticPropsResult<StaticProps>
> {
	const hero: IHero = await getHero();
	const links: Link[] = await getLinks();

	return {
		props: {
			hero,
			links,
		},
		revalidate: false,
	};
}
