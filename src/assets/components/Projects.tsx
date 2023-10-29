import "./Components.css";
import React from "react";
import ProjectCard from "./ProjectCard";
import Remindful from "../remindful.png";
import NationalParks from "../nationalparksnap.png"

const Projects: React.FC = () => {
  const projects = [
    {
      image: Remindful,
      title: "Remindful",
      summary:
        "Ignite productivity and embrace the magic of seamless organization for a successful and enchanting life.",
      link: "",
      imageSize: {
        width: 300,
        height: 210,
      },
    },
    {
      image: NationalParks,
      title: "Natonal Parks",
      summary:
        "Explore the beauty of national parks and discover their captivating stories through this immersive web app.",
      link: "/project2",
      imageSize: {
        width: 300,
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