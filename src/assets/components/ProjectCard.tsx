import "./Components.css";
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  summary: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, summary }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-summary">{summary}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
