import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

import sanityClient from './client';

const builder = imageUrlBuilder(sanityClient);

export default function urlFor(source: SanityImageSource): ImageUrlBuilder {
	return builder.image(source);
}
