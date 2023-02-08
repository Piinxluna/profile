import React from "react";
import "./projectPart.css";
import projects from "./../../data/projects.json";
import getDataById from "./../../services/utils/getDataById";
import ProjectModal from "./../../components/project-modal/ProjectModal";

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const ProjectPart = () => {
  const [focusData, setFocusData] = React.useState(null);
  const setDataFromCard = (cardDataId) => {
    let data = getDataById(projects, cardDataId);
    // console.log("setDataFromCard is worked!");
    setFocusData(data);
  };

  const handleClose = () => {
    // console.log("handleClose is worked!");
    setFocusData(null);
  };
  return (
    <Container className="home-projects">
      <ProjectModal handleClose={handleClose} focusData={focusData} />
      <h3 className="my-4 pl-md-4">โครงงาน</h3>
      {/* <Carousel className="my-carousel"> */}
      <div className="my-carousel"></div>
      <Carousel pause="hover" slide={false} variant="dark">
        {projects.map((project, index) => {
          if (project.isHighlight === true) {
            return (
              <Carousel.Item key={index}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setDataFromCard(project.id);
                  }}
                >
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
                </div>

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
