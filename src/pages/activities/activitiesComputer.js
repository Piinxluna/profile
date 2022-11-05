import React from "react";
// import "./activities.css";
import activities from "./../../Data/activities.json";
import ActivityYearList from "./../../components/activity-year-list/ActivityYearList";
import getDataByCategory from "./../../services/utils/getDataByCategory";
import getDataByYear from "./../../services/utils/getDataByYear";

import ActivityModal from "../../components/activity-modal/ActivityModal";

import Button from "react-bootstrap/Button";

// export const Context = React.createContext();

function ActivitiesComputer() {
  const [modalShow, setModalShow] = React.useState(false);
  const computerActivities = getDataByCategory(activities, "Computer");
  const activitiesIn2020 = getDataByYear(computerActivities, 2020);
  const activitiesIn2021 = getDataByYear(computerActivities, 2021);
  const activitiesIn2022 = getDataByYear(computerActivities, 2022);

  // console.log("2020 Activities :", activitiesIn2020);
  // console.log("2021 Activities :", activitiesIn2021);
  // console.log("2022 Activities :", activitiesIn2022);

  return (
    <div>
      <div id="test-modal">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <ActivityModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>

      <h1>กิจกรรมด้านคอมพิวเตอร์</h1>
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

export default ActivitiesComputer;
