import React from "react";
import "./personalInfoPart.css";

import { IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";

import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

import Image from "react-bootstrap/Image";

function PersonalInfoPart() {
  const [modalMailShow, setModalMailShow] = React.useState(false);
  const [modalPhoneShow, setModalPhoneShow] = React.useState(false);

  return (
    <Container className="home-personal-info d-flex align-items-center">
      <div className="info">
        <h1 className="font-weight-bold">Chanya Sittinuntawit</h1>
        <div className="education text-right">
          <h4>Prasarnmit Demonstration School (Secondary),</h4>
          <h4>IT Major Student</h4>
        </div>
        <div className="contact font-weight-bold">
          <h3>ช่องทางการติดต่อ</h3>
          <div>
            <Button variant="primary" onClick={() => setModalMailShow(true)}>
              <IoMail />
            </Button>
            <ContactModal
              title={"E-mail"}
              shortName={"E-mail"}
              fullName={"E-mail address"}
              contact={"pingpingkuss@gmail.com"}
              contactNowBtn={"mailto:pingpingkuss@gmail.com"}
              contactNowText={"Mail me"}
              show={modalMailShow}
              onHide={() => setModalMailShow(false)}
            />
            <Button variant="primary" onClick={() => setModalPhoneShow(true)}>
              <ImPhone />
            </Button>
            <ContactModal
              title={"โทรศัพท์"}
              shortName={"Tel"}
              fullName={"Phone Number"}
              contact={"096-859-3355"}
              contactNowBtn={"tel:+66968593355"}
              contactNowText={"Call me"}
              show={modalPhoneShow}
              onHide={() => setModalPhoneShow(false)}
            />
          </div>
        </div>
      </div>

      <Image
        id="home-profile-pic"
        // src={require("./../../imagesForTest/test1.jpg")}
        src="images/Pingping01.jpg"
        alt="Chanya's Profile"
        roundedCircle={true}
      />
    </Container>
  );
}

function ContactModal(props) {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const target = React.useRef(null);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="contact-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ติดต่อทาง {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.shortName} : {props.contact}
        </p>
        <Button
          ref={target}
          onClick={() => {
            navigator.clipboard.writeText(props.contact);
            setTooltipShow(!tooltipShow);
          }}
        >
          Copy {props.fullName}
        </Button>
        <Overlay target={target.current} show={tooltipShow} placement="bottom">
          {(props) => (
            <Tooltip id="contact-copy" {...props}>
              Copied
            </Tooltip>
          )}
        </Overlay>
        <Button href={props.contactNowBtn}>{props.contactNowText}</Button>
      </Modal.Body>
    </Modal>
  );
}

export default PersonalInfoPart;
