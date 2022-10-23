import React from "react";
import "./index.css";
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
        <img src="/img/test1.png" alt="" />
      </div>

      <hr />

      <div className="activities">
        <h3>ผลงานและกิจกรรมที่เคยทำ</h3>
        <div className="activities-grid">
          <div>
            Test1111111111111111111111111 11111111111111111111111111111111111111
            111111111111111111111111111 1111111111111111111111111111111111
          </div>
          <div>
            Test2222222222222222222222222 22222222222222222222222222222222222222
            222222222222222222222222222 2222222222222222222222222222222222
          </div>
          <div>
            Test3333333333333333333333333 33333333333333333333333333333333333333
            333333333333333333333333333 3333333333333333333333333333333333
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
