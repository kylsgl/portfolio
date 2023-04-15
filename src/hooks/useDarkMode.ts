import { useEffect, useState } from 'react';

export type ColorScheme = 'dark' | 'light';

export default function useColorScheme(): [ColorScheme, () => void] {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

	const toggleColorScheme = (): void => {
		setColorScheme((current: ColorScheme): ColorScheme => {
			const newColorScheme: ColorScheme = current === 'dark' ? 'light' : 'dark';
			localStorage.setItem('color-scheme', JSON.stringify(newColorScheme));
			return newColorScheme;
		});
	};

	useEffect((): void => {
		const colorSchemeStorage: string | null =
			localStorage.getItem('color-scheme');

		if (colorSchemeStorage !== null) {
			const items = JSON.parse(colorSchemeStorage) as ColorScheme;

			if (items !== colorScheme) {
				setColorScheme(items);
			}
		}

		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(
			colorScheme === 'dark' ? 'dark' : 'light'
		);
	}, [colorScheme]);

	return [colorScheme, toggleColorScheme];
}
