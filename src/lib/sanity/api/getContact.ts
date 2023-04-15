import sanityClient from '../client';

export interface Contact {
	title: string;
	emails: string[];
	_updatedAt: string;
}

export async function getContact(): Promise<Contact> {
	const contact = `
        title,
        emails,
        _updatedAt,
    `;

	const query = `*[_type == "contact"]{${contact}} | order(_updatedAt asc)[0]`;

	const response = await sanityClient.fetch<Contact>(query);
	return response;
}
