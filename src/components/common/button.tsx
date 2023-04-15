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
			<div className="flex flex-col group items-center relative" tabIndex={-1}>
				<div className="absolute bottom-full flex-col hidden items-center mb-4 pointer-events-auto group-hover:flex">
					<span className="bg-black font-medium leading-none normal-case p-3 relative rounded-lg text-white text-sm dark:bg-white dark:text-black">
						{tooltip}
					</span>
					<div className="bg-black h-3 -mt-2 rotate-45 w-3 dark:bg-white" />
				</div>
				{jsxButton}
			</div>
		);
	}

	return jsxButton;
}
