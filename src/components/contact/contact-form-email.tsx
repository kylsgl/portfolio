import { IconMail } from '@tabler/icons-react';

interface ContactFormEmailProps {
	email: string;
}
export default function ContactFormEmail({
	email,
}: ContactFormEmailProps): JSX.Element {
	return (
		<a
			className="wrap text-md mx-auto flex w-max flex-row items-center justify-center gap-2 border-b border-black font-sans normal-case tracking-wider dark:border-white"
			href={`mailto:${email}`}
		>
			<IconMail size="1rem" />
			{email}
		</a>
	);
}
