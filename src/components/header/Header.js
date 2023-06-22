import * as React from 'react';
import { useHistory } from 'react-router-dom';


function Header() {

    const history = useHistory();

    return (
        <>
            <div className="top-main-bg">
            <div className="container">
                <div className="row p-2">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1">
                        <div className="top-left pl-4">
                            <a href=""><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;0123456789</a>
                            <a href=""><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;info@abcd.co.uk</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1 text-right">
                        <div className="top-right pr-5">
                            <a href=""><img src="./images/fb-icon.jpg" /></a>
                            <a href=""><img src="./images/ins-logo.jpg" /></a>
                            <a href=""><img src="./images/link-icon.jpg" /></a>
                            <a href=""><img src="./images/twitter-icon.jpg" /></a>
                            <a href=""><img src="./images/you-icon.jpg" /></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="navv myshade sticky-top">
            <div className="container">
                <div className="header-navigation py-2 ">
                    <div className="log-nav first">
                        <a 
                            onClick={() => history.push('/')}
                        ><img src="./images/logo.jpg" style={{height:"50px", width:"150px"}}/></a>
                    </div>
                    <div className="nav-cn second">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="nav">
                                    <li className="nav-item active">
                                        <a className="nav-link"
                                            onClick={() => history.push('/')}
                                        >Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" 
                                            onClick={() => history.push('/aboutUs')}
                                        >About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Jobs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" 
                                            onClick={() => history.push('/testimonials')}
                                        >Testimonials</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" >FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" >Contact Us</a>
                                    </li>
                                    <li className="nav-item xtreem">
                                        <div className="cnt-btn third">
                                            <a 
                                                onClick={() => history.push('/login')}
                                            >
                                                <button className="btn-orange btn rounded text-light" role="button">Sign In/Sign Up</button>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}
export default Header;
