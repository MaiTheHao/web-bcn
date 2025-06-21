import React, { useState, useEffect } from 'react';
import ItemTable from '../../components/ItemTable/ItemTable';
import ProjectCard from '../../components/Card/ProjectCard/ProjectCard';
import { getAllProjects } from '../../services/api';
import { transformProjectToProjectCard } from '../../services/transform';

function Projects() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				setLoading(true);
				const projectsData = await getAllProjects();
				const transformedProjects = projectsData.map(transformProjectToProjectCard).filter(Boolean);
				setProjects(transformedProjects);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	if (loading) return <div>Tải dự án...</div>;
	if (error) return <div>Lỗi khi tải dự án: {error}</div>;

	const projectCards = projects.map((project) => (
		<ProjectCard
			key={project.id}
			{
				...project
			}
		/>
	));

	return <ItemTable title='Our Projects' items={projectCards} itemsPerRow={2} rowsPerPage={3} />;
}

export default Projects;
