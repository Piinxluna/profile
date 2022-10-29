import React from "react";
// import "./activitiesComputer.css";
import activities from "./../data/activities.json";
import getDataByCategory from "../services/utils/getDataByCategory";

function activitiesComputer() {
  const computerActivities = getDataByCategory(activities, "Computer");
  console.log(computerActivities);

  return (
    <div>
      <h1>ด้านคอมพิวเตอร์</h1>
      {/* <div className="activities-grid">{activityElements}</div> */}
    </div>
  );
}

export default activitiesComputer;
