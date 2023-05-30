import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import "./style.css";

const TrackOrder = () => {
  const [otpverify, setOtpverify] = useState(false);

  return (
    <>
      <Box className="trackorder_page">
        <Box
          sx={{
            width: "40%",
            margin: "auto",
            '@media (max-width: 768px)': {
              width: "90%"
            }
          }}
        >
          {otpverify ? null : (
            <div className="login_wrap">
              <div className="login_title_wrap">
                <h3>Track Order</h3>
                <h4>See the latest update from our shipping partner</h4>
              </div>
              <div className="login_input_wrap">
                <div className="login_input_inner">
                  <input
                    type="text"
                    placeholder="Order Number"
                    style={{ padding: "10px 15px 10px 15px" }}
                  />
                  <a href="#">Check your order email</a>
                </div>
                <div className="login_input_inner">
                  <input type="text" placeholder="Phone Number" />
                  <span>+91</span>
                </div>
                <button type="button" onClick={() => setOtpverify(true)}>
                  <span>Send OTP</span>
                  <svg
                    width="9"
                    height="10"
                    viewBox="0 0 9 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2143_4306)">
                      <path
                        d="M3.75977 0.955078L7.79977 4.99508L3.75977 9.04508"
                        stroke="white"
                        strokeWidth="1.7"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M0.410156 5.00488H7.80016"
                        stroke="white"
                        strokeWidth="1.7"
                        strokeMiterlimit="10"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2143_4306">
                        <rect
                          width="8.59"
                          height="9.29"
                          fill="white"
                          transform="translate(0.410156 0.35498)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '20px',
                      textAlign: 'center',
                      letterSpacing: '-0.02em',
                      color: '#70758A',
                      marginTop: "30px",
                      textAlign: "center",
                    }}>
                    If you don’t have an account, we’ll <br />create one for you
                  </Typography>
                </Box>
              </div>
            </div>
          )}

          {otpverify ? (
            <div className="login_wrap">
              <div className="login_title_wrap">
                <h3>One-time Password</h3>
                <h4>
                  Enter the OTP we sent to <a>+91 91283 61521</a>
                </h4>
              </div>
              <div className="login_input_wrap">
                <div className="login_input_inner">
                  <ReactInputVerificationCode onChange={console.log} />
                </div>
                <button type="button">
                  <span>Track Order</span>
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2226_9290)">
                      <path d="M3.28961 1.55994H12.5596C13.9096 1.55994 14.9996 2.64994 14.9996 3.99994V17.4399H0.849609V3.99994C0.849609 2.64994 1.93961 1.55994 3.28961 1.55994Z" fill="#2A3592" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                      <path d="M23.1502 17.4299H12.0102L12.0102 10.0099C12.0102 8.36993 13.3402 7.03993 14.9802 7.03993L20.1902 7.03993C21.8302 7.03993 23.1602 8.36993 23.1602 10.0099V17.4299H23.1502Z" fill="#2A3592" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                      <path d="M6.00977 20.4399C7.66662 20.4399 9.00977 19.0968 9.00977 17.4399C9.00977 15.7831 7.66662 14.4399 6.00977 14.4399C4.35291 14.4399 3.00977 15.7831 3.00977 17.4399C3.00977 19.0968 4.35291 20.4399 6.00977 20.4399Z" fill="#2A3592" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                      <path d="M18.0098 20.4399C19.6666 20.4399 21.0098 19.0968 21.0098 17.4399C21.0098 15.7831 19.6666 14.4399 18.0098 14.4399C16.3529 14.4399 15.0098 15.7831 15.0098 17.4399C15.0098 19.0968 16.3529 20.4399 18.0098 20.4399Z" fill="#2A3592" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                      <path d="M15.3503 7.04993H3.57031" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                      <path d="M12.0103 10.9399H3.57031" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2226_9290">
                        <rect width="24" height="20.58" fill="white" transform="translate(0 0.709961)" />
                      </clipPath>
                    </defs>
                  </svg>

                </button>
              </div>
              <div className="resend_otp_wrap">
                <button
                  className="change_num_btn"
                  onClick={() => setOtpverify(false)}
                >
                  <svg
                    width="9"
                    height="10"
                    viewBox="0 0 9 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2143_4283)">
                      <path
                        d="M5.24023 9.04492L1.20023 5.00492L5.24023 0.954923"
                        stroke="#2A3592"
                        strokeWidth="1.7"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M8.58984 4.99512L1.19984 4.99512"
                        stroke="#2A3592"
                        strokeWidth="1.7"
                        strokeMiterlimit="10"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2143_4283">
                        <rect
                          width="8.59"
                          height="9.29"
                          fill="white"
                          transform="translate(8.58984 9.64502) rotate(-180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span style={{ color: "#2A3592" }}>Change number</span>
                </button>
                <button className="resend_btn">
                  <span style={{ color: "#2A3592" }}>Resend OTP</span>
                  <svg
                    width="9"
                    height="10"
                    viewBox="0 0 9 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2143_4289)">
                      <path
                        d="M8.15039 0.514893V4.51489H4.15039"
                        stroke="#2A3592"
                        strokeWidth="1.7"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M8.15016 4.51501L5.02016 1.38501H4.54016C2.53016 1.38501 0.910156 3.00501 0.910156 5.00501C0.910156 7.00501 2.53016 8.63501 4.54016 8.63501C5.54016 8.63501 6.45016 8.22501 7.10016 7.57501"
                        stroke="#2A3592"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2143_4289">
                        <rect
                          width="8.94"
                          height="8.97"
                          fill="white"
                          transform="translate(0.0605469 0.514893)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default TrackOrder;
