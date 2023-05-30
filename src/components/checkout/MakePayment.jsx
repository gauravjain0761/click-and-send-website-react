import React from "react";
import { getNumberWithComma } from "../../utils/utils";

const MakePayment = ({ handleMakeOrder, cartData, couponData, setFormData, paymentMode, coutinLogicWithCoupon, coutinLogicWithoutCoupon }) => {

  return (
    <>
      <div className="checkout_box">
        <div className="checkout_box_heading">
          {" "}
          <img
            src="../img/reviewyourorder.png"
            alt="reviewyourorder"
            width="22"
            style={{ marginRight: "8px" }}
          />{" "}
          Review your order
        </div>
        {cartData?.length > 0 &&
          (couponData?.data && couponData?.data?.length > 0) ?
          couponData?.data?.map((cart, index) => {
            return (
              <div className="checkout_box_list">
                <div>
                  <h3>{cart?.sku?.product_name}</h3>
                  <span>{`${Object.values(cart?.sku?.varients ?? {})?.join(" • ")}`}</span>
                </div>
                <div>
                  <h3><s>{getNumberWithComma(Number(cart?.price) * Number(cart?.qty))}</s> {getNumberWithComma(Number(cart?.final_amount))}</h3>
                </div>
              </div>
            )
          })
          :
          cartData?.map((cart, index) => {
            return (
              <div className="checkout_box_list">
                <div>
                  <h3>{cart?.sku?.product_name}</h3>
                  <span>{`${Object.values(cart?.sku?.varients ?? {})?.join(" • ")}`}</span>
                </div>
                <div>
                  <h3>{getNumberWithComma(Number(cart?.price) * Number(cart?.qty))}</h3>
                </div>
              </div>
            )
          })}
        {/* <div className="checkout_box_list">
          <div>
            <h3>Regular Shipping</h3>
            <span>Delivers 17—20th June</span>
          </div>
          <div>
            <h3>Free </h3>
          </div>
        </div> */}
        {/* <div className="checkout_box_list">
          <div>
            <h3>GST</h3>
          </div>
          <div>
            <h3>
              <i>+ {getNumberWithComma(Number((cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0) ? couponData?.data?.reduce((t, x) => t + ((Number(x?.final_amount) * (Number(x?.price) > 1000 ? 12 : 5)) / 100), 0) : cartData?.reduce((t, x) => t + ((Number(x?.amount) * (Number(x?.price) > 1000 ? 12 : 5)) / 100), 0))?.toFixed(2)))}</i>
            </h3>
          </div>
        </div> */}
        {couponData?.coupon &&
          <div className="checkout_box_list">
            <div>
              <h3>Coupon: {couponData?.coupon}</h3>
              {/* <span>Get 10% off on all orders</span> */}
            </div>
            <div>
              <h3>
                <i>- {getNumberWithComma(coutinLogicWithCoupon(couponData)?.couponData ?? 0)}</i>
              </h3>
            </div>
          </div>
        }
        {paymentMode == "cod" &&
          <div className="checkout_box_list">
            <div>
              <h3>Cod </h3>
              {/* <span>Get 10% off on all orders</span> */}
            </div>
            <div>
              <h3>
                <i>+ {(couponData?.data && couponData?.data?.length > 0) ?
                  getNumberWithComma(coutinLogicWithCoupon(couponData)?.codData ?? 0)
                  :
                  getNumberWithComma(coutinLogicWithoutCoupon(cartData)?.codData ?? 0)
                }</i>
              </h3>
            </div>
          </div>
        }
        <div className="checkout_box_footer" onClick={handleMakeOrder}>
          <div className="checkout_box_list">
            <div>
              <h3>Make Payment</h3>
            </div>
            <div>
              <h3>
                <del
                  style={{
                    fontWeight: "300",
                    color: "#999896",
                    marginRight: "8px",
                  }}
                >
                  {/* ₹18,700{" "} */}
                </del>
                {(couponData?.data && couponData?.data?.length > 0) ?
                  getNumberWithComma(coutinLogicWithCoupon(couponData)?.total ?? 0)
                  :
                  getNumberWithComma(coutinLogicWithoutCoupon(cartData)?.total ?? 0)

                }
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakePayment;
