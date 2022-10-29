import React from "react";
import "./hobbyPart.css";
import HobbyCard from "../../components/home-hobby-card/HomeHobbyCard";

const hobbies = [
  {
    title: "เล่นเกม",
    icon: "IoGameController",
    description:
      "ชื่นชอบในการเล่นเกม โดยมีเกมที่เล่นบ่อยๆ อย่างเช่น Genshin Impact, Overwatch, ROV",
  },
  {
    title: "อ่านนิยาย",
    icon: "ImBook",
    description:
      "มีงานอดิเรกในการอ่านหนังสือนิทาน การ์ตูนตั้งแต่เด็ก ก่อนจะเปลี่ยนมาชื่อนชอบการอ่านนิยายอย่างในปัจจุบัน",
  },
  {
    title: "วาดรูป",
    icon: "MdDraw",
    description:
      "สนใจและวาดรูปเป็นงานอดิเรก โดยเฉพาะที่เกี่ยวกับตัวละครในเกมและศิลปิน K-pop ที่ชื่นชอบ",
    moreInfo: "drawing",
  },
  {
    title: "เต้นโคฟเวอร์",
    icon: "GiMusicalNotes",
    description:
      "เนื่องจากความชื่นชอบในเพลงและศิลปิน K-pop ทำให้มีความสนใจในการเต้นโคฟเวอร์เพลงเหล่านั้น จนกลายมาเป็นงานอดิเรกในที่สุด",
  },
];

const HobbyPart = () => {
  const hobbyElements = hobbies.map((hobby, index) => {
    return <HobbyCard key={index} detail={hobby} />;
  });
  return (
    <div className="home-hobbies">
      <h3>งานอดิเรก</h3>
      <div className="home-hobbies-grid">{hobbyElements}</div>
    </div>
  );
};

export default HobbyPart;
