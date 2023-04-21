/* eslint-disable @next/next/no-img-element */
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

import Button from '@/components/common/button';
import { type Project } from '@/lib/sanity';

import { type OpenedImage } from './projects';

interface ItemCardProps extends Project {
	onClick: (openedImage: OpenedImage) => void;
}

export default function ProjectsCard({
	demoUrl,
	description,
	gallery: [image],
	onClick,
	repoUrl,
	tags,
	title,
}: ItemCardProps): JSX.Element {
	const handleClick = (): void => {
		onClick({ alt: image.altName, src: image.url });
	};

	return (
		<article className="card popped max-w-[16.5rem] p-2" tabIndex={0}>
			<div className="flex h-full flex-col justify-between gap-4">
				<div className="flex flex-col gap-2">
					<img
						alt={image.altName}
						className="z-10 mx-auto h-[8.578125rem] w-fit cursor-zoom-in rounded-lg bg-black"
						decoding="async"
						loading="lazy"
						onClick={handleClick}
						role="presentation"
						src={image.url}
					/>

					<div className="flex flex-col justify-center gap-2 px-1">
						<div className="flex flex-row flex-nowrap items-center justify-between gap-2">
							<h1
								aria-level={1}
								className="flex-shrink-1 text-xl font-bold tracking-tight text-black dark:text-white"
								role="heading"
							>
								{title}
							</h1>
							<div className="flex flex-shrink-0 flex-row flex-nowrap items-start gap-1.5">
								<a
									href={repoUrl}
									rel="noopener noreferrer"
									tabIndex={-1}
									target="_blank"
								>
									<Button
										aria-label="View github repository"
										className="p-1"
										hover={false}
									>
										<IconBrandGithub size="1.15rem" />
									</Button>
								</a>

								<a
									href={demoUrl}
									rel="noopener noreferrer"
									tabIndex={-1}
									target="_blank"
								>
									<Button aria-label="View live" className="p-1" hover={false}>
										<IconExternalLink size="1.15rem" />
									</Button>
								</a>
							</div>
						</div>

						<p className="text-sm font-normal normal-case text-neutral-800 dark:text-neutral-200">
							{description}
						</p>
					</div>
				</div>

				<div
					className="flex flex-row flex-wrap gap-1 px-1 text-xs normal-case text-white dark:text-black"
					role="list"
				>
					{tags
						.sort((a, b) => b.localeCompare(a))
						.map((framework) => (
							<span
								className="rounded-lg border border-black bg-black px-2 py-1 dark:bg-white"
								key={framework}
								role="listitem"
							>
								{framework}
							</span>
						))}
				</div>
			</div>
		</article>
	);
}
