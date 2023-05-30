import React from "react";
import { Button, Container, Nav, Tab } from "react-bootstrap";
import { GoPrimitiveDot } from "react-icons/go";
import ClubModule from "../../components/clubHome/clubModule";
import "./clubHome.css";
import FooterStrip from "../../components/footer/footerStrip";
import { Box } from "@mui/material";

const ClubHome = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="liveNow">
        <Tab.Content>
          <Tab.Pane eventKey="liveNow">
            <div className="clubHome_top">
              <Container>
                <div className="clubHome_top_text">
                  <span>
                    <GoPrimitiveDot color="#00D22E" /> Live till 7:15pm
                  </span>
                  <h3>Everyday Makeup</h3>
                  <p>
                    Learn how to apply subtle make up in under 10 <br />
                    minutes. Follow this routine every day.
                  </p>
                  <h6>with Divya Sancheti</h6>
                  <div className="clubHome_top_text_btn">
                    <Button variant="outline-light">Join</Button>
                    <span>2 hrs</span>
                  </div>
                </div>
                <div className="clubHome_top_text clubHome_top_text_mobile">
                  <span>
                    <GoPrimitiveDot color="#00D22E" /> Live till 7:15pm
                  </span>
                  <h3>Everyday Makeup</h3>
                  <p>
                    Learn how to apply subtle make up in under 10 <br />
                    minutes. Follow this routine every day.
                  </p>
                  <div className="clubHome_top_text_btn">
                    <h6>with Divya Sancheti</h6>
                    <div>
                     <span style={{marginRight: "10px"}}>2 hrs</span>
                     <Button variant="outline-light">Join</Button>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="workshops">
            <div className="clubHome_top">
              <Container>
                <div className="clubHome_top_text">
                  <span>
                    6 July 2022, 6:00 pm
                  </span>
                  <h3>Styling for Occasions</h3>
                  <p>
                  Pick the right clothes for an occasion. You’ll learn <br /> about colour, fit and picking accessories that work. 
                  </p>
                  <h6>with Divya Sancheti</h6>
                  <div className="clubHome_top_text_btn">
                    <Button variant="outline-light">Join</Button>
                    <span>2 hrs</span>
                  </div>
                </div>
                <div className="clubHome_top_text clubHome_top_text_mobile">
                  <span>
                    6 July 2022, 6:00 pm
                  </span>
                  <h3>Styling for Occasions</h3>
                  <p>
                  Pick the right clothes for an occasion. You’ll learn <br /> 
                  about colour, fit and picking accessories that work. 
                  </p>
                  <div className="clubHome_top_text_btn">
                    <h6>with Divya Sancheti</h6>
                    <div>
                     <span style={{marginRight: "10px"}}>2 hrs</span>
                     <Button variant="outline-light">Join</Button>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="events">
            <div className="clubHome_top">
              <Container>
                <div className="clubHome_top_text">
                  <span>
                    Hadapsar, PUne  •  8 July 2022, 10:00 am
                  </span>
                  <h3>Influencing in Style</h3>
                  <p>
                  An all-day seminar with top influencers. Learn all<br /> their secrets to growing your audience effectively. 
                  </p>
                  <h6>with Various Creatives</h6>
                  <div className="clubHome_top_text_btn">
                    <Button variant="outline-light">More info</Button>
                    <span>All Day</span>
                  </div>
                </div>
                <div className="clubHome_top_text clubHome_top_text_mobile">
                  <span>
                    Hadapsar, PUne  •  8 July 2022, 10:00 am
                  </span>
                  <h3>Influencing in Style</h3>
                  <p>
                  An all-day seminar with top influencers. Learn all<br /> their secrets to growing your audience effectively.
                  </p>
                  <div className="clubHome_top_text_btn">
                    <h6>with Various Creatives</h6>
                    <div>
                     <span style={{marginRight: "10px"}}>All Day</span>
                     <Button variant="outline-light">More info</Button>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="hangouts">
            <div className="clubHome_top">
              <Container>
                <div className="clubHome_top_text">
                  <span>
                    Every Friday, 6:00 pm
                  </span>
                  <h3>Weekly Hangout</h3>
                  <p>
                  Unwind with our team every Friday evening. We’ll <br /> play games and talk life, fashion & all things.
                  </p>
                  <h6>with The Bunawat Team</h6>
                  <div className="clubHome_top_text_btn">
                    <Button variant="outline-light">Join</Button>
                    <span>1 hr</span>
                  </div>
                </div>
                <div className="clubHome_top_text clubHome_top_text_mobile">
                  <span>
                    Every Friday, 6:00 pm
                  </span>
                  <h3>Weekly Hangout</h3>
                  <p>
                  Unwind with our team every Friday evening. We’ll <br /> play games and talk life, fashion & all things.
                  </p>
                  <div className="clubHome_top_text_btn">
                    <h6>with The Bunawat Team</h6>
                    <div>
                     <span style={{marginRight: "10px"}}>1 hr</span>
                     <Button variant="outline-light">Join</Button>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="deals">
            <div className="clubHome_top">
              <Container>
                <div className="clubHome_top_text">
                  <span>
                    Ends 15th July
                  </span>
                  <h3>Special Deals</h3>
                  <p>
                  Only for Club Members. Get great deals on best<br /> selling products. Can’t beat this.
                  </p>
                  <h6>Up to 25% off</h6>
                  <div className="clubHome_top_text_btn">
                    <Button variant="outline-light">Sign up</Button>
                    <span>Limited Time</span>
                  </div>
                </div>
                <div className="clubHome_top_text clubHome_top_text_mobile">
                  <span>
                    Ends 15th July
                  </span>
                  <h3>Special Deals</h3>
                  <p>
                  Only for Club Members. Get great deals on best<br /> selling products. Can’t beat this.
                  </p>
                  <div className="clubHome_top_text_btn">
                    <h6>Up to 25% off</h6>
                    <div>
                     <span style={{marginRight: "10px"}}>Limited Time</span>
                     <Button variant="outline-light">Sign up</Button>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </Tab.Pane>
        </Tab.Content>
        <div className="clubHome_menu">
          <Container>
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey="liveNow" style={{padding: "0px 8px"}}>
                <button type="button" className="btn">
                  <GoPrimitiveDot color="#00D22E" /> Live Now
                </button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="workshops" style={{padding: "0px 8px"}}>
                <button type="button" className="btn">Workshops</button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="events" style={{padding: "0px 8px"}}>
                <button type="button" className="btn">Events</button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="hangouts" style={{padding: "0px 8px"}}>
                <button type="button" className="btn">Hangouts</button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="deals" style={{padding: "0px 8px"}}>
                <button type="button" className="btn">% Deals</button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          </Container>
        </div>
      </Tab.Container>
      
      <ClubModule />
      <Box sx={{ 
        padding: "0rem 2rem",
        '@media (max-width: 768px)': {
        padding: "1rem 2rem"
        } 
      }}>
        <FooterStrip />
      </Box>
    </>
  );
};

export default ClubHome;
