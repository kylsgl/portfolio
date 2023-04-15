import { IconMail } from '@tabler/icons-react';

interface ContactFormEmailProps {
	email: string;
}
export default function ContactFormEmail({
	email,
}: ContactFormEmailProps): JSX.Element {
	return (
		<a
			className="border-b border-black flex flex-row font-sans gap-2 items-center justify-center mx-auto wrap normal-case text-md tracking-wider w-max dark:border-white"
			href={`mailto:${email}`}
		>
			<IconMail size="1rem" />
			{email}
		</a>
	);
}
