import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function ActivityModal(props) {
  const { focusData } = props;
  // console.log(focusData);
  if (focusData) {
    return (
      <Modal
        show={props.focusData}
        onHide={props.handleClose}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header className="px-4" closeButton>
          <Modal.Title>{focusData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          {focusData.purpose ? (
            <p className="fs-5">สำหรับ{focusData.purpose}</p>
          ) : null}

          <p>&emsp; {focusData.description}</p>

          <p>&emsp; {focusData.tools}</p>

          {focusData.furtherDev ? (
            <p>&emsp; ในอนาคตจะพัฒนาโดย{focusData.furtherDev}</p>
          ) : null}

          {focusData.benefit ? (
            <p>&emsp; สิ่งที่ได้จากการทำงาน : {focusData.benefit}</p>
          ) : null}

          {focusData.images ? (
            <div className="project-modal-img">
              <hr /> <Image src={focusData.images} />
            </div>
          ) : null}

          {focusData.moreInfo ? (
            <div className="text-center p-2">
              <a href={focusData.moreInfo} target="_blank" rel="noreferrer">
                ดูรายละเอียดเพิ่มเติม <FaArrowRight />
              </a>
            </div>
          ) : null}
        </Modal.Body>
      </Modal>
    );
  }
}

export default ActivityModal;
