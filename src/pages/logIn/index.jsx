import React, { useState } from 'react';
import { Box, MenuItem, MenuList, Typography } from '@mui/material';
import "./style.css";
import { AllApiData, useAddToCartMutation, useOtpMatchMutation, useSendOtpMutation } from '../../services/api';
import { STORAGE_KEY } from '../../constant/storage';
import { Link, useHistory } from 'react-router-dom';
import Storage from '../../services/storage';
import { useDispatch } from 'react-redux';
import { logout, setUserData } from '../../redux/reducers/user';
import ReactInputVerificationCode from "react-input-verification-code";
import { toast } from 'react-toastify';

const Login = () => {
    const [sendOtp] = useSendOtpMutation(undefined, {})
    const history = useHistory();
    const dispatch = useDispatch();
    const [otpMatch, { isLoading, isError, error }] = useOtpMatchMutation(undefined, {})
    const [addToCart] = useAddToCartMutation()
    const [otpverify, setOtpverify] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [loginData, setLoginData] = React.useState({
        phone: '',
        otp: ''
    });


    const handleSendOtp = async () => {
        if (loginData?.phone == "") {
            setErrorMessage("Enter phone number")
        } else {
            await sendOtp({ phone: loginData?.phone ?? "" }).unwrap().then((data) => {
                setOtpverify(true)
            }).catch((error) => setErrorMessage(error?.data?.message))
        }
    };

    const handleLogin = async () => {
        await otpMatch({ ...loginData, otp: Number(loginData.otp) }).unwrap().then(async (data) => {
            // handleAccountClose()
            Storage.set(STORAGE_KEY.token, data?.data?.auth_token)
            dispatch(setUserData(data?.data));
            Storage.set("userData", JSON.stringify(data?.data))
            const cartData = JSON.parse(Storage.get("cartData")) ?? []
            if (cartData?.length > 0) {
                await addToCart({
                    cart: cartData?.map(list => {
                        const { sku, product, qty, amount, ...payload } = list;
                        return {
                            sku: sku?._id,
                            product,
                            qty,
                            amount
                        }
                    }) ?? []
                }).unwrap().then((data) => {
                    Storage.remove("cartData")
                }).catch((error) => toast.error(error?.data?.message))
            }
            history.push("/userProfile")
            window.location.reload(true)
        }).catch((error) => toast.error(error?.data?.message))
    };
    return (
        <Box className="login_page">
            {Storage.get(STORAGE_KEY.token) ?
                <>
                    <MenuList sx={{
                        width: '180px',
                        '@media (max-width: 768px)': {
                            textAlign: "center",
                            width: '100%',
                        }
                    }}>
                        <Link to="/userProfile">
                            <MenuItem
                                sx={{
                                    fontSize: "18px",
                                    color: "#000",
                                    fontWeight: "600",
                                    background: "#fff",
                                    fontFamily: 'Newhero',
                                    borderBottom: "1px solid #c5c5c5",
                                }}>
                                My Account
                            </MenuItem>
                        </Link>
                        <MenuItem onClick={() => {
                            // handleAccountClose()
                            dispatch(logout());
                            dispatch(AllApiData.util.invalidateTags(['Cart']));
                            Storage.remove(STORAGE_KEY.token)
                            history.push("/")
                        }} sx={{
                            fontSize: "18px",
                            color: "#000",
                            fontWeight: "600",
                            backgroundColor: "#fff !important",
                            fontFamily: 'Newhero',
                        }}>
                            Logout
                        </MenuItem>
                    </MenuList>

                </>
                :
                <>
                    <Box className="body_width_mobile">
                        {otpverify ? null : (
                            <div className="login_wrap">
                                <div className="login_title_wrap">
                                    <h3 style={{ fontFamily: "Newspirit" }}>Login to your Account</h3>
                                    <Typography
                                        sx={{
                                            fontFamily: "Newhero",
                                            fontWeight: '400',
                                            fontSize: '14px',
                                            lineHeight: '24px',
                                            textAlign: 'center',
                                            letterSpacing: '-0.02em',
                                            color: '#70758A'
                                        }}
                                    >See your credits, orders and saved address
                                    </Typography>
                                </div>
                                <div className="login_input_wrap">
                                    <div className="login_input_inner">
                                        <input type="text" value={loginData?.phone} onChange={(e) => {
                                            const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                                            setErrorMessage(null)
                                            if (onlyNums.length < 10) {
                                                setLoginData({ ...loginData, phone: onlyNums });
                                            } else if (onlyNums.length === 10) {
                                                setLoginData({ ...loginData, phone: onlyNums });
                                            }
                                        }} placeholder="Phone Number" />
                                        <span>+91</span>
                                    </div>
                                    <p style={{
                                        color: 'red',
                                        paddingTop: '4px',
                                        height: '28px'
                                    }}>{!!errorMessage ? errorMessage : null}</p>
                                    <button type="button" onClick={handleSendOtp}>
                                        <span>Send OTP</span>
                                        <svg
                                            width="9"
                                            height="10"
                                            viewBox="0 0 9 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_2143_4306)">
                                                <path
                                                    d="M3.75977 0.955078L7.79977 4.99508L3.75977 9.04508"
                                                    stroke={"#fff"}
                                                    strokeWidth="1.7"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M0.410156 5.00488H7.80016"
                                                    stroke={"#fff"}
                                                    strokeWidth="1.7"
                                                    strokeMiterlimit="10"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2143_4306">
                                                    <rect
                                                        width="8.59"
                                                        height="9.29"
                                                        fill={"#fff"}
                                                        transform="translate(0.410156 0.35498)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                                <Typography
                                    sx={{
                                        fontFamily: "Newhero",
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        textAlign: 'center',
                                        letterSpacing: '-0.02em',
                                        color: '#70758A'
                                    }}>
                                    If you don’t have an account, we’ll<br /> create one for you
                                </Typography>
                            </div>
                        )}

                        {otpverify ? (
                            <div className="login_wrap">
                                <div className="login_title_wrap">
                                    <h3>One-time Password</h3>
                                    <h4>
                                        Enter the OTP we sent to <span>+91 {loginData?.phone}</span>
                                    </h4>
                                </div>
                                <div className="login_input_wrap">
                                    <div className="login_input_inner_otp">
                                        <ReactInputVerificationCode value={loginData?.otp} onChange={(e) => {
                                            setLoginData({ ...loginData, otp: e })
                                        }} />
                                    </div>
                                    <button type="button" onClick={handleLogin}>
                                        <span>Login</span>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_2143_4277)">
                                                <path
                                                    d="M11.9996 23.1501C18.1576 23.1501 23.1496 18.1581 23.1496 12.0001C23.1496 5.84212 18.1576 0.850098 11.9996 0.850098C5.84163 0.850098 0.849609 5.84212 0.849609 12.0001C0.849609 18.1581 5.84163 23.1501 11.9996 23.1501Z"
                                                    stroke="#fff"
                                                    strokeWidth="1.7"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M12.0003 13.86C14.1708 13.86 15.9303 12.1005 15.9303 9.93C15.9303 7.75952 14.1708 6 12.0003 6C9.82983 6 8.07031 7.75952 8.07031 9.93C8.07031 12.1005 9.82983 13.86 12.0003 13.86Z"
                                                    stroke="#fff"
                                                    strokeWidth="1.7"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M17.7498 21.5401C17.9098 21.0101 17.9898 20.4401 17.9898 19.8601C17.9898 16.5501 15.3098 13.8701 11.9998 13.8701C8.68977 13.8701 6.00977 16.5501 6.00977 19.8601C6.00977 20.4401 6.09977 21.0101 6.24977 21.5401"
                                                    stroke="#fff"
                                                    strokeWidth="1.7"
                                                    strokeMiterlimit="10"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2143_4277">
                                                    <rect width="24" height="24" fill="#fff" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                                <div className="resend_otp_wrap">
                                    <button
                                        className="change_num_btn"
                                        onClick={() => setOtpverify(false)}
                                    >
                                        <svg
                                            width="9"
                                            height="10"
                                            viewBox="0 0 9 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_2143_4283)">
                                                <path
                                                    d="M5.24023 9.04492L1.20023 5.00492L5.24023 0.954923"
                                                    stroke="#2A3592"
                                                    strokeWidth="1.7"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M8.58984 4.99512L1.19984 4.99512"
                                                    stroke="#2A3592"
                                                    strokeWidth="1.7"
                                                    strokeMiterlimit="10"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2143_4283">
                                                    <rect
                                                        width="8.59"
                                                        height="9.29"
                                                        fill="#2A3592"
                                                        transform="translate(8.58984 9.64502) rotate(-180)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>Change number</span>
                                    </button>
                                    <button className="resend_btn">
                                        <span>Resend OTP</span>
                                        <svg
                                            width="9"
                                            height="10"
                                            viewBox="0 0 9 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_2143_4289)">
                                                <path
                                                    d="M8.15039 0.514893V4.51489H4.15039"
                                                    stroke="#2A3592"
                                                    strokeWidth="1.7"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M8.15016 4.51501L5.02016 1.38501H4.54016C2.53016 1.38501 0.910156 3.00501 0.910156 5.00501C0.910156 7.00501 2.53016 8.63501 4.54016 8.63501C5.54016 8.63501 6.45016 8.22501 7.10016 7.57501"
                                                    stroke="#2A3592"
                                                    strokeWidth="1.7"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2143_4289">
                                                    <rect
                                                        width="8.94"
                                                        height="8.97"
                                                        fill="#2A3592"
                                                        transform="translate(0.0605469 0.514893)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ) : null}
                    </Box>
                </>
            }
        </Box>
    )
}

export default Login
