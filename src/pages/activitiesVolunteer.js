import React from "react";
// import "./activities.css";
import activities from "./../data/activities.json";
import ActivityYearList from "../components/activity-year-list/ActivityYearList";
import getDataByCategory from "../services/utils/getDataByCategory";
import getDataByYear from "../services/utils/getDataByYear";

function activitiesVolunteer() {
  const volunteerActivities = getDataByCategory(activities, "Volunteer");
  const activitiesIn2020 = getDataByYear(volunteerActivities, 2020);
  const activitiesIn2021 = getDataByYear(volunteerActivities, 2021);
  const activitiesIn2022 = getDataByYear(volunteerActivities, 2022);

  // console.log("2020 Activities :", activitiesIn2020);
  // console.log("2020 Activities :", activitiesIn2020.length === 0);
  // console.log("2021 Activities :", activitiesIn2021);
  // console.log("2022 Activities :", activitiesIn2022);

  return (
    <div>
      <h1>ด้านจิตอาสา</h1>
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

export default activitiesVolunteer;
