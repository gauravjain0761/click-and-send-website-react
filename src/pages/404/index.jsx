import { Box } from '@mui/material';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterStrip from '../../components/footer/footerStrip';
import "./errorPage.css";

const ErrorPage = () => {
  return (
    <>
    <div className='errorPage'>
    <Container>
      <div className='errorPage_box'>
        <img src='./img/errorPage.png' alt='Error Page'/>
        <h3>We couldn’t find that</h3>
        <p>We couldn’t find that</p>
        <Link to="/">
          <Button>See our Best Sellers</Button>
        </Link>
        <div>
          <a href='#'>Or report a problem</a>
        </div>
      </div>
    </Container>
    </div>
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
}

export default ErrorPage;
