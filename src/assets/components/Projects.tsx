import "./Components.css";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      image: "",
      title: "Remindful",
      summary: "This is the summary of project 1.",
    },
    {
      image: "",
      title: "Mealsight",
      summary: "This is the summary of project 2.",
    },
    {
      image: "",
      title: "Underline Tab Bar",
      summary: "This is the summary of project 3.",
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          summary={project.summary}
        />
      ))}
    </div>
  );
};

export default Projects;
