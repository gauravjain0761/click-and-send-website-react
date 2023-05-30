import React, { useState } from 'react';
import "./userProfile.css";
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import EventsClubModule from '../../components/userProfile/eventsClubModule';
import SavedAddressModule from '../../components/userProfile/savedAddressModule';
import UserProfileModule from '../../components/userProfile/userProfileModule';
import FooterStrip from "../../components/footer/footerStrip";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const UserProfile = () => {
  const userData = useSelector(state => state?.user?.userData);
  const [expanded, setExpanded] = useState(false)
  const history = useHistory();
  return (
    <>
      <div id='userProfile'>
        <Container className='userProfile_desktop'>
          <Tab.Container id="left-tabs-example" defaultActiveKey="userProfile">
            <Row>
              <Col xs={12} md={5}>
                <div className='userProfile_man'>
                  <h3>Hello {userData?.fname ?? "User!"}</h3>
                  <p>This is your space. Track events & orders and update your saved details from here.</p>
                </div>
                <div className='userProfile_menu'>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Link to="/userProfile">
                        <Nav.Link eventKey="userProfile" className='userProfile_menu_list'>
                          <img src="../img/ordersshop.png" alt='ordersshop' height="20" style={{ marginRight: "12px" }} />
                          Orders & Shop
                        </Nav.Link>
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link to="/userProfile">
                        <Nav.Link eventKey="eventsClub" className='userProfile_menu_list'>
                          <img src="../img/eventsclub.png" alt='eventsclub' height="20" style={{ marginRight: "12px" }} />
                          Events & Club
                        </Nav.Link>
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link to="/userProfile">
                        <Nav.Link eventKey="savedAddress" className='userProfile_menu_list'>
                          <img src="../img/shippingto.png" alt='Saved Address' height="20" style={{ marginRight: "12px" }} />
                          Saved Address
                        </Nav.Link>
                      </Link>
                    </Nav.Item>
                  </Nav>

                  <div className='userProfile_menu_list_third' style={{ marginTop: "10px" }}>
                    <h6>
                      <img src="../img/storecredit.png" alt='Store credit' height="20" style={{ marginRight: "12px" }} />
                      Store credit
                    </h6>
                    <h4>₹3,500 </h4>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={7}>
                <Tab.Content>
                  <Tab.Pane eventKey="userProfile">
                    <Container>
                      <UserProfileModule />
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eventsClub">
                    <Container>
                      <EventsClubModule />
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="savedAddress">
                    <Container>
                      <SavedAddressModule />
                    </Container>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>

        {/* for mobile view start */}
        <Container className='userProfile_mobile'>
          <Tab.Container id="left-tabs-example" defaultActiveKey="userProfile">
            <Row>
              <Col xs={12} md={5}>
                <div className='userProfile_man'>
                  <h3>Hello {userData?.fname ?? "User!"}</h3>
                  <p>This is your space. Track events & orders and update your saved details from here.</p>
                </div>
                <div className='userProfile_menu'>
                  <Nav variant="pills" className="flex-column">
                    {/* <Row>
                <Col xs={6}> */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                      <Nav.Item>
                        <Link to="/userProfile">
                          <Nav.Link eventKey="userProfile" className='userProfile_menu_list'>
                            <img src="../img/ordersshop.png" alt='ordersshop' height="20" style={{ marginRight: "8px" }} />
                            Orders & Shop
                          </Nav.Link>
                        </Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Link to="/userProfile" style={{ background: "#E1E3EC" }}>
                          <Nav.Link eventKey="eventsClub" className='userProfile_menu_list'>
                            <img src="../img/eventsclub.png" alt='eventsclub' height="20" style={{ marginRight: "8px" }} />
                            Events & Club
                          </Nav.Link>
                        </Link>
                      </Nav.Item>
                    </Box>
                    {/* </Col> */}
                    {/* <Col xs={6}> */}
                    {/* </Col> */}
                    {/* </Row> */}

                    <div className='userProfile_menu_list_third'>
                      <h6>
                        <img src="../img/storecredit.png" alt='Store credit' height="20" style={{ marginRight: "8px" }} />
                        Store credit
                      </h6>
                      <h4>₹3,500 </h4>
                    </div>

                    <Nav.Item style={{ marginBottom: "1rem" }}>
                      <Accordion sx={{
                        "& .Mui-expanded": {
                          transform: 'none !important'
                        }
                      }} expanded={expanded} onChange={() => setExpanded(!expanded)}>
                        <AccordionSummary
                          expandIcon={expanded ? <img src="/img/profile_edit.svg" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            history.push("/userProfile/edit");
                          }} alt="icon" /> : <ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{
                            width: '66%',
                            flexShrink: 0,
                            fontFamily: "NewHero",
                            fontStyle: " normal",
                            fontWeight: " 600",
                            fontSize: " 10px",
                            color: "#000000",
                            padding: '14px 0px'
                          }}>   <img src="../img/shippingto.png" alt='Saved Address' height="20" style={{ marginRight: "8px" }} /> Saved Address</Typography>
                          {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
                        </AccordionSummary>
                        <AccordionDetails sx={{
                          marginTop: '-10px'
                        }}>
                          <Typography sx={{
                            fontFamily: "NewHero",
                            fontStyle: " normal",
                            fontWeight: " 600",
                            fontSize: " 14px",
                            color: "#000000",
                          }}>{userData?.fname} {userData?.lname}</Typography>
                          <Typography sx={{
                            fontFamily: "NewHero",
                            fontStyle: " normal",
                            fontWeight: "400",
                            fontSize: " 14px",
                            color: "#000000",
                            mt: 1
                          }}>{userData?.address_1}<br />{userData?.address_2}</Typography>
                          <Typography sx={{
                            fontFamily: "NewHero",
                            fontStyle: " normal",
                            fontWeight: "400",
                            fontSize: " 14px",
                            color: "#000000",
                            mt: 1
                          }}>{userData?.phone ? `+91 ${userData?.phone}` : ''}</Typography>
                        </AccordionDetails>
                      </Accordion>
                      {/* <img src="../img/shippingto.png" alt='Saved Address' height="20" style={{ marginRight: "8px" }} />
                          Saved Address */}
                    </Nav.Item>
                  </Nav>


                </div>
              </Col>
              <Col xs={12} md={7}>
                <Tab.Content>
                  <Tab.Pane eventKey="userProfile">
                    <UserProfileModule />
                  </Tab.Pane>
                  <Tab.Pane eventKey="eventsClub">
                    <EventsClubModule />
                  </Tab.Pane>
                  <Tab.Pane eventKey="savedAddress">
                    <SavedAddressModule />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div >
      <Box sx={{
        padding: "0rem 2rem",
        background: "#fff",
        '@media (max-width: 768px)': {
          padding: "1rem 2rem"
        }
      }}>
        <FooterStrip />
      </Box>
    </>
  );
}

export default UserProfile;
