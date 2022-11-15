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
        <Modal.Header className="px-4" closeButton>
          <Modal.Title>{focusData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <p className="fs-5">จัดโดย {focusData.organizer}</p>
          {focusData.endDate ? (
            <p>
              เมื่อวันที่ {focusData.startDate} - {focusData.endDate}
            </p>
          ) : (
            <p>เมื่อวันที่ {focusData.startDate}</p>
          )}
          {focusData.description ? (
            <p>&emsp; เป็นกิจกรรม{focusData.description}</p>
          ) : null}
          {focusData.award ? (
            <p className="fs-5">ได้รับรางวัล{focusData.award}</p>
          ) : null}
          {focusData.score ? (
            <p className="fs-5">ได้{focusData.score}</p>
          ) : null}

          {focusData.certificate ? (
            <div className="activity-modal-cert text-center">
              <hr />
              <h4 className="mt-4 mb-3">เกียรติบัตร</h4>
              <Image
                className="w-75 d-block mx-auto mb-3"
                src={
                  "/images/activities/certificate/" +
                  focusData.startDate.slice(-4) +
                  "/" +
                  focusData.certificate
                }
              />
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
