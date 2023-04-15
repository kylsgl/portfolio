import { type GetStaticPropsResult } from 'next';

import Projects from '@/components/projects/projects';
import { type Project, getProjects } from '@/lib/sanity/api/getProjects';

interface StaticProps {
	projects: Project[];
}

export default function ProjectsPage({ projects }: StaticProps): JSX.Element {
	return <Projects projects={projects} />;
}

export async function getStaticProps(): Promise<
	GetStaticPropsResult<StaticProps>
> {
	const projects: Project[] = await getProjects();

	return {
		props: {
			projects,
		},
		revalidate: false,
	};
}
