import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Box, FormControl, FormControlLabel, MenuItem, NativeSelect, Radio, RadioGroup } from "@mui/material";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { TiDeleteOutline } from "react-icons/ti";
import { useGetAttributeDataQuery } from "../../services/api";


const FilterModalForMobile = ({ showFilter, handleClose, setSelectedId, selectedId, attributeOpen, attributeData, handleSelectedAttribute, selectedAttribute, setAttributeOpen, setShowMostPopular, setShowPrice, showPrice }) => {
  const getPosition = (index) => {
    let bottom = 0;
    let top = 0;
    if (index <= 3) {
      top = 0
      bottom = "-165px"
    } else {
      bottom = 0
      top = "-165px"
    }
    return {
      bottom,
      top,
    }
  }

  return (
    <>
      <Modal
        show={showFilter}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "2rem 1rem" }}>
          <Box sx={{ width: "100%" }}>
            {attributeData?.map((list, index) => (
              <Box sx={{ display: "flex" }}>
                <Box className="common_select_wrap" style={{
                  maxWidth: '100%'
                }}>
                  <FormControl>
                    {attributeOpen[index] &&
                      <div className="kind_garment_wrapper_box  fix-hight-scroll-220" style={{
                        bottom: getPosition(index)?.bottom ?? 0,
                        top: getPosition(index)?.top ?? 0,
                        zIndex: 99
                      }}>
                        {list?.variants?.map((item, itemIndex) => (
                          <MenuItem className="common_option_wrap kind_common_option_wrap" sx={{ paddingLeft: "26px" }} onClick={() => handleSelectedAttribute(list?.slug, index, item?._id, itemIndex)}>
                            <div className="common_option">
                              <div className="d-flex align-items-center common_radio_btn">
                                <FormControl>
                                  <FormControlLabel
                                    control={<Radio
                                      checked={selectedAttribute?.[list?.slug]?.includes(item?._id) ?? false}
                                      sx={{
                                        color: "#2a3592",
                                        '&.Mui-checked': {
                                          color: "#2a3592",
                                        },
                                      }}
                                    />}
                                  />
                                </FormControl>
                                <span>{item?.name}</span>
                              </div>
                            </div>
                          </MenuItem>
                        ))}
                      </div>
                    }
                    <MenuItem onClick={() => {
                      let attributeOpenList = [...attributeOpen];
                      if (attributeOpenList[index]) {
                        attributeOpenList[index] = false
                        setAttributeOpen(attributeOpenList)
                      } else {
                        attributeOpenList = attributeOpenList?.map(x => false)
                        attributeOpenList[index] = true
                        setAttributeOpen(attributeOpenList)
                        setShowMostPopular(false)
                        setShowPrice(false)
                      }
                    }} className="common_option_wrap">
                      <div className="common_option">
                        <div className="d-flex align-items-center common_radio_btn">
                          <span style={{ marginRight: "3rem" }}>
                            {list?.name}
                          </span>
                        </div>
                        <svg
                          style={{ rotate: attributeOpen[index] ? "0deg" : "180deg" }}
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.51318 1L5.33436 5L9.16024 1"
                            stroke="#2A3592"
                            strokeWidth="1.7"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </div>
                    </MenuItem>
                  </FormControl>
                </Box>
              </Box>
            ))}

            <div className="common_select_wrap" style={{
              maxWidth: '100%'
            }}>
              <FormControl>
                {showPrice && (
                  <div className="price_select_wrap_box price_select_wrap_box_mobile">
                    <Box className="price_select_wrap_box_child" sx={{ background: "#F2F4FF" }}>
                      <h6>From</h6>
                      <div className="price_select_wrap_box_child_data">
                        <input type="text" placeholder="₹1000" style={{ backgroundColor: "#f2f4ff" }} />
                        <span onClick={() => setShowPrice(false)}>
                          <TiDeleteOutline />
                        </span>
                      </div>
                    </Box>
                    <div className="price_select_wrap_box_child">
                      <h6>To</h6>
                      <div className="price_select_wrap_box_child_data">
                        <input type="text" placeholder="₹3500" />
                        <span onClick={() => setShowPrice(false)}>
                          <TiDeleteOutline />
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <MenuItem onClick={() => {
                  if (showPrice) {
                    setShowPrice(false)
                  } else {
                    setShowMostPopular(false)
                    setShowPrice(true)
                    let attributeOpenList = [...attributeOpen];
                    attributeOpenList = attributeOpenList?.map(x => false)
                    setAttributeOpen(attributeOpenList)
                  }
                }} className="common_option_wrap">
                  <div className="common_option">
                    <div className="d-flex align-items-center common_radio_btn">
                      <span style={{ marginRight: "3rem" }}>
                        Price
                      </span>
                    </div>
                    <svg
                      style={{ rotate: showPrice ? "0deg" : "180deg" }}
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.51318 1L5.33436 5L9.16024 1"
                        stroke="#2A3592"
                        strokeWidth="1.7"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                </MenuItem>
              </FormControl>
            </div>

            <button className="apply_btn" onClick={handleClose}>
              <span>Close</span>
            </button>
            {/*  <button className="clear_btn" onClick={handleClose}>
              <span>Clear</span>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1310_5640)">
                  <path
                    d="M0.760254 0.679993L7.40025 7.31999"
                    stroke="white"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M7.40025 0.679993L0.760254 7.31999"
                    stroke="white"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1310_5640">
                    <rect
                      width="7.84"
                      height="7.84"
                      fill="white"
                      transform="translate(0.160156 0.0800171)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button> */}
          </Box>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FilterModalForMobile;
