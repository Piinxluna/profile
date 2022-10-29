import React from "react";
import "./projectPart.css";
import ProjectCard from "./../../components/home-project-card/HomeProjectCard";
import projects from "./../../data/projects.json";

const ProjectPart = () => {
  const projectElements = projects.map((project, index) => {
    if (project.ishighlight === true) {
      return <ProjectCard key={index} detail={project} />;
    }
    return null;
  });
  return (
    <div className="home-projects">
      <h3>โครงงาน</h3>
      <div className="home-projects-grid">{projectElements}</div>
    </div>
  );
};

export default ProjectPart;
