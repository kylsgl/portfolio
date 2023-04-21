import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head />
			<body className="transition-color bg-white duration-700 dark:bg-black">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
