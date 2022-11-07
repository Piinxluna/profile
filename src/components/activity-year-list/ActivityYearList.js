import "./ActivityYearList.css";
import ActivityCard from "./../activity-card/ActivityCard";

function ActivityYearList(props) {
  const datas = props.activities;
  const activityElements = datas.map((activity, index) => {
    if (activity.isHide === false) {
      return (
        <ActivityCard
          key={index}
          detail={activity}
          setDataFromCard={props.setDataFromCard}
        />
      );
    }
    return null;
  });
  return (
    <div className="activity-year-list p-3">
      <h2>{props.year}</h2>
      <div className="activity-year-list-grid">{activityElements}</div>
    </div>
  );
}

export default ActivityYearList;
