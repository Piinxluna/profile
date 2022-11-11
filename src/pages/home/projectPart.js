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
      <Carousel>
        {projects.map((project, index) => {
          if (project.ishighlight === true) {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={"/images/" + project.coverImage}
                  // src={project.coverImage}
                  alt={project.name}
                />
                <Carousel.Caption>
                  <h3>{project.name}</h3>
                  {!!project.purpose && <p>สำหรับ{project.purpose}</p>}
                  <p className="d-none d-md-block">{project.description}</p>
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
