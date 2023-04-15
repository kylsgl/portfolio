import sanityClient from '../client';

export interface Link {
	icon: string;
	label: string;
	newTab: boolean;
	orderRank: string;
	tooltip: string;
	url: string;
}

export async function getLinks(): Promise<Link[]> {
	const links = `
        icon,
        label,
        newTab,
		orderRank,
        tooltip,
        url,
    `;

	const query = `*[_type == "links"]{${links}} | order(orderRank)`;

	const response = await sanityClient.fetch<Link[]>(query);
	return response;
}
