import { type GetStaticPropsResult } from 'next';

import ContactForm from '@/components/contact/contact-form';
import { type Contact, getContact } from '@/lib/sanity';

interface StaticProps {
	contact: Contact;
}

export default function ContactPage({ contact }: StaticProps): JSX.Element {
	return <ContactForm contact={contact} />;
}

export async function getStaticProps(): Promise<
	GetStaticPropsResult<StaticProps>
> {
	const contact: Contact = await getContact();

	return {
		props: {
			contact,
		},
		revalidate: false,
	};
}
