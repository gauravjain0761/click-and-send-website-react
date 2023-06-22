import { Box } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterStrip = () => {

  return (
    <>
     <div className="footer-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="ft-liink">
                            <a href=""><img src="./images/logo.jpg" /></a>
                        </div>
                        <div className="ab-cntt">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="ft-link">
                            <h5>Useful Links</h5>
                        </div>
                        <div className="qui-lnk">
                            <ul>
                                <li> <a href="login">Jobs</a></li>
                                <li> <a href="contact-us">Help</a></li>
                                <li> <a href="faq">Faq</a></li>
                                <li> <a href="contact-us">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="ft-link">
                            <h5>Links</h5>
                        </div>
                        <div className="qui-lnk">
                            <ul>
                                <li> <a href="our-blogs">Blogs</a></li>
                                <li> <a href="news">News</a></li>
                                <li> <a href="#">Services</a></li>
                                <li> <a href="testimonials">Testimonials</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="ft-link">
                            <h5>Contact Us</h5>
                        </div>
                        <div className="qui-lnk">
                            <div className="add"><span><b><i className="fa-solid fa-location-dot"></i></b></span><a href="">Lorem ipsum door sit amet,
                                    consectetur 12345
                                </a></div>
                            <div className="pppn"><span> <b><i className="fa-solid fa-phone"></i></b></span><a href="tel:">12345689</a></div>
                            <div className="eeem"> <span><b><i className="fa-solid fa-envelope"></i></b></span><a href="mailto:">info@gamil.com</a></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      
        <div className="copyright-bg">
            <p>2023 © Webpristine Technology.</p>
        </div>
    </>
  );
};

export default FooterStrip;
