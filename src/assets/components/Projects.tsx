import "./Components.css";
import React from "react";
import ProjectCard from "./ProjectCard";
import remindful from "../remindfulmockup.png"

const Projects: React.FC = () => {
  const projects = [
    {
      image: remindful,
      title: "Remindful",
      summary: "This is the summary of project 1.",
      link: '/project1',
      imageSize:{
        width: 400,
        height: 300,
      },
    },
    {
      image: "",
      title: "Mealsight",
      summary: "This is the summary of project 2.",
      link: '/project2',
      imageSize:{
        width: 200,
        height: 200,
      },
    },
    {
      image: "",
      title: "Underline Tab Bar",
      summary: "This is the summary of project 3.",
      link: '/project3',
      imageSize:{
        width: 200,
        height: 200,
      },
    },
    // Add more project objects as needed
  ];

  return (
    <section className="section-sizing" id="proj">
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
