// link: http://localhost:5173/project/1

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "./ProjectDetail.json";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projects.find((p) => p.id === id);
    setProject(found);
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="project-detail-container">
      <h1 className="project-title">{project.projectName}</h1>

      <div className="project-images">
        <img className="main-image" src={project.mainImage} alt="Main" />
        <div className="side-images">
          {project.sideImages.map((img, index) => (
            <img key={index} src={img} alt={`Side ${index}`} />
          ))}
        </div>
      </div>

      <div className="project-info">
        <div className="info-group">
          <span className="label">CÔNG NGHỆ:</span>
          <div className="icons">
            {project.technologies.map((tech, index) => (
              <img key={index} src={tech} alt={`Tech ${index}`} />
            ))}
          </div>
        </div>

        <div className="info-group">
          <span className="label">THỜI GIAN THỰC HIỆN:</span>
          <span>{project.duration}</span>
        </div>

        <div className="info-group">
          <span className="label">TÁC GIẢ:</span>
          <span>{project.author}</span>
        </div>
      </div>

      <div className="project-description">
        <h2>MÔ TẢ CHI TIẾT</h2>
        {project.description.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;