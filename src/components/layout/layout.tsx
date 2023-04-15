import { Fragment } from 'react';

import styles from './layout.module.css';

import Header from '../header';

interface LayoutProps {
	children: JSX.Element | JSX.Element[] | null;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<Fragment>
			<Header />
			<main className={`${styles.layout} container h-max mx-auto`}>
				{children}
			</main>
		</Fragment>
	);
}
