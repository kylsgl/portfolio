import { useEffect } from 'react';

const HEADER_HEIGHT_PROPERTY = '--header-height';

export default function useHeaderHeight(element: HTMLHeadElement | null): void {
	useEffect((): (() => void) => {
		const handleResize = (): void => {
			if (element === null) {
				return;
			}

			const newHeaderHeight = `${element.clientHeight / 16}rem`;

			if (
				newHeaderHeight ===
				document.documentElement.style.getPropertyValue(HEADER_HEIGHT_PROPERTY)
			) {
				return;
			}

			document.documentElement.style.setProperty(
				HEADER_HEIGHT_PROPERTY,
				newHeaderHeight
			);
		};

		window.addEventListener('resize', handleResize, { passive: true });
		return (): void => {
			window.removeEventListener('resize', handleResize);
		};
	}, [element]);
}
