import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { TiDeleteOutline } from "react-icons/ti";
import FilterModalForMobile from "./filterModalForMobile";
import { useGetAttributeDataQuery } from "../../services/api";

function ProductFilters({ singleData, setSelectedId, selectedId, refetch }) {
  const { data, error, isLoading } = useGetAttributeDataQuery()
  const [attributeData, setAttributeData] = useState([]);
  const [showPrice, setShowPrice] = useState(false);
  const [showMostPopular, setShowMostPopular] = useState(false);
  const [showKindGarment, setShowKindGarment] = useState(false);
  const [attributeOpen, setAttributeOpen] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState({});
  const [showFilter, setShowFilter] = useState(false);

  const handleClose = () => setShowFilter(false);
  const handleShow = () => setShowFilter(true);

  useEffect(() => {
    const finalData = data?.data?.filter(x => x?.isActive) ?? []
    setAttributeOpen(finalData?.map(x => false) ?? [])
    setAttributeData(finalData ?? [])
  }, [data])

  const handleSelectedAttribute = (name, index, itemName, itemIndex) => {
    let selectedAttributeList = { ...selectedAttribute }
    if (selectedAttributeList[name]) {
      if (selectedAttributeList[name]?.includes(itemName)) {
        let filterData = selectedAttributeList[name]?.filter(x => x != itemName)
        selectedAttributeList = { ...selectedAttributeList, [name]: filterData?.length > 0 ? filterData : undefined }
      } else {
        selectedAttributeList = { ...selectedAttributeList, [name]: [...selectedAttributeList[name], itemName] }
      }
    } else {
      selectedAttributeList = { ...selectedAttributeList, [name]: [itemName] }
    }
    setSelectedAttribute(selectedAttributeList)
    setSelectedId({ ...selectedId, atr: selectedAttributeList })
  }

  return (
    <>
      <div className="product_filters product_filters_for_mobile">
        <div className="product_filters_wrap">
          <div className="common_select_wrap">
            <FormControl>
              {showMostPopular &&
                <div className="most_popular_wrapper_box">
                  {/* <MenuItem value="" className="common_option_wrap common_option_wrap_bg">
                    <div className="common_option">
                      <p className="common_option_p">Heavy Embroidery</p>
                      <span className="common_option_span">fanciest first</span>
                    </div>
                  </MenuItem> */}
                  <MenuItem onClick={() => {
                    setSelectedId({ ...selectedId, sortBy: 0 })
                  }} className="common_option_wrap">
                    <div className="common_option">
                      <p className="common_option_p">Newest</p>
                      <span className="common_option_span">minimal first</span>
                    </div>
                  </MenuItem>
                  {/* <MenuItem value="" className="common_option_wrap common_option_wrap_bg">
                    <div className="common_option">
                      <p className="common_option_p">Most Popular</p>
                    </div>
                  </MenuItem> */}
                  <MenuItem onClick={() => {
                    setSelectedId({ ...selectedId, sortBy: 1 })
                  }} className="common_option_wrap">
                    <div className="common_option">
                      <p className="common_option_p">Affordable</p>
                      <span className="common_option_span">
                        Lowest Price First
                      </span>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={() => {
                    setSelectedId({ ...selectedId, sortBy: 2 })
                  }} className="common_option_wrap common_option_wrap_bg">
                    <div className="common_option">
                      <p className="common_option_p">Luxurious</p>
                      <span className="common_option_span">
                        {" "}
                        Highest Price first
                      </span>
                    </div>
                  </MenuItem>
                </div>
              }
              <MenuItem onClick={() => {
                if (showMostPopular) {
                  setShowMostPopular(false)
                } else {
                  setShowMostPopular(true)
                  setShowPrice(false)
                  let attributeOpenList = [...attributeOpen];
                  attributeOpenList = attributeOpenList?.map(x => false)
                  setAttributeOpen(attributeOpenList)
                }
              }} className="common_option_wrap">
                <div className="common_option">
                  <p className="common_option_p">Most Popular</p>
                  <svg
                    style={{ rotate: showMostPopular ? "0deg" : "180deg" }}
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
          <div className="common_select_wrap">
            <Box onClick={handleShow}
              sx={{
                backgroundColor: "#2A3592",
                padding: "10px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}>
              <Typography variant="h6" sx={{ color: "#fff" }}>Filters</Typography>
              {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.70391 9.03V10.5C10.1139 10.1 10.7339 9.81 11.4639 9.81C12.2639 9.81 12.6839 10.2 12.6839 10.69C12.6839 11.2 12.2539 11.59 11.2939 11.59H10.5239V12.83H11.4639C12.3939 12.83 12.8639 13.22 12.8639 13.76C12.8639 14.34 12.2839 14.72 11.4739 14.72C10.6939 14.72 10.0339 14.4 9.55391 13.89V15.48C10.1539 15.94 10.9139 16.17 11.7339 16.17C13.5339 16.17 14.5039 15.08 14.5039 13.94C14.5039 13.02 13.9239 12.39 13.2439 12.13V12.1C13.8839 11.77 14.2739 11.18 14.2739 10.43C14.2739 9.34 13.3939 8.37 11.7639 8.37C10.9139 8.37 10.1839 8.64 9.70391 9.03Z" fill="#9DA8FF" />
                <rect x="0.85" y="0.85" width="22.3" height="22.3" rx="11.15" stroke="#9DA8FF" strokeWidth="1.7" />
              </svg> */}
            </Box>
          </div>
          <FilterModalForMobile showFilter={showFilter} handleClose={handleClose} setSelectedId={setSelectedId} selectedId={selectedId} attributeOpen={attributeOpen} attributeData={attributeData} handleSelectedAttribute={handleSelectedAttribute} selectedAttribute={selectedAttribute} setAttributeOpen={setAttributeOpen} setShowMostPopular={setShowMostPopular} setShowPrice={setShowPrice} showPrice={showPrice} />
        </div>
      </div>

      <div className="product_filters product_filters_for_desktop product_filters_change">
        <div className="product_filters_wrap">

          <div className="common_select_wrap">
            <FormControl>
              {showMostPopular &&
                <div className="most_popular_wrapper_box">
                  {/* <MenuItem value="" className="common_option_wrap common_option_wrap_bg">
                    <div className="common_option">
                      <p className="common_option_p">Heavy Embroidery</p>
                      <span className="common_option_span">fanciest first</span>
                    </div>
                  </MenuItem> */}
                  <MenuItem onClick={() => {
                    setSelectedId({ ...selectedId, sortBy: 0 })
                  }} className="common_option_wrap">
                    <div className="common_option">
                      <p className="common_option_p">Newest</p>
                      <span className="common_option_span">minimal first</span>
                    </div>
                  </MenuItem>
                  {/* <MenuItem value="" className="common_option_wrap common_option_wrap_bg">
                    <div className="common_option">
                      <p className="common_option_p">Most Popular</p>
                    </div>
                  </MenuItem> */}
                  <MenuItem onClick={() => {
                    setSelectedId({ ...selectedId, sortBy: 1 })
                  }} className="common_option_wrap">
                    <div className="common_option">
                      <p className="common_option_p">Affordable</p>
                      <span className="common_option_span">
                        Lowest Price First
                      </span>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={() => {
                    setSelectedId({ ...selectedId, sortBy: 2 })
                  }} className="common_option_wrap common_option_wrap_bg">
                    <div className="common_option">
                      <p className="common_option_p">Luxurious</p>
                      <span className="common_option_span">
                        {" "}
                        Highest Price first
                      </span>
                    </div>
                  </MenuItem>
                </div>
              }
              <MenuItem onClick={() => {
                if (showMostPopular) {
                  setShowMostPopular(false)
                } else {
                  setShowMostPopular(true)
                  setShowPrice(false)
                  let attributeOpenList = [...attributeOpen];
                  attributeOpenList = attributeOpenList?.map(x => false)
                  setAttributeOpen(attributeOpenList)
                }
              }} className="common_option_wrap">
                <div className="common_option">
                  <p className="common_option_p">Most Popular</p>
                  <svg
                    style={{ rotate: showMostPopular ? "0deg" : "180deg" }}
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

          {attributeData?.map((list, index) => (
            <div className="common_select_wrap">
              <FormControl>
                {attributeOpen[index] &&
                  <div className="kind_garment_wrapper_box fix-hight-scroll">
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
            </div>
          ))}

          <div className="common_select_wrap">
            <FormControl>
              {showPrice && (
                <div className="price_select_wrap_box">
                  <Box className="price_select_wrap_box_child" sx={{ background: "#F2F4FF" }}>
                    <h6>From</h6>
                    <div className="price_select_wrap_box_child_data">
                      <input type="text" placeholder="₹1000" value={selectedId?.pricing?.from ?? ''} onChange={(e) => {
                        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                        setSelectedId({ ...selectedId, pricing: { ...selectedId?.pricing, from: Number(onlyNums) } })
                      }} style={{ backgroundColor: "#f2f4ff" }} />
                      {selectedId?.pricing?.from &&
                        <span onClick={() => setSelectedId({ ...selectedId, pricing: { ...selectedId?.pricing, from: 0 } })}>
                          <TiDeleteOutline />
                        </span>
                      }
                    </div>
                  </Box>
                  <div className="price_select_wrap_box_child">
                    <h6>To</h6>
                    <div className="price_select_wrap_box_child_data">
                      <input type="text" value={selectedId?.pricing?.to ?? ''} onChange={(e) => {
                        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                        setSelectedId({ ...selectedId, pricing: { ...selectedId?.pricing, to: Number(onlyNums) } })
                      }} placeholder="₹3500" />
                      {selectedId?.pricing?.to &&
                        <span onClick={() => setSelectedId({ ...selectedId, pricing: { ...selectedId?.pricing, to: 0 } })}>
                          <TiDeleteOutline />
                        </span>
                      }
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

          {/* <button className="apply_btn">
            <span>Apply</span>
          </button>
          <button className="clear_btn">
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
        </div>
      </div>
    </>
  );
}

export default ProductFilters;
