import "./HomeActivityTypeCard.css";
import { FaArrowRight } from "react-icons/fa";

function HomeActivityType(props) {
  const { detail } = props;
  return (
    <div className="ActivityTypeCard">
      <img src={detail.thumbnailUrl} alt="type"></img>
      <h4>{detail.title}</h4>
      <a href={`/activities/${detail.link}`}>
        <button>
          ดูผลงาน <FaArrowRight />
        </button>
      </a>
    </div>
  );
}

export default HomeActivityType;
