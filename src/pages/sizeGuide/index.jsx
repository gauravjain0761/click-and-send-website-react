import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./sizeguide.css";
import FooterStrip from "../../components/footer/footerStrip";
import { Box } from '@mui/material';

const SizeGuide = () => {
    const size = [
        {
            inches: "XS - 30", 
            chest: "30",
            waist: "26",
            hip: "30",
            length: "30",
        },
        {
            inches: "S - 32", 
            chest: "32",
            waist: "28",
            hip: "32",
            length: "32",
        },
        {
            inches: "M - 34", 
            chest: "34",
            waist: "30",
            hip: "34",
            length: "34",
        },
        {
            inches: "L - 36", 
            chest: "36",
            waist: "32",
            hip: "36",
            length: "34",
        },
        {
            inches: "XL - 38", 
            chest: "38",
            waist: "34",
            hip: "38",
            length: "34",
        },
        {
            inches: "2XL - 40", 
            chest: "40",
            waist: "36",
            hip: "40",
            length: "34",
        },
    ]
  return (
    <>
      <div className='sizeguide_page'>
        <div className='sizeguide_page_top'>
            <h6> Size Guide</h6>
            <p>Use these measurements to find a fit</p>
            <Link to="/sizeGuide">How to measure?</Link>
        </div>

        <div className='sigeGuide_page_table'>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>size — inches</th>
                <th>Chest</th>
                <th>Waist</th>
                <th>Hip</th>
                <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {size.map((item, index)=> {
                    return (
                        <tr key={index}>
                            <td>{item.inches}</td>
                            <td>{item.chest}</td>
                            <td>{item.waist}</td>
                            <td>{item.hip}</td>
                            <td>{item.length}</td>
                        </tr>
                    );
                })}
            </tbody>
            </Table>
        </div>

        <div className='sigeGuide_page_measure'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div>
                            <img src="../img/measure.png" alt="measure" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='sigeGuide_page_measure_text'>
                            <h4>How to Measure</h4>
                            <p>Grab a tailor’s measuring tape and measure by following these guidelines—</p>
                            <div className='sigeGuide_page_measure_text_list'>
                                <span>1</span>
                                <div>
                                    <h6>Chest</h6>
                                    <p>Around the fullest part of the chest</p>
                                </div>
                            </div>
                            <div className='sigeGuide_page_measure_text_list'>
                                <span>2</span>
                                <div>
                                    <h6>Waist</h6>
                                    <p>Just below your natural waistline</p>
                                </div>
                            </div>
                            <div className='sigeGuide_page_measure_text_list'>
                                <span>3</span>
                                <div>
                                    <h6>Hip</h6>
                                    <p>Around the widest part of the hip</p>
                                </div>
                            </div>
                            <div className='sigeGuide_page_measure_text_list'>
                                <span>4</span>
                                <div>
                                    <h6>Length</h6>
                                    <p>From shoulder to bottom of garment</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
      </div>

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

export default SizeGuide;
