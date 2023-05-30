import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import "./allProduct.css";
import category_1 from "../../assets/img/category/category_1.png"
import ProductFilters from '../category/productFilters';
import { Nav, Tab, Tabs } from 'react-bootstrap';
import FooterStrip from '../footer/footerStrip';
import { getNumberWithComma } from '../../utils/utils';
import SaveButton from '../common/save';

const AllProductMenu = ({ data, singleData, selectedId, setSelectedId, selectedIndex }) => {
    const { id } = useParams()
    const history = useHistory();
    const [key, setKey] = useState(0);
    const [menuList, setMenuList] = React.useState(data ?? [])
    const [singleList, setSingleList] = React.useState(singleData ?? [])

    useEffect(() => {
        setMenuList(data ?? []);
        setSingleList(singleData)
    }, [data, singleData]);

    useEffect(() => {
        setKey(selectedIndex)
    }, [selectedIndex]);

    const getWidthData = (length) => {
        let temp = []
        for (let i = 0; i < length; i++) {
            if (i % 10 == 0) {
                temp.push(i)
            }
            // if (i % 10 == 1) {
            //     temp.push(i)
            // }
            // if (i % 10 == 5) {
            //     temp.push(i)
            // }
            if (i % 10 == 6) {
                temp.push(i)
            }
        }
        return temp
    }

    const getHeightData = (length) => {
        let temp = []
        for (let i = 0; i < length; i++) {
            if (i % 10 == 0) {
                temp.push(i)
            }
            if (i % 10 == 1) {
                temp.push(i)
            }
            if (i % 10 == 5) {
                temp.push(i)
            }
            if (i % 10 == 6) {
                temp.push(i)
            }
        }
        return temp
    }

    const getClassWidth = (index, length) => {
        const data = getWidthData(length)
        if (data.includes(index)) {
            return "col-md-8"
        }
        return "col-md-4"
    }

    return (

        <div className='category_page_wrapper'>
            <div className='cloth_wrap pt-0 tab_section_wrap'>
                <div className='container' style={{
                    paddingRight: "8px",
                    paddingLeft: "8px"
                }}>
                    <div className="cloth_inner">
                        <div className='cloth_title_wrap' style={{ marginBottom: "1rem" }}>
                            <h2><sapn className="limited_edition">Limited Edition</sapn>&nbsp; pieces by adept designers</h2>
                        </div>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => {
                                setKey(k)
                                setSelectedId({
                                    ...selectedId,
                                    id: menuList?.[k]?._id ?? "",
                                    type: menuList?.[k]?.type ?? ""
                                })
                            }}
                            className="tab_section">
                            {menuList.map((item, index) => {
                                return (
                                    <Tab eventKey={index} key={item?._id} title={item?.name}>
                                        <div className="row product_margin">
                                            {singleList?.products?.map((list, index) => {
                                                return (
                                                    <>
                                                        <div className={`fix-padding-might_like_inner ${getClassWidth(index, singleList?.products?.length)}`} >
                                                            <div className="cloth_deatils_wrap category_cloth_deatils_wrap">
                                                                <Link to={`/product/${list?._id}/${data?.[key]?.type ?? ""}`} className="cloth_deatils_link">
                                                                    <img src={list?.image} alt="cloth" className="product_below_image" width="100%" height={getHeightData(singleList?.products?.length).includes(index) ? "720px" : "560px"} />
                                                                </Link>
                                                                <div className="cloth_info_title">
                                                                    <div style={{ cursor: 'pointer' }} className="summer_list_link_wrap mobile_summer_list_link_wrap" onClick={() => history.push(`/product/${list?._id}/${data?.[key]?.type ?? ""}`)}>
                                                                        <div className="summer_list_link ">
                                                                            <p className='summer_list_link_wrap_white'>{list?.name}</p>
                                                                            <span>
                                                                                <svg
                                                                                    width="9"
                                                                                    height="10"
                                                                                    viewBox="0 0 9 10"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <g clipPath="url(#clip0_367_1219)">
                                                                                        <path
                                                                                            d="M0.599976 1.42999H7.98998V8.81999"
                                                                                            stroke="#fff"
                                                                                            strokeWidth="1.7"
                                                                                            strokeMiterlimit="10"
                                                                                        />
                                                                                        <path
                                                                                            d="M0.599976 8.81999L7.98998 1.42999"
                                                                                            stroke="#fff"
                                                                                            strokeWidth="1.7"
                                                                                            strokeMiterlimit="10"
                                                                                        />
                                                                                    </g>
                                                                                    <defs>
                                                                                        <clipPath id="clip0_367_1219">
                                                                                            <rect
                                                                                                width="8.84"
                                                                                                height="8.84"
                                                                                                fill="white"
                                                                                                transform="translate(0 0.580017)"
                                                                                            />
                                                                                        </clipPath>
                                                                                    </defs>
                                                                                </svg>
                                                                            </span>
                                                                        </div>
                                                                        <p className='summer_list_link_wrap_white'>{getNumberWithComma(list?.sale_price ?? 0)}</p>
                                                                    </div>
                                                                    <SaveButton id={list?._id} isWishlist={list?.isWishlist} isBlue={false} selectedId={selectedId} setSelectedId={setSelectedId} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })}

                                        </div>
                                    </Tab>
                                )
                            })}
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className='container' style={{ padding: "0rem 2rem" }}>
                <FooterStrip />
            </div>
            <ProductFilters singleData={singleData} selectedId={selectedId} setSelectedId={setSelectedId} />
        </div>
    )
}

export default AllProductMenu