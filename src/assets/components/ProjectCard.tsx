import "./Components.css";
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  summary: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, summary, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <a href={link} className="project-title">{title}</a>
        <p className="project-summary">{summary}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
