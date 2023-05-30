import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GoPrimitiveDot } from "react-icons/go";
import { FiInstagram } from "react-icons/fi";
import Slider from "react-slick";

const ClubModule = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          initialSlide: 1.5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5
        }
      }
    ]
  };
  return (
    <>
      <div className="clubModule">
        <Container>
          <div className="clubModule_top">
            <div className="club-logo">
              <img src="./img/club-logo.png" alt="Club Logo" />
            </div>
            <div className="clubModule_top_text">
              <h5>
                Meet similar people. Learn something new. Contribute to a smart,
                growing community.
              </h5>
              <p>
                Bunawat Club is the place to unwind in this new world of
                doing-things-from-home. Join us as we develop our skills with
                help from renowned stylists, artists and entrepreneurs. Talk to
                our team—and each other—in casual hangouts. We’re live daily.
              </p>
            </div>
            <div className="tel_number">
              <div className="tel_number_wrap">
                <span>+91</span>
                <input type="text" placeholder="Phone Number" />
              </div>
              <button type="button" className="join_btn">
                Join
              </button>
            </div>
          </div>
        </Container>
        <div className="">
          <Container>
            <Row>
              <Col md={6}>
                <div className="eventsClubBox">
                  <Container>
                    <Row>
                      <Col sm={3} xs={3} className="eventsClubBox_first_workshop">
                        <div>
                          <span>June</span>
                          <h4>30</h4>
                        </div>
                        <div style={{ marginTop: "4rem" }}>
                          <span>Free</span>
                        </div>
                      </Col>
                      <Col sm={9} xs={9}>
                        <div className="eventsClubBox_second">
                          <div className="eventsClubBox_second_top">
                            <span style={{ color: "#FF6C6C" }}>
                              <GoPrimitiveDot /> Workshop
                            </span>
                            <span style={{ color: "#9A9EB0" }}>12:45 pm</span>
                          </div>
                          <div>
                            <h3>Everyday Makeup</h3>
                            <p>
                              Learn how to apply subtle make up in under 10
                              minutes. Follow this routine every day.
                            </p>
                          </div>
                          <div className="eventsClubBox_second_bottom">
                            <span style={{ color: "#9A9EB0" }}>
                              with Divya Sancheti
                            </span>
                            <span style={{ color: "#9A9EB0" }}>
                              2 hrs
                              <Button
                                variant="outline-primary"
                                style={{ marginLeft: "1rem" }}
                              >
                                Join
                              </Button>
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="eventsClubBox" style={{ marginTop: "1rem" }}>
                  <Container>
                    <Row>
                      <Col
                        sm={3} xs={3}
                        className="eventsClubBox_first_workshop"
                        style={{ background: "#F2C34B" }}
                      >
                        <div>
                          <span>July</span>
                          <h4>2</h4>
                        </div>
                        <div style={{ marginTop: "4rem" }}>
                          <span>Free</span>
                        </div>
                      </Col>
                      <Col sm={9} xs={9}>
                        <div className="eventsClubBox_second">
                          <div className="eventsClubBox_second_top">
                            <span style={{ color: "#F2C34B" }}>
                              <GoPrimitiveDot /> Tutorial
                            </span>
                            <span style={{ color: "#9A9EB0" }}>8:00 pm</span>
                          </div>
                          <div>
                            <h3>
                              Personal Styling & Color Theory for Festivals
                            </h3>
                            <p>
                              Explore simple techniques to pick the right
                              clothes for an occasion.
                            </p>
                          </div>
                          <div className="eventsClubBox_second_bottom">
                            <span style={{ color: "#9A9EB0" }}>
                              with Andy Barve
                            </span>
                            <span style={{ color: "#9A9EB0" }}>
                              30 min
                              <Button
                                variant="outline-primary"
                                style={{ marginLeft: "1rem" }}
                              >
                                Join
                              </Button>
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="eventsClubBox" style={{ marginTop: "1rem" }}>
                  <Container>
                    <Row>
                      <Col
                        sm={3} xs={3}
                        className="eventsClubBox_first_workshop"
                        style={{ background: "#4B84F2" }}
                      >
                        <div>
                          <span>July</span>
                          <h4>5</h4>
                        </div>
                        <div style={{ marginTop: "4rem" }}>
                          <span>Free</span>
                        </div>
                      </Col>
                      <Col sm={9} xs={9}>
                        <div className="eventsClubBox_second">
                          <div className="eventsClubBox_second_top">
                            <span style={{ color: "#4B84F2" }}>
                              <GoPrimitiveDot /> Hangout
                            </span>
                            <span style={{ color: "#9A9EB0" }}>8:00 pm</span>
                          </div>
                          <div>
                            <h3>Hangout</h3>
                            <p>
                              Unwind with our team every Friday evening. We’ll
                              play games and talk life, fashion & all things.
                            </p>
                          </div>
                          <div className="eventsClubBox_second_bottom">
                            <span style={{ color: "#9A9EB0" }}>
                              with The Bunawat Team
                            </span>
                            <span style={{ color: "#9A9EB0" }}>
                              1 hr
                              <Button
                                variant="outline-primary"
                                style={{ marginLeft: "1rem" }}
                              >
                                Join
                              </Button>
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>

              <Col md={6}>
                <div className="eventsClubBox">
                  <Container>
                    <Row>
                      <Col sm={3} xs={3} className="eventsClubBox_first">
                        <div>
                          <span>July</span>
                          <h4>6</h4>
                        </div>
                        <div style={{ marginTop: "4rem" }}>
                          <span>Free</span>
                        </div>
                      </Col>
                      <Col sm={9} xs={9}>
                        <div className="eventsClubBox_second">
                          <div className="eventsClubBox_second_top">
                            <span>
                              <GoPrimitiveDot /> Event
                            </span>
                            <span style={{ color: "#9A9EB0" }}>
                              Pune • 10:00 am
                            </span>
                          </div>
                          <div>
                            <h3>Influencing in Style</h3>
                            <p>
                              An all-day seminar with top influencers. Learn all
                              their secrets to growing your audience
                              effectively.
                            </p>
                          </div>
                          <div className="eventsClubBox_second_bottom">
                            <span style={{ color: "#9A9EB0" }}>
                              with Various Artists
                            </span>
                            <Button variant="outline-primary">Primary</Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="eventsClubBox" style={{ marginTop: "1rem" }}>
                  <Container>
                    <Row>
                      <Col sm={3} xs={3} className="eventsClubBox_first_premium">
                        <div>
                          <span>July</span>
                          <h4>13</h4>
                        </div>
                        <div style={{ marginTop: "5rem" }}>
                          <span>₹3,200</span>
                        </div>
                      </Col>
                      <Col sm={9} xs={9} className="eventsClubBox_second_premium">
                        <div className="eventsClubBox_second_top_premium">
                          <span className="eventsClubBox_second_top_premium_btn">
                            <GoPrimitiveDot /> Premium Event
                          </span>
                          <span style={{ color: "#fff" }}>Pune • 12:45 pm</span>
                        </div>
                        <div>
                          <h3>Styling, Etiquette & Buffet Lunch at Santé</h3>
                          <p>
                            Learn and dine with our team of in-house stylists &
                            an etiquette trainer.
                          </p>
                        </div>
                        <div className="eventsClubBox_second_bottom_premium">
                          <span style={{ color: "#fff" }}>
                            with Our Styling Team
                          </span>
                          <Button variant="outline-primary">register</Button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="clubModule_whatsapp">
                  <Container>
                    <Row>
                      <Col sm={2} xs={2}>
                        <img src="./img/whatsapp-icon.png" alt="whatsapp" />
                      </Col>
                      <Col sm={10} xs={10}>
                        <div className="clubModule_whatsapp_text">
                          <h6>Get instant updates</h6>
                          <p>
                            Join our WhatsApp group to be the first to know
                            about workshops & hangouts.
                          </p>
                          <Button variant="outline-primary">
                            open with whatsapp
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
                                  stroke="#fff"
                                  strokeWidth="1.7"
                                  strokeMiterlimit="10"
                                ></path>
                                <path
                                  d="M0.600098 8.82018L7.9901 1.43018"
                                  stroke="#fff"
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
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="professionals_section">
          <Container>
            <div className="professionals_section_heading">
              <h3>
                Introducing—this <br /> month’s professionals
              </h3>
            </div>
              <Slider {...settings}>
               <div>
                <div className="professionals_section_card1">
                  <div className="professionals_section_card_text">
                    <h6>Divya Sancheti</h6>
                    <p>
                      An established makeup artist from our hometown, Pune.
                      She’s equally comfortable working with models and brides.
                    </p>
                    <span>
                      <FiInstagram /> @divyasancheti
                    </span>
                  </div>
                </div>
                </div>
              
                <div className="professionals_section_card1">
                  <div className="professionals_section_card_text">
                    <h6>Divya Sancheti</h6>
                    <p>
                      An established makeup artist from our hometown, Pune.
                      She’s equally comfortable working with models and brides.
                    </p>
                    <span>
                      <FiInstagram /> @divyasancheti
                    </span>
                  </div>
                </div>
              
                <div className="professionals_section_card1">
                  <div className="professionals_section_card_text">
                    <h6>Divya Sancheti</h6>
                    <p>
                      An established makeup artist from our hometown, Pune.
                      She’s equally comfortable working with models and brides.
                    </p>
                    <span>
                      <FiInstagram /> @divyasancheti
                    </span>
                  </div>
                </div>
              
                <div className="professionals_section_card1">
                  <div className="professionals_section_card_text">
                    <h6>Divya Sancheti</h6>
                    <p>
                      An established makeup artist from our hometown, Pune.
                      She’s equally comfortable working with models and brides.
                    </p>
                    <span>
                      <FiInstagram /> @divyasancheti
                    </span>
                  </div>
                </div>

                <div className="professionals_section_card1">
                  <div className="professionals_section_card_text">
                    <h6>Divya Sancheti</h6>
                    <p>
                      An established makeup artist from our hometown, Pune.
                      She’s equally comfortable working with models and brides.
                    </p>
                    <span>
                      <FiInstagram /> @divyasancheti
                    </span>
                  </div>
                </div>

                <div className="professionals_section_card1">
                  <div className="professionals_section_card_text">
                    <h6>Divya Sancheti</h6>
                    <p>
                      An established makeup artist from our hometown, Pune.
                      She’s equally comfortable working with models and brides.
                    </p>
                    <span>
                      <FiInstagram /> @divyasancheti
                    </span>
                  </div>
                </div>
                </Slider>

            <div className="professionals_section_footer">
              <p>
                We interviewed dozens of beauty professionals and made a small
                team out of the very best. Each one of them knows what they’re
                doing and has a knack for teaching. Try a workshop, you’ll be in
                great hands.
              </p>
              <div className="reviewspage_box_top_link">
                See all professionals
                <span style={{ marginLeft: "4px" }}>
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
                        stroke="#fff"
                        strokeWidth="1.7"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M0.600098 8.82018L7.9901 1.43018"
                        stroke="#fff"
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

              <div className="professionals_section_footer_join">
                <Row>
                  <Col sm={8} xs={9}>
                    <div className="professionals_section_footer_join_text">
                      <img src="./img/club-join.png" alt="club-join" />
                      <div style={{paddingLeft: "1rem"}}>
                        <h6>Looking for club discounts?</h6>
                        <span>Get 10% off everything on the store</span>
                      </div>
                    </div>
                  </Col>
                  <Col sm={4} xs={3} style={{paddingLeft: '6px'}}>
                    <Button variant="">Join</Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ClubModule;
