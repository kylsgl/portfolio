import sanityClient from '../client';

export interface Project {
	demoUrl: string;
	description: string;
	gallery: Array<{
		altName: string;
		url: string;
	}>;
	orderRank: string;
	repoUrl: string;
	tags: string[];
	title: string;
}

export async function getProjects(): Promise<Project[]> {
	const project = `
        demoUrl,
        description,
        'gallery': gallery[]{
            altName,
            'url': asset->url,
        },
		orderRank,
        repoUrl,
		tags,
        title,
    `;

	const query = `*[_type == "projects"]{${project}} | order(orderRank)`;

	const response = await sanityClient.fetch<Project[]>(query);
	return response;
}
