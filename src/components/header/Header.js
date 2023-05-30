import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ClickAwayListener, CssBaseline, Divider, Stack } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CustomPopOver } from './style';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useGetAllCartQuery, useGetPokemonByNameQuery, useGetShopMenuDataQuery, useOtpMatchMutation, useSendOtpMutation } from '../../services/api';
import Storage from '../../services/storage';
import { toast } from 'react-toastify';
import Login from './login';
import Cart from './cart';
import Calendar from './calendar';
import Shop from './shop';
import { useSelector } from 'react-redux';
import LoginModal from './LoginModal';

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import NewCart from './cart_new';

function Header() {
    const { data } = useGetShopMenuDataQuery()
    const { data: cartData, error, isLoading } = useGetAllCartQuery(undefined, { skip: !Storage.isUserAuthenticated() })

    const [scroll, setScroll] = React.useState(false);
    const cartCount = useSelector(state => state?.cart?.count)
    const [hover, setHover] = React.useState(false);
    const [countData, setCountData] = React.useState(0);
    const location = useLocation()
    const history = useHistory();
    const [headerColor, setHeaderColor] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [accountPopup, setAccountPopup] = React.useState(null);
    const [calendarPopup, setCalendarPopup] = React.useState(null);
    const [isCart, setIsCart] = React.useState(false);
    const [cartPopup, setCartPopup] = React.useState(null);
    const [menuData, setMenuData] = React.useState({
        collection: [],
        categories: [],
        level: '1',
        selectedCategoriesIndex: -1,
        selectedSubCategoriesIndex: -1
    });
    const [width, setWidth] = React.useState(window.innerWidth);
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    const [isActive, setIsActive] = React.useState({
        active: false,
        index: ""
    })

    const getCateogries = (categories, id) => {
        if (categories.length > 0) {
            return categories.map(list => {
                return {
                    ...list,
                    parentId: id
                }
            })
        } else {
            return []
        }
    }

    const getSubCateogries = (sub_cateogries, id) => {
        if (sub_cateogries.length > 0) {
            return sub_cateogries.map(list => {
                return {
                    ...list,
                    categories: getCateogries(list?.categories ?? [], list?._id),
                    parentId: id
                }
            })
        } else {
            return []
        }
    }

    React.useEffect(() => {
        let tempData = {
            collection: data?.collections ?? [],
            categories: data?.categories ?? []
        }
        let tempCollection = [...tempData.collection]
        let tempCategories = [...tempData.categories]
        tempCollection = tempCollection.slice(0, 4)
        tempCategories = tempCategories.slice(0, 2).map(list => {
            return {
                ...list,
                sub_cateogries: getSubCateogries(list?.sub_cateogries ?? [], list?._id),
                parentId: list?._id
            }
        })
        tempData = {
            collection: tempCollection,
            categories: tempCategories,
            level: '1'
        }
        setMenuData(tempData)
    }, [data]);

    const getActiveHeader = (scroll, hover, headerColor) => {
        if (scroll) {
            return true
        }
        if (headerColor) {
            return true
        }
        // else {
        //     if (hover) {
        //         return true
        //     }
        // }
        return false
    }

    const onChagewalletbar = (pathname) => {
        var mypath = ["/allProduct", "/product", "/checkout", "/orderConfirmation", "/userProfile", "/reviews", "/404", "/returns", "/sizeGuide", "/paymentOptions", "/trackOrder", "/login"].some(x => pathname.startsWith(x))
        if (mypath) {
            setHeaderColor(true);
        }
        else {
            setHeaderColor(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);

    React.useEffect(() => {
        setCountData(Storage.isUserAuthenticated() ? cartData?.data?.length ?? 0 : cartCount ?? 0)
    }, [cartData, cartCount]);

    React.useEffect(() => {
        onChagewalletbar(location.pathname);
    }, [location]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setIsActive({ active: false, index: "" });
    };
    const handleActive = (id, index, level, change = true, sub = false, name) => {
        if (change) {
            setMenuData({
                ...menuData,
                selectedCategoriesIndex: sub ? menuData.selectedCategoriesIndex : index,
                selectedSubCategoriesIndex: sub ? index : -1,
                level
            })
        } else {
            handleClose();
            setMenuData({
                ...menuData,
                selectedCategoriesIndex: -1,
                selectedSubCategoriesIndex: -1,
                level: '1'
            })
            history.push(`/allProduct/${id}/${name}`)
        }
    }

    const handleAccountClick = (event) => {
        setAccountPopup(event.currentTarget);
    };

    const handleAccountClose = () => {
        setAccountPopup(null);
    };

    const handleCalendarClick = (event) => {
        setCalendarPopup(event.currentTarget);
    };

    const handleCalendarClose = () => {
        setCalendarPopup(null);
    };

    const handleCartClick = (event) => {
        setCartPopup(event.currentTarget);
    };

    const handleCartClose = () => {
        setCartPopup(null);
    };
    const handleCheckout = () => {
        if (Storage.isUserAuthenticated()) {
            setIsCart(false)
            setCartPopup(null);
            history.push(`/checkout`);
        } else {
            toast.error("Login required!")
        }
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const account = Boolean(accountPopup);
    const accountId = account ? 'simple-popover' : undefined;

    const calendar = Boolean(calendarPopup);
    const calendarId = calendar ? 'simple-popover' : undefined;

    const cart = Boolean(cartPopup);
    const cartId = cart ? 'simple-popover' : undefined;

    return (
        <>
            {/* <CssBaseline /> */}

            <div className='nav-main'>
                <div class="top-main-bg">
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
                </div>
            </div>
        </>
    );
}
export default Header;
