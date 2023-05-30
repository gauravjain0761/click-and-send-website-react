import React from "react";
import { Modal } from "react-bootstrap";
import ReactInputVerificationCode from "react-input-verification-code";

const CodConfirmationModal = ({ showCodModal, handleCloseCodModal }) => {
  return (
    <>
      <Modal
        show={showCodModal}
        onHide={handleCloseCodModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="applyCouponModal_body" style={{ padding: "4rem" }}>
          <div className="login_wrap">
            <div className="login_title_wrap">
              <h3 style={{
                fontFamily: "Newspirit",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "30px",
                textAlign: "center",
                letterSpacing: "-0.02em",
                color: "#000000"
              }}>Verify Phone</h3>
              <h4>
                Enter the OTP we sent to your phone number to confirm your ₹13,230 COD order
              </h4>
            </div>
            <div className="login_input_wrap">
              <div className="login_input_inner">
                <ReactInputVerificationCode onChange={console.log} />
              </div>
              <button type="button" onClick={handleCloseCodModal}>
                <span>Confirm Order</span>
                <span style={{ fontSize: "12px" }}>You’ll pay ₹13,230 on delivery</span>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CodConfirmationModal;
