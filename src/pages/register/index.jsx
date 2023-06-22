import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'

const Register = () => {

    const history = useHistory();

    return (
        <>
            <div className="text-center"
                style={{ backgroundColor: "#ececec", paddingTop: "50px", paddingBottom: "40px" }}
            >
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-3 col-xl-3"></div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6">
                            <div className="">
                                <h3 className="text-center text-orange bg-light p-3 rounded"><i className="fas fa-lock"></i> Registration</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-3 col-xl-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-3 col-xl-3"></div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6">
                            <div className="bg-light rounded p-5">
                                <form className="" method="" action="" id="">
                                    <div className="input-group" id="cmp_name">
                                        <span className="input-group-text bg-light"><i className="fas fa-user orange"></i></span>
                                        <input type="text" placeholder="Enter Company Name" className="form-control" />
                                    </div>
                                    <div className="input-group mt-3" id="cmp_email">
                                        <span className="input-group-text bg-light"><i className="fas fa-envelope orange"></i></span>
                                        <input type="text" placeholder="Enter Company Email" className="form-control" />
                                    </div>
                                    <div className="input-group mt-3" id="name">
                                        <span className="input-group-text bg-light"><i className="fas fa-user orange"></i></span>
                                        <input type="text" placeholder="Enter your Full Name" className="form-control" />
                                    </div>
                                    <div className="input-group mt-3" id="email">
                                        <span className="input-group-text bg-light"><i className="fas fa-envelope orange"></i></span>
                                        <input type="email" placeholder="Enter your email address" className="form-control" />
                                    </div>
                                    <div className="input-group mt-3">
                                        <span className="input-group-text bg-light"><i className="fas fa-phone orange"></i></span>
                                        <input type="tel" placeholder="Enter your Contact No." className="form-control" id="contact" />
                                    </div>
                                    <div className="input-group mt-3">
                                        <span className="input-group-text bg-light"><i className="fas fa-lock orange"></i></span>
                                        <input type="password" placeholder="Enter Password" className="form-control" id="password" />
                                        {/* <span className="input-group-text" id="show"><i className="fas fa-eye orange"></i></span> */}
                                        <span className="input-group-text" id="hide"><i className="fas fa-eye-slash orange"></i></span>
                                    </div>
                                    <div className="input-group mt-3">
                                        <span className="input-group-text bg-light"><i className="fas fa-lock orange"></i></span>
                                        <input type="password" placeholder="Enter Confirm Password" className="form-control" id="cpassword" />
                                        {/* <span className="input-group-text" id="cshow"><i className="fas fa-eye orange"></i></span> */}
                                        <span className="input-group-text" id="chide"><i className="fas fa-eye-slash orange"></i></span>
                                    </div>

                                    {/* <div className="mt-3" id="cmp_certi">
                                        <p className="text-dark text-capitalize">Company Certificate</p>
                                        <div className="input-group up">
                                            <span className="input-group-text bg-light"><i className="fas fa-file orange"></i></span>
                                            <input type="file" placeholder="Select Company Certificate" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="mt-3" id="cmp_vat_certi">
                                        <p className="text-dark text-capitalize">Company VAT Certificate (Optional)</p>
                                        <div className="input-group up">
                                            <span className="input-group-text bg-light"><i className="fas fa-file orange"></i></span>
                                            <input type="file" placeholder="Select VAT Certificate" className="form-control" />
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="float-left mt-4">
                                                <input type="checkbox" /><span
                                                    className="text-dark"
                                                > I agree to the <a href="#" target="_blank" className="text-orange">Terms and Conditions</a> as set out by the user agreement.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <button type="button" className="btn btn-orange text-light mt-2 myrounded" id="register_now" data-toggle="modal" data-target="#otp_popup"> Register Now
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <input type="reset" value="Reset Now" className="btn btn-dark text-light mt-2 myrounded" />
                                        </div>
                                    </div>
                                    <div className="text-center mt-5">
                                        <p>Already Have an Account? <button
                                            
                                            onClick={() => {
                                                history.push('/login')
                                            }}
                                            className='login-btn' >Login Here</button></p>
                                    </div>
                                    <div className="text-center mt-5">
                                        <p
                                            className='text-dark'
                                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a 
                                            onClick={() => {
                                                history.push('/driverRegister')
                                            }}
                                        className="btn btn-orange text-light btn-blockz btn-block"><i className="fas fa-biking"></i> &nbsp;Want to Become a Driver</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-3 col-xl-3"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register