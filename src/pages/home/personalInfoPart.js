import React from "react";
import "./personalInfoPart.css";

import { IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

function PersonalInfoPart() {
  const [modalMailShow, setModalMailShow] = React.useState(false);
  const [modalPhoneShow, setModalPhoneShow] = React.useState(false);

  return (
    <div className="personal-info">
      <h1>Chanya Sittinuntawit</h1>
      <h3>Prasarnmit Demonstration School (Secondary),</h3>
      <h3>IT Major Student</h3>
      <div className="contact">
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
      <img src="images/test1.jpg" alt="Chanya's Profile" />
    </div>
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
        <Button>
          <a href={props.contactNowBtn}>{props.contactNowText}</a>
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default PersonalInfoPart;
