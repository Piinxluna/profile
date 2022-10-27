import React from "react";
import "./activityPart.css";
import ActivityTypeCard from "../../components/home-activity-type-card/HomeActivityTypeCard";

const activityTypes = [
  {
    title: "ด้านคอมพิวเตอร์",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_960_720.jpg",
    link: "computer",
  },
  {
    title: "ด้านจิตอาสา",
    thumbnailUrl:
      "https://images.pexels.com/photos/3480494/pexels-photo-3480494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "volunteer",
  },
  {
    title: "ด้านอื่นๆ",
    thumbnailUrl:
      "https://images.pexels.com/photos/2663851/pexels-photo-2663851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "other",
  },
];

const ActivityPart = () => {
  const activityTypeElements = activityTypes.map((activityType, index) => {
    return <ActivityTypeCard key={index} detail={activityType} />;
  });
  return (
    <div className="activities">
      <h3>ผลงานและกิจกรรมที่เคยทำ</h3>
      <div className="activities-grid">{activityTypeElements}</div>
    </div>
  );
};

export default ActivityPart;
