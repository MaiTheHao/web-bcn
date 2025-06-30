import React, { useState, useEffect } from 'react';
import ItemTable from '../../components/ItemTable/ItemTable';
import ProjectCard from '../../components/Card/ProjectCard/ProjectCard';
import { getAllProjects } from '../../services/api';
import { transformProjectToProjectCard } from '../../services/transform';

function Projects() {
// <<<<<<< HEAD
// 	const [projects, setProjects] = useState([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		const fetchProjects = async () => {
// 			try {
// 				setLoading(true);
// 				const projectsData = await getAllProjects();
// 				const transformedProjects = projectsData.map(transformProjectToProjectCard).filter(Boolean);
// 				setProjects(transformedProjects);
// 			} catch (err) {
// 				setError(err.message);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		fetchProjects();
// 	}, []);

// 	if (loading) return <div>Tải dự án...</div>;
// 	if (error) return <div>Lỗi khi tải dự án: {error}</div>;

// 	const projectCards = projects.map((project) => (
// 		<ProjectCard
// 			key={project.id}
// 			{
// 				...project
// 			}
// 		/>
// 	));

// 	return <ItemTable title='Our Projects' items={projectCards} itemsPerRow={2} rowsPerPage={3} />;
// =======
  const projectCards = sampleProjects.map((project) => (
    <ProjectCard
      key={project.id}
      thumbnail={project.thumbnail}
      projectName={project.projectName}
      projectDes={project.projectDes}
      numberStar={project.numberStar}
      numberView={project.numberView}
      startDate={project.startDate}
      finishDate={project.finishDate}
      technologies={project.technologies}
    />
  ));
  const filterFields = [
    {
      fieldName: 'projectType',
      placeholder: 'Chọn loại Lĩnh vực',
      options: [
        { label: 'Web Development', value: 'Web Development' },
        { label: 'Mobile Development', value: 'Mobile Development' },
        { label: 'Data Science', value: 'Data Science' },
        { label: 'AI/Machine Learning', value: 'AI/Machine Learning' },
        { label: 'DevOps', value: 'DevOps' },
        { label: 'Cybersecurity', value: 'Cybersecurity' },
        { label: 'Cloud Computing', value: 'Cloud Computing' },
        { label: 'UI/UX Design', value: 'UI/UX Design' },
        { label: 'Game Development', value: 'Game Development' },
        { label: 'Embedded Systems', value: 'Embedded Systems' },
        { label: 'Blockchain', value: 'Blockchain' },
      ]
    },
    {
      fieldName: 'status',
      placeholder: 'Chọn trạng thái',
      options: [
        { label: 'React', value: 'React' },
        { label: 'Node.js', value: 'Node.js' },
        { label: 'Python', value: 'Python' },
        { label: 'Java', value: 'Java' },
        { label: 'C++', value: 'C++' },
        { label: 'Ruby', value: 'Ruby' },
        { label: 'PHP', value: 'PHP' },
        { label: 'Go', value: 'Go' },
        { label: 'Swift', value: 'Swift' },
      ]
    }
  ];
  const cols = 2;
  const rows = 2;
  return (
    <ItemTable
      title="Our Projects"
      items={projectCards}
      itemsPerRow={cols}
      rowsPerPage={rows}
      filterFields={filterFields}
    />
  );
// >>>>>>> origin/takiin
}

export default Projects;
