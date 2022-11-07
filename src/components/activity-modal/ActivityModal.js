import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function ActivityModal(props) {
  const { focusData } = props;

  if (focusData) {
    return (
      <Modal
        show={props.focusData}
        onHide={props.handleClose}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{focusData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fs-5">จัดโดย {focusData.organizer}</p>
          {focusData.endDate ? (
            <p>
              เมื่อวันที่ {focusData.startDate} - {focusData.endDate}
            </p>
          ) : (
            <p>เมื่อวันที่ {focusData.startDate}</p>
          )}
          {focusData.description ? (
            <p>เป็นกิจกรรม{focusData.description}</p>
          ) : null}
          {focusData.award ? (
            <p className="fs-5">ได้รับรางวัล{focusData.award}</p>
          ) : null}
          {focusData.score ? (
            <p className="fs-5">ได้{focusData.score}</p>
          ) : null}

          {focusData.certificate ? (
            <div className="activity-modal-cert">
              <hr /> <Image src={focusData.certificate} />
            </div>
          ) : null}

          {focusData.images ? (
            <div className="activity-modal-img">
              <hr /> <Image src={focusData.images} />
            </div>
          ) : null}
        </Modal.Body>
      </Modal>
    );
  }
}

export default ActivityModal;
