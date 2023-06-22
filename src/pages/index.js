import React, { useEffect } from "react";
import { Switch, Route, Router, useLocation, useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./home/home";
import Product from "./product/product";
import BASE_URL from "../_constant/index";
import Checkout from "./checkout/index";
import OrderConfirmation from "./orderConfirmation/index";
import UserProfile from "./userProfile/index";
import Reviews from "./reviews/index";
import ClubHome from "./clubHome/index";
import ErrorPage from "./404/index";
import Returns from "./returns/index";
import SizeGuide from "./sizeGuide";
import PaymentOptions from "../components/checkout/PaymentOptions";
import Storage from "../services/storage";
import { logout, setUserData } from "../redux/reducers/user";
import { useDispatch } from "react-redux";
import { setCartCount } from "../redux/reducers/cart";
import TrackOrder from "./trackOrder";
import Login from "./logIn";
import { onMessage } from "firebase/messaging";
import { messaging } from "../firebase";
import { toast } from "react-toastify";
import { AllApiData } from "../services/api";
import ProdileEdit from "./userProfile/edit";
import Register from "./register";
import DriverRegister from "./driverRegister";
import AboutUs from "./aboutUs";
import Testimonials from "./testimonials";

export default function Index() {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    return (
        <>
            <Layout>
                <Switch>
                    {/* <Route exact path={BASE_URL.BASE_URL + 'demo'}>
                        <Demo />
                    </Route> */}
                    <Route exact path={BASE_URL.BASE_URL}>
                        <Home />
                    </Route>

                    {/* <Route exact path={BASE_URL.BASE_URL + `allProductList/:selected`}>
                        <AllProduct />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `allProduct/:id`}>
                        <AllProduct />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `allProduct/:id/:selected`}>
                        <AllProduct />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `product`}>
                        <Product />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `product/:id`}>
                        <Product />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `product/:id/:type`}>
                        <Product />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `checkout`}>
                        <Checkout />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `orderConfirmation/:id`}>
                        <OrderConfirmation />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `userProfile`}>
                        <UserProfile />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `userProfile/edit`}>
                        <ProdileEdit />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `reviews`}>
                        <Reviews />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + `clubHome`}>
                        <ClubHome />
                    </Route>


                    <Route exact path={BASE_URL.BASE_URL + "returns"}>
                        <Returns />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + "sizeGuide"}>
                        <SizeGuide />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + "paymentOptions"}>
                        <PaymentOptions />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + "trackOrder"}>
                        <TrackOrder />
                    </Route>

                     */}

                    <Route exact path={BASE_URL.BASE_URL + "login"}>
                        <Login />
                    </Route>

                    <Route exact path={BASE_URL.BASE_URL + "register"}>
                        <Register />
                    </Route>

                    {/* Driver Register */}
                    <Route exact path={BASE_URL.BASE_URL + "driverRegister"}>
                        <DriverRegister />
                    </Route>

                    {/* // about us page */}
                   <Route exact path={BASE_URL.BASE_URL + "aboutUs"}>
                        <AboutUs /> 
                    </Route>

                    {/* testimonials page */}
                    <Route exact path={BASE_URL.BASE_URL + "testimonials"}>
                        {/* <AboutUs /> */}
                        <Testimonials />
                    </Route>
                   


                    {/* <Route exact path={BASE_URL.BASE_URL + "*"}>
                        <ErrorPage />
                    </Route> */}

                </Switch>
            </Layout>
        </>
    );
}
