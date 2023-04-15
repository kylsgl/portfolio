import { type TablerIconsProps } from '@tabler/icons-react';

import Button from '@/components/common/button';
import { type Link } from '@/lib/sanity';

export interface IHeroLink extends Omit<Link, 'icon'> {
	icon: (props: TablerIconsProps) => JSX.Element;
}

interface HeroLinkProps {
	link: IHeroLink;
}

export default function HeroLink({
	link: { icon: Icon, label, newTab, tooltip, url },
}: HeroLinkProps): JSX.Element {
	return (
		<a href={url} rel="noopener noreferrer" target={newTab ? '_blank' : ''}>
			<Button
				aria-label={label}
				className="p-2"
				tabIndex={-1}
				tooltip={tooltip}
			>
				<Icon size="1.5rem" />
			</Button>
		</a>
	);
}
