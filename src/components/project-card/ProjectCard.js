import "./ProjectCard.css";
import { FaArrowRight } from "react-icons/fa";

function ProjectCard(props) {
  const { detail } = props;
  return (
    <div className="ProjectCard">
      <img src={detail.images} alt={detail.name}></img>
      <h4>{detail.name}</h4>
      {!!detail.purpose && <p>สำหรับ{detail.purpose}</p>}
      <p>{detail.description}</p>
      <a href={`/profile/projects/${detail.id}`}>
        <button>
          ดูรายละเอียดเพิ่มเติม <FaArrowRight />
        </button>
      </a>
    </div>
  );
}

export default ProjectCard;
