import "./Components.css";
import React from "react";
import ProjectCard from "./ProjectCard";


const Projects: React.FC = () => {
  const projects = [
    {
      title: "Remindful",
      summary:
        "Ignite productivity and embrace the magic of seamless organization for a successful and enchanting life.",
      githubLink: "https://github.com/banazsinjary/Remindful",
      iconClass:""
    },
    {

      title: "Natonal Parks",
      summary:
        "Explore the beauty of national parks and discover their captivating stories through this immersive web app.",
      githubLink: "https://github.com/banazsinjary/national-parks",
      iconClass:""
    },
    // Add more project objects as needed
  ];

  return (
    <section className="section-sizing" id="proj">
      <p id="project-section-title">Projects</p>
      <div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            summary={project.summary}
            githubLink={project.githubLink}
            iconClass={project.iconClass}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;