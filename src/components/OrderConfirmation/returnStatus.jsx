import React from 'react';
import { Link } from "react-router-dom";
import { BsCheckLg } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';
import { FaPercentage } from 'react-icons/fa';
import { BsTag } from 'react-icons/bs';
import { FormControlLabel, Radio } from '@mui/material';
import { Col, Row } from 'react-bootstrap';

const ReturnStatus = () => {
  return (
    <>
      <div>
        <div className="ordercConfirmation_top">
        <div className="return_status_box">
          <div className="return_status_box_list">
            <div>
                <h6>Bluedart</h6>
                <span><BsCheckLg /> Delivered to Pune, MH</span>
            </div>
            <div>
                <h6>AWB—91286431928456</h6>
            </div>
          </div>
          <div className='shiping_status_box_footer'>
              <h6>Return or Exchange</h6>
              <span>Eligible till 30th June</span>
          </div>
        </div>

        <div className="return_status_box" style={{marginTop: "1rem"}}>
          <div className="return_status_box_list">
            <div>
                <h6><img src="../img/returnpolicy.png" alt='Schedule a Return' width="20px" />Schedule a Return</h6>
                <span>Select the items you would like to return.<br /> A pickup will be scheduled for <strong>19th June, 7am—7pm.</strong></span>
            </div>
            <div>
                <h6 style={{fontSize: "30px"}}><TiDelete /></h6>
            </div>
          </div>

          <div className='return_status_box_list'>
          <div style={{display: "flex"}}>
                  <FormControlLabel value="female" control={<Radio />} style={{marginRight: "0"}} />
                  <div>
                    <h6 style={{marginBottom: "0px"}}>Synthetic Floral Print Sari</h6>
                    <span>Lemon Yellow  •  Medium  •  1 unit</span>
                  </div>
                </div>
                <div>
                <span><strong>₹4,500</strong></span>
            </div>
          </div>

          <div className='return_status_box_list'>
          <div style={{display: "flex"}}>
                  <FormControlLabel value="female" control={<Radio />} style={{marginRight: "0"}} />
                  <div>
                    <h6 style={{marginBottom: "0px"}}>Pink Floral Sari & Jacket</h6>
                    <span>Medium  •  2 units</span>
                  </div>
                </div>
                <div>
                <span><strong>₹10,200</strong> </span>
            </div>
          </div>

          <div className='return_status_box_list' style={{background: "#F7F8FF", border: "1px solid #EAEBF0"}}>
                  <Row>
                    <Col sm={6} xs={12}>
                      <div style={{paddingTop: "0.6rem"}}>
                        <h6><BsTag /> Please keep tags & packaging intact</h6>
                      </div>
                    </Col>
                    <Col sm={6} xs={12}>
                      <div style={{paddingTop: "0.6rem"}}>
                        <h6><FaPercentage /> Coupon amount will be deducted from refund</h6>
                      </div>
                    </Col>
                  </Row>
          </div>

          <div className='shiping_status_box_footer'>
              <h6>Return</h6>
              <span>Get ₹13,230 Store Credit</span>
          </div>
        </div>

          <h3 style={{ marginTop: "2rem" }}>Return Scheduled</h3>
          <p>
          Keep your tags intact. Our pickup partner will<br /> arrive on 19th June between 7am & 7pm.
          </p>
          <Link to="/orderConfirmation">
            <div className="ordercConfirmation_top_help">
              <p>Get help on whatsapp </p>
              <span>
                <svg
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_1592)">
                    <path
                      d="M0.600098 1.43018H7.9901V8.82018"
                      stroke="#2A3592"
                      strokeWidth="1.7"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M0.600098 8.82018L7.9901 1.43018"
                      stroke="#2A3592"
                      strokeWidth="1.7"
                      strokeMiterlimit="10"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_1592">
                      <rect
                        width="8.84"
                        height="8.84"
                        fill="white"
                        transform="translate(0 0.580078)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </Link>
        </div>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img src="../img/slider5.png" alt="slider5" width="540px" />
        </div>
      </div>

      <div>
        <div className="ordercConfirmation_top">
          <h3>Return Picked Up</h3>
          <p>
          We will inspect the items and issue a refund once<br /> the shipment comes back to us.
          </p>
          <Link to="/orderConfirmation">
            <div className="ordercConfirmation_top_help">
              <p>Get help on whatsapp </p>
              <span>
                <svg
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_1592)">
                    <path
                      d="M0.600098 1.43018H7.9901V8.82018"
                      stroke="#2A3592"
                      strokeWidth="1.7"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M0.600098 8.82018L7.9901 1.43018"
                      stroke="#2A3592"
                      strokeWidth="1.7"
                      strokeMiterlimit="10"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_1592">
                      <rect
                        width="8.84"
                        height="8.84"
                        fill="white"
                        transform="translate(0 0.580078)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </Link>
        </div>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img src="../img/slider6.png" alt="slider6" width="540px" />
        </div>
      </div>

      <div>
        <div className="ordercConfirmation_top">
          <h3>Order Returned</h3>
          <p>
          We have issued a refund. You should see it on your<br /> <strong>Card ending *1234</strong> by 27th June.
          </p>
          <Link to="/orderConfirmation">
            <div className="ordercConfirmation_top_help">
              <p>Get help on whatsapp </p>
              <span>
                <svg
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_1592)">
                    <path
                      d="M0.600098 1.43018H7.9901V8.82018"
                      stroke="#2A3592"
                      strokeWidth="1.7"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M0.600098 8.82018L7.9901 1.43018"
                      stroke="#2A3592"
                      strokeWidth="1.7"
                      strokeMiterlimit="10"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_1592">
                      <rect
                        width="8.84"
                        height="8.84"
                        fill="white"
                        transform="translate(0 0.580078)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </Link>
        </div>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img src="../img/slider7.png" alt="slider7" width="540px" />
        </div>
      </div>
    </>
  );
}

export default ReturnStatus;
