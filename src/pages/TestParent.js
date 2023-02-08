import React from "react";
import "./projects.css";
// import ProjectCard from "./../components/project-card/ProjectCard";
// import projects from "./../data/projects.json";

import Child from "./TestChild";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Projects = () => {
  const [data, setData] = React.useState("");
  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  };
  const childToParent = (childdata) => {
    setData(childdata);
  };
  //   const projectElements = projects.map((project, index) => {
  //     return <ProjectCard key={index} detail={project} />;
  //   });
  return (
    <Container className="projects pt-3">
      {data}
      <Child childToParent={childToParent} />
      <div className="child">
        <Button primary onClick={() => parentToChild()}>
          Click Parent
        </Button>
      </div>
      {/* <hr />
      <h1 className="m-4">โครงงาน</h1>
      <div className="projects-grid">{projectElements}</div> */}
    </Container>
  );
};

export default Projects;
