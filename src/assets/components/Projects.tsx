import "./Components.css";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Human Pose Estimation",
      summary:
        "Leveraged deep learning to analyze human poses, utilizing the MPII dataset for advanced predictive modeling.",
      links: [
        { label: "GitHub", url: "https://github.com/banazsinjary/HumanPoseProject" },
        { label: "Documentation", url: "https://drive.google.com/your-doc-link" }
      ],
      iconClass: ""
    },
    {
      title: "Shark Attack Analysis",
      summary:
        "Explored global shark attack data using visualization techniques to uncover patterns and insights.",
      links: [
        { label: "Tableau", url: "https://public.tableau.com/your-tableau-link" }
      ],
      iconClass: ""
    },
    {
      title: "NPM Tab Bar",
      summary:
        "Modernize web navigation with a sleek underlined tab bar for seamless user experiences.",
      links: [
        { label: "GitHub", url: "https://github.com/banazsinjary/iaux-underlined-tab-bar" }
      ],
      iconClass: ""
    },
    {
      title: "Remindful",
      summary:
        "Ignite productivity and embrace the magic of seamless organization for a successful and enchanting life.",
      links: [
        { label: "GitHub", url: "https://github.com/banazsinjary/Remindful" }
      ],
      iconClass: ""
    }
    
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
            links={project.links} // Pass links here
            iconClass={project.iconClass}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
