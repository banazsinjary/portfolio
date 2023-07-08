import "./Components.css";
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  summary: string;
  link: string;
  imageSize:{
    width: number;
    height: number;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, summary, link, imageSize }) => {
    const {width, height} = imageSize;

  return (
    <div className="project-card">
      <img src={image} className="project-image" style={{width, height}} />
      <div className="project-details">
        <a href={link} className="project-title">{title}</a>
        <p className="project-summary">{summary}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
