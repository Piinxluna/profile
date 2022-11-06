import React from "react";
import "./home.css";
import PersonalInfoPart from "./home/personalInfoPart";
import ActivityPart from "./home/activityPart";
import ProjectPart from "./home/projectPart";
import HobbyPart from "./home/hobbyPart";

const Home = () => {
  return (
    <div className="home pt-3">
      <PersonalInfoPart />
      <hr />
      <ActivityPart />
      <hr />
      <ProjectPart />
      <hr />
      <HobbyPart />
    </div>
  );
};

export default Home;
