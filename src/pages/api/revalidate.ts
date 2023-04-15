import { type NextApiRequest, type NextApiResponse } from 'next';
import { parseBody } from 'next-sanity/webhook';

export { config } from 'next-sanity/webhook';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<unknown> {
	try {
		const { isValidSignature, body } = await parseBody(
			req,
			process.env.SANITY_WEBHOOK_SECRET
		);

		if (isValidSignature == null || !isValidSignature) {
			res.status(401).json({ message: 'Invalid signature' });
			return;
		}

		let slug: string = typeof body.slug === 'string' ? body.slug : '';

		if (slug.includes('projects-')) {
			slug = 'projects';
		}

		const staleRoute = `/${slug}`;

		await res.revalidate(staleRoute);

		res.status(200).json({ message: `Updated route: ${staleRoute}` });

		return;
	} catch (err) {
		res.status(500).json({
			message: `Unable to revalidate ${
				err instanceof Error ? err.message : ''
			}`,
		});
	}
}
