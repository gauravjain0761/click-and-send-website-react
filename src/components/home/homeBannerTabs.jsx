import React, { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";
import { getNumberWithComma } from "../../utils/utils";
import BestSellingSection from "./bestSellingSection";
import SaveButton from "../common/save";
import { Box, Skeleton } from "@mui/material";

const HomeBannerTabs = ({ data, singleData, setSelectedId, selectedId }) => {
  const [key, setKey] = useState(0);
  const [menuList, setMenuList] = React.useState(data ?? [])
  const [singleCollection, setSingleCollection] = React.useState(singleData ?? [])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    setLoading(false)
    setMenuList(data ?? []);
    setSingleCollection(singleData)
  }, [data, singleData]);

  return (
    <>
      <div className="home_banner_wrap">
        <div className="home_banner_inner">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="tab_section"
          >
            {menuList.map((item, index) => {
              return (
                <Tab eventKey={index} key={item?._id} title="">
                  <div className="common_home_banner">
                    {singleCollection?.mediaType == "VIDEO" ?
                      (singleCollection?.video ?
                        <video key={singleCollection?.video + item?._id + index} autoPlay playsInline preload="true" src={singleCollection?.video} loop muted style={{ position: 'absolute', width: '100%', height: '100%' }}>
                          <source src={singleCollection?.video} type="video/mp4"></source>
                        </video>
                        // <video key={singleCollection?.video + item?._id + index} loop autoPlay muted style={{ position: 'absolute', width: '100%', height: '100%' }}>
                        //   <source src={singleCollection?.video} type="video/mp4" />
                        // </video>
                        : null)
                      :
                      (singleCollection?.image ? <img src={singleCollection?.image} alt="hero_image" style={{ position: 'absolute', width: '100%' }} /> : null)
                    }
                    <div className="container">
                      <div className="home_banner_title">
                        <h1 className="common_title">{singleCollection?.title}</h1>
                        <div className="summer_list">
                          {singleCollection?.linked_product?.length > 0 &&
                            singleCollection?.linked_product.map(list => (
                              <div className="summer_list_link_wrap" key={list?._id}>
                                <Link to={`/product/${list?._id}/${menuList?.[key]?.type ?? ""}`}>
                                  <div className="summer_list_link">
                                    <p className="big-font">{list?.name}</p>
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
                                            stroke="white"
                                            strokeWidth="1.7"
                                            strokeMiterlimit="10"
                                          />
                                          <path
                                            d="M0.600098 8.82018L7.9901 1.43018"
                                            stroke="white"
                                            strokeWidth="1.7"
                                            strokeMiterlimit="10"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_2_1592">
                                            <rect
                                              width="8.84"
                                              height="8.84"
                                              fill="white"
                                              transform="translate(0 0.580078)"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <p >{getNumberWithComma(list?.sale_price ?? 0)}</p>
                              </div>
                            ))

                          }
                          <div className="summer_list_link_wrap">
                            <Link to={`/allProductList/${item?.name}`}>
                              <div className="summer_list_link">
                                <p className="big-font">Shop all  {singleCollection?.title}</p>
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
                                        stroke="white"
                                        strokeWidth="1.7"
                                        strokeMiterlimit="10"
                                      />
                                      <path
                                        d="M0.600098 8.82018L7.9901 1.43018"
                                        stroke="white"
                                        strokeWidth="1.7"
                                        strokeMiterlimit="10"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_2_1592">
                                        <rect
                                          width="8.84"
                                          height="8.84"
                                          fill="white"
                                          transform="translate(0 0.580078)"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                              </div>
                            </Link>
                            <p>{singleCollection?.products?.length ?? 0} unique designs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              )
            })}
          </Tabs>
        </div>
      </div>

      <div
        className="tab_section_wrap"
        style={{
          padding: "22px 0px 0px 0px",
          backgroundColor:
            (key == 0 || key == 4)
              ? "#FFDD66"
              : (key == 1 || key == 5)
                ? "#C2D8E3"
                : (key == 2 || key == 6)
                  ? "#E3B9AB"
                  : (key == 3 || key == 7)
                    ? "#B5321D"
                    : "#FFDD66",
        }}
      >
        <div className="container" style={{
          paddingRight: "0px",
          paddingLeft: "0px"
        }}>
          <div className="tab_section_inner" >
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => {
                setLoading(true);
                setKey(k)
                setSelectedId({
                  id: menuList?.[k]?._id ?? "",
                  type: menuList?.[k]?.type ?? ""
                })
              }}
              className="tab_section"
            >
              {menuList.map((item, index) => {
                return (
                  <Tab eventKey={index} key={item?._id} title={item?.name}>
                    <div className={`tab_common_contain ${key == index ? "activeOpecity" : "inActiveOpecity"}`} style={{
                      paddingRight: "8px",
                      paddingLeft: "8px"
                    }}>
                      <div className="row">
                        {singleCollection?.products?.slice(0, 4)?.map((list) => {
                          return (
                            <>
                              {loading ?
                                <div className={`col-6 `}>
                                  <Link to={`/product/${list?._id}/${menuList?.[key]?.type ?? ""}`}>
                                    <div className="common_tab_info">
                                      <div className="common_tab_img">
                                        <Skeleton animation="wave" sx={{
                                          bgcolor: (key == 0 || key == 4)
                                            ? "#FFDD6690"
                                            : (key == 1 || key == 5)
                                              ? "#C2D8E390"
                                              : (key == 2 || key == 6)
                                                ? "#E3B9AB90"
                                                : (key == 3 || key == 7)
                                                  ? "#B5321D90"
                                                  : "#FFDD6690",
                                        }} variant="rounded" className="product_above_image" width="100%" height="640px" />
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                :
                                <div className={`col-6 `}>
                                  <Link to={`/product/${list?._id}/${menuList?.[key]?.type ?? ""}`}>
                                    <div className="common_tab_info">
                                      <div className="common_tab_img">
                                        <img src={list?.image} alt="image" className="product_above_image" height="640px" width="100%" />
                                      </div>
                                      <div className=" common_tab_title">
                                        <div className="summer_list_link_wrap">
                                          <div className="summer_list_link">
                                            <p>{list?.name}</p>
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
                                                    stroke="white"
                                                    strokeWidth="1.7"
                                                    strokeMiterlimit="10"
                                                  ></path>
                                                  <path
                                                    d="M0.600098 8.82018L7.9901 1.43018"
                                                    stroke="white"
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
                                          <p style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                          }}>
                                            <Box sx={{
                                              '@media (max-width: 768px)': {
                                                marginTop: "8px"
                                              },
                                            }}>
                                              {getNumberWithComma(list?.sale_price ?? 0)}
                                            </Box>
                                            <Box sx={{
                                              display: "none",
                                              '@media (max-width: 768px)': {
                                                display: "block",
                                              }
                                            }}>
                                              <SaveButton id={list?._id} isWishlist={list?.isWishlist} setSelectedId={setSelectedId} selectedId={selectedId} />
                                            </Box>
                                          </p>
                                        </div>
                                        <Box sx={{
                                          display: "block",
                                          '@media (max-width: 768px)': {
                                            display: "none",
                                          }
                                        }}>
                                          <SaveButton id={list?._id} isWishlist={list?.isWishlist} setSelectedId={setSelectedId} selectedId={selectedId} />
                                        </Box>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              }
                            </>
                          )
                        })}
                      </div>
                    </div>
                  </Tab>
                )
              }
              )}
            </Tabs>
            <Link to="/allProduct" className="see_all_link">
              <p>Shop All</p>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6128_2248)">
                  <path
                    d="M0.76004 1.43018H8.15004V8.82018"
                    stroke="black"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M0.76004 8.82018L8.15004 1.43018"
                    stroke="black"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6128_2248">
                    <rect
                      width="8.84"
                      height="8.84"
                      fill="white"
                      transform="translate(0.160034 0.580078)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>

            <div className="shop_hald_wrap">
              <div className="shop_hald_inner">
                <div className="shop_hald_info">
                  <Link to="/" className="d-flex align-items-center">
                    <h3>Shop Haldi Gallery</h3>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.09082 1.81824H17.1817V14.9091"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1.875 17.1786L16.2375 2.81604"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </Link>
                  <p>64 Designs • Updated Monthly</p>
                </div>
                <div className="shop_hald_info">
                  <Link to="/" className="d-flex align-items-center">
                    <h3>Most Loved</h3>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.09082 1.81824H17.1817V14.9091"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1.875 17.1786L16.2375 2.81604"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </Link>
                  <p>Our Favourite 100 Designs</p>
                </div>
                <div className="shop_hald_info">
                  <Link to="/allProduct" className="d-flex align-items-center">
                    <h3>Shop All</h3>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.09082 1.81824H17.1817V14.9091"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1.875 17.1786L16.2375 2.81604"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </Link>
                  <p>1,600+ Designs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BestSellingSection data={data} singleData={singleData?.link_with_category_collection} keyVal={key} setSelectedId={setSelectedId} selectedId={selectedId} />
    </>
  );
};

export default HomeBannerTabs;
