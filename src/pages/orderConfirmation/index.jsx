import React from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import "./orderConfirmation.css";
import FooterStrip from "../../components/footer/footerStrip";
import ShippingStatus from '../../components/OrderConfirmation/shippingStatus';
import { Box } from '@mui/material';
import { BsCheckLg } from 'react-icons/bs';
import { useGetOrderByIdQuery, useGetTrackOrderMutation, useOrderReturnMutation } from '../../services/api';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import { getNumberWithComma } from '../../utils/utils';
import { GoPrimitiveDot } from 'react-icons/go';
import { useState } from 'react';

const OrderConfirmation = () => {
  const { id } = useParams();
  const [getTrackOrder] = useGetTrackOrderMutation()
  const [orderReturn] = useOrderReturnMutation()
  const { data: orderData, error, isLoading } = useGetOrderByIdQuery(id, { skip: !id, refetchOnMountOrArgChange: true })
  const [show, setShow] = useState(false);
  const [returnData, setReturnData] = useState({
    reason: "",
    discription: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (orderData?.data?.is_return_availalbe) {
      setShow(true);
    }
  }

  useEffect(async () => {
    if (id) {
      await getTrackOrder({ id }).unwrap().then((responce) => {
        // setSingleData(responce?.data ?? {})
      }).catch((error) => toast.error(`Something went wrong!`))
    }
  }, [id])

  const handleReturn = async () => {
    if (orderData?.data?.is_return_availalbe) {
      if (returnData?.reason == "") {
        toast.error('Fill reason!')
      } else if (returnData?.discription == "") {
        toast.error('Fill description!')
      } else {
        await orderReturn({ id, ...returnData }).unwrap().then((responce) => {
          handleClose()
          window?.location?.reload(true)
        }).catch((error) => toast.error(error?.data?.message))
      }
    } else {
      toast.error(`Eligible till ${moment(orderData?.data?.last_return_date).format("Do MMMM")}`)
    }
  }

  return (
    <>
      {orderData?.data?._id ?
        <div id='ordercConfirmation'>
          <Container>
            {(orderData?.data?.order_status == "Pending" || orderData?.data?.order_status == "Processing") &&
              <>
                <div className='ordercConfirmation_top'>
                  <h3>Order Confirmed</h3>
                  <p>We’ll send you tracking details when your <br />
                    package ships. Estimated delivery by <b>20th June.</b></p>
                  <Link to="/userProfile">
                    <div className='ordercConfirmation_top_help'>
                      <p>Get help on whatsapp </p><span>
                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span>
                    </div>
                  </Link>
                </div>

                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <img src="../img/slider.png" alt='slider' width="600px" />
                </div>
              </>
            }
            {orderData?.data?.order_status == "Confirmed" &&
              <div>
                <div className="ordercConfirmation_top">
                  <h3>Preparing to Ship</h3>
                  <p>
                    We’re packing your order right now. It will ship<br /> later today. We’re excited!
                  </p>
                  <Link to="/userProfile">
                    <div className="ordercConfirmation_top_help">
                      <p>Get help on whatsapp </p>
                      <span>
                        <svg
                          width="9"
                          height="10"
                          viewBox="0 0 9 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2_1592)">
                            <path
                              d="M0.600098 1.43018H7.9901V8.82018"
                              stroke="#2A3592"
                              strokeWidth="1.7"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M0.600098 8.82018L7.9901 1.43018"
                              stroke="#2A3592"
                              strokeWidth="1.7"
                              strokeMiterlimit="10"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_2_1592">
                              <rect
                                width="8.84"
                                height="8.84"
                                fill="white"
                                transform="translate(0 0.580078)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <img src="../img/slider1.png" alt="slider1" width="540px" />
                </div>
              </div>
            }

            {orderData?.data?.order_status == "Shipped" &&
              <div>
                <div className="ordercConfirmation_top">
                  <h3>Shipped!</h3>
                  <p>
                    We’ve sent you the tracking details over email<br /> and text. You can also track it right here—
                  </p>
                  <Link to="/userProfile">
                    <div className="ordercConfirmation_top_help">
                      <p>Get help on whatsapp </p>
                      <span>
                        <svg
                          width="9"
                          height="10"
                          viewBox="0 0 9 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2_1592)">
                            <path
                              d="M0.600098 1.43018H7.9901V8.82018"
                              stroke="#2A3592"
                              strokeWidth="1.7"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M0.600098 8.82018L7.9901 1.43018"
                              stroke="#2A3592"
                              strokeWidth="1.7"
                              strokeMiterlimit="10"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_2_1592">
                              <rect
                                width="8.84"
                                height="8.84"
                                fill="white"
                                transform="translate(0 0.580078)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <img src="../img/slider2.png" alt="slider2" width="540px" />
                </div>

                {orderData?.data?.delivery_partner == "OTHERS" &&
                  <div className="ordercConfirmation_top">
                    <div className="shiping_status_box" style={{ width: "60%" }}>
                      <div>
                        <h6>{orderData?.data?.delivery_name}</h6>
                        <span><GoPrimitiveDot style={{ color: "#83E46B" }} />Now in Amravati, MH</span>
                      </div>
                      <div>
                        <h6>{orderData?.data?.delivery_id}</h6>
                        <Link to="/userProfile">
                          <div className="ordercConfirmation_top_help">
                            <p>Track </p>
                            <span>
                              <svg
                                width="9"
                                height="10"
                                viewBox="0 0 9 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_2_1592)">
                                  <path
                                    d="M0.600098 1.43018H7.9901V8.82018"
                                    stroke="#2A3592"
                                    strokeWidth="1.7"
                                    strokeMiterlimit="10"
                                  ></path>
                                  <path
                                    d="M0.600098 8.82018L7.9901 1.43018"
                                    stroke="#2A3592"
                                    strokeWidth="1.7"
                                    strokeMiterlimit="10"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_2_1592">
                                    <rect
                                      width="8.84"
                                      height="8.84"
                                      fill="white"
                                      transform="translate(0 0.580078)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                }
              </div>
            }
            {orderData?.data?.order_status == "Delivered" &&
              <>
                <div>
                  <div className="ordercConfirmation_top">
                    <h3>Delivered</h3>
                    <p>
                      We’ve delivered your order. Hope you love it! <br />
                      <a href="#" className="shippingStatusLink">Write a Review</a>
                    </p>
                    <Link to="/userProfile">
                      <div className="ordercConfirmation_top_help">
                        <p>Get help on whatsapp </p>
                        <span>
                          <svg
                            width="9"
                            height="10"
                            viewBox="0 0 9 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_2_1592)">
                              <path
                                d="M0.600098 1.43018H7.9901V8.82018"
                                stroke="#2A3592"
                                strokeWidth="1.7"
                                strokeMiterlimit="10"
                              ></path>
                              <path
                                d="M0.600098 8.82018L7.9901 1.43018"
                                stroke="#2A3592"
                                strokeWidth="1.7"
                                strokeMiterlimit="10"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_2_1592">
                                <rect
                                  width="8.84"
                                  height="8.84"
                                  fill="white"
                                  transform="translate(0 0.580078)"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <img src="../img/slider4.png" alt="slider4" width="540px" />
                  </div>
                </div>

                <div>
                  <div className="ordercConfirmation_top" style={{ marginBottom: "2rem" }}>
                    <div className="return_status_box" style={{ width: "60%" }}>
                      <div className="return_status_box_list">
                        <div>
                          <h6>{orderData?.data?.delivery_name}</h6>
                          <span><BsCheckLg /> Delivered to Pune, MH</span>
                        </div>
                        <div>
                          <h6>{orderData?.data?.delivery_id}</h6>
                        </div>
                      </div>
                      <div className={`shiping_status_box_footer ${orderData?.data?.is_return_availalbe ? "" : "disable-shiping_status_box_footer"}`} onClick={handleShow}>
                        <h6>Return or Exchange</h6>
                        <span>Eligible till {moment(orderData?.data?.last_return_date).format("Do MMMM")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }

            {orderData?.data?.order_status == "Return Scheduled" &&
              <div>
                <div className="ordercConfirmation_top">
                  <h3 style={{ marginTop: "2rem" }}>Return Scheduled</h3>
                  <p>
                    Keep your tags intact. Our pickup partner will<br /> arrive on 19th June between 7am & 7pm.
                  </p>
                  <Link to="/userProfile">
                    <div className="ordercConfirmation_top_help">
                      <p>Get help on whatsapp </p>
                      <span>
                        <svg
                          width="9"
                          height="10"
                          viewBox="0 0 9 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2_1592)">
                            <path
                              d="M0.600098 1.43018H7.9901V8.82018"
                              stroke="#2A3592"
                              strokeWidth="1.7"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M0.600098 8.82018L7.9901 1.43018"
                              stroke="#2A3592"
                              strokeWidth="1.7"
                              strokeMiterlimit="10"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_2_1592">
                              <rect
                                width="8.84"
                                height="8.84"
                                fill="white"
                                transform="translate(0 0.580078)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <img src="../img/slider5.png" alt="slider5" width="540px" />
                </div>
              </div>
            }

            {orderData?.data?.order_status == "Return" &&
              <div>
                <div className="ordercConfirmation_top">
                  <h3>Order Returned</h3>
                  <p>
                    We have issued a refund. You should see it on your<br /> <strong>Card ending *1234</strong> by 27th June.
                  </p>
                  <Link to="/userProfile">
                    <div className="ordercConfirmation_top_help">
                      <p>Get help on whatsapp </p>
                      <span>
                        <svg
                          width="9"
                          height="10"
                          viewBox="0 0 9 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2_1592)">
                            <path
                              d="M0.600098 1.43018H7.9901V8.82018"
                              stroke="#2A3592"
                              strokeWidth="1.7"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M0.600098 8.82018L7.9901 1.43018"
                              stroke="#2A3592"
                              strokeWidth="1.7"
                              strokeMiterlimit="10"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_2_1592">
                              <rect
                                width="8.84"
                                height="8.84"
                                fill="white"
                                transform="translate(0 0.580078)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <img src="../img/slider7.png" alt="slider7" width="540px" />
                </div>
              </div>
            }
            <div className="orderConfirmation_box" style={{ paddingBottom: "1rem" }}>
              <div className="orderConfirmation_box_heading">
                <div>
                  <h6>
                    <img src="../img/reviewyourorder.png" alt="reviewyourorder" width="22" style={{ marginRight: "8px" }} />
                    order #{orderData?.data?.order_num}
                  </h6>
                </div>
                <span>{moment(orderData?.data?.createdAt).format("Do MMM YYYY")}</span>
              </div>
              {orderData?.data?.items?.map(item => (
                <div className="orderConfirmation_box_list">
                  <div>
                    <h3 className='text-ellipsis-width'>{item?.product_name}</h3>
                    <span className='text-ellipsis-width' style={{ display: 'block' }}>{`${Object.values(item?.varients ?? {})?.join(" • ")}`}</span>
                  </div>
                  <div>
                    <h3>{getNumberWithComma(Number(item?.price) * Number(item?.qty))}</h3>
                  </div>
                </div>
              ))}
              <div className="orderConfirmation_box_list">
                <div>
                  <h3 className='text-ellipsis-width'>Regular Shipping</h3>
                  {/* <span className='text-ellipsis-width' style={{ display: 'block' }}>Delivers 17—20th June</span> */}
                </div>
                <div>
                  {/* <h3>{orderData?.data?.payment_mode == "COD" ? getNumberWithComma(((Number(orderData?.data?.total_amount)) - (Number(orderData?.data?.items?.reduce((t, x) => x?.amount + t, 0)) + Number(orderData?.data?.gst_amount)))) : "Free"} </h3> */}
                  <h3>{orderData?.data?.payment_mode == "COD" ? getNumberWithComma((((((orderData?.data?.items?.reduce((t, x) => t + Number(x?.amount), 0) * 2) / 100) ?? 0) >= 150) ? (((orderData?.data?.items?.reduce((t, x) => t + Number(x?.amount), 0) * 2) / 100) ?? 0) : 150)) : "Free"} </h3>
                </div>
              </div>
              {/* <div className="orderConfirmation_box_list">
                <div>
                  <h3 className='text-ellipsis-width'>GST</h3>
                </div>
                <div>
                  <h3>{getNumberWithComma(Number(orderData?.data?.gst_amount ?? 0))} </h3>
                </div>
              </div> */}
              <div className="orderConfirmation_box_list">
                <div>
                  <h3 className='text-ellipsis-width'>Coupon: {orderData?.data?.discount_coupon?.code}</h3>
                  {/* <span className='text-ellipsis-width' style={{ display: 'block' }}>Delivers 17—20th June</span> */}
                </div>
                <div>
                  <h3>{getNumberWithComma(Number(orderData?.data?.discount_amount))} </h3>
                </div>
              </div>

              <div className="orderConfirmation_box_list">
                <div>
                  <h3
                    style={{
                      color: "#2A3592",
                    }}
                  >
                    Total Paid</h3>
                  {/* <span>with Card ending *1234</span> */}
                </div>
                <div>
                  <h3
                    style={{
                      color: "#2A3592",
                    }}
                  >
                    {/* <del
                  style={{
                    fontWeight: "300",
                    color: "#2A3592",
                    marginRight: "8px",
                  }}
                >
                  ₹18,700
                </del> */}
                    {getNumberWithComma(Number(orderData?.data?.total_amount))}
                  </h3>
                </div>
              </div>
            </div>

            <div className="orderConfirmation_box_second" style={{ paddingBottom: "1rem" }}>
              <div className="orderConfirmation_box_heading" style={{ padding: "0.6rem 2rem" }}>
                <div>
                  <h6>
                    <img src="../img/shippingto.png" alt="shippingto" width="22" style={{ marginRight: "8px" }} />
                    Shipping to
                  </h6>
                </div>
              </div>

              <div className="orderConfirmation_box_data orderConfirmation_box_data_desktopView">
                <div>
                  <h3>{orderData?.data?.shipping_address?.fname} {orderData?.data?.shipping_address?.lname}</h3>
                  <p>{orderData?.data?.shipping_address?.address_1},{orderData?.data?.shipping_address?.address_2} <br />{orderData?.data?.shipping_address?.state} {orderData?.data?.shipping_address?.city},{orderData?.data?.shipping_address?.pincode}</p>
                  <p><i>{orderData?.data?.shipping_address?.phone}</i></p>
                  {/* <span>Delivers 17—20th June</span> */}
                </div>
                <div>
                  <Link to="/userProfile">
                    <h4>
                      <img src="../img/allorders.png" alt="allorders" width="22" style={{ marginRight: "8px" }} />
                      All Orders
                    </h4>
                  </Link>
                  {/* <Link to="/userProfile">
                <h4>
                  <img src="../img/reportaproblem.png" alt="reportaproblem" width="22" style={{ marginRight: "8px" }} />
                  Report a Problem
                </h4>
              </Link>
              <Link to="/userProfile">
                <h4>
                  <img src="../img/returnpolicy.png" alt="returnpolicy" width="22" style={{ marginRight: "8px" }} />
                  Return Policy
                </h4>
              </Link> */}
                </div>
              </div>

              {/* For mobile View start */}
              <div className="orderConfirmation_box_data orderConfirmation_box_data_mobileView">
                <Row>
                  <Col xs={12}>
                    <div>
                      <h3>{orderData?.data?.shipping_address?.fname} {orderData?.data?.shipping_address?.lname}</h3>
                      <p>{orderData?.data?.shipping_address?.address_1},{orderData?.data?.shipping_address?.address_2} <br />{orderData?.data?.shipping_address?.state} {orderData?.data?.shipping_address?.city},{orderData?.data?.shipping_address?.pincode}</p>
                      <p><i>{orderData?.data?.shipping_address?.phone}</i></p>
                      {/* <span>Delivers 17—20th June</span> */}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div style={{ marginTop: "2rem" }}>
                      <Link to="/userProfile">
                        <h4>
                          <img src="../img/allorders.png" alt="allorders" width="22" style={{ marginRight: "8px" }} />
                          All Orders
                        </h4>
                      </Link>
                      {/* <Link to="/userProfile">
                    <h4>
                      <img src="../img/reportaproblem.png" alt="reportaproblem" width="22" style={{ marginRight: "8px" }} />
                      Report a Problem
                    </h4>
                  </Link>
                  <Link to="/userProfile">
                    <h4>
                      <img src="../img/returnpolicy.png" alt="returnpolicy" width="22" style={{ marginRight: "8px" }} />
                      Return Policy
                    </h4>
                  </Link> */}
                    </div>
                  </Col>
                </Row>
              </div>
              {/* For mobile View end */}

            </div>
          </Container>
          {/* <ShippingStatus /> */}
          <Box className="footer-conteiner">
            <FooterStrip />
          </Box>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Return</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Reason for return<sup style={{ color: 'red', top: '-2px' }}>*</sup></Form.Label>
                  <div key={`inline-radio`} className="mb-3" style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Form.Check
                      inline
                      label="Quality of the product not as expected"
                      name="reason"
                      type="radio"
                      style={{
                        padding: '10px 0px'
                      }}
                      value="Quality of the product not as expected"
                      onChange={(e) => {
                        setReturnData({
                          ...returnData,
                          reason: e.target.value
                        })
                      }}
                      checked={returnData?.reason === "Quality of the product not as expected"}
                      id={`inline-radio-1`}
                    />
                    <Form.Check
                      inline
                      label="Received a broken/damaged item"
                      name="reason"
                      style={{
                        padding: '10px 0px'
                      }}
                      type="radio"
                      id={`inline-radio-2`}
                      value="Received a broken/damaged item"
                      onChange={(e) => {
                        setReturnData({
                          ...returnData,
                          reason: e.target.value
                        })
                      }}
                      checked={returnData?.reason === "Received a broken/damaged item"}
                    />
                    <Form.Check
                      inline
                      label="Product is missing in the package"
                      name="reason"
                      style={{
                        padding: '10px 0px'
                      }}
                      type="radio"
                      id={`inline-radio-3`}
                      value="Product is missing in the package"
                      onChange={(e) => {
                        setReturnData({
                          ...returnData,
                          reason: e.target.value
                        })
                      }}
                      checked={returnData?.reason === "Product is missing in the package"}
                    />
                    <Form.Check
                      inline
                      label="Don't want the product anymore Don't like the size/fit of the product"
                      name="reason"
                      type="radio"
                      style={{
                        padding: '10px 0px'
                      }}
                      id={`inline-radio-4`}
                      value="Don't want the product anymore Don't like the size/fit of the product"
                      onChange={(e) => {
                        setReturnData({
                          ...returnData,
                          reason: e.target.value
                        })
                      }}
                      checked={returnData?.reason === "Don't want the product anymore Don't like the size/fit of the product"}
                    />
                    <Form.Check
                      inline
                      label="Received wrong item"
                      name="reason"
                      style={{
                        padding: '10px 0px'
                      }}
                      type="radio"
                      id={`inline-radio-5`}
                      value="Received wrong item"
                      onChange={(e) => {
                        setReturnData({
                          ...returnData,
                          reason: e.target.value
                        })
                      }}
                      checked={returnData?.reason === "Received wrong item"}
                    />
                  </div>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description<sup style={{ color: 'red', top: '-2px' }}>*</sup></Form.Label>
                  <Form.Control as="textarea" rows={3} value={returnData?.discription}
                    onChange={(e) => {
                      setReturnData({
                        ...returnData,
                        discription: e.target.value
                      })
                    }} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="button" className='bt-button' onClick={handleReturn}>
                Return
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        : null}
    </>
  );
}

export default OrderConfirmation;
