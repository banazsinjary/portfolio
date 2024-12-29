import "./Components.css";
import React from "react";

interface ProjectCardProps {
  title: string;
  summary: string;
  links?: { label: string; url: string }[]; // Array of optional links
  iconClass: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, links, iconClass }) => {
  return (
    <div className="project-card">
      <div className={`project-icon ${iconClass}`}></div>
      <div className="project-details">
        <p className="project-title">{title}</p>
        <p className="project-summary">{summary}</p>
        {links &&
          links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
      </div>
    </div>
  );
};

export default ProjectCard;
