import "./Components.css";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Swamp Meet",
      summary:
        "A mobile event discovery app designed for SFSU students, addressing the gap in campus event visibility. Led user research via surveys and interviews, developed personas, and iterated through lo-fi and hi-fi Figma prototypes. Usability testing informed improvements to navigation language and event creation flows.",
      links: [
        {
          label: "Figma",
          url: "https://www.figma.com/design/DkzyVgteahcUeOs7tCAaar/Group-10?node-id=7-369&t=ZJTxxVgFe7L0IftO-1",
        },
      ],
      tags: ["UX Research", "Design"],
      iconClass: "",
    },
    {
      title: "Human Pose Estimation",
      summary:
        "Leveraged deep learning to analyze human poses, utilizing the MPII dataset for advanced predictive modeling.",
      links: [
        { label: "GitHub", url: "https://github.com/banazsinjary/HumanPose" },
        {
          label: "Documentation",
          url: "https://docs.google.com/document/d/1z34ZQ56bxHlPFZEwfDSUN0VoOzRnd7BuZA50zlmGYwQ/edit?usp=sharing",
        },
      ],
      tags: ["Machine Learning", "Data Analysis"],
      iconClass: "",
    },
    {
      title: "Credit Card Fraud Exploration",
      summary:
        "This project visualizes credit card transactions, highlighting fraud patterns and transaction trends through interactive charts and data analysis.",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/banazsinjary/credit-card-fraud-detection",
        },
      ],
      tags: ["Data Analysis"],
      iconClass: "",
    },
    {
      title: "Shark Attack Analysis",
      summary:
        "Explored global shark attack data using visualization techniques to uncover patterns and insights.",
      links: [
        {
          label: "Tableau",
          url: "https://public.tableau.com/app/profile/banaz.sinjary/viz/805_shark_attack/Story1",
        },
      ],
      tags: ["Data Analysis"],
      iconClass:
        "This project visualizes credit card transactions, highlighting fraud patterns and transaction trends through interactive charts and data analysis.",
    },
    {
      title: "Recipes Web App",
      summary:
        "This web app lets users browse a selection of delicious recipes where they can view different nutritional facts and details about each recipe.",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/A-Singh15/Recipies-Webapp",
        },
      ],
      tags: ["Frontend Dev"],
      iconClass: "",
    },
    {
      title: "NPM Tab Bar",
      summary:
        "Modernize web navigation with a sleek underlined tab bar for seamless user experiences.",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/banazsinjary/iaux-underlined-tab-bar",
        },
      ],
      tags: ["Frontend Dev"],
      iconClass: "",
    },
    {
      title: "Remindful",
      summary:
        "Ignite productivity and embrace the magic of seamless organization for a successful and enchanting life.",
      links: [
        { label: "GitHub", url: "https://github.com/banazsinjary/Remindful" },
      ],
      tags: ["Frontend Dev"],
      iconClass: "",
    },
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
            tags={project.tags}
            links={project.links}
            iconClass={project.iconClass}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
