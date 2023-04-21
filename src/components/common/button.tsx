import { type DetailedHTMLProps, type ButtonHTMLAttributes } from 'react';

interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	hover?: boolean;
	tooltip?: string;
}

export default function Button({
	'aria-label': ariaLabel,
	children,
	className = '',
	hover = true,
	onClick,
	tabIndex,
	tooltip,
	type,
}: ButtonProps): JSX.Element {
	const jsxButton: JSX.Element = (
		<button
			aria-label={typeof children === 'string' ? children : ariaLabel}
			className={`card ${hover ? 'hoverable' : ''} ${className}`}
			onClick={onClick}
			tabIndex={tabIndex}
			type={type}
		>
			{children}
		</button>
	);

	if (tooltip !== undefined) {
		return (
			<div className="group relative flex flex-col items-center" tabIndex={-1}>
				<div className="pointer-events-auto absolute bottom-full mb-4 hidden flex-col items-center group-hover:flex">
					<span className="relative rounded-lg bg-black p-3 text-sm font-medium normal-case leading-none text-white dark:bg-white dark:text-black">
						{tooltip}
					</span>
					<div className="-mt-2 h-3 w-3 rotate-45 bg-black dark:bg-white" />
				</div>
				{jsxButton}
			</div>
		);
	}

	return jsxButton;
}
