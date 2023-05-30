import React from 'react';
import { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { TiDeleteOutline } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useCouponApplyMutation } from '../../services/api';


const ApplyCouponModal = ({ showCoupon, handleClose, cartData, couponData, setCouponData, coupon, setCoupon, setShowCoupon }) => {
  const [couponApply] = useCouponApplyMutation(undefined, {})
  const userData = useSelector(state => state?.user?.userData)
  const handleApplyCoupon = async () => {
    if (!coupon) {
      toast.error("Enter Coupon First!")
    } else {
      await couponApply({
        user: userData?._id,
        value: coupon,
        type: "COUPON",
        items: cartData
      }).unwrap().then((response) => {
        toast.success("Coupon Applied!")
        setCouponData({ ...response, coupon })
        setCoupon('')
        setShowCoupon(false)
      }).catch((error) => toast.error(error?.data?.message))
    }
  }

  const handleRemoveCoupon = () => {
    setCouponData({})
  }

  return (
    <>
      <Modal
        show={showCoupon}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="applyCouponModal_body">
          <div className="checkout_box">
            <div
              className="checkout_box_heading"
              style={{ paddingBottom: "2rem", cursor: "pointer" }}
            >
              <img src="../img/haveacoupon.png" alt="haveacoupon" width="22" style={{ marginRight: "8px" }} />
              Have a coupon?
            </div>
          </div>

          <div className="checkout_box applyCouponModal_box" style={{ marginTop: "1rem" }}>
            <div
              className="checkout_box_heading"
              style={{ cursor: "pointer", width: '100%' }}
            >
              <img src="../img/haveacoupon.png" alt="haveacoupon" width="22" style={{ marginRight: "8px" }} />
              <Form.Control
                type="text"
                name="coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter Coupon Code"
                className='applyCouponModal_box_input'
              />
            </div>
            <div className='applyCouponModal_box_btn' onClick={handleApplyCoupon}>
              Apply
            </div>
          </div>

          {couponData?.coupon ?
            <div className="checkout_box applyCouponModal_box" style={{ marginTop: "1rem" }}>
              <div
                className="checkout_box_heading"
                style={{ cursor: "pointer" }}
              >
                <img src="../img/haveacoupon.png" alt="haveacoupon" width="22" style={{ marginRight: "8px" }} />
                {couponData?.coupon}
              </div>
              <div>
                <span> <TiDeleteOutline onClick={handleRemoveCoupon} style={{ fontSize: "20px", cursor: "pointer" }} /></span>
              </div>
            </div>
            : null}

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ApplyCouponModal;
