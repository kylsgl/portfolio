import { type ContactFormInputProps } from './components/contact/contact-form-fields';

export const FORM_FIELDS: ContactFormInputProps[] = [
	{
		id: 'name',
		label: 'Name',
		name: 'name',
		placeholder: 'Your name',
		type: 'text',
	},
	{
		id: 'email',
		label: 'Email',
		name: 'email',
		placeholder: 'Your email',
		type: 'email',
	},
	{
		className: 'h-24',
		id: 'message',
		label: 'Message',
		name: 'message',
		placeholder: 'Write your message here...',
		textarea: true,
		type: 'email',
	},
];

export const LOGO = 'kylsgl';
