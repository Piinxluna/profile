import React from "react";
import "./projects.css";
import ProjectCard from "./../components/project-card/ProjectCard";
import projects from "./../Data/projects.json";

const Projects = () => {
  const projectElements = projects.map((project, index) => {
    return <ProjectCard key={index} detail={project} />;
  });
  return (
    <div className="projects">
      <h1>โครงงาน</h1>
      <div className="projects-grid">{projectElements}</div>
    </div>
  );
};

export default Projects;
