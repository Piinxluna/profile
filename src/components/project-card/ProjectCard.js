// import "./ProjectCard.css";
import { FaArrowRight } from "react-icons/fa";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  const { detail } = props;
  const dataId = detail.id;

  return (
    <Card className="project-card w-75 m-4 mx-auto px-4 py-3 text-center">
      <Card.Img
        variant="top"
        src={"/images/" + detail.coverImage}
        alt={detail.name}
      />
      <Card.Body>
        <Card.Title className="fs-3 mb-2">{detail.name}</Card.Title>
        {detail.purpose ? <p className="fs-5">สำหรับ{detail.purpose}</p> : null}
        <p>{detail.description}</p>
        <Button
          onClick={() => {
            props.setDataFromCard(dataId);
          }}
          variant="outline-dark"
        >
          ดูรายละเอียดเพิ่มเติม <FaArrowRight />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
