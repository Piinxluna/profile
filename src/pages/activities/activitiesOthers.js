import React from "react";
// import "./activities.css";
import activities from "./../../data/activities.json";
import ActivityYearList from "../../components/activity-year-list/ActivityYearList";
import getDataByCategory from "../../services/utils/getDataByCategory";
import getDataByYear from "../../services/utils/getDataByYear";
import getDataById from "./../../services/utils/getDataById";
import ActivityModal from "./../../components/activity-modal/ActivityModal";

import Container from "react-bootstrap/Container";

function ActivitiesOthers() {
  const othersActivities = getDataByCategory(activities, "Others");
  const activitiesIn2020 = getDataByYear(othersActivities, 2020);
  const activitiesIn2021 = getDataByYear(othersActivities, 2021);
  const activitiesIn2022 = getDataByYear(othersActivities, 2022);

  // console.log("2020 Activities :", activitiesIn2020);
  // console.log("2021 Activities :", activitiesIn2021);
  // console.log("2022 Activities :", activitiesIn2022);

  const [focusData, setFocusData] = React.useState(null);
  const setDataFromCard = (cardDataId) => {
    let data = getDataById(othersActivities, cardDataId);
    // console.log("setDataFromCard is worked!");
    setFocusData(data);
  };

  const handleClose = () => {
    // console.log("handleClose is worked!");
    setFocusData(null);
  };

  return (
    <Container className="activities-others pt-3">
      <ActivityModal handleClose={handleClose} focusData={focusData} />
      <h1 className="m-4">กิจกรรมด้านอื่นๆ</h1>
      <div className="activities-grid">
        {activitiesIn2020.length !== 0 && (
          <>
            <ActivityYearList
              year={"2020"}
              activities={activitiesIn2020}
              setDataFromCard={setDataFromCard}
            />
            <hr />
          </>
        )}
        {activitiesIn2021.length !== 0 && (
          <>
            <ActivityYearList
              year={"2021"}
              activities={activitiesIn2021}
              setDataFromCard={setDataFromCard}
            />
            <hr />
          </>
        )}
        {activitiesIn2022.length !== 0 && (
          <>
            <ActivityYearList
              year={"2022"}
              activities={activitiesIn2022}
              setDataFromCard={setDataFromCard}
            />
          </>
        )}
      </div>
    </Container>
  );
}

export default ActivitiesOthers;
