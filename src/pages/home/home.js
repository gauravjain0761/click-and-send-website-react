import React, { useMemo } from 'react';

import Footer from '../../components/footer';
import ProductSection from '../../components/home/productSection';
import JoinTheClubSection from '../../components/home/joinTheClubSection';
import BestSellingSection from '../../components/home/bestSellingSection';
import HomeBannerTabs from '../../components/home/homeBannerTabs';
import { useGetShopMenuDataQuery } from '../../services/api';
import HomeTab from '../../components/home/homeTab';
import { Box, CircularProgress } from '@mui/material';
// import logo from '../../public/images/logo.png';


const Home = () => {
    const { data, isFetching, isLoading } = useGetShopMenuDataQuery()

    return (
        <>

            {/* <div class="top-main-bg">
                <div class="container">
                    <div class="top-main">
                        <div class="top-left">
                            <a href=""><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;0123456789</a>
                            <a href=""><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;info@abcd.co.uk</a>
                        </div>
                        <div class="top-right">
                            <a href=""><img src="./images/fb-icon.jpg" /></a>
                            <a href=""><img src="./images/ins-logo.jpg" /></a>
                            <a href=""><img src="./images/link-icon.jpg" /></a>
                            <a href=""><img src="./images/twitter-icon.jpg" /></a>
                            <a href=""><img src="./images/you-icon.jpg" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="navv">
                <div class="container head-main">

                    <div class="header-navigation py-2 ">

                        <div class="log-nav first">
                            <a href=""><img src="./images/logo.jpg" /></a>
                        </div>

                        <div class="nav-cn second">
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="nav">
                                        <li class="nav-item active">
                                            <a class="nav-link" >Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" >About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" >Jobs</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" >Testimonials</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div class="cnt-btn third">
                            <a href="">
                                <button class="button-52" role="button">Sign In/Sign Up</button></a>
                        </div>
                    </div>
                </div>
            </div> */}




            <div class="main-banner-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="heading">
                                <p>Your Logistic Solution
                                    For Business Client & Driver’s</p>
                            </div>

                            <div class="hdr-btns">

                                <button class="button-92" role="button">For Clients</button>
                                <button class="button-91" role="button">For Business</button>

                            </div>
                            <div class="hdr-second-btn">
                                <button class="button-92" role="button">For Driver</button>
                            </div>

                        </div>

                        <div class="col-md-6">
                            <img src="./images/banner-iimg.jpg" />
                        </div>
                    </div>
                </div>
            </div>



            <div class="container py-3">
                <div class="heading">
                    <h3>Our Fleet</h3>
                </div>

                <div class="row pt-4">
                    <div class="col-md-3">
                        <div class="main-fleet">
                            <div class="fleet-name">
                                <h4>PickUp Truck</h4>
                            </div>
                            <div class="fleet-cnt">
                                <p>Extensive equipment and
                                    consolidation options</p>
                            </div>
                            <div class="fleet-image">
                                <i class="fa-solid fa-truck-pickup"></i>
                            </div>

                            <div class="view-al-bnt">
                                <a href="">View All</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="main-fleet">
                            <div class="fleet-name">
                                <h4>Refrigetro Truck</h4>
                            </div>
                            <div class="fleet-cnt">
                                <p>Extensive equipment and
                                    consolidation options</p>
                            </div>
                            <div class="fleet-image">
                                <i class="fa-solid fa-truck-droplet"></i>
                            </div>

                            <div class="view-al-bnt">
                                <a href="">View All</a>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="main-fleet">
                            <div class="fleet-name">
                                <h4>Car</h4>
                            </div>
                            <div class="fleet-cnt">
                                <p>Extensive equipment and
                                    consolidation options</p>
                            </div>
                            <div class="fleet-image">
                                <i class="fa-solid fa-car-side"></i>
                            </div>

                            <div class="view-al-bnt">
                                <a href="">View All</a>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="main-fleet">
                            <div class="fleet-name">
                                <h4>Van</h4>
                            </div>
                            <div class="fleet-cnt">
                                <p>Extensive equipment and
                                    consolidation options</p>
                            </div>
                            <div class="fleet-image">
                                <i class="fa-solid fa-van-shuttle"></i>
                            </div>

                            <div class="view-al-bnt">
                                <a href="">View All</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="mb-screen">
                            <img src="./images/mobile-screen-image.jpg" />
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="driver">
                            <span>For Driver</span>
                        </div>
                        <div class="ms-cnt">
                            <h4>Join Our Fleet</h4>
                            <p>The personal account where user can
                                manage, track and order parcels,
                                check order details and history</p>
                        </div>
                        <a href="">
                            <button class="buttonn">
                                <span>Sign Up as a Driver</span></button>
                        </a>


                    </div>
                </div>
            </div>


            <div class="heading">
                <h3>Our Presence</h3>
            </div>

            <div class="presence-img pt-5">
                <img src="./images/our-prsence.jpg" />
            </div>


            <div class="main-bg-points">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="main-section">
                                <i class="fa-solid fa-user"></i>
                                <div class="left-section">
                                    <h5>Total User</h5>
                                    <h4>1211+</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="main-section">
                                <i class="fa-solid fa-user-tie"></i>
                                <div class="left-section">
                                    <h5>Total Drivers</h5>
                                    <h4>5999+</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="main-section">
                                <i class="fa-sharp fa-solid fa-briefcase"></i>
                                <div class="left-section">
                                    <h5>Total Jobs</h5>
                                    <h4>25987+</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="main-section">
                                <i class="fa-solid fa-gavel"></i>
                                <div class="left-section">
                                    <h5>Total Bids</h5>
                                    <h4>25764+</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div class="container py-5">
                <div class="row align-items-center">

                    <div class="col-md-6">
                        <div class="driver">
                            <span>For Clients</span>
                        </div>
                        <div class="ms-cnt">
                            <h4>ShipMent Manager</h4>
                            <p>The personal account where user can
                                manage, track and order parcels,
                                check order details and history</p>
                        </div>


                        <a href="">
                            <button class="buttonn">
                                <span>Login to Ship Manager</span></button>
                        </a>



                    </div>
                    <div class="col-md-6">
                        <div class="mb-screen">
                            <img src="./images/shipment.jpg" />
                        </div>
                    </div>


                </div>
            </div>





            <div class="container py-5">
                <div class="row align-items-center">

                    <div class="col-md-6">
                        <div class="mb-screen">
                            <img src="./images/mobile-screen-two.jpg" />
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="driver">
                            <span>For Clients</span>
                        </div>
                        <div class="ms-cnt">
                            <h4>Mobile Application</h4>
                            <p>The personal account where user can
                                manage, track and order parcels,
                                check order details and history</p>
                        </div>

                        <a href="">
                            <button class="buttonn">
                                <span>Login to Driver Porter</span></button>
                        </a>

                    </div>



                </div>
            </div>




            <div class="testimonials-bg">

                <div class="headingg">
                    <h3>Testimonials</h3>
                </div>

                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="main-testimonials">
                                <div class="quotes">
                                    <i class="fa-sharp fa-solid fa-quote-right"></i>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since </p>
                                <div class="name-image">
                                    <img src="./images/testimonial-image.png" />
                                    <div class="name">
                                        <h6>Diego Thompson</h6>
                                        <p>Lives in: Atlantis Resort</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="main-testimonials">
                                <div class="quotes">
                                    <i class="fa-sharp fa-solid fa-quote-right"></i>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since </p>
                                <div class="name-image">
                                    <img src="./images/testimonial-image.png" />
                                    <div class="name">
                                        <h6>Diego Thompson</h6>
                                        <p>Lives in: Atlantis Resort</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="main-testimonials">
                                <div class="quotes">
                                    <i class="fa-sharp fa-solid fa-quote-right"></i>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since </p>
                                <div class="name-image">
                                    <img src="./images/testimonial-image.png" />
                                    <div class="name">
                                        <h6>Diego Thompson</h6>
                                        <p>Lives in: Atlantis Resort</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>

            <div class="container py-5">
                <div class="headinng">
                    <h3>It might be helpful</h3>
                </div>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-9">
                            <div class="main-helpful-section pt-5">
                                <div class="one-helpful">
                                    <div class="icons-helpufl">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </div>
                                    <div class="help-name">
                                        <h6>Help center</h6>
                                    </div>
                                    <div class="help-cnnt">
                                        <p>Customer Service
                                            Customer Portal Logins</p>
                                    </div>
                                </div>

                                <div class="one-helpful">
                                    <div class="icons-helpufl">
                                        <i class="fa-solid fa-user"></i>
                                    </div>
                                    <div class="help-name">
                                        <h6>Business</h6>
                                    </div>
                                    <div class="help-cnnt">
                                        <p>New Customer Center
                                            Service Guide</p>
                                    </div>
                                </div>


                                <div class="one-helpful">
                                    <div class="icons-helpufl">
                                        <i class="fa-solid fa-ship"></i>
                                    </div>
                                    <div class="help-name">
                                        <h6>Ship Online Now</h6>
                                    </div>
                                    <div class="help-cnnt">
                                        <p>Open a Account
                                            Ship Managre Software
                                            Tracking</p>
                                    </div>
                                </div>
                            </div>




                            <div class="main-helpful-section pt-2">
                                <div class="one-helpful">
                                    <div class="icons-helpufl">
                                        <i class="fa-solid fa-building"></i>
                                    </div>
                                    <div class="help-name">
                                        <h6>Company</h6>
                                    </div>
                                    <div class="help-cnnt">
                                        <p>About Us
                                            Careers</p>
                                    </div>
                                </div>

                                <div class="one-helpful">
                                    <div class="icons-helpufl">
                                        <i class="fa-solid fa-newspaper"></i>
                                    </div>
                                    <div class="help-name">
                                        <h6>News</h6>
                                    </div>
                                    <div class="help-cnnt">
                                        <p>Service News for Customers
                                            Events</p>
                                    </div>
                                </div>


                                <div class="one-helpful">
                                    <div class="icons-helpufl">
                                        <i class="fa-solid fa-blog"></i>
                                    </div>
                                    <div class="help-name">
                                        <h6>Our Blog</h6>
                                    </div>
                                    <div class="help-cnnt">
                                        <p>Our Blog for customers
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="col-md-3">
                            <img src="./images/might-helpful.jpg" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="newsletter-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="newsletter-main">
                                <p>Subscribe Our Newsletter</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="subscribe">
                                <input type="email" placeholder="Enter your email address" />
                                <input type="submit" value="Sent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="footer-bg">

                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="ft-liink">
                                <a href=""><img src="./images/logo.jpg" /></a>
                            </div>
                            <div class="ab-cntt">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt labore et
                                    dolore magna aliqua. </p>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="ft-link">
                                <h5>Useful Links</h5>
                            </div>

                            <div class="qui-lnk">
                                <ul>
                                    <li> <a >Jobs</a></li>
                                    <li> <a >Help</a></li>
                                    <li> <a >Faq</a></li>
                                    <li> <a >Contact Us</a></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-md-3">
                            <div class="ft-link">
                                <h5>Links</h5>
                            </div>

                            <div class="qui-lnk">
                                <ul>
                                    <li> <a >Home</a></li>
                                    <li> <a>News</a></li>
                                    <li> <a>Services</a></li>
                                    <li> <a>Testimonials</a></li>
                                </ul>
                            </div>
                        </div>




                        <div class="col-md-3">
                            <div class="ft-link">
                                <h5>Contact Us</h5>
                            </div>

                            <div class="qui-lnk">

                                <div class="add"><span><b><i class="fa-solid fa-location-dot"></i></b></span><a href="">Lorem
                                    ipsum door sit amet,
                                    consectetur 12345
                                </a></div>
                                <div class="pppn"><span> <b><i class="fa-solid fa-phone"></i></b></span><a
                                    href="tel:">12345689</a></div>
                                <div class="eeem"> <span><b><i class="fa-solid fa-envelope"></i></b></span><a
                                    href="mailto:">info@gamil.com</a></div>


                            </div>
                        </div>

                    </div>
                </div>



                <div class="social-icons">
                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                </div>

            </div>


            <div class="copyright-bg">
                <p>2023 © Webpristine Technology.</p>
            </div>
        </>
    )
}
export default Home