import { Fragment } from 'react';
import { type AppProps } from 'next/app';
import { Fira_Mono } from 'next/font/google';
import Head from 'next/head';

import '@/styles/globals.css';
import Layout from '@/components/layout/layout';

const fira = Fira_Mono({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<Fragment>
			<Head>
				<title>kylsgl</title>
				<meta name="description" content="kylsgl" />
				<style>{`
					:root {
						--font-mono: ${fira.style.fontFamily};
					}
				`}</style>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Fragment>
	);
}
