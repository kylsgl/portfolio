module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-mixins': {},
		'tailwindcss/nesting': 'postcss-nested',
		tailwindcss: {},
		'postcss-flexbugs-fixes': {},
		'postcss-preset-env': {
			autoprefixer: {
				flexbox: 'no-2009',
			},
			stage: 3,
			features: {
				'custom-properties': false,
			},
		},
		'postcss-combine-duplicated-selectors': {
			removeDuplicatedProperties: true,
		},
		cssnano: {
			preset: 'default',
		},

		// ! Breaks tailwind
		// '@fullhuman/postcss-purgecss': {
		// 	content: ['./src/**/*.{js,ts,jsx,tsx}'],
		// 	defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		// 	safelist: ['html', 'body'],
		// },
	},
};
