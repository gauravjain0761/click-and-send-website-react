import { Divider } from "@mui/material";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GoPrimitiveDot } from 'react-icons/go';


const EventsClubModule = () => {
  return (
    <>
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
                  <span><GoPrimitiveDot size={18} />Event</span>
                  <span style={{ color: "#9A9EB0" }}>Pune • 10:00 am</span>
                </div>
                <div>
                  <h3>Influencing in Style</h3>
                  <p>
                    An all-day seminar with top influencers. Learn all their
                    secrets to growing your audience effectively.
                  </p>
                </div>
                <div className="eventsClubBox_second_bottom">
                  <span style={{ color: "#9A9EB0", textTransform: "none" }}>with Various Artists</span>
                  <Button variant="outline-primary">More info</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="eventsClubBox" style={{marginTop: "2rem"}}>
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
                  <span className="eventsClubBox_second_top_premium_btn"> <GoPrimitiveDot size={18} /> Premium Event</span>
                  <span style={{ color: "#fff" }}>Pune  •  12:45 pm</span>
                </div>
                <div>
                  <h3>Styling, Etiquette & Buffet Lunch at Santé</h3>
                  <p>
                  Learn and dine with our team of in-house stylists & an etiquette trainer.
                  </p>
                </div>
                <div className="eventsClubBox_second_bottom_premium">
                  <span style={{ color: "#fff", textTransform: "none" }}>with Our Styling Team</span>
                  <Button variant="outline-primary">register</Button>
                </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="userProfileModule_olderorders">
      <Divider>Attended</Divider>
      </div>

      <div className="eventsClubBox">
        <Container>
          <Row>
            <Col sm={3} xs={3} className="eventsClubBox_first" style={{ background: "#4B84F2"}}>
              <div>
                <span>July</span>
                <h4>5</h4>
              </div>
            </Col>
            <Col sm={9} xs={9}>
              <div className="eventsClubBox_second">
                <div className="eventsClubBox_second_top">
                  <span style={{ color: "#4B84F2" }}><GoPrimitiveDot size={18} />Hangout</span>
                  <span style={{ color: "#9A9EB0" }}>6:00 pm</span>
                </div>
                <div>
                  <h3> Weekly Hangout</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="eventsClubBox">
        <Container>
          <Row>
            <Col sm={3} xs={3} className="eventsClubBox_first" style={{ background: "#F2C34B", padding: "3rem !important"}}>
              <div>
                <span>July</span>
                <h4>2</h4>
              </div>
            </Col>
            <Col sm={9} xs={9}>
              <div className="eventsClubBox_second">
                <div className="eventsClubBox_second_top">
                  <span style={{ color: "#F2C34B" }}> <GoPrimitiveDot size={18} /> Tutorial</span>
                  <span style={{ color: "#9A9EB0" }}>6:00 pm</span>
                </div>
                <div>
                  <h3>Personal Styling & Color Theory for Festivals</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="eventsClubBox">
        <Container>
          <Row>
            <Col sm={3} xs={3} className="eventsClubBox_first" style={{ background: "#FF6C6C"}}>
              <div>
                <span>July</span>
                <h4>30</h4>
              </div>
            </Col>
            <Col sm={9} xs={9}>
              <div className="eventsClubBox_second">
                <div className="eventsClubBox_second_top">
                  <span style={{ color: "#FF6C6C" }}> <GoPrimitiveDot size={18} /> Workshop</span>
                  <span style={{ color: "#9A9EB0" }}>6:00 pm</span>
                </div>
                <div>
                  <h3>Everyday Makeup</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EventsClubModule;
