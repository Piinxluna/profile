import React from "react";
import hobbies from "./../data/hobbies.json";
import HobbiesBlock from "../components/hobby-block/HobbyBlock";

const Hobbies = () => {
  const hobbyElements = hobbies.map((hobby, index) => {
    return <HobbiesBlock key={index} detail={hobby} />;
  });
  return (
    <div className="hobbies">
      <h1>งานอดิเรก</h1>
      <div className="hobbies-grid">{hobbyElements}</div>
    </div>
  );
};

export default Hobbies;
