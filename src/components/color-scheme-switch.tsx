import { IconMoonStars, IconSunFilled } from '@tabler/icons-react';

import useColorScheme from '@/hooks/useDarkMode';
import Button from '@/components/common/button';

interface ColorSchemeSwitchProps {
	className?: string;
}

export default function ColorSchemeSwitch({
	className,
}: ColorSchemeSwitchProps): JSX.Element {
	const [colorScheme, setColorScheme] = useColorScheme();

	const Icon = colorScheme === 'dark' ? IconSunFilled : IconMoonStars;

	return (
		<Button
			aria-label="Switch between dark/light theme"
			className={className}
			onClick={setColorScheme}
		>
			<Icon size="1.25rem" />
		</Button>
	);
}
