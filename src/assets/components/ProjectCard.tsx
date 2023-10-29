import "./Components.css";
import React from "react";

interface ProjectCardProps {
  title: string;
  summary: string;
  githubLink: string;
  iconClass: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, githubLink, iconClass}) => {

  return (
    <div className="project-card">
       <div className={`project-icon ${iconClass}`}></div>
      <div className="project-details">
        <p className="project-title">{title}</p>
        <p className="project-summary">{summary}</p>
        <a href={githubLink} className="github-link">Github</a>
      </div>
    </div>
  );
};

export default ProjectCard;
