import React from "react";
import "./projects.css";
import ProjectCard from "./../components/project-card/ProjectCard";
import projects from "./../data/projects.json";

import Container from "react-bootstrap/Container";

const Projects = () => {
  const projectElements = projects.map((project, index) => {
    return <ProjectCard key={index} detail={project} />;
  });
  return (
    <Container className="projects pt-3">
      <h1 className="m-4">โครงงาน</h1>
      <div className="projects-grid">{projectElements}</div>
    </Container>
  );
};

export default Projects;
