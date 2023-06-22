import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'
import FooterStrip from '../../components/footer/footerStrip';

const Testimonials = () => {

    const history = useHistory();

    return (
        <>
            <div className="container-fluid review_banner p-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="middle">
                            <h3 className="text-center orange fw-bold">__ Testimonial's __</h3>
                            <h2 className="text-center">What Our Client Say's ?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="container p-2">
                    <div className="row ">
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-3 ">
                            <div className="text-center p-5 mycontbg">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZSsRW8ahClgpWbdmk1wKCv_6d5ZNEf_kuZLEmarGpS7KAd8cHuXo9UPSJOy_EESmpu8&usqp=CAU" alt="" className="mytestbord p-1 rounded-circle" />
                                <h3 className="fw-bold font30">Ridhima</h3>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="far fa-star fa-lg text-black"></i></span>
                                <p className="text-justify text-black mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <div className="p-5 text-center">
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-3">
                            <div className="mycontbg text-center p-5">
                                <img src="https://pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/avatar/avatar-7.png" alt="" className="mytestbord p-1 rounded-circle" />
                                <h3 className="fw-bold font30">Vishal</h3>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="far fa-star fa-lg text-black"></i></span>
                                <p className="text-justify mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-3">
                            <div className="mycontbg text-center p-5">
                                <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1050" alt="" className="mytestbord p-1 rounded-circle" />
                                <h3 className="fw-bold font30">Harry</h3>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="far fa-star fa-lg text-black"></i></span>
                                <p className="text-justify mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-3">
                            <div className="mycontbg text-center p-5">
                                <img src="https://transmedic.co.id:7772/images/profile/user-uploads/user-06.jpg" alt="" className="mytestbord p-1 rounded-circle" />
                                <h3 className="fw-bold font30">Ramona</h3>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="far fa-star fa-lg text-black"></i></span>
                                <p className="text-justify mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-3">
                            <div className="mycontbg text-center p-5">
                                <img src="https://transmedic.co.id:7772/images/portrait/small/avatar-s-10.jpg" alt="" className="mytestbord p-1 rounded-circle" />
                                <h3 className="fw-bold font30">Tripti</h3>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="far fa-star fa-lg text-black"></i></span>
                                <p className="text-justify mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-3">
                            <div className="mycontbg text-center p-5">
                                <img src="https://avatars.sched.co/8/90/1938608/avatar.jpg.320x320px.jpg?c74" alt="" className="mytestbord p-1 rounded-circle" />
                                <h3 className="fw-bold font30">Cooper</h3>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="fas fa-star fa-lg text-black"></i></span>
                                <span className="bg-trans"><i className="far fa-star fa-lg text-black"></i></span>
                                <p className="text-justify mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default Testimonials