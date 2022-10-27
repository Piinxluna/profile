import React from "react";
import "./home.css";
import ActivityPart from "./home/activityPart";
import ProjectPart from "./home/projectPart";
import HobbyPart from "./home/hobbyPart";
import { IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";

const Home = () => {
  return (
    <div className="home">
      <div className="personal-info">
        <h1>Chanya Sittinuntawit</h1>
        <h3>Prasarnmit Demonstration School (Secondary),</h3>
        <h3>IT Major Student</h3>
        <div className="contact">
          <h3>ช่องทางการติดต่อ</h3>
          <div>
            <IoMail />
            <ImPhone />
          </div>
        </div>
        <img src="images/test1.jpg" alt="Chanya's Profile" />
      </div>

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
