import React from "react";
import "./projects.css";
import ProjectCard from "./../components/project-card/ProjectCard";
import projects from "./../data/projects.json";
import getDataById from "./../services/utils/getDataById";
import ProjectModal from "../components/project-modal/ProjectModal";

import Container from "react-bootstrap/Container";

const Projects = () => {
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

  const projectElements = projects.map((project, index) => {
    return (
      <ProjectCard
        key={index}
        detail={project}
        setDataFromCard={setDataFromCard}
      />
    );
  });
  return (
    <Container className="projects pt-3">
      <ProjectModal handleClose={handleClose} focusData={focusData} />
      <h1 className="m-4">โครงงาน</h1>
      <div className="projects-grid">{projectElements}</div>
    </Container>
  );
};

export default Projects;
