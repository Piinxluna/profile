// import "./ProjectCard.css";
import { FaArrowRight } from "react-icons/fa";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  const { detail } = props;
  return (
    <Card className="project-card w-75 m-4 mx-auto px-4 py-3 text-center">
      <Card.Img variant="top" src={detail.images} alt={detail.name} />
      <Card.Body>
        <Card.Title className="fs-3 mb-3">{detail.name}</Card.Title>
        <Card.Text>
          {detail.purpose ? (
            <p className="fs-5">สำหรับ{detail.purpose}</p>
          ) : null}
          <p>{detail.description}</p>
        </Card.Text>
        <Button href={`/profile/projects/${detail.id}`} variant="outline-dark">
          ดูรายละเอียดเพิ่มเติม <FaArrowRight />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
