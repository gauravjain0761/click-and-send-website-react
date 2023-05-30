import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import cart_1 from '../../assets/img/cart/cart_1.png';
import cart_2 from '../../assets/img/cart/cart_2.png';
import cart_3 from '../../assets/img/cart/cart_3.png';
import saved_1 from '../../assets/img/saved/saved_1.png';
import saved_2 from '../../assets/img/saved/saved_2.png';
import saved_3 from '../../assets/img/saved/saved_3.png';
import saved_4 from '../../assets/img/saved/saved_4.png';
import saved_5 from '../../assets/img/saved/saved_5.png';
import saved_6 from '../../assets/img/saved/saved_6.png';
import saved_7 from '../../assets/img/saved/saved_7.png';
import { toast } from 'react-toastify';
import saved_8 from '../../assets/img/saved/saved_8.png';
import { useEditCartMutation, useGetAllCartQuery, useGetAllWishlistQuery, useRemoveCartItemMutation } from '../../services/api';
import { getNumberWithComma } from '../../utils/utils';
import Storage from '../../services/storage';
import { setCartCount } from '../../redux/reducers/cart';
import { useDispatch } from 'react-redux';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box } from '@mui/material';

const NewCart = ({ data, activeHeader, handleCartClose, handleCheckout }) => {
    const [key, setKey] = useState('cart');
    const [cartList, setCartList] = useState([]);
    const [removeCartItem] = useRemoveCartItemMutation()
    const { data: wishlistData } = useGetAllWishlistQuery()
    const [editCart] = useEditCartMutation()
    const dispatch = useDispatch()
    const history = useHistory();
    const [cartPrice, setCartPrice] = useState({
        total: 0,
        price: 0
    });

    useEffect(() => {
        const cartData = JSON.parse(Storage.get("cartData")) ?? []
        if (Storage.isUserAuthenticated()) {
            setCartList(data?.data ?? [])
        } else {
            setCartList(cartData ?? [])
        }
    }, [data])

    const handleDecrement = async (index) => {
        let temp = [...cartList]
        if (temp[index].qty > 1) {
            if (Storage.isUserAuthenticated()) {
                await editCart({ id: temp[index]?._id, qty: temp[index].qty - 1 }).unwrap().then((data) => {
                }).catch((error) => toast.error(error?.data?.message))
            } else {
                temp[index] = { ...temp[index], qty: temp[index].qty - 1 }
                Storage.set('cartData', JSON.stringify(temp))
                dispatch(setCartCount(temp?.length))
                setCartList(temp)
            }
        }
    }

    const handleIncrement = async (index) => {
        let temp = [...cartList]
        if (Storage.isUserAuthenticated()) {
            await editCart({ id: temp[index]?._id, qty: temp[index].qty + 1 }).unwrap().then((data) => {
            }).catch((error) => toast.error(error?.data?.message))
        } else {
            temp[index] = { ...temp[index], qty: temp[index].qty + 1 }
            Storage.set('cartData', JSON.stringify(temp))
            dispatch(setCartCount(temp?.length))
            setCartList(temp)
        }
    }

    const handleRemove = async (index, id) => {
        if (Storage.isUserAuthenticated()) {
            await removeCartItem(id).unwrap().then((data) => {
            }).catch((error) => toast.error(error?.data?.message))
        } else {
            let temp = [...cartList]
            temp = temp.filter((_, i) => i !== index)
            Storage.set('cartData', JSON.stringify(temp))
            dispatch(setCartCount(temp?.length))
            setCartList(temp)
        }
    }

    useEffect(() => {
        let temp = [...cartList]
        let countPrice = 0
        if (temp.length > 0) {
            countPrice = temp.reduce((total, list) => {
                return total + (Number(list?.qty) * Number(list?.amount))
            }, 0)
            setCartPrice({
                ...cartPrice,
                price: countPrice
            })
        }
    }, [cartList])

    return (
        <>
            <Box sx={{
                width: '100%',
                height: '56px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Box sx={{
                    flex: 1,
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: key === "cart" ? '#2a3592' : '#000',
                    borderBottom: key === "cart" ? '4px solid #2a3592' : '4px solid #eee'
                }} onClick={() => setKey('cart')}>
                    <Box sx={{
                        padding: '8px 16px'
                    }}>
                        Cart
                    </Box>
                </Box>
                <Box sx={{
                    flex: 1,
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: key === "saved" ? '#2a3592' : '#000',
                    borderBottom: key === "saved" ? '4px solid #2a3592' : '4px solid #eee'
                }} onClick={() => setKey('saved')}>
                    <Box sx={{
                        padding: '8px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        Saved
                        {key === "saved" ? <svg
                            className='star_svg'
                            width="14"
                            height="14"
                            viewBox="0 0 20 18"
                            fill="#2A3592"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z"
                                stroke="#2A3592"
                                strokeWidth="1.7"
                                strokeMiterlimit="10"
                            />
                        </svg>
                            :
                            <svg
                                className='star_svg'
                                width="14"
                                height="14"
                                viewBox="0 0 20 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z"
                                    stroke="#000"
                                    strokeWidth="1.7"
                                    strokeMiterlimit="10"
                                />
                            </svg>
                        }
                    </Box>
                </Box>
            </Box>
            {key == 'cart' ? <Box className='cart_wrapper' sx={{
                height: '100%',
                overflow: 'hidden',
                overflowY: 'auto',
                position: 'relative'
            }}>
                <Box sx={{
                    overflow: 'hidden',
                    overflowY: 'auto',
                    height: 'calc(100% - 112px)'
                }}>
                    {cartList?.length > 0 ? cartList?.map((cart, index) => {
                        return (
                            <Box className='cart_information' sx={{
                                padding: '12px !important'
                            }}>
                                <div className="card_img">
                                    <Link to="/product" onClick={handleCartClose} >
                                        <img src={cart?.image} alt="cart" height='180px' />
                                    </Link>
                                </div>
                                <div className="cart_product_info">
                                    <h3>{cart?.sku?.product_name}</h3>
                                    <p>{`${Object.values(cart?.sku?.varients ?? {})?.join(" • ")}`}</p>
                                    <div className='quantiy_wrapper'>
                                        <p>Qty</p>
                                        <div className='quantiy_inner'>
                                            <button type='button' className='common_btn' onClick={() => handleDecrement(index)}>
                                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_160_1440)">
                                                        <path d="M8.14 5H0" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_160_1440">
                                                            <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0 0.929932)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                            <input type="text" placeholder='1' value={cart?.qty} />
                                            <button type='button' className='common_btn' onClick={() => handleIncrement(index)}>
                                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_160_1444)">
                                                        <path d="M4.20966 0.929932V9.06993" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        <path d="M8.27965 5H0.139648" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_160_1444">
                                                            <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.139648 0.929932)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='remove_cart_block'>
                                        <p>{getNumberWithComma(cart?.amount)} </p>
                                        <button type='button' className='remove_btn' onClick={() => handleRemove(index, cart?._id)}>
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_160_1450)">
                                                    <path d="M3.35999 1.0249L7.39999 5.0649L3.35999 9.1149" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    <path d="M0.0100098 5.07471H7.40001" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    <path d="M8.15002 0.514893V9.51489" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_160_1450">
                                                        <rect width="8.99" height="9.29" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.0100098 0.424805)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </Box>
                        )
                    })
                        :
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%'
                        }}>
                            <h3>Cart Empty</h3>
                        </div>
                    }
                </Box>
                {cartList?.length > 0 ?
                    <button type="button" className="checkout_btn" onClick={handleCheckout}>
                        <span>Checkout</span>
                        <span>
                            {/* <s>{getNumberWithComma(cartPrice?.total)}</s> */}
                            {getNumberWithComma(cartPrice?.price)}</span>
                    </button>
                    : null}
            </Box>
                : null}

            {key == 'saved' ? <Box className='saved_wrapper' sx={{
                overflow: 'hidden',
                overflowY: 'auto',
                height: 'calc(100% - 56px)'
            }}>
                {wishlistData?.data?.length > 0 ?
                    <div className='row'>
                        {wishlistData?.data?.map((list) => (
                            <div className={'col-6'}>
                                <div className='saved_img_information'>
                                    <div className="save_item_img">
                                        <Link to={`/product/${list?.product?._id}`} onClick={handleCartClose}>
                                            <img src={list?.product?.image} style={{
                                                width: '195px',
                                                height: '230px'
                                            }} alt="saved img" />
                                        </Link>
                                    </div>
                                    <div className='cart_price_wrapper'>
                                        <div className='d-flex align-items-center price_of_cart_wrap'>
                                            <span>{getNumberWithComma(list?.product?.sale_price)}</span>
                                            {/* <s>₹2,600</s> */}
                                        </div>
                                        {/* <button className='plus_cart' onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            history.push(`/product/${list?.product?._id}`)
                                            handleCartClose();
                                        }}>
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_422_3736)">
                                                    <path d="M4.92999 0.930054V9.07005" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    <path d="M8.99999 5H0.859985" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_422_3736">
                                                        <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Cart</span>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%'
                    }}>
                        <h3>Empty</h3>
                    </div>
                }
            </Box>
                : null}
        </>
    )
}

export default NewCart