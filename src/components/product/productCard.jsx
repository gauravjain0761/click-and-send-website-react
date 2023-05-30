import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import parse from 'html-react-parser';
import ProductBottomData from './productBottomData';
import SaveButton from '../common/save';
import { Box } from '@mui/material';
import { ApiGet } from '../../services/API/api';
import { toast } from 'react-toastify';
import _ from 'lodash';
import Storage from '../../services/storage';
import { getOS } from '../../utils/utils';

const ProductCard = ({ product, productIndex, similarList, setSwipeableDisable, productBottomData, width, refetch, swipeableIndex, productList, lastSkuData, setLastSkuData, filters, setQty, selectedData, setSelectedData, lastCardElementRef }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        vertical: true,
        verticalSwiping: true,
    };
    const [pincode, setPincode] = useState("");
    const [pincodeValid, setPincodeValid] = useState(null);
    const [pincodeValidMsg, setPincodeValidMsg] = useState(null);
    // const [filterList, setFilterList] = useState([]);
    // const [attributeList, setAttributeList] = useState([]);
    const [scrollActive, setScrollActive] = useState(false);
    const [showAnimation, setShowAnimation] = useState(!Storage.get("disableAnimation"));

    // useEffect(() => {
    //     let temp = [...productList?.[swipeableIndex]?.skus ?? []] ?? []
    //     let uniqKey = _.uniq(temp?.map((list) => Object.keys(list?.varients ?? {}))?.flat())?.map((list, index) => list) ?? []
    //     let tempAttributeList = {};
    //     let tempAttributeData = {};
    //     uniqKey.filter(list => list != 'qty').map(val => {
    //         temp.map((list) => {
    //             let value = tempAttributeList?.[val] ?? []
    //             if (!!list?.varients?.[val]) {
    //                 tempAttributeList = { ...tempAttributeList, [val]: [...value, { value: list?._id, label: list?.varients?.[val] }] }
    //             }
    //         })
    //         tempAttributeData = { ...tempAttributeData, [val]: 'defaultValue' }
    //     })
    //     setAttributeList(tempAttributeList);
    //     setFilterList(temp)
    // }, [swipeableIndex])

    // useEffect(() => {
    //     if (productIndex == swipeableIndex) {
    //         const data = _.uniqBy(product?.attributeList?.color, x => x?.label)?.length > 0 ? _.uniqBy(product?.attributeList?.color, x => x?.label) : []
    //         setSelectedData({
    //             ...selectedData,
    //             color: data?.[0],
    //             size: 'default'
    //         })
    //         setLastSkuData(product?.filterList?.find(list => list?._id == data?.[0]?.value) ?? {})
    //     }
    // }, [product?.attributeList, product?.filterList, swipeableIndex])

    // useEffect(async () => {
    //     if (pincode?.length == 6) {
    //         await ApiGet(`check_availability/${pincode}`)
    //             .then((res) => {
    //                 toast.success(res?.message ?? "");
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //                 toast.error(error?.error ?? "");
    //             });
    //     }
    // }, [pincode])

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

    useEffect(async () => {
        setTimeout(() => {
            setShowAnimation(false)
            Storage.set("disableAnimation", true)
        }, 3000)
    }, [])

    return (
        <div style={{
            maxHeight: "100vh",
            height: '-webkit-fill-available',
            width: '100%',
            position: "relative",
            overflowY: scrollActive ? "auto" : "hidden"
        }} ref={!lastCardElementRef ? null : lastCardElementRef}>
            <Box className="product_page" sx={{
                paddingTop: { xs: "60px", sm: '72px' }
            }}>
                <div className="product_slider_section">
                    <div className="row">
                        {(width >= 768) ? (<div className="col-md-6 product_info_section_wrap" onMouseEnter={() => {
                            setSwipeableDisable(false)
                            setScrollActive(true)
                        }} onTouchStart={() => {
                            setScrollActive(true)
                            setSwipeableDisable(false)
                        }}>
                            <div className="product_info_section">
                                <div className="product_title_wrap">
                                    <h2>{product?.name}</h2>
                                    <SaveButton id={product?._id} isWishlist={product?.isWishlist} isBlue={true} refetch={refetch} />
                                </div>
                                <div className="common_product_details">
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

                                <div className="stock_list">
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
                        </div>) :
                            null
                        }

                        <Box
                            className="col-md-6 product_info_right_section_wrap"
                            onMouseEnter={() => setSwipeableDisable(false)}
                            onTouchStart={() => setSwipeableDisable(false)}
                            sx={{ position: "relative" }}
                        >
                            <Box className="slaman_link visible-slaman_link" >
                                {/* <p>Salmon Pink</p> */}
                                {/* <ul className="color_list">
                                    <li
                                        className="active"
                                        style={{ backgroundColor: "#F7DACE" }}
                                    ></li>
                                    <li style={{ backgroundColor: "#BEF3E0" }}></li>
                                    <li
                                        style={{
                                            backgroundColor: "#fff",
                                            border: "1px solid #d2d2d2",
                                        }}
                                    ></li>
                                    <li style={{ backgroundColor: "#037A44" }}></li>
                                </ul> */}
                                <ul className="color_list">
                                    {_.uniqBy(product?.attributeList?.color, x => x?.label)?.length > 0 && _.uniqBy(product?.attributeList?.color, x => x?.label)?.map((color, index) => (
                                        <li
                                            className="active"
                                            key={color + index}
                                            onClick={() => {
                                                setSelectedData({
                                                    ...selectedData,
                                                    color,
                                                    size: 'default'
                                                })
                                                setQty(1)
                                                setLastSkuData(product?.filterList?.find(list => list?._id == color?.value))
                                            }}
                                            style={{ border: (selectedData?.color?.value == color?.value) ? "3px solid #000" : ".5px solid #000", backgroundColor: color?.label }}>
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                            {((lastSkuData?.images?.length > 0) && (productIndex == swipeableIndex)) ?
                                <div className={getOS() == 'iOS' ? "product_slider_height_container_ios" : 'product_slider_height_container'} onMouseEnter={() => setScrollActive(false)} onTouchStart={() => setScrollActive(false)}>
                                    {lastSkuData?.images?.map((list, index) => (
                                        <div key={list?.url + index + list?._id} className='product_slider_height'>
                                            {list?.type == "VIDEO" ?
                                                <video key={list?.url + index + list?._id} autoPlay playsInline preload="true" src={list?.url} loop muted className='product_slider_video_height'>
                                                    <source src={list?.url} type="video/mp4"></source>
                                                </video>
                                                // <video loop key={list?.url + index + list?._id} autoPlay className='product_slider_video_height' muted>
                                                //     <source src={list?.url} type="video/mp4" />
                                                // </video>
                                                :
                                                <picture className='product_slider_img_height' key={list?.url + index + list?._id}>
                                                    <source className='product_slider_img_height' srcSet={`${list?.url}`} media="(max-width: 500px)" />
                                                    <img
                                                        srcSet={`${list?.url}`}
                                                        className='product_slider_img_height'
                                                        alt="Full Logo"
                                                        src={list?.url} />
                                                </picture>
                                                // <img src={list?.url} key={list?.url + index + list?._id} className='product_slider_img_height' alt="slider" width='100%' />
                                            }
                                        </div>
                                    ))}
                                </div>
                                :
                                <div className={getOS() == 'iOS' ? "product_slider_height_container_ios" : 'product_slider_height_container'} onMouseEnter={() => setScrollActive(false)} onTouchStart={() => setScrollActive(false)}>
                                    {[...product?.images, ...product?.videos?.slice(3, 4)]?.map((list, index) => (
                                        <div key={list?.url + index + list?._id} className='product_slider_height'>
                                            {list?.type == "VIDEO" ?
                                                <video key={list?.url + index + list?._id} autoPlay playsInline preload="true" src={list?.url} loop muted className='product_slider_video_height'>
                                                    <source src={list?.url} type="video/mp4"></source>
                                                </video>
                                                // <video loop key={list?.url + index + list?._id} autoPlay className='product_slider_video_height' muted>
                                                //     <source src={list?.url} type="video/mp4" />
                                                // </video>
                                                :
                                                <picture className='product_slider_img_height' key={list?.url + index + list?._id}>
                                                    <source className='product_slider_img_height' srcSet={`${list?.url}`} media="(max-width: 500px)" />
                                                    <img
                                                        srcSet={`${list?.url}`}
                                                        className='product_slider_img_height'
                                                        alt="Full Logo"
                                                        src={list?.url} />
                                                </picture>
                                                // <img src={list?.url} key={list?.url + index + list?._id} className='product_slider_img_height' alt="slider" width='100%' />
                                            }
                                        </div>
                                    ))}
                                </div>
                            }
                            {/* {((lastSkuData?.images?.length > 0) && (productIndex == swipeableIndex)) ?
                                <div className='product_slider_height ' onMouseEnter={() => setScrollActive(false)} onTouchStart={() => setScrollActive(false)}>
                                    <Slider {...settings} className="product_slider">
                                        {lastSkuData?.images?.map((list, index) => (
                                            <div key={list?.url + index + list?._id} >
                                                {list?.type == "VIDEO" ?
                                                    <video key={list?.url + index + list?._id} autoPlay playsInline preload="true" src={list?.url} loop muted className='product_slider_video_height'>
                                                        <source src={list?.url} type="video/mp4"></source>
                                                    </video>
                                                    // <video loop autoPlay key={list?.url + index + list?._id} muted className='product_slider_video_height'>
                                                    //     <source src={list?.url} type="video/mp4" />
                                                    // </video>
                                                    :
                                                    <picture className='product_slider_img_height' key={list?.url + index + list?._id}>
                                                        <source className='product_slider_img_height' srcSet={`${list?.url}`} media="(max-width: 500px)" />
                                                        <img
                                                            srcSet={`${list?.url}`}
                                                            alt="Full Logo"
                                                            className='product_slider_img_height'
                                                            src={list?.url} />
                                                    </picture>
                                                    // <img src={list?.url} key={list?.url + index + list?._id} className='product_slider_img_height' alt="slider" width='100%' />
                                                }
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                :
                                <div className='product_slider_height ' onMouseEnter={() => setScrollActive(false)} onTouchStart={() => setScrollActive(false)}>
                                    <Slider {...settings} className="product_slider">
                                        {[...product?.images, ...product?.videos?.slice(3, 4)]?.map((list, index) => (
                                            <div key={list?.url + index + list?._id}>
                                                {list?.type == "VIDEO" ?
                                                    <video key={list?.url + index + list?._id} autoPlay playsInline preload="true" src={list?.url} loop muted className='product_slider_video_height'>
                                                        <source src={list?.url} type="video/mp4"></source>
                                                    </video>
                                                    // <video loop key={list?.url + index + list?._id} autoPlay className='product_slider_video_height' muted>
                                                    //     <source src={list?.url} type="video/mp4" />
                                                    // </video>
                                                    :
                                                    <picture className='product_slider_img_height' key={list?.url + index + list?._id}>
                                                        <source className='product_slider_img_height' srcSet={`${list?.url}`} media="(max-width: 500px)" />
                                                        <img
                                                            srcSet={`${list?.url}`}
                                                            className='product_slider_img_height'
                                                            alt="Full Logo"
                                                            src={list?.url} />
                                                    </picture>
                                                    // <img src={list?.url} key={list?.url + index + list?._id} className='product_slider_img_height' alt="slider" width='100%' />
                                                }
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            } */}
                        </Box>
                    </div>
                </div>
                <Box onMouseEnter={() => setScrollActive(true)} onTouchStart={() => setScrollActive(true)} sx={{
                    width: '100%',
                    border: '1px solid #2A3592'
                }}></Box>
                <div onMouseEnter={() => setScrollActive(true)} onTouchStart={() => setScrollActive(true)} style={{
                    width: '100%',
                    height: '25px',
                    opacity: 0
                }} id={`#scoll-top`}></div>
                {(width < 768) ?
                    <Box onMouseEnter={() => setScrollActive(true)} onTouchStart={() => setScrollActive(true)} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                        <a href={`#scoll-top`}>
                            <img src="/img/product_view.svg" alt="icon" />
                        </a>
                    </Box>
                    : null}
                {(width < 768) ?
                    <div onMouseEnter={() => setScrollActive(true)} onTouchStart={() => setScrollActive(true)}>
                        <ProductBottomData product={product} productIndex={productIndex} width={width} similarList={similarList} refetch={refetch} productList={productList} swipeableIndex={swipeableIndex} lastSkuData={lastSkuData} setLastSkuData={setLastSkuData} setSwipeableDisable={setSwipeableDisable} />
                    </div>
                    :
                    <div style={{ position: 'relative' }} onMouseEnter={() => setScrollActive(true)} onTouchStart={() => setScrollActive(true)}>
                        <div onMouseEnter={() => setSwipeableDisable(true)} onTouchStart={() => setSwipeableDisable(true)}>
                            <ProductBottomData product={product} productIndex={productIndex} width={width} similarList={similarList} refetch={refetch} lastSkuData={lastSkuData} setLastSkuData={setLastSkuData} />
                        </div>
                    </div>
                }
                {/* {(width < 768) ? <BottomSheet
                blocking={false}
                skipInitialTransition={true}
                snapPoints={({ minHeight, maxHeight }) => [changeSizeSheet ? (maxHeight - 56) : 200, maxHeight - 56]}
                expandOnContentDrag
                className='bottom-sheet-transition'
                scrollLocking
                onSpringCancel={async (event) => {
                    if (event.type === 'SNAP') {
                        setChangeSizeSheet(false)
                    }
                }}
                open={productBottomData[productIndex]}>
                <div onMouseEnter={() => setSwipeableDisable(true)} onTouchStart={() => setSwipeableDisable(true)}>
                    <ProductBottomData product={product} productIndex={productIndex} width={width} similarList={similarList} refetch={refetch} productList={productList} swipeableIndex={swipeableIndex} lastSkuData={lastSkuData} setLastSkuData={setLastSkuData} />
                </div>
            </BottomSheet>
                :
                <div style={{ position: 'relative' }}>
                    <div onMouseEnter={() => setSwipeableDisable(true)} onTouchStart={() => setSwipeableDisable(true)}>
                        <ProductBottomData product={product} productIndex={productIndex} width={width} similarList={similarList} refetch={refetch} lastSkuData={lastSkuData} setLastSkuData={setLastSkuData} />
                    </div>
                </div>
            } */}
            </Box>

            {((productIndex == 0) && showAnimation) ?
                <Box className="animation-swiper">
                    <img src="/swiper.gif" alt="animation" />
                </Box>
                : null}
        </div>
    )
}

export default ProductCard