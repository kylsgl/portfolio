import Button from '@/components/common/button';
import { type Contact } from '@/lib/sanity';
import { FORM_FIELDS } from '@/constants';

import ContactFormField from './contact-form-fields';
import ContactFormEmail from './contact-form-email';

interface ContactFormProps {
	contact: Contact;
}

export default function ContactForm({
	contact: { emails, title },
}: ContactFormProps): JSX.Element {
	return (
		<section className="flex items-center justify-center text-black dark:text-white">
			<div className="card popped mx-auto flex h-max flex-col gap-5 p-8 md:w-96">
				<h1 className="text-center text-2xl">{title}</h1>

				<div className="flex flex-col gap-3">
					{emails.map(
						(email: string): JSX.Element => (
							<ContactFormEmail email={email} key={email} />
						)
					)}
				</div>

				<div className="inline-flex w-full items-center justify-center">
					<hr className="my-4 h-px w-64 border-0 bg-black dark:bg-white" />
					<span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium dark:bg-black dark:text-white">
						or
					</span>
				</div>

				<form
					action="https://api.web3forms.com/submit"
					className="flex flex-col gap-5"
					method="POST"
				>
					<input
						type="hidden"
						name="access_key"
						value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ''}
					/>

					<input
						type="hidden"
						name="redirect"
						value="https://web3forms.com/success"
					/>

					{FORM_FIELDS.map(
						(field): JSX.Element => (
							<ContactFormField key={field.id} {...field} />
						)
					)}

					<div className="w-full">
						<Button className="w-full" type="submit">
							Submit
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
