import "./ActivityYearList.css";
import ActivityCard from "./../activity-card/ActivityCard";

function ActivityYearList(props) {
  const data = props.activities;
  const activityElements = data.map((activity, index) => {
    if (activity.isHide === false) {
      return <ActivityCard key={index} detail={activity} />;
    }
    return null;
  });
  return (
    <div className="activity-year-list">
      <h2>{props.year}</h2>
      <div className="activity-year-list-grid">{activityElements}</div>
    </div>
  );
}

export default ActivityYearList;
