import React from "react";
import { DayPicker } from 'react-day-picker';

const Calendar = ({ getActiveHeader, scroll, hover, headerColor }) => {
  const [selectedDay, setSelectedDay] = React.useState();
  return (
    <>
      <div className="cart_inner calander_wrap position-relative calander_fixed">
        <div className="date_wrap">
          <DayPicker
            showOutsideDays
            fixedWeeks
            mode="single"
            onSelect={setSelectedDay}
            selected={selectedDay}
          />
        </div>
        <div className="cal_news_wrap">
          <div className="cal_news">
            <div className="cla_news_title">
              <div className="cla_news_left">
                <span style={{ backgroundColor: "#FF6C6C" }}></span>
                <p style={{ color: "#FF6C6C" }}>Workshop</p>
              </div>
              <span>12:45 pm</span>
            </div>
            <div className="workshop_title">
              <h3>Everyday Makeup</h3>
              <p>
                Learn how to apply subtle make up in under 10 minutes. Follow
                this routine every day.
              </p>
            </div>
            <div className="join_wrap">
              <p>with Divya Sancheti</p>
              <div className="join_btn_wrap">
                <p>2 hrs</p>
                <button className="join_btn">Join</button>
              </div>
            </div>
          </div>

          <div className="cal_news">
            <div className="cla_news_title">
              <div className="cla_news_left">
                <span style={{ backgroundColor: "#F2C34B" }}></span>
                <p style={{ color: "#F2C34B" }}>Tutorial</p>
              </div>
              <span>12:45 pm</span>
            </div>
            <div className="workshop_title">
              <h3>Personal Styling for Festivals</h3>
              <p>
                Learn how to apply subtle make up in under 10 minutes. Follow
                this routine every day.
              </p>
            </div>
            <div className="join_wrap">
              <p>with Divya Sancheti</p>
              <div className="join_btn_wrap">
                <p>2 hrs</p>
                <button className="join_btn">Join</button>
              </div>
            </div>
          </div>

          <div className="cal_news">
            <div className="cla_news_title">
              <div className="cla_news_left">
                <span style={{ backgroundColor: "#FF6C6C" }}></span>
                <p style={{ color: "#FF6C6C" }}>Workshop</p>
              </div>
              <span>12:45 pm</span>
            </div>
            <div className="workshop_title">
              <h3>Everyday Makeup</h3>
              <p>
                Learn how to apply subtle make up in under 10 minutes. Follow
                this routine every day.
              </p>
            </div>
            <div className="join_wrap">
              <p>with Divya Sancheti</p>
              <div className="join_btn_wrap">
                <p>2 hrs</p>
                <button className="join_btn">Join</button>
              </div>
            </div>
          </div>
        </div>
        <div className="date_sync">
          <div className="resend_otp_wrap">
            <button className="resend_btn">
              <span>3rd July 2022</span>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2146_6797)">
                  <path
                    d="M0.599609 1.43018H7.98961V8.82018"
                    stroke="#2A3592"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M0.599609 8.82018L7.98961 1.43018"
                    stroke="#2A3592"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2146_6797">
                    <rect
                      width="8.84"
                      height="8.84"
                      fill={
                        getActiveHeader(scroll, hover, headerColor)
                          ? "#2A3592"
                          : "#fff"
                      }
                      transform="translate(0 0.580078)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="resend_btn">
              <span>Sync Calendar</span>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2146_6803)">
                  <path
                    d="M15.1499 0.5V7.03H8.62988"
                    stroke="#2A3990"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M15.1507 7.02988L9.76074 1.62988H8.79074C6.45074 1.62988 4.36074 2.72988 3.01074 4.43988"
                    stroke="#2A3990"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.45996 17.5V10.97H7.98996"
                    stroke="#2A3990"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M1.45996 10.97L6.84996 16.36H7.81996C10.16 16.36 12.25 15.26 13.6 13.55"
                    stroke="#2A3990"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2146_6803">
                    <rect
                      width="15.39"
                      height="17"
                      fill={
                        getActiveHeader(scroll, hover, headerColor)
                          ? "#2A3592"
                          : "#fff"
                      }
                      transform="translate(0.610352 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
