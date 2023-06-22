import React, { useMemo } from 'react';

import Footer from '../../components/footer';
import ProductSection from '../../components/home/productSection';
import JoinTheClubSection from '../../components/home/joinTheClubSection';
import BestSellingSection from '../../components/home/bestSellingSection';
import HomeBannerTabs from '../../components/home/homeBannerTabs';
import { useGetShopMenuDataQuery } from '../../services/api';
import HomeTab from '../../components/home/homeTab';
import { Box, CircularProgress } from '@mui/material';
import FooterStrip from '../../components/footer/footerStrip';
// import logo from '../../public/images/logo.png';


const Home = () => {
    const { data, isFetching, isLoading } = useGetShopMenuDataQuery()

    return (
        <>
            <div className="main-banner-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="heading">
                                <p>Your Logistic Solution
                                    For Business Client & Driver’s</p>
                            </div>
                            <div className="hdr-btns">
                                <button className="button-92" role="button">For Clients</button>
                                <button className="button-91" role="button">For Business</button>
                            </div>
                            <div className="hdr-second-btn">
                                <button className="button-92" role="button">For Driver</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="./images/banner-iimg.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-3 ">
                <div className="heading">
                    <h3>Our Fleet</h3>
                </div>
                <div className="row pt-4">
                    <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-2">
                        <div className="main-fleet">
                            <div className="fleet-name">
                                <h4>PickUp Truck</h4>
                            </div>
                            <div className="fleet-cnt">
                                <p>Extensive equipment and
                                    consolidation options</p>
                            </div>
                            <div className="fleet-image text-right moveleft">
                                <i className="fa-solid fa-truck-pickup "></i>
                            </div>
                            <div className="view-al-bnt">
                                <a href="">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-2">
                        <div className="main-fleet">
                            <div className="fleet-name">
                                <h4>Refrigetro Truck</h4>
                            </div>
                            <div className="fleet-cnt">
                                <p>Extensive equipment and
                                    consolidation options</p>
                            </div>
                            <div className="fleet-image text-right moveleft">
                                <i className="fa-solid fa-truck-droplet"></i>
                            </div>
                            <div className="view-al-bnt">
                                <a href="">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-2">
                        <div className="main-fleet">
                            <div className="fleet-name">
                                <h4>Car</h4>
                            </div>
                            <div className="fleet-cnt">
                                <p>Extensive equipment and
                                    consolidation options</p>
                            </div>
                            <div className="fleet-image text-right moveleft">
                                <i className="fa-solid fa-car-side"></i>
                            </div>
                            <div className="view-al-bnt">
                                <a href="">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-2">
                        <div className="main-fleet">
                            <div className="fleet-name">
                                <h4>Van</h4>
                            </div>
                            <div className="fleet-cnt">
                                <p>Extensive equipment and
                                    consolidation options</p>
                            </div>
                            <div className="fleet-image text-right moveleft">
                                <i className="fa-solid fa-van-shuttle"></i>
                            </div>
                            <div className="view-al-bnt">
                                <a href="">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid fleet_bg py-5 mt-5">
            </div>
            <div className="mydiv">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1">
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="mb-screen">
                                <img src="./images/mobile-screen-image.png" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-2">
                            <div className="text-left p-4 blrbg">
                                <div className="driver">
                                    <span>For Driver</span>
                                </div>
                                <h4 className="text-orange mt-5">Join Our Fleet ____</h4>
                                <p className="text-light">The personal account where user can
                                    manage, track and order parcels,
                                    check order details and history</p>
                                <a href="">
                                    <button className="buttonn mt-5">
                                        <span>Sign Up as a Driver</span></button>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-1 col-lg-1 col-xl-1">
                        </div>
                    </div>
                </div>
            </div>
            <div className="heading mt-5">
                <h3>Our Presence</h3>
            </div>
            <div className="presence-img pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-xl-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="440"  className="mymap p-2"></iframe>
                        </div>
                        <div className="col-12 col-lg-4 col-xl-4 mt-2">
                            <div className="card p-4 mymap2">
                                <div className="row">
                                    <div className="col-12 col-lg-2 col-xl-2">
                                        <i className="fas fa-map-marker-alt orange fa_lg"></i>
                                    </div>
                                    <div className="col-12 col-lg-10 col-xl-10">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, , IA 50010</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-4 mt-2 mymap2">
                                <div className="row">
                                    <div className="col-12 col-lg-2 col-xl-2">
                                        <i className="fas fa-map-marker-alt orange fa_lg"></i>
                                    </div>
                                    <div className="col-12 col-lg-10 col-xl-10">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, , IA 50010</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-4 mt-2 mymap2">
                                <div className="row">
                                    <div className="col-12 col-lg-2 col-xl-2">
                                        <i className="fas fa-map-marker-alt orange fa_lg"></i>
                                    </div>
                                    <div className="col-12 col-lg-10 col-xl-10">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, , IA 50010</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="main-bg-points mt-5">
                <div className="container mt-5 mb-5">
                    <div className="row p-4">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mt-2">
                            <div className="myctrbg text-center myrounded">
                                <i className="fa-solid fa-user fa_lg"></i><br />
                                <h5>Total User</h5>
                                <h4>1211+</h4>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mt-2">
                            <div className="myctrbg text-center myrounded">
                                <i className="fa-solid fa-user-tie fa_lg"></i>
                                <h5>Total Drivers</h5>
                                <h4>5999+</h4>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mt-2">
                            <div className="myctrbg text-center myrounded">
                                <i className="fa-sharp fa-solid fa-briefcase fa_lg"></i>
                                <h5>Total Jobs</h5>
                                <h4>25987+</h4>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mt-2">
                            <div className="myctrbg text-center myrounded">
                                <i className="fa-solid fa-gavel fa_lg"></i>
                                    <h5>Total Bids</h5>
                                    <h4>25764+</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="driver">
                            <span>For Clients</span>
                        </div>
                        <div className="ms-cnt">
                            <h4>ShipMent Manager</h4>
                            <p>The personal account where user can
                                manage, track and order parcels,
                                check order details and history</p>
                        </div>
                        <a href="">
                            <button className="buttonn">
                                <span>Login to Ship Manager</span></button>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-screen">
                            <img src="./images/shipment.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid fleet_bg2 py-5 mt-5">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-xl-6 p-4 blrbg2">
                            <h4 className="orange"> Lorem Ipsum es simplemente el texto de relleno de las imprentas</h4>
                            <ul className="pl-4 mt-3">
                                <li>Lorem Ipsum es simplemente el </li>
                                <li>Texto de relleno de las imprentas y </li>
                                <li>Archivos de texto.</li>
                                <li>Es un hecho establecido hace demasiado</li>
                            </ul>
                            <button className="buttonn mt-3">Lorem Ipsum</button>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-6"></div>
                    </div>
                </div>
            </div>
            <div className="container py-5 mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="mb-screen ">
                            <img src="./images/mobile-screen-two.jpg" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="driver">
                            <span>For Clients</span>
                        </div>
                        <div className="ms-cnt">
                            <h4>Mobile Application</h4>
                            <p>The personal account where user can
                                manage, track and order parcels,
                                check order details and history</p>
                        </div>
                        <a href="">
                            <button className="buttonn">
                                <span>Login to Driver Porter</span></button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="testimonials-bg mb-5">
                <div className="headingg mt-5 ">
                    <h3>Testimonials</h3>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-lg-4 col-xl-4 p-3">
                            <div className="p-3 mybord">
                                <div className="row">
                                    <div className="col-12">
                                        <img src="./images/r1.png" style={{ height: "60px", width: "90px" }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                    </div>
                                </div>
                                <div className="row newbg  ">
                                    <div className="col-4">
                                        <img src="./images/testimonial-image.png" />
                                    </div>
                                    <div className="col-8">
                                        <div className="text-left mb-2">
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="far fa-star fa-lg text-warning"></i></span>
                                        </div>
                                        <h6>Diego Thompson</h6>
                                        <p className='person-title'>Lives in: Atlantis Resort</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "-70px" }}>
                                <div className="col-12 text-right">
                                    <img src="./images/r2.png" style={{ height: "100px", width: "100px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-xl-4 p-3">
                            <div className="p-3 mybord">
                                <div className="row">
                                    <div className="col-12">
                                        <img src="./images/r1.png" style={{ height: "60px", width: "90px" }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                    </div>
                                </div>
                                <div className="row newbg  ">
                                    <div className="col-4">
                                        <img src="./images/testimonial-image.png" />
                                    </div>
                                    <div className="col-8">
                                        <div className="text-left mb-2">
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="far fa-star fa-lg text-warning"></i></span>
                                        </div>
                                        <h6 >Diego Thompson</h6>
                                        <p className='person-title'>Lives in: Atlantis Resort</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "-70px" }}>
                                <div className="col-12 text-right">
                                    <img src="./images/r2.png" style={{ height: "100px", width: "100px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-xl-4 p-3">
                            <div className="p-3 mybord">
                                <div className="row">
                                    <div className="col-12">
                                        <img src="./images/r1.png" style={{ height: "60px", width: "90px" }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                    </div>
                                </div>
                                <div className="row newbg  ">
                                    <div className="col-4">
                                        <img src="./images/testimonial-image.png" />
                                    </div>
                                    <div className="col-8">
                                        <div className="text-left mb-2">
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="fas fa-star fa-lg text-warning"></i></span>
                                            <span className=""><i className="far fa-star fa-lg text-warning"></i></span>
                                        </div>
                                        <h6 >Diego Thompson</h6>
                                        <p className='person-title'>Lives in: Atlantis Resort</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "-70px" }}>
                                <div className="col-12 text-right">
                                    <img src="./images/r2.png" style={{ height: "100px", width: "100px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12 col-lg-10 col-xl-10"></div>
                        <div className="col-12 col-lg-2 col-xl-2">
                            <div className="p-1 bg-light myrounded">
                                <a href="testimonial" className="btn-block text-light theambtn pt-2"><i className="fas fa-eye"></i> See More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="headinng">
                    <h3>It might be helpful</h3>
                </div>
                <div className="container mt-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                    <a href="contact-us">
                                        <div className="icons-helpufl">
                                            <i className="fa-solid fa-circle-info"></i>
                                        </div>
                                        <div className="help-name">
                                            <h6>Help center</h6>
                                        </div>
                                        <div className="help-cnnt">
                                            <p className="text-dark">Customer Service
                                                Customer Portal Logins</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                    <a href="business">
                                        <div className="icons-helpufl">
                                            <i className="fa-solid fa-user"></i>
                                        </div>
                                        <div className="help-name">
                                            <h6>Business</h6>
                                        </div>
                                        <div className="help-cnnt">
                                            <p className="text-dark">New Customer Center
                                                Service Guide</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12  col-md-4 col-lg-4 col-xl-4">
                                    <a href="login">
                                        <div className="icons-helpufl">
                                            <i className="fa-solid fa-ship"></i>
                                        </div>
                                        <div className="help-name">
                                            <h6>Ship Online Now</h6>
                                        </div>
                                        <div className="help-cnnt">
                                            <p className="text-dark">Open a Account
                                                Ship Managre Software
                                                Tracking</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12  col-md-4 col-lg-4 col-xl-4">
                                    <a href="about-us">
                                        <div className="icons-helpufl">
                                            <i className="fa-solid fa-building"></i>
                                        </div>
                                        <div className="help-name">
                                            <h6>Company</h6>
                                        </div>
                                        <div className="help-cnnt">
                                            <p className="text-dark">About Us
                                                Careers</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12  col-md-4 col-lg-4 col-xl-4">
                                    <a href="news">
                                        <div className="icons-helpufl">
                                            <i className="fa-solid fa-newspaper"></i>
                                        </div>
                                        <div className="help-name">
                                            <h6>News</h6>
                                        </div>
                                        <div className="help-cnnt">
                                            <p className="text-dark">Service News for Customers
                                                Events</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12  col-md-4 col-lg-4 col-xl-4">
                                    <a href="our-blogs">
                                        <div className="icons-helpufl">
                                            <i className="fa-solid fa-blog"></i>
                                        </div>
                                        <div className="help-name">
                                            <h6>Our Blog</h6>
                                        </div>
                                        <div className="help-cnnt">
                                            <p className="text-dark">Our Blog for customers
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <img src="./images/might-helpful.jpg" className="myrounded-two" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mt-2">
                            <div className="newsletter-main">
                                <p className="text-center">Subscribe Our Newsletter</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-2">
                            <div className="subscribe">
                                <input type="email" placeholder="Enter your email address" />
                                <input type="submit" value="Sent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <FooterStrip />
        </>
    )
}
export default Home