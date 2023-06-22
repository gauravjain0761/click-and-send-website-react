import React, { useState } from 'react';
import FooterStrip from '../../components/footer/footerStrip';
import ForgotModel from '../../components/header/forgotModel';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory();

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="text-center" style={{ backgroundColor: "#ececec", paddingTop: "50px", paddingBottom: "40px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-3 col-xl-3"></div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6">
                            <div className="">
                                <h3 className="text-center text-orange bg-light p-3 rounded"><i className="fas fa-unlock"></i> Hello Again!</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-3 col-xl-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-3 col-xl-3"></div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6">
                            <div className="bg-light rounded p-5">
                                <form className="" method="" action="" id="">
                                    <div className="input-group">
                                        <span className="input-group-text bg-light"><i className="fas fa-user orange"></i></span>
                                        <input type="email" placeholder="Enter your email address" className="form-control" />
                                    </div>
                                    <div className="input-group mt-3">
                                        <span className="input-group-text bg-light"><i className="fas fa-lock orange"></i></span>
                                        <input type="password" placeholder="Enter Password" className="form-control" id="password" />
                                        {/* <span className="input-group-text" id="show"><i className="fas fa-eye orange"></i></span> */}
                                        <span className="input-group-text" id="hide"><i className="fas fa-eye-slash orange"></i></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="float-left mt-4">
                                                <input type="checkbox" /><span> Remember Me</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-6">
                                            <div className="float-right mt-4">
                                                <a
                                                    onClick={() => setShow(true)}
                                                    className="text-orange" id="forget_pass" data-toggle="modal" data-target="#forget_password">Forget password ?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <a href="customer-dashboard"><button type="button" className="btn btn-orange text-light mt-2 myrounded">Login Now</button></a>
                                        </div>
                                        <div className="col-12 text-center mt-5">
                                            <span className="text-dark ">Don't Have An Accout? <a
                                                onClick={() => history.push("/register")}
                                                className="text-orange">Register Now</a></span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <button className="btn text-light btn-block" style={{ backgroundColor: "#2A4E95" }}>
                                                <i className="fab fa-facebook rounded-circle text-light"></i>&emsp; Continue with Facebook
                                            </button>
                                        </div>
                                        <div className="col-12 mt-2">
                                            <button className="btn btn-white text-light btn-block" style={{ backgroundColor: "#CD2C2E" }}>
                                                <i className="fab fa-google rounded-circle text-light"></i> &emsp;&emsp; Continue with Google
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-3 col-xl-3"></div>
                    </div>
                </div>
            </div>


            <ForgotModel show={show} setShow={() => setShow(false)} />
            <FooterStrip />

        </>
    )
}

export default Login
