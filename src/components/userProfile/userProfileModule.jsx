import { Divider } from "@mui/material";
import moment from "moment";
import React from "react";
import { AiOutlineCheck } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { useHistory } from "react-router-dom";
import { useOrderListQuery } from "../../services/api";
import { getNumberWithComma } from "../../utils/utils";

const UserProfileModule = () => {
  const history = useHistory()
  const { data: orderData, error, isLoading } = useOrderListQuery()
  return (
    <>
      {orderData?.data?.map(list => (
        <div className="userProfileModule_box" style={{ marginBottom: "16px", cursor: 'pointer' }} onClick={() => history.push(`/orderConfirmation/${list?._id}`)}>
          <div className="userProfileModule_box_heading">
            <h6>
              <img
                src="../img/reviewyourorder.png"
                alt="reviewyourorder"
                width="22"
                style={{ marginRight: "8px" }}
              />
              order #{list?.order_num}
            </h6>
            <span >{moment(list?.createdAt).format("Do MMM YYYY")}</span>
            {/* <h5 style={{ fontSize: '16px' }}>Total : {getNumberWithComma(Number(list?.total_amount))}</h5> */}
          </div>
          {list?.items?.map(item => (
            <div className="userProfileModule_box_list">
              <div>
                <h3 className="text-ellipsis-width">{item?.product_name}</h3>
                <span className="text-ellipsis-width" style={{
                  display: "block"
                }}>{`${Object.values(item?.varients ?? {})?.join(" • ")}`}</span>
              </div>
              <div>
                <h3>{getNumberWithComma(Number(item?.price) * Number(item?.qty))} </h3>
              </div>
            </div>
          ))}
          <div className="userProfileModule_box_list_last">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="orderconfirmed_img">
                <img
                  src="../img/orderconfirmed.png"
                  alt="orderconfirmed"
                  width="22"
                // style={{ marginRight: "8px" }}
                />
              </div>
              <div>
                <h6>Order {list?.order_status}</h6>
                <span>We’ll send you tracking details when it ships</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserProfileModule;
