import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const ForgotModel = ( props ) => {

    const { show, setShow } = props;

    const [option, setOption] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');

    const handleOptionChange = (e) => {
        setOption(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleContactNoChange = (e) => {
        setContactNo(e.target.value);
    };

    const handleVerifyClick = () => {
        // Implement the logic for sending the reset password link
        // using the provided email or contactNo
        console.log('Verify button clicked');
    };

    const handleCloseClick = () => {
        // Implement the logic to close the modal
        console.log('Close button clicked');
         setShow(false);
    };
    return (
        <>
            <Modal
                size="sm"
                backdrop="static"
                centered
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                className='forgotModel'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Forget Password
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img src="https://copywritercollective.com/wp-content/uploads/2018/05/01-exclamation-mark-copywriter-collective.png" alt="" className="myimgstyle bg-dark rounded-circle" />
                            </div>
                            <div className="col-12 mt-2">
                                <h4 className="text-center">Forget Password</h4>
                                <p className="text-center">Enter Your Registered Email or Contact no &amp; We'll Send you a link to reset your Password</p>
                            </div>
                            <div className="col-12">
                                <div className="input-group mt-3" id="name">
                                    <span className="input-group-text bg-light"><i className="fas fa-chevron-circle-down orange"></i></span>
                                    <select className="form-control" value={option} onChange={handleOptionChange}>
                                        <option value="">Choose Option for Get OTP</option>
                                        <option value="email">Email</option>
                                        <option value="contactNo">Contact No</option>
                                    </select>
                                </div>
                                <div className="input-group mt-3" id="name">
                                    <span className="input-group-text bg-light"><i className="fas fa-envelope orange"></i></span>
                                    <input type="text" placeholder="Enter your Registered Email" className="form-control" value={email} onChange={handleEmailChange} />
                                </div>
                                <div className="input-group mt-3" id="name">
                                    <span className="input-group-text bg-light"><i className="fas fa-phone orange"></i></span>
                                    <input type="text" placeholder="Enter your Registered Contact No" className="form-control" value={contactNo} onChange={handleContactNoChange} />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <span className="text-dark">Didn't receive OTP? <a href="#"><b className="text-orange">Resend OTP</b></a></span>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-orange text-light" onClick={handleVerifyClick}>Verify</button>
                    <button type="button" className="btn btn-dark text-light" onClick={handleCloseClick}>Close</button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ForgotModel