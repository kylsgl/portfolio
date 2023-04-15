import { type HTMLInputTypeAttribute } from 'react';

export interface ContactFormInputProps {
	className?: string;
	id: string;
	label: string;
	name: string;
	placeholder: string;
	required?: boolean;
	textarea?: boolean;
	type: HTMLInputTypeAttribute;
}

export default function ContactFormField({
	className = '',
	id,
	label,
	name,
	placeholder,
	required = true,
	textarea = false,
	type,
}: ContactFormInputProps): JSX.Element {
	const props = {
		id,
		className: `bg-neutral-200 border-2 border-neutral-500 box-content font-sans px-2.5 py-1 rounded-lg leading-8 text-black dark:bg-neutral-800 dark:text-white ${className}`,
		name,
		placeholder,
		required,
		type,
	};

	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id}>{label}</label>
			{textarea ? <textarea {...props} /> : <input {...props} />}
		</div>
	);
}
