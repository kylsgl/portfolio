import sanityClient from '../client';

export interface Hero {
	title: string;
	subtitle: string;
	cta: string;
	_updatedAt: string;
}

export async function getHero(): Promise<Hero> {
	const hero = `
        title,
        subtitle,
        cta,
        _updatedAt,
    `;

	const query = `*[_type == "hero"]{${hero}} | order(_updatedAt asc)[0]`;

	const response = await sanityClient.fetch<Hero>(query);
	return response;
}
