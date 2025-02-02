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
        { label: "GitHub", url: "https://github.com/banazsinjary/HumanPose" },
        { label: "Documentation", url: "https://docs.google.com/document/d/1z34ZQ56bxHlPFZEwfDSUN0VoOzRnd7BuZA50zlmGYwQ/edit?usp=sharing" }
      ],
      iconClass: ""
    },
    {
      title: "Shark Attack Analysis",
      summary:
        "Explored global shark attack data using visualization techniques to uncover patterns and insights.",
      links: [
        { label: "Tableau", url: "https://public.tableau.com/app/profile/banaz.sinjary/viz/805_shark_attack/Story1" }
      ],
      iconClass: ""
    },
    {
      title: "Recipes Web App",
      summary:
        "This web app lets users browse a selection of delicious recipes where they can view different nutritional facts and details about each recipe.",
      links: [
        { label: "GitHub", url: "https://github.com/A-Singh15/Recipies-Webapp" }
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
