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
  const options1 = [
    // Lưu ý phàn tử đầu nên là một tiêu đề
    "Lĩnh vực",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "AI/Machine Learning",
    "DevOps",
    "Cybersecurity",
    "Cloud Computing",
    "UI/UX Design",
    "Game Development",
    "Embedded Systems",
    "Blockchain",
  ];

    const options2 = [
    // Lưu ý phàn tử đầu nên là một tiêu đề
    "Công nghệ",
    "React",
    "Node.js"
    ];
  const cols = 2;
  const rows = 2;
  return (
    <ItemTable
      title="Our Projects"
      items={projectCards}
      itemsPerRow={cols}
      rowsPerPage={rows}
      Options1={options1}
      Options2={options2}
    />
  );
}

export default Projects;
