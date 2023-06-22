import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'
import FooterStrip from '../../components/footer/footerStrip';

const AboutUs = () => {

    const history = useHistory();

    return (
        <>
            <div className="container-fluid about_banner p-5">
                <div className="middle mt-5">
                    <h3 className="text-center orange fw-bold mytext">__ About Us __</h3>
                    <h6 className="text-center mytext">WHO WE ARE</h6>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <img src="https://themexriver.com/fastrans-theme/fastrans/wp-content/uploads/sites/2/2021/10/ab1.png" alt="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <h4 className="orange">_______ About Click & Send</h4>
                            <h2>
                                Lorem ipsum dolor sit amet
                            </h2>
                            <p className="text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
                            <div className="card p-3 rounded mt-3">
                                <h5 className="fw-bold"><i className="fas fa-globe fa-lg orange"></i> Lorem ipsum</h5>
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="card p-3 rounded mt-3">
                                <h5 className="fw-bold"><i className="fas fa-globe fa-lg orange"></i> Lorem ipsum</h5>
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 bg-light p-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                            <div className="text-center">
                                <i className="fas fa-clipboard-list fa_lg orange upani"></i>
                                <h3 className="fw-bold mt-3 font40 ">4500</h3>
                                <p>Product Delivered</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                            <div className="text-center">
                                <i className="fas fa-trophy fa_lg orange upani"></i>
                                <h3 className="fw-bold mt-3 font40">50+</h3>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                            <div className="text-center">
                                <i className="fas fa-medal fa_lg orange upani"></i>
                                <h3 className="fw-bold mt-3 font40">100 %</h3>
                                <p>Delivered Packages</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                            <div className="text-center">
                                <i className="fas fa-shield-virus fa_lg orange upani"></i>
                                <h3 className="fw-bold mt-3 font40">1</h3>
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5" style={
                {
                    backgroundImage: "url('https://radiuslogistics.co.uk/wp-content/uploads/2020/01/banner-worldwide-freight-2000x700.jpg')",
                    backgroundPosition: "center",
                    width: "100%", height: "400px",
                    backgroundRepeat: "repeat",
                    backgroundAttachment: "fixed",
                    objectFit: "cover"
                }
            }>

            </div>
            <div className="container-fluid mt-5 mb-5">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-center">What Make Us Special</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-2">
                            <div className="card text-center p-5">
                                <i className="fas fa-shield-virus fa_lg orange"></i>
                                <h3 className="fw-bold mt-3 font30">Trusted & <br />Secure</h3>
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-2">
                            <div className="card text-center p-5">
                                <i className="fas fa-headset fa_lg orange"></i>
                                <h3 className="fw-bold mt-3 font30">Customer Support</h3>
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-2">
                            <div className="card text-center p-5">
                                <i className="fas fa-stamp fa_lg orange"></i>
                                <h3 className="fw-bold mt-3 font30">Reliability & Punctuality</h3>
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- <div className="container mt-5 p-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4 className="orange">____ Testimonial's ____</h4>
                            <h2 className="text-center">What Our Client Say's ?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">
                            <div className="card text-center p-5">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZSsRW8ahClgpWbdmk1wKCv_6d5ZNEf_kuZLEmarGpS7KAd8cHuXo9UPSJOy_EESmpu8&usqp=CAU" alt="" className="img-thumbnail rounded-circle" />
                                    <h3 className="fw-bold mt-3 font30">Ridhima</h3>
                                    <div>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="far fa-star fa-lg text-warning"></i></span>
                                    </div>
                                    <p className="text-justify mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">
                            <div className="card text-center p-5">
                                <img src="https://pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/avatar/avatar-7.png" alt="" className="img-thumbnail rounded-circle">
                                    <h3 className="fw-bold mt-3 font30">Vishal</h3>
                                    <div>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="far fa-star fa-lg text-warning"></i></span>
                                    </div>
                                    <p className="text-justify mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">
                            <div className="card text-center p-5">
                                <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1050" alt="" className="img-thumbnail rounded-circle">
                                    <h3 className="fw-bold mt-3 font30">Harry</h3>
                                    <div>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="far fa-star fa-lg text-warning"></i></span>
                                    </div>
                                    <p className="text-justify mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">
                            <div className="card text-center p-5">
                                <img src="https://transmedic.co.id:7772/images/profile/user-uploads/user-06.jpg" alt="" className="img-thumbnail rounded-circle">
                                    <h3 className="fw-bold mt-3 font30">Ramona</h3>
                                    <div>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="far fa-star fa-lg text-warning"></i></span>
                                    </div>
                                    <p className="text-justify mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">
                            <div className="card text-center p-5">
                                <img src="https://transmedic.co.id:7772/images/portrait/small/avatar-s-10.jpg" alt="" className="img-thumbnail rounded-circle">
                                    <h3 className="fw-bold mt-3 font30">Tripti</h3>
                                    <div>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="far fa-star fa-lg text-warning"></i></span>
                                    </div>
                                    <p className="text-justify mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">
                            <div className="card text-center p-5">
                                <img src="https://avatars.sched.co/8/90/1938608/avatar.jpg.320x320px.jpg?c74" alt="" className="img-thumbnail rounded-circle">
                                    <h3 className="fw-bold mt-3 font30">Cooper</h3>
                                    <div>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="fas fa-star fa-lg text-warning"></i></span>
                                        <span className="bg-light"><i className="far fa-star fa-lg text-warning"></i></span>
                                    </div>
                                    <p className="text-justify mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                </div> --> */}
            </div>
            {/* <!-- </div > --> */}
            <div className="container-fluid bg-orange p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9 col-lg-9 col-xl-9 mt-2">
                            <h3 className="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3 col-xl-3 mt-2">
                            <button className="btn btn-dark btn-lg text-light btn-block mt-4 fw-bold rounded">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <FooterStrip />
        </>
    )
}

export default AboutUs