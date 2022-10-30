import React from "react";
// import "./activities.css";
import activities from "./../data/activities.json";
import ActivityYearList from "../components/activity-year-list/ActivityYearList";
import getDataByCategory from "../services/utils/getDataByCategory";
import getDataByYear from "../services/utils/getDataByYear";

function activitiesOthers() {
  const othersActivities = getDataByCategory(activities, "Others");
  const activitiesIn2020 = getDataByYear(othersActivities, 2020);
  const activitiesIn2021 = getDataByYear(othersActivities, 2021);
  const activitiesIn2022 = getDataByYear(othersActivities, 2022);

  // console.log("2020 Activities :", activitiesIn2020);
  // console.log("2021 Activities :", activitiesIn2021);
  // console.log("2022 Activities :", activitiesIn2022);

  return (
    <div>
      <h1>กิจกรรมด้านอื่นๆ</h1>
      <div className="activities-grid">
        {activitiesIn2020.length !== 0 && (
          <>
            <ActivityYearList year={"2020"} activities={activitiesIn2020} />
            <hr />
          </>
        )}
        {activitiesIn2021.length !== 0 && (
          <>
            <ActivityYearList year={"2021"} activities={activitiesIn2021} />
            <hr />
          </>
        )}
        {activitiesIn2022.length !== 0 && (
          <>
            <ActivityYearList year={"2022"} activities={activitiesIn2022} />
          </>
        )}
      </div>
    </div>
  );
}

export default activitiesOthers;
