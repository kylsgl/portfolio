const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
			},
		},
	},
};
