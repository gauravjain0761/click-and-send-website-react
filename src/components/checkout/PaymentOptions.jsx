import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";


const PaymentOptions = () => {
    const [cardOpen, setCardOpen] = useState(false);
    const [upiOpen, setUpiOpen] = useState(false);
    const [googlePayOpen, setGooglePayOpen] = useState(false);

  return (
    <>
      <div className="payment_options_page">
        <div className="payment_options_page_data">
          <div className="payment_options_page_data_heading">
            <h4>Make Payment</h4>
            <p>Pay ₹13,230 confirm your order</p>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <div className="payment_options_page_box" onClick={() => setCardOpen(true)}>
              <div className="payment_options_page_box_list">
                <h6>
                  <img
                    src="./img/card.png"
                    alt="Make Payment"
                    style={{ marginRight: "10px" }}
                  />
                  Card
                </h6>
                <span>All Credit or Debit cards</span>
              </div>
            </div>
            {cardOpen && (
            <div className="payment_options_page_box_hidden">
              <div className="payment_options_page_box_hidden_data">
              <Row>
                <Col>
                  <Form.Group controlId="validationFormik01">
                    <Form.Control
                      type="text"
                      name="card_number"
                      placeholder="Card Number"
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="validationFormik01">
                    <Form.Control type="text" name="mmyy" placeholder="MM/YY" />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="validationFormik01">
                    <Form.Control
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              </div>
              <Link to='/orderConfirmation'>
                <div className="payment_options_page_box_hidden_footer" onClick={() => setCardOpen(false)}>
                  <span>Pay</span>
                  <span>₹13,230 </span>
                </div>
              </Link>
            </div>
            )}


            <div
              className="payment_options_page_box"
              style={{ marginTop: "1rem" }}
              onClick={() => setUpiOpen(true)}
            >
              <div className="payment_options_page_box_list">
                <h6>
                  <img
                    src="./img/storecredit.png"
                    alt="UPI"
                    style={{ marginRight: "10px" }}
                  />
                  UPI
                </h6>
                <span>Use your ID from any UPI app</span>
              </div>
            </div>
            {upiOpen && (
            <div className="payment_options_page_box_hidden">
              <div className="payment_options_page_box_hidden_data">
              <Row>
                <Col>
                  <Form.Group controlId="validationFormik01">
                    <Form.Control
                      type="text"
                      name="upi_id"
                      placeholder="UPI ID"
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              </div>
              <div className="payment_options_page_box_hidden_footer" onClick={() => setUpiOpen(false)}>
                <span>Pay</span>
                <span>₹13,230 </span>
              </div>
            </div>
            )}

            <div
              className="payment_options_page_box"
              style={{ marginTop: "1rem" }}
              onClick={() => setGooglePayOpen(true)}
            >
              <div className="payment_options_page_box_list">
                <h6>
                  <img
                    src="./img/google-pay.png"
                    alt="Google Pay"
                    style={{ marginRight: "10px" }}
                  />
                  Google Pay
                </h6>
                <span>Use your phone number</span>
              </div>
            </div>
            {googlePayOpen && (
            <div className="payment_options_page_box_hidden">
              <div className="payment_options_page_box_hidden_data">
              <Row>
                <Col>
                  <Form.Group controlId="validationFormik01">
                    <Form.Control
                      type="text"
                      name="phone_number"
                      placeholder="Phone Number"
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              </div>
              <div className="payment_options_page_box_hidden_footer" onClick={() => setGooglePayOpen(false)}>
                <span>Pay</span>
                <span>₹13,230 </span>
              </div>
            </div>
            )}

            <div
              className="payment_options_page_box"
              style={{ marginTop: "1rem" }}
            >
              <div className="payment_options_page_box_list">
                <h6>
                  <img
                    src="./img/wallets.png"
                    alt="Wallets & Net Banking"
                    style={{ marginRight: "10px" }}
                  />
                  Wallets & Net Banking
                </h6>
                <span>RazorPay<RxArrowTopRight /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentOptions;
