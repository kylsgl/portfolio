import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useHeaderHeight from '@/hooks/useHeaderHeight';
import Button from '@/components/common/button';
import ColorSchemeSwitch from '@/components/color-scheme-switch';
import { LOGO } from '@/constants';

export default function Header(): JSX.Element {
	const headerRef = useRef<HTMLHeadElement | null>(null);

	useHeaderHeight(headerRef.current);

	const { pathname } = useRouter();

	const isHome = pathname === '/';

	return (
		<header
			className="container inset-x-0 z-10 mx-auto w-screen px-4 py-6 lowercase text-black dark:text-white md:py-8"
			ref={headerRef}
		>
			<div className="flex flex-initial items-center justify-between">
				<div className="grow basis-0">
					<Link className="font-mono text-sm md:text-xl" href="/">
						{LOGO}
					</Link>
				</div>

				<nav className="mx-auto">
					<Link href={isHome ? '/projects' : '/'}>
						<Button className="text-xs md:text-sm" tabIndex={-1}>
							{isHome ? 'View Projects' : 'Go back'}
						</Button>
					</Link>
				</nav>

				<div className="grow basis-0 text-right">
					<ColorSchemeSwitch className="p-1.5 md:p-2" />
				</div>
			</div>
		</header>
	);
}
