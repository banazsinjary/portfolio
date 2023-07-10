import "./Components.css";
import React from "react";
import ProjectCard from "./ProjectCard";
import Remindful from "../remindfulmockup.png";

const Projects: React.FC = () => {
  const projects = [
    {
      image: Remindful,
      title: "Remindful",
      summary:
        "Ignite productivity and embrace the magic of seamless organization for a successful and enchanting life.",
      link: "/project1",
      imageSize: {
        width: 600,
        height: 450,
      },
    },
    // Add more project objects as needed
  ];

  return (
    <section className="section-sizing" id="proj">
      <div id="project-title"> My Technical Endeavours </div>
      <div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            summary={project.summary}
            link={project.link}
            imageSize={project.imageSize}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
