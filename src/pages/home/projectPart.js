import React from "react";
import "./projectPart.css";
import projects from "./../../data/projects.json";

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const ProjectPart = () => {
  return (
    <Container className="home-projects">
      <h3 className="my-4 pl-md-4">โครงงาน</h3>
      {/* <Carousel className="my-carousel"> */}
      <Carousel slide={false} variant="dark">
        {projects.map((project, index) => {
          if (project.isHighlight === true) {
            console.log(project.coverImage);
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 d-none d-md-block img-gradient"
                  src={project.coverImage}
                  alt={project.name}
                />
                <img
                  className="d-block w-100 d-md-none"
                  src={project.coverImage}
                  alt={project.name}
                />
                <Carousel.Caption className="d-none d-md-block">
                  <h3 className="fw-600">{project.name}</h3>
                  {!!project.purpose && <h5>สำหรับ{project.purpose}</h5>}
                  <p className="fw-600">{project.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          }
          return null;
        })}
      </Carousel>

      {/* <div className="home-projects-grid">{projectElements}</div> */}
    </Container>
  );
};

export default ProjectPart;
