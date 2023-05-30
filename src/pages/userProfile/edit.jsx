import React, { useState } from 'react';
import "./userProfile.css";
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventsClubModule from '../../components/userProfile/eventsClubModule';
import SavedAddressModule from '../../components/userProfile/savedAddressModule';
import UserProfileModule from '../../components/userProfile/userProfileModule';
import FooterStrip from "../../components/footer/footerStrip";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProdileEdit = () => {
    const userData = useSelector(state => state?.user?.userData);
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <div id='userProfile'>
                {/* for mobile view start */}
                <Container className='userProfile_mobile' style={{
                    display: "block"
                }}>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="userProfile">
                        <Row>
                            <Col xs={12} md={5}>
                                <div className='userProfile_man'>
                                    <h3>Saved Address</h3>
                                    <p>This address will be used by default the next time you order. You can edit it at checkout.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <SavedAddressModule />
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

export default ProdileEdit;
