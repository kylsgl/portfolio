/* eslint-disable import/prefer-default-export */
export function getSizesFromUrl(url: string): [width: number, height: number] {
	const matchSizes = /(?:[_]?[0-9]+x[0-9]+)+/g;

	const matches: string[] | undefined = url.match(matchSizes)?.[0].split('x');

	const width = Number(matches?.[0]);
	const height = Number(matches?.[1]);

	return [!Number.isNaN(width) ? width : 0, !Number.isNaN(height) ? height : 0];
}
