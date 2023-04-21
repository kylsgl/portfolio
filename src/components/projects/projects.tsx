import { useState } from 'react';

import ImageModal, {
	type ImageModalProps,
} from '@/components/common/image-modal';
import ProjectsCard from '@/components/projects/projects-card';
import { type Project } from '@/lib/sanity/api/getProjects';

export interface OpenedImage extends Pick<ImageModalProps, 'alt' | 'src'> {}

interface ProjectProps {
	projects: Project[];
}

export default function Projects({ projects }: ProjectProps): JSX.Element {
	const [openedImage, setOpenedImage] = useState<OpenedImage>({
		alt: '',
		src: '',
	});

	const handleCloseClick = (): void => {
		setOpenedImage({ alt: '', src: '' });
	};

	return (
		<section className="flex !h-max !min-h-0 flex-col flex-wrap items-center justify-center gap-20 text-black dark:text-white md:gap-12">
			<h1 className="text-center font-mono text-5xl">Open-source Projects</h1>
			<div className="flex flex-wrap items-stretch justify-center gap-6 ">
				{projects.map(
					(project: Project): JSX.Element => (
						<ProjectsCard
							key={project.repoUrl}
							onClick={setOpenedImage}
							{...project}
						/>
					)
				)}
			</div>
			{openedImage.src.length > 0 ? (
				<ImageModal onClick={handleCloseClick} {...openedImage} />
			) : null}
		</section>
	);
}
