import React from "react";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from 'react-icons/go';
import ReturnStatus from "./returnStatus";


const ShippingStatus = () => {
  return (
    <>
      <div>
        <div className="ordercConfirmation_top">
          <h3>Order Confirmed</h3>
          <p>
            We’ll send you tracking details when your <br />
            package ships. Estimated delivery by <b>20th June.</b>
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
          <img src="../img/slider.png" alt="slider" width="540px" />
        </div>
      </div>

      <div>
        <div className="ordercConfirmation_top">
          <h3>Preparing to Ship</h3>
          <p>
            We’re packing your order right now. It will ship<br /> later today. We’re excited!
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
          <img src="../img/slider1.png" alt="slider1" width="540px" />
        </div>
      </div>

      <div>
        <div className="ordercConfirmation_top">
          <h3>Shipped!</h3>
          <p>
            We’ve sent you the tracking details over email<br /> and text. You can also track it right here—
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
          <img src="../img/slider2.png" alt="slider2" width="540px" />
        </div>
      </div>

      <div>
        <div className="ordercConfirmation_top">
          <div className="shiping_status_box">
            <div>
              <h6>Bluedart</h6>
              <span><GoPrimitiveDot style={{ color: "#83E46B" }} />Now in Amravati, MH</span>
            </div>
            <div>
              <h6>AWB—91286431928456</h6>
              <Link to="/orderConfirmation">
                <div className="ordercConfirmation_top_help">
                  <p>Track </p>
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
          </div>
          <h3>Out for Delivery</h3>
          <p>
            Call the delivery partner Siddhesh Sutar at<br /> <a href="tel:+919187261520" className="shippingStatusLink">+91 91872 61520</a> for more details
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
          <img src="../img/slider3.png" alt="slider3" width="540px" />
        </div>
      </div>

      <div>
        <div className="ordercConfirmation_top">
          <div className="shiping_status_box">
            <div>
              <h6>Bluedart</h6>
              <span><GoPrimitiveDot style={{ color: "#83E46B" }} />Now in Amravati, MH</span>
            </div>
            <div>
              <h6>AWB—91286431928456</h6>
              <Link to="/orderConfirmation">
                <div className="ordercConfirmation_top_help">
                  <p>Track </p>
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
          </div>
          <h3>Delivered</h3>
          <p>
            We’ve delivered your order. Hope you love it! <br />
            <a href="#" className="shippingStatusLink">Write a Review</a>
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
          <img src="../img/slider4.png" alt="slider4" width="540px" />
        </div>
      </div>
      <ReturnStatus />
    </>
  );
};

export default ShippingStatus;
