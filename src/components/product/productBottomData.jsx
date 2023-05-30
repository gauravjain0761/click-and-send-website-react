import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import 'react-spring-bottom-sheet/dist/style.css';
import { getNumberWithComma } from "../../utils/utils";
import WriteAReviews from '../reviews/WriteAReviews';
import FooterStrip from '../footer/footerStrip';
import ProductPageFilter from './ProductFilter';
import parse from 'html-react-parser';
import SaveButton from '../common/save';
import { Box } from '@mui/material';
import Storage from '../../services/storage';
import Review from '../reviews/review';
import { ApiGet } from '../../services/API/api';
import { toast } from 'react-toastify';
import VideoComponent from './videoComponent';


const ProductBottomData = ({ product, productIndex, width, similarList, refetch, swipeableIndex, productList, lastSkuData, setLastSkuData, setSwipeableDisable }) => {
    const [age, setAge] = useState("size");
    const history = useHistory();
    const [recentlyProduct, setRecentlyProduct] = useState(Storage.get("recentlyProduct") ? JSON.parse(Storage.get("recentlyProduct") ?? '[]') : []);
    const [pincode, setPincode] = useState("");
    const [pincodeValid, setPincodeValid] = useState(null);
    const [pincodeValidMsg, setPincodeValidMsg] = useState(null);

    useEffect(() => {
        setRecentlyProduct(Storage.get("recentlyProduct") ? JSON.parse(Storage.get("recentlyProduct") ?? '[]') : []);
    }, [Storage.get("recentlyProduct")])


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const getWidthData = (length) => {
        let temp = []
        for (let i = 0; i < length; i++) {
            if (i % 10 == 3) {
                temp.push(i)
            }
            // if (i % 10 == 4) {
            //     temp.push(i)
            // }
            // if (i % 10 == 8) {
            //     temp.push(i)
            // }
            if (i % 10 == 9) {
                temp.push(i)
            }
        }
        return temp
    }


    const getHeightData = (length) => {
        let temp = []
        for (let i = 0; i < length; i++) {
            if (i % 10 == 3) {
                temp.push(i)
            }
            if (i % 10 == 4) {
                temp.push(i)
            }
            if (i % 10 == 8) {
                temp.push(i)
            }
            if (i % 10 == 9) {
                temp.push(i)
            }
        }
        return temp
    }


    const getClassWidth = (index, length) => {
        const data = getWidthData(length)
        if (data.includes(index)) {
            return "col-md-8"
        }
        return "col-md-4"
    }

    const handlePincode = async (code) => {
        if (code?.length == 6) {
            await ApiGet(`check_availability/${code}`)
                .then((res) => {
                    setPincodeValid(true);
                    setPincodeValidMsg("Serviceable..")
                })
                .catch((error) => {
                    setPincodeValidMsg("Not Serviceable..")
                    setPincodeValid(true);
                });
        }
    }

    return (
        <div>
            {(width < 768) && <div className="product_page">
                <div className="product_slider_section">
                    <div className="row">
                        <div className="col-md-6 product_info_section_wrap" >
                            <div className="product_info_section">
                                <div className="product_title_wrap" onMouseEnter={() => setSwipeableDisable(false)} onTouchStart={() => setSwipeableDisable(false)}>
                                    <h2>{product?.name}</h2>
                                    {/* <SaveButton id={product?._id} isWishlist={product?.isWishlist} isBlue={true} refetch={refetch} isWhite={false} /> */}
                                </div>
                                <div className="common_product_details" onMouseEnter={() => setSwipeableDisable(true)} onTouchStart={() => setSwipeableDisable(true)}>
                                    <div className='parse-description'>{parse(product?.description)}</div>
                                    <div style={{ marginTop: '25px' }}>
                                        Club members get <span>10% off. </span>
                                        <Link to="" className="product_link">
                                            Join
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1187_4489)">
                                                    <path
                                                        d="M0.814453 1.15381H10.8461V11.1855"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                    <path
                                                        d="M0.814453 11.1855L10.8461 1.15381"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1187_4489">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="produt_time_wrap">
                                        <Link to="" className="product_link">
                                            Get help on Whatsapp
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1187_4489)">
                                                    <path
                                                        d="M0.814453 1.15381H10.8461V11.1855"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                    <path
                                                        d="M0.814453 11.1855L10.8461 1.15381"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1187_4489">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                        <p>10am—6pm</p>
                                    </div>
                                    <div className="produt_time_wrap">
                                        <Link to="" className="product_link">
                                            See it live
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1187_4489)">
                                                    <path
                                                        d="M0.814453 1.15381H10.8461V11.1855"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                    <path
                                                        d="M0.814453 11.1855L10.8461 1.15381"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1187_4489">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                        <p>Next slot at 4:15pm</p>
                                    </div>
                                </div>

                                <div className="stock_list" onMouseEnter={() => setSwipeableDisable(true)} onTouchStart={() => setSwipeableDisable(true)}>
                                    <ul>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1184_3678)">
                                                            <path
                                                                d="M12 23.1501C18.158 23.1501 23.15 18.1581 23.15 12.0001C23.15 5.84212 18.158 0.850098 12 0.850098C5.842 0.850098 0.849976 5.84212 0.849976 12.0001C0.849976 18.1581 5.842 23.1501 12 23.1501Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M17.28 8.42993L10.13 15.5699L6.71997 12.1599"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1184_3678">
                                                                <rect width="24" height="24" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>In Stock</h3>
                                                    <p>{pincodeValid ? pincodeValidMsg : " Ships in 24 hours"}</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pin_code_weap">
                                                <input type="text" placeholder="PIN Code" value={pincode} onChange={(e) => {
                                                    const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                                                    if (onlyNums.length <= 6) {
                                                        setPincode(onlyNums)
                                                        setPincodeValid(false)
                                                    }
                                                }} />
                                                <div className="edit_icon">
                                                    <svg
                                                        width="9"
                                                        height="10"
                                                        viewBox="0 0 9 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1184_3686)">
                                                            <path
                                                                d="M8.12998 6.05011V8.64011H0.849976V1.36011H3.43998"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M4.12 5.37013L8.37 1.13013"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1184_3686">
                                                                <rect
                                                                    width="8.98"
                                                                    height="8.98"
                                                                    fill="white"
                                                                    transform="translate(0 0.51001)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                {pincode?.length > 0 ?
                                                    <div onClick={() => handlePincode(pincode)} className="pin_code_weap_ok">
                                                        OK
                                                    </div>
                                                    : null}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="24"
                                                        height="22"
                                                        viewBox="0 0 24 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1187_4050)">
                                                            <path
                                                                d="M3.28998 1.56006H12.56C13.91 1.56006 15 2.65006 15 4.00006V17.4401H0.849976V4.00006C0.849976 2.65006 1.93998 1.56006 3.28998 1.56006Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M23.15 17.4299H12.01L12.01 10.0099C12.01 8.36993 13.34 7.03993 14.98 7.03993L20.19 7.03993C21.83 7.03993 23.16 8.36993 23.16 10.0099V17.4299H23.15Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M6.01001 20.4399C7.66686 20.4399 9.01001 19.0968 9.01001 17.4399C9.01001 15.7831 7.66686 14.4399 6.01001 14.4399C4.35316 14.4399 3.01001 15.7831 3.01001 17.4399C3.01001 19.0968 4.35316 20.4399 6.01001 20.4399Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M18.01 20.4399C19.6669 20.4399 21.01 19.0968 21.01 17.4399C21.01 15.7831 19.6669 14.4399 18.01 14.4399C16.3532 14.4399 15.01 15.7831 15.01 17.4399C15.01 19.0968 16.3532 20.4399 18.01 20.4399Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M15.3499 7.05005H3.56995"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M12.0099 10.9399H3.56995"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1187_4050">
                                                                <rect
                                                                    width="24"
                                                                    height="20.58"
                                                                    fill="white"
                                                                    transform="translate(0 0.709961)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>Free shipping</h3>
                                                    <p>Above ₹1,000</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="22"
                                                        height="22"
                                                        viewBox="0 0 22 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M19.8417 0V9.81048H10.0312"
                                                            stroke="#2A3990"
                                                            strokeWidth="1.7"
                                                            strokeMiterlimit="10"
                                                        />
                                                        <path
                                                            d="M19.8417 9.81049L12.165 2.13379H10.9877C6.05796 2.13379 2.08472 6.10703 2.08472 11.0123C2.08472 15.9175 6.05796 19.9153 10.9877 19.9153C13.4403 19.9153 15.6722 18.9097 17.2664 17.3155"
                                                            stroke="#2A3990"
                                                            strokeWidth="1.7"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>14-day return</h3>
                                                    <p>Get 100% store credit</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="23"
                                                        height="18"
                                                        viewBox="0 0 23 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1187_4019)">
                                                            <path
                                                                d="M13.33 10C14.9868 10 16.33 8.65685 16.33 7C16.33 5.34315 14.9868 4 13.33 4C11.6731 4 10.33 5.34315 10.33 7C10.33 8.65685 11.6731 10 13.33 10Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M21.82 1H4.84998V13H21.82V1Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M17.82 17H0.849976V5"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1187_4019">
                                                                <rect
                                                                    width="22.67"
                                                                    height="17.7"
                                                                    fill="white"
                                                                    transform="translate(0 0.149902)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>COD Available</h3>
                                                    <p>Pay only on delivery</p>
                                                </div>
                                            </div>
                                        </li>
                                        {/* <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="23"
                                                        height="24"
                                                        viewBox="0 0 23 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1187_4027)">
                                                            <path
                                                                d="M21.63 3.49487H0.849976V22.3449H21.63V3.49487Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M14.71 8.49487V22.3449"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M7.78003 8.49487V22.3449"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M21.63 15.425H0.859985"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M21.63 8.49487H0.859985"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M5.23999 6.29493V0.804932"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M17.24 6.29493V0.804932"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1187_4027">
                                                                <rect
                                                                    width="22.48"
                                                                    height="22.39"
                                                                    fill="white"
                                                                    transform="translate(0 0.804932)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>Pay later</h3>
                                                    <p>EMI available over ₹3,000</p>
                                                </div>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            <div onMouseEnter={() => setSwipeableDisable(true)} onTouchStart={() => setSwipeableDisable(true)}>
                <div className="structured_fabric_wrapper">
                    <div className="container">
                        <div className="structured_fabric_inner">
                            <div className="row">
                                {(lastSkuData?.videos?.length > 0) ?
                                    <>
                                        {lastSkuData?.videos?.map((list, index) => (
                                            <VideoComponent url={list?.url} key={index} index={index} width={(width < 576)} />
                                        ))}
                                    </>
                                    :
                                    <>
                                        {product?.videos?.slice(0, 3)?.map((list, index) => (
                                            <VideoComponent url={list?.url} key={index} index={index} width={(width < 576)} />
                                        ))}
                                    </>
                                }
                            </div>

                            <Review id={product?._id} />
                        </div>
                    </div>
                </div>
                {product?.similar_products?.length > 0 &&
                    <div className="cloth_wrap might_like_wrap">
                        <div className="container" style={{
                            paddingRight: "8px",
                            paddingLeft: "8px"
                        }}>
                            <div className="might_like_inner">
                                <p>You might like these too</p>
                                <Link to="/">
                                    see similar
                                    <svg
                                        width="7"
                                        height="8"
                                        viewBox="0 0 7 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1201_3330)">
                                            <path
                                                d="M0.475098 1.19312H6.32691V7.04493"
                                                stroke="#2A3592"
                                                strokeWidth="1.7"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M0.475098 7.04493L6.32691 1.19312"
                                                stroke="#2A3592"
                                                strokeWidth="1.7"
                                                strokeMiterlimit="10"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1201_3330">
                                                <rect
                                                    width="7"
                                                    height="7"
                                                    fill="white"
                                                    transform="translate(0 0.52002)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                            <div className="cloth_inner">
                                <div className="row">
                                    {product?.similar_products?.map((list, index) => (
                                        <div key={list?._id + index} className={`fix-padding-might_like_inner ${getClassWidth(index, product?.similar_products?.length)}`}>
                                            <div className="cloth_deatils_wrap">
                                                <Link to={`/product/${list?._id}`} className="cloth_deatils_link">
                                                    <img src={list?.images?.[0]?.url} alt="cloth" width="100%" height={getHeightData(product?.similar_products?.length).includes(index) ? "640px" : "560px"} />
                                                </Link>
                                                <div className="cloth_info_title">
                                                    <div className="summer_list_link_wrap mobile_summer_list_link_wrap">
                                                        <div className="summer_list_link">
                                                            <p className='summer_list_link_wrap_white'>{list?.name}</p>
                                                            <span>
                                                                <svg
                                                                    width="9"
                                                                    height="10"
                                                                    viewBox="0 0 9 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_367_1219)">
                                                                        <path
                                                                            d="M0.599976 1.42999H7.98998V8.81999"
                                                                            stroke="#fff"
                                                                            strokeWidth="1.7"
                                                                            strokeMiterlimit="10"
                                                                        />
                                                                        <path
                                                                            d="M0.599976 8.81999L7.98998 1.42999"
                                                                            stroke="#fff"
                                                                            strokeWidth="1.7"
                                                                            strokeMiterlimit="10"
                                                                        />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_367_1219">
                                                                            <rect
                                                                                width="8.84"
                                                                                height="8.84"
                                                                                fill="white"
                                                                                transform="translate(0 0.580017)"
                                                                            />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <p className='summer_list_link_wrap_white'>{getNumberWithComma(list?.sale_price ?? 0)}</p>
                                                    </div>
                                                    <SaveButton id={list?._id} isWishlist={list?.isWishlist} isBlue={false} refetch={refetch} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <Box className="know_wrap" sx={{ '@media (max-width: 768px)': { display: "none" } }}>
                    <div className="container">
                        <div className="know_inner">
                            <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.5 81.4708C63.5642 81.4708 81.4508 63.5842 81.4508 41.52C81.4508 19.4558 63.5642 1.56921 41.5 1.56921C19.4358 1.56921 1.54919 19.4558 1.54919 41.52C1.54919 63.5842 19.4358 81.4708 41.5 81.4708Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" />
                                <path d="M46.1313 12.3569L44.8092 8.94073L46.246 9.20057L47.0026 11.3404H47.0331L48.4775 9.60562L49.8379 9.85017L47.4152 12.5861L47.0561 14.5579L45.7798 14.3286L46.139 12.3569H46.1313Z" fill="white" />
                                <path d="M51.542 10.4004L54.706 11.6003L54.2933 12.6855L52.3521 11.9518L52.0464 12.7466L53.8042 13.4115L53.4297 14.405L51.6719 13.7401L51.3586 14.5731L53.2998 15.3068L52.8871 16.392L49.7231 15.1921L51.542 10.3928V10.4004Z" fill="white" />
                                <path d="M56.9528 18.7076L57.205 17.5307L55.6612 16.583L54.7365 17.3473L53.5825 16.6365L57.8699 13.2433L59.1614 14.0305L58.1144 19.4031L56.9528 18.6923V18.7076ZM56.5095 15.8647L57.4572 16.4455L57.8164 14.7871L56.5019 15.8647H56.5095Z" fill="white" />
                                <path d="M61.7523 22.7505L60.6136 21.7035L60.8963 19.6553L60.8658 19.6247L59.7194 20.8781L58.7565 19.9916L62.2261 16.2086L63.5024 17.3779C64.4271 18.2262 64.6487 19.2273 63.8768 20.068C63.51 20.4654 62.8375 20.8017 61.951 20.4119L61.7599 22.7505H61.7523ZM61.821 19.1586C62.1879 19.4948 62.57 19.533 62.8451 19.235C63.1279 18.9293 63.0362 18.5472 62.6846 18.2262L62.3942 17.9587L61.5383 18.8911L61.8287 19.1586H61.821Z" fill="white" />
                                <path d="M68.1412 22.9873L67.2164 23.6981C67.2012 23.293 66.9948 22.781 66.735 22.4371C66.4675 22.0932 66.1847 21.9862 65.986 22.1314C65.795 22.2766 65.8637 22.5441 66.009 23.0408C66.2306 23.7592 66.4981 24.6457 65.6803 25.2724C64.9085 25.8608 63.9149 25.6927 63.1813 24.7298C62.7839 24.2177 62.5852 23.6293 62.5623 23.1784L63.5405 22.4294C63.5175 22.9109 63.6704 23.4994 63.999 23.9273C64.2894 24.3094 64.6257 24.4088 64.8397 24.2407C65.0766 24.0573 64.9696 23.6904 64.8244 23.186C64.641 22.5746 64.4193 21.7187 65.1759 21.1379C65.8943 20.5876 66.8649 20.7328 67.5833 21.6728C67.9119 22.1008 68.0953 22.5746 68.1488 22.9873H68.1412Z" fill="white" />
                                <path d="M70.8007 26.9996L72.1534 30.1024L71.0835 30.5685L70.2505 28.6656L69.4709 29.0095L70.2199 30.729L69.2493 31.1494L68.5004 29.4298L67.6826 29.789L68.5156 31.692L67.4457 32.1582L66.093 29.0554L70.8007 26.9996Z" fill="white" />
                                <path d="M70.6097 33.8471L72.7342 31.6691L73.0782 33.1364L71.7102 34.4814L73.5138 35.0164L73.85 36.4608L70.9918 35.4597L68.8596 37.653L68.5157 36.1933L69.8837 34.833L68.0648 34.2827L67.7285 32.8383L70.5944 33.8395L70.6097 33.8471Z" fill="white" />
                                <path d="M74.0411 38.2873L74.1099 39.8922C74.1787 41.3825 73.4909 42.246 72.3675 42.2919C71.3281 42.3377 70.3957 41.6117 70.3346 40.1368L70.3193 39.7546L68.9819 39.8158L68.9208 38.5089L74.0411 38.2797V38.2873ZM72.2605 40.9851C72.7343 40.9621 72.9636 40.58 72.9406 40.0833L72.9177 39.64L71.458 39.7011L71.481 40.1444C71.5039 40.6411 71.779 41.0003 72.2528 40.9774L72.2605 40.9851Z" fill="white" />
                                <path d="M74.0869 44.149L73.6513 47.504L72.4973 47.3512L72.7648 45.2877L71.9165 45.1807L71.672 47.0455L70.625 46.9079L70.8695 45.0432L69.983 44.9285L69.7155 46.992L68.5615 46.8391L68.9971 43.4841L74.0869 44.149Z" fill="white" />
                                <path d="M67.0789 51.9442L67.5451 50.4692L69.5168 49.8578L69.5321 49.8196L67.9119 49.3076L68.3017 48.0619L73.2004 49.598L72.6808 51.2487C72.3063 52.4486 71.4962 53.0676 70.4033 52.7237C69.8837 52.5632 69.2952 52.097 69.2723 51.1265L67.0713 51.9442H67.0789ZM70.3575 50.4845C70.2123 50.9583 70.3346 51.3175 70.7167 51.4398C71.1141 51.5621 71.4198 51.3175 71.5573 50.8666L71.6796 50.4845L70.4721 50.1024L70.3575 50.4769V50.4845Z" fill="white" />
                                <path d="M71.2363 55.047L70.6708 56.2239L66.0396 54.0076L66.6051 52.8307L71.2363 55.047Z" fill="white" />
                                <path d="M69.685 58.0963L67.8279 60.9239L66.8573 60.282L67.996 58.5472L67.2853 58.081L66.2536 59.6477L65.367 59.0669L66.3988 57.5002L65.6498 57.0111L64.5111 58.7459L63.5405 58.1039L65.3976 55.2762L69.685 58.0963Z" fill="white" />
                                <path d="M59.6124 62.3607L60.476 61.4742L64.1137 62.1238L61.9204 59.9839L62.7916 59.0898L66.4599 62.674L65.5887 63.5682L61.9968 62.9415L64.1443 65.0432L63.2731 65.9373L59.6047 62.3531L59.6124 62.3607Z" fill="white" />
                                <path d="M56.5019 64.4623C57.7017 63.637 59.3219 63.8357 60.2237 65.1578C61.1332 66.4875 60.7434 68.0619 59.5435 68.8872C59.0544 69.2235 58.5959 69.3458 58.1679 69.4069L57.4419 68.3523C57.9387 68.3523 58.3284 68.2606 58.7411 67.9778C59.4289 67.504 59.6505 66.6251 59.1461 65.8991C58.6494 65.1731 57.7476 65.0508 57.0521 65.5246C56.6471 65.8074 56.4408 66.1513 56.2573 66.6251L55.5237 65.5552C55.73 65.1807 56.0128 64.7909 56.5019 64.4547V64.4623Z" fill="white" />
                                <path d="M56.4638 70.5915L53.3839 71.99L52.9024 70.9354L54.7901 70.0794L54.4385 69.2999L52.7267 70.0794L52.291 69.1165L54.0029 68.337L53.6361 67.5269L51.7484 68.3828L51.267 67.3282L54.3468 65.9296L56.4714 70.5991L56.4638 70.5915Z" fill="white" />
                                <path d="M45.4205 72.2728C44.9085 72.3339 44.4499 71.9824 44.3812 71.4703C44.32 70.9583 44.6716 70.4998 45.1836 70.431C45.6956 70.3622 46.1542 70.7214 46.223 71.2334C46.2841 71.7455 45.9326 72.204 45.4205 72.2728Z" fill="white" />
                                <path d="M36.6624 70.6526L37.9616 74.084L36.5249 73.8165L35.7836 71.669H35.753L34.2933 73.3962L32.933 73.144L35.3785 70.4233L35.753 68.4516L37.0293 68.6885L36.6624 70.6602V70.6526Z" fill="white" />
                                <path d="M31.2441 72.5708L28.0878 71.3481L28.5081 70.2629L30.4416 71.0118L30.7473 70.217L28.9972 69.5368L29.3793 68.551L31.1294 69.2311L31.4504 68.3981L29.5169 67.6492L29.9372 66.564L33.0935 67.7867L31.2441 72.5708Z" fill="white" />
                                <path d="M25.902 64.233L25.6421 65.4099L27.1782 66.3652L28.103 65.601L29.257 66.3117L24.9543 69.6744L23.6704 68.8796L24.7556 63.5146L25.9096 64.233H25.902ZM26.3299 67.076L25.3823 66.4875L25.0078 68.1459L26.3223 67.076H26.3299Z" fill="white" />
                                <path d="M21.1256 60.152L22.2566 61.2067L21.9586 63.2548L21.9892 63.2854L23.1508 62.0397L24.1061 62.9338L20.6059 66.6939L19.3449 65.517C18.4202 64.661 18.2138 63.6675 18.9934 62.8269C19.3602 62.4295 20.0404 62.1008 20.9192 62.4906L21.1256 60.1597V60.152ZM21.0339 63.7363C20.6747 63.4 20.2926 63.3542 20.0098 63.6522C19.727 63.9579 19.8187 64.34 20.1626 64.661L20.453 64.9361L21.3166 64.0114L21.0262 63.7439L21.0339 63.7363Z" fill="white" />
                                <path d="M14.7442 59.8693L15.6765 59.1662C15.6918 59.5712 15.8905 60.0832 16.1504 60.4271C16.4102 60.771 16.693 60.8857 16.8917 60.7328C17.0827 60.5876 17.0139 60.3202 16.8764 59.831C16.6548 59.105 16.4026 58.2261 17.2203 57.5995C17.9922 57.011 18.9857 57.1944 19.7117 58.1574C20.1014 58.6694 20.3001 59.2655 20.3154 59.7088L19.3372 60.4501C19.3601 59.9762 19.2226 59.3801 18.894 58.9522C18.6035 58.5701 18.2749 58.4631 18.0533 58.6312C17.8087 58.8146 17.9157 59.1814 18.0533 59.6858C18.2367 60.2972 18.4507 61.1532 17.6865 61.734C16.9681 62.2766 15.9975 62.1237 15.2868 61.1837C14.9658 60.7558 14.7824 60.2819 14.7289 59.8693H14.7442Z" fill="white" />
                                <path d="M12.1076 55.8341L10.7778 52.7237L11.8478 52.2652L12.6655 54.1757L13.4527 53.8395L12.7113 52.1123L13.6819 51.6996L14.4232 53.4268L15.2486 53.0752L14.4309 51.1647L15.5008 50.7061L16.8306 53.8165L12.1152 55.8341H12.1076Z" fill="white" />
                                <path d="M12.3445 48.9942L10.2046 51.157L9.87598 49.6897L11.2516 48.3599L9.448 47.8097L9.11938 46.3652L11.97 47.3817L14.1175 45.2036L14.4461 46.6633L13.0628 48.0084L14.8741 48.5739L15.2027 50.0259L12.3445 49.0019V48.9942Z" fill="white" />
                                <path d="M8.94366 44.5159L8.88252 42.911C8.82902 41.4207 9.52448 40.5648 10.6479 40.5266C11.6873 40.4883 12.612 41.2296 12.6655 42.697L12.6808 43.0791L14.0182 43.0332L14.064 44.3401L8.94366 44.5235V44.5159ZM10.7473 41.8334C10.2734 41.8487 10.0365 42.2308 10.0594 42.7275L10.0747 43.1708L11.5344 43.1173L11.5191 42.674C11.5038 42.1773 11.2287 41.8181 10.7549 41.8334H10.7473Z" fill="white" />
                                <path d="M8.93604 38.6694L9.39458 35.3221L10.5486 35.4826L10.2658 37.5384L11.1065 37.653L11.3587 35.7959L12.4057 35.9411L12.1535 37.7982L13.04 37.9205L13.3227 35.8647L14.4767 36.0252L14.0182 39.3725L8.93604 38.6771V38.6694Z" fill="white" />
                                <path d="M15.9975 30.9277L15.5237 32.4027L13.5443 32.9988L13.529 33.037L15.1416 33.5567L14.7442 34.8024L9.86072 33.2281L10.388 31.585C10.7778 30.3851 11.5879 29.7737 12.6731 30.1253C13.1928 30.2934 13.7736 30.7596 13.7889 31.7302L15.9899 30.9277H15.9975ZM12.7113 32.3568C12.8642 31.883 12.7419 31.5238 12.3598 31.3939C11.97 31.264 11.6567 31.5085 11.5115 31.9594L11.3892 32.3416L12.5967 32.7313L12.719 32.3568H12.7113Z" fill="white" />
                                <path d="M11.863 27.7944L12.4362 26.6175L17.0445 28.872L16.4714 30.0489L11.863 27.7944Z" fill="white" />
                                <path d="M13.4373 24.7527L15.3173 21.9404L16.2803 22.59L15.1263 24.3171L15.837 24.791L16.884 23.2319L17.7629 23.8204L16.7159 25.3794L17.4572 25.8762L18.6112 24.149L19.5741 24.7986L17.6941 27.611L13.4297 24.7604L13.4373 24.7527Z" fill="white" />
                                <path d="M23.5329 20.5495L22.6616 21.4283L19.0239 20.7558L21.202 22.9109L20.3231 23.7975L16.67 20.1903L17.5489 19.2961L21.1408 19.9381L19.001 17.8211L19.8798 16.9346L23.5329 20.5418V20.5495Z" fill="white" />
                                <path d="M26.6739 18.4708C25.4664 19.2885 23.8539 19.0745 22.9521 17.7447C22.0503 16.4073 22.4554 14.833 23.6629 14.0153C24.152 13.6867 24.6181 13.5644 25.0461 13.5032L25.7645 14.5655C25.2677 14.5655 24.878 14.6496 24.4653 14.9247C23.7698 15.3909 23.5482 16.2698 24.045 17.0034C24.5341 17.7371 25.4359 17.867 26.1313 17.3932C26.544 17.1181 26.7504 16.7665 26.9338 16.2927L27.6598 17.3703C27.4458 17.7447 27.163 18.1268 26.6663 18.4631L26.6739 18.4708Z" fill="white" />
                                <path d="M26.7427 12.3492L29.8378 10.9736L30.3116 12.0359L28.4163 12.8842L28.7603 13.6637L30.4798 12.8994L30.9078 13.87L29.1882 14.6343L29.5551 15.452L31.4504 14.6037L31.9242 15.666L28.829 17.0416L26.7427 12.3568V12.3492Z" fill="white" />
                                <path d="M37.8011 10.7367C38.3132 10.6756 38.7717 11.0347 38.8328 11.5468C38.894 12.0588 38.5348 12.5174 38.0227 12.5785C37.5107 12.6396 37.0522 12.2804 36.991 11.7684C36.9299 11.2564 37.2891 10.7978 37.8011 10.7367Z" fill="white" />
                                <path d="M54.0411 35.8341C54.0411 32.6939 51.4954 30.1482 48.3552 30.1482C45.215 30.1482 42.6693 32.6939 42.6693 35.8341V47.2135C42.6693 50.3538 45.215 52.8994 48.3552 52.8994C51.4954 52.8994 54.0411 50.3538 54.0411 47.2135V35.8341Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" />
                                <path d="M36.2956 52.3033V30.1482L25.902 47.2059H38.4048" stroke="white" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="round" />
                            </svg>
                            <p>
                                Estd. 1977 ~ Bunawat is curated by the team at our legacy store,
                                Aradhana.
                                <Link to="/" className="know_link">
                                    Know the Story
                                    <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 11 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1201_3388)">
                                            <path
                                                d="M1.17871 1.48157H9.53844V9.8413"
                                                stroke="white"
                                                strokeWidth="1.7"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M1.17871 9.8413L9.53844 1.48157"
                                                stroke="white"
                                                strokeWidth="1.7"
                                                strokeMiterlimit="10"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1201_3388">
                                                <rect
                                                    width="10"
                                                    height="10"
                                                    fill="white"
                                                    transform="translate(0.5 0.52002)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </p>

                        </div>
                    </div>
                </Box>
                <Box className="know_wrap" sx={{ display: "none", '@media (max-width: 768px)': { display: "block" } }}>
                    <div className="container">
                        <div className="know_inner">
                            <svg width="160" height="160" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.3402 107.2C83.2468 107.2 106.68 83.7666 106.68 54.86C106.68 25.9534 83.2468 2.52003 54.3402 2.52003C25.4336 2.52003 2.0002 25.9534 2.0002 54.86C2.0002 83.7666 25.4336 107.2 54.3402 107.2Z" fill="#2A3592" stroke="white" strokeWidth="3.4" strokeMiterlimit="10" />
                                <path d="M60.3999 16.7L58.6699 12.23L60.5499 12.57L61.5399 15.37H61.5799L63.4699 13.1L65.2499 13.42L62.0799 17L61.6099 19.58L59.9399 19.28L60.4099 16.7H60.3999Z" fill="white" />
                                <path d="M67.4796 14.1401L71.6196 15.7101L71.0796 17.1301L68.5396 16.1701L68.1396 17.2101L70.4396 18.0801L69.9496 19.3801L67.6496 18.5101L67.2396 19.6001L69.7796 20.5601L69.2396 21.9801L65.0996 20.4101L67.4796 14.1301V14.1401Z" fill="white" />
                                <path d="M74.5604 25.01L74.8904 23.47L72.8704 22.23L71.6604 23.23L70.1504 22.3L75.7604 17.86L77.4504 18.89L76.0804 25.92L74.5604 24.99V25.01ZM73.9804 21.29L75.2204 22.05L75.6904 19.88L73.9704 21.29H73.9804Z" fill="white" />
                                <path d="M80.8399 30.3001L79.3499 28.9301L79.7199 26.2501L79.6799 26.2101L78.1799 27.8501L76.9199 26.6901L81.4599 21.7401L83.1299 23.2701C84.3399 24.3801 84.6299 25.6901 83.6199 26.7901C83.1399 27.3101 82.2599 27.7501 81.0999 27.2401L80.8499 30.3001H80.8399ZM80.9299 25.6001C81.4099 26.0401 81.9099 26.0901 82.2699 25.7001C82.6399 25.3001 82.5199 24.8001 82.0599 24.3801L81.6799 24.0301L80.5599 25.2501L80.9399 25.6001H80.9299Z" fill="white" />
                                <path d="M89.2004 30.61L87.9904 31.54C87.9704 31.01 87.7004 30.34 87.3604 29.89C87.0104 29.44 86.6404 29.3 86.3804 29.49C86.1304 29.68 86.2204 30.03 86.4104 30.68C86.7004 31.62 87.0504 32.78 85.9804 33.6C84.9704 34.37 83.6704 34.15 82.7104 32.89C82.1904 32.22 81.9304 31.45 81.9004 30.86L83.1804 29.88C83.1504 30.51 83.3504 31.28 83.7804 31.84C84.1604 32.34 84.6004 32.47 84.8804 32.25C85.1904 32.01 85.0504 31.53 84.8604 30.87C84.6204 30.07 84.3304 28.95 85.3204 28.19C86.2604 27.47 87.5304 27.66 88.4704 28.89C88.9004 29.45 89.1404 30.07 89.2104 30.61H89.2004Z" fill="white" />
                                <path d="M92.6795 35.86L94.4495 39.92L93.0495 40.53L91.9595 38.04L90.9395 38.49L91.9195 40.74L90.6495 41.29L89.6695 39.04L88.5995 39.51L89.6895 42L88.2895 42.61L86.5195 38.55L92.6795 35.86Z" fill="white" />
                                <path d="M92.4302 44.82L95.2102 41.97L95.6602 43.89L93.8702 45.65L96.2302 46.35L96.6702 48.24L92.9302 46.93L90.1402 49.8L89.6902 47.89L91.4802 46.11L89.1002 45.39L88.6602 43.5L92.4102 44.81L92.4302 44.82Z" fill="white" />
                                <path d="M96.9197 50.6301L97.0097 52.7301C97.0997 54.6801 96.1997 55.8101 94.7297 55.8701C93.3697 55.9301 92.1497 54.9801 92.0697 53.0501L92.0497 52.5501L90.2997 52.6301L90.2197 50.9201L96.9197 50.6201V50.6301ZM94.5897 54.1601C95.2097 54.1301 95.5097 53.6301 95.4797 52.9801L95.4497 52.4001L93.5397 52.4801L93.5697 53.0601C93.5997 53.7101 93.9597 54.1801 94.5797 54.1501L94.5897 54.1601Z" fill="white" />
                                <path d="M96.98 58.3001L96.41 62.6901L94.9 62.4901L95.25 59.7901L94.14 59.6501L93.82 62.0901L92.45 61.9101L92.77 59.4701L91.61 59.3201L91.26 62.0201L89.75 61.8201L90.32 57.4301L96.98 58.3001Z" fill="white" />
                                <path d="M87.8098 68.5L88.4198 66.57L90.9998 65.77L91.0198 65.72L88.8998 65.05L89.4098 63.42L95.8198 65.43L95.1398 67.59C94.6498 69.16 93.5898 69.97 92.1598 69.52C91.4798 69.31 90.7098 68.7 90.6798 67.43L87.7998 68.5H87.8098ZM92.0998 66.59C91.9098 67.21 92.0698 67.68 92.5698 67.84C93.0898 68 93.4898 67.68 93.6698 67.09L93.8298 66.59L92.2498 66.09L92.0998 66.58V66.59Z" fill="white" />
                                <path d="M93.2502 72.56L92.5102 74.1L86.4502 71.2L87.1902 69.66L93.2502 72.56Z" fill="white" />
                                <path d="M91.2197 76.55L88.7897 80.2501L87.5197 79.41L89.0097 77.1401L88.0797 76.5301L86.7297 78.58L85.5697 77.8201L86.9197 75.7701L85.9397 75.1301L84.4497 77.4L83.1797 76.5601L85.6097 72.86L91.2197 76.55Z" fill="white" />
                                <path d="M78.0403 82.13L79.1703 80.97L83.9303 81.82L81.0603 79.02L82.2003 77.85L87.0003 82.54L85.8603 83.71L81.1603 82.89L83.9703 85.64L82.8303 86.81L78.0303 82.12L78.0403 82.13Z" fill="white" />
                                <path d="M73.9704 84.88C75.5404 83.8 77.6604 84.06 78.8404 85.79C80.0304 87.53 79.5204 89.59 77.9504 90.67C77.3104 91.11 76.7104 91.27 76.1504 91.35L75.2004 89.97C75.8504 89.97 76.3604 89.85 76.9004 89.48C77.8004 88.86 78.0904 87.71 77.4304 86.76C76.7804 85.81 75.6004 85.65 74.6904 86.27C74.1604 86.64 73.8904 87.09 73.6504 87.71L72.6904 86.31C72.9604 85.82 73.3304 85.31 73.9704 84.87V84.88Z" fill="white" />
                                <path d="M73.9201 92.9L69.8901 94.73L69.2601 93.3501L71.7301 92.23L71.2701 91.2101L69.0301 92.23L68.4601 90.97L70.7001 89.9501L70.2201 88.8901L67.7501 90.01L67.1201 88.6301L71.1501 86.8L73.9301 92.91L73.9201 92.9Z" fill="white" />
                                <path d="M59.4696 95.1001C58.7996 95.1801 58.1996 94.7201 58.1096 94.0501C58.0296 93.3801 58.4896 92.7801 59.1596 92.6901C59.8296 92.6001 60.4296 93.0701 60.5196 93.7401C60.5996 94.4101 60.1396 95.0101 59.4696 95.1001Z" fill="white" />
                                <path d="M48.0099 92.98L49.7099 97.47L47.8299 97.12L46.8599 94.31H46.8199L44.9099 96.57L43.1299 96.24L46.3299 92.68L46.8199 90.1L48.4899 90.41L48.0099 92.99V92.98Z" fill="white" />
                                <path d="M40.92 95.4901L36.79 93.8901L37.34 92.4701L39.87 93.4501L40.27 92.4101L37.98 91.5201L38.48 90.2301L40.77 91.1201L41.19 90.0301L38.66 89.0501L39.21 87.6301L43.34 89.2301L40.92 95.4901Z" fill="white" />
                                <path d="M33.9298 84.58L33.5898 86.12L35.5998 87.37L36.8098 86.37L38.3198 87.3L32.6898 91.7L31.0098 90.66L32.4298 83.64L33.9398 84.58H33.9298ZM34.4898 88.3L33.2498 87.53L32.7598 89.7L34.4798 88.3H34.4898Z" fill="white" />
                                <path d="M27.6802 79.2401L29.1602 80.62L28.7702 83.3L28.8102 83.34L30.3302 81.7101L31.5802 82.8801L27.0002 87.8L25.3502 86.26C24.1402 85.14 23.8702 83.8401 24.8902 82.7401C25.3702 82.2201 26.2602 81.79 27.4102 82.3L27.6802 79.2501V79.2401ZM27.5602 83.9301C27.0902 83.4901 26.5902 83.4301 26.2202 83.8201C25.8502 84.2201 25.9702 84.7201 26.4202 85.1401L26.8002 85.5001L27.9302 84.29L27.5502 83.94L27.5602 83.9301Z" fill="white" />
                                <path d="M19.3296 78.87L20.5496 77.95C20.5696 78.48 20.8296 79.1501 21.1696 79.6001C21.5096 80.0501 21.8796 80.2001 22.1396 80.0001C22.3896 79.8101 22.2996 79.4601 22.1196 78.8201C21.8296 77.8701 21.4996 76.72 22.5696 75.9C23.5796 75.13 24.8796 75.37 25.8296 76.63C26.3396 77.3 26.5996 78.08 26.6196 78.66L25.3396 79.63C25.3696 79.01 25.1896 78.2301 24.7596 77.6701C24.3796 77.1701 23.9496 77.0301 23.6596 77.2501C23.3396 77.4901 23.4796 77.97 23.6596 78.63C23.8996 79.43 24.1796 80.55 23.1796 81.31C22.2396 82.02 20.9696 81.82 20.0396 80.59C19.6196 80.03 19.3796 79.41 19.3096 78.87H19.3296Z" fill="white" />
                                <path d="M15.8796 73.5901L14.1396 69.5201L15.5396 68.9201L16.6096 71.4201L17.6396 70.9801L16.6696 68.7201L17.9396 68.1801L18.9096 70.4401L19.9896 69.9801L18.9196 67.4801L20.3196 66.8801L22.0596 70.9501L15.8896 73.5901H15.8796Z" fill="white" />
                                <path d="M16.1897 64.6401L13.3897 67.4701L12.9597 65.5501L14.7597 63.8101L12.3997 63.0901L11.9697 61.2001L15.6997 62.5301L18.5097 59.6801L18.9397 61.5901L17.1297 63.3501L19.4997 64.0901L19.9297 65.9901L16.1897 64.6501V64.6401Z" fill="white" />
                                <path d="M11.74 58.7801L11.66 56.6801C11.59 54.7301 12.5 53.6101 13.97 53.5601C15.33 53.5101 16.54 54.4801 16.61 56.4001L16.63 56.9001L18.38 56.8401L18.44 58.5501L11.74 58.7901V58.7801ZM14.1 55.2701C13.48 55.2901 13.17 55.7901 13.2 56.4401L13.22 57.0201L15.13 56.9501L15.11 56.3701C15.09 55.7201 14.73 55.2501 14.11 55.2701H14.1Z" fill="white" />
                                <path d="M11.7305 51.1301L12.3305 46.7501L13.8405 46.9601L13.4705 49.6501L14.5705 49.8001L14.9005 47.3701L16.2705 47.5601L15.9405 49.9901L17.1005 50.1501L17.4705 47.4601L18.9805 47.6701L18.3805 52.0501L11.7305 51.1401V51.1301Z" fill="white" />
                                <path d="M20.9704 41L20.3504 42.93L17.7604 43.71L17.7404 43.76L19.8504 44.44L19.3304 46.07L12.9404 44.01L13.6304 41.86C14.1404 40.29 15.2004 39.49 16.6204 39.95C17.3004 40.17 18.0604 40.78 18.0804 42.05L20.9604 41H20.9704ZM16.6704 42.87C16.8704 42.25 16.7104 41.78 16.2104 41.61C15.7004 41.44 15.2904 41.76 15.1004 42.35L14.9404 42.85L16.5204 43.36L16.6804 42.87H16.6704Z" fill="white" />
                                <path d="M15.5596 36.9L16.3096 35.36L22.3396 38.31L21.5896 39.85L15.5596 36.9Z" fill="white" />
                                <path d="M17.6204 32.9201L20.0804 29.2401L21.3404 30.0901L19.8304 32.3501L20.7604 32.9701L22.1304 30.9301L23.2804 31.7001L21.9104 33.7401L22.8804 34.3901L24.3904 32.1301L25.6504 32.9801L23.1904 36.6601L17.6104 32.9301L17.6204 32.9201Z" fill="white" />
                                <path d="M30.8296 27.4201L29.6896 28.5701L24.9296 27.6901L27.7796 30.5101L26.6296 31.6701L21.8496 26.9501L22.9996 25.7801L27.6996 26.6201L24.8996 23.8501L26.0496 22.6901L30.8296 27.4101V27.4201Z" fill="white" />
                                <path d="M34.9397 24.7C33.3597 25.77 31.2497 25.49 30.0697 23.75C28.8897 22 29.4197 19.94 30.9997 18.87C31.6397 18.44 32.2497 18.28 32.8097 18.2L33.7497 19.59C33.0997 19.59 32.5897 19.7 32.0497 20.06C31.1397 20.67 30.8497 21.82 31.4997 22.78C32.1397 23.74 33.3197 23.91 34.2297 23.29C34.7697 22.93 35.0397 22.47 35.2797 21.85L36.2297 23.26C35.9497 23.75 35.5797 24.25 34.9297 24.69L34.9397 24.7Z" fill="white" />
                                <path d="M35.0303 16.69L39.0803 14.89L39.7003 16.28L37.2203 17.39L37.6703 18.41L39.9203 17.41L40.4803 18.68L38.2303 19.68L38.7103 20.75L41.1903 19.64L41.8103 21.03L37.7603 22.83L35.0303 16.7V16.69Z" fill="white" />
                                <path d="M49.5005 14.58C50.1705 14.5 50.7705 14.97 50.8505 15.64C50.9305 16.31 50.4605 16.91 49.7905 16.99C49.1205 17.07 48.5205 16.6 48.4405 15.93C48.3605 15.26 48.8305 14.66 49.5005 14.58Z" fill="white" />
                                <path d="M70.7501 47.42C70.7501 43.311 67.4191 39.98 63.3101 39.98C59.2011 39.98 55.8701 43.311 55.8701 47.42V62.31C55.8701 66.419 59.2011 69.75 63.3101 69.75C67.4191 69.75 70.7501 66.419 70.7501 62.31V47.42Z" stroke="white" strokeWidth="3.4" strokeMiterlimit="10" />
                                <path d="M47.5297 68.97V39.98L33.9297 62.3H50.2897" stroke="white" strokeWidth="3.4" strokeLinecap="square" strokeLinejoin="round" />
                            </svg>
                            <p>
                                Estd. 1977<br /> Bunawat is curated by the team at our legacy store,
                                Aradhana. <br />
                                <Box sx={{ marginTop: "20px" }}>
                                    <Link to="/" className="know_link">
                                        Know the Story
                                        <svg
                                            width="11"
                                            height="11"
                                            viewBox="0 0 11 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1201_3388)">
                                                <path
                                                    d="M1.17871 1.48157H9.53844V9.8413"
                                                    stroke="white"
                                                    strokeWidth="1.7"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M1.17871 9.8413L9.53844 1.48157"
                                                    stroke="white"
                                                    strokeWidth="1.7"
                                                    strokeMiterlimit="10"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1201_3388">
                                                    <rect
                                                        width="10"
                                                        height="10"
                                                        fill="white"
                                                        transform="translate(0.5 0.52002)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </Box>
                            </p>

                        </div>
                    </div>
                </Box>

                {recentlyProduct?.slice(1)?.length > 0 ? <div className="recemtly_wrap">
                    <div className="container" style={{
                        paddingRight: "8px",
                        paddingLeft: "8px"
                    }}>
                        <div className="recemtly_inner">
                            <div className="sell_wrap">
                                <h3>Recently Seen</h3>
                            </div>

                            <div className="recently_col_wrap">
                                <div className="recently_col_wrap_scroll_hide" style={{
                                    display: 'flex',
                                    flexWrap: 'nowrap',
                                    width: '100%',
                                    gap: '4px',
                                    overflow: 'hidden',
                                    overflowX: 'auto'
                                }}>
                                    {recentlyProduct?.slice(1)?.map((list, index) => (
                                        <div className="recent_view_product" key={list?._id + index} onClick={() => history.push(`/product/${list?._id}`)} style={{ cursor: 'pointer', width: '130px', height: '150px' }}>
                                            <img src={list?.images?.[0]?.url} style={{ maxWidth: '130px', borderRadius: '4px' }} width="130px" height="100%" alt="recent_view_img" />
                                            <div className="recent_price">
                                                <p>{getNumberWithComma(list?.sale_price ?? 0)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    : null}

                <Box
                    className="container"
                    sx={{
                        paddingBottom: '80px',
                    }} >
                    <FooterStrip />
                </Box>

                {/* {(width < 768) ?
                <ProductPageFilter selectedImage={productList?.[swipeableIndex]?.images?.[0]?.url ?? ""} selectedProduct={productList?.[swipeableIndex] ?? {}} filters={productList?.[swipeableIndex]?.skus ?? []} swipeableIndex={swipeableIndex ?? 0} setLastSkuData={setLastSkuData} />
                :
                null} */}
            </div>
        </div>
    )
}

export default ProductBottomData