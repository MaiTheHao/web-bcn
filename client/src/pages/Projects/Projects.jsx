import ItemTable from "../../components/ItemTable/ItemTable";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import sampleProjects from "../../../mock_datas/project_page_mock_data.json";

function Projects() {
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
  const cols = 2;
  const rows = 4;
  return (
    <ItemTable
      title="Our Projects"
      items={projectCards}
      itemsPerRow={cols}
	  rowsPerPage={rows}
    />
  );
}

export default Projects;
