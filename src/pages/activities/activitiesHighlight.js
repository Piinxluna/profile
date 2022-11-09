import React from "react";
// import "./activities.css";
import activities from "./../../data/activities.json";
import ActivityYearList from "./../../components/activity-year-list/ActivityYearList";
import getHighlightData from "../../services/utils/getHighlightData";
import getDataByYear from "./../../services/utils/getDataByYear";
import getDataById from "./../../services/utils/getDataById";
import ActivityModal from "./../../components/activity-modal/ActivityModal";

import Container from "react-bootstrap/Container";

function ActivitiesComputer() {
  const highlightActivities = getHighlightData(activities);
  const activitiesIn2020 = getDataByYear(highlightActivities, 2020);
  const activitiesIn2021 = getDataByYear(highlightActivities, 2021);
  const activitiesIn2022 = getDataByYear(highlightActivities, 2022);
  // console.log("2020 Activities :", activitiesIn2020);
  // console.log("2021 Activities :", activitiesIn2021);
  // console.log("2022 Activities :", activitiesIn2022);

  const [focusData, setFocusData] = React.useState(null);
  const setDataFromCard = (cardDataId) => {
    let data = getDataById(highlightActivities, cardDataId);
    // console.log("setDataFromCard is worked!");
    setFocusData(data);
  };

  const handleClose = () => {
    // console.log("handleClose is worked!");
    setFocusData(null);
  };

  return (
    <Container className="activities-computer pt-3">
      <ActivityModal handleClose={handleClose} focusData={focusData} />
      <h1 className="m-4">ภาพรวมกิจกรรม</h1>
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

export default ActivitiesComputer;
