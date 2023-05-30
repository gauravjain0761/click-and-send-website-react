import React, { useCallback, useEffect, useRef, useState } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import ProductCard from "../../components/product/productCard";
import ProductPageFilter from "../../components/product/ProductFilter";
import { useGetProductQuery } from "../../services/api";
import Storage from "../../services/storage";
import useProjectData from "../../hooks/useGetProducts";
import { Box, CircularProgress } from "@mui/material";
import Slider from "react-slick";


const Product = () => {
  const { id, type } = useParams()
  // const { data, refetch } = useGetProductQuery({ id })
  const [swipeableIndex, setSwipeableIndex] = useState(0);
  const [swipeableDisable, setSwipeableDisable] = useState(true);
  const [productList, setProductList] = useState([]);
  const [similarList, setSimilarList] = useState([]);
  const [productBottomData, setProductBottomData] = useState([]);
  const [lastSkuData, setLastSkuData] = useState({});
  const [width, setWidth] = useState(window.innerWidth);
  const [qty, setQty] = useState(1);
  const [selectedData, setSelectedData] = useState({});
  const [productFilter, setProductFilter] = useState({
    page: 1,
    id,
    limit: 4,
    isRefresh: false
  })
  const observer = useRef()
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    swipe: !swipeableDisable,
    slidesToScroll: 1,
    beforeChange: (currentSlide, nextSlide) => {
      console.log(currentSlide, nextSlide)
      setLastSkuData({})
      setSwipeableIndex(nextSlide)
    }
  };

  const {
    loadingProduct, errorProduct, getAllProduct, hasMoreProduct
  } = useProjectData(productFilter)

  const lastCardElementRefProject = useCallback((node) => {
    if (loadingProduct) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting && hasMoreProduct) {
        setProductFilter({ ...productFilter, page: productFilter.page + 1 })
      }
    })
    if (node) observer.current.observe(node)
  }, [loadingProduct, hasMoreProduct])

  useEffect(() => {
    setSwipeableIndex(0)
    setProductFilter({ ...productFilter, page: 1, id })
  }, [id])

  useEffect(() => {
    let temproduct = getAllProduct?.length > 0 ? [...getAllProduct] : []
    setProductList(temproduct ?? [])
  }, [getAllProduct])

  const refetchData = () => {
    setProductFilter({ ...productFilter, isRefresh: !productFilter?.isRefresh });
  }
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  // useEffect(() => {
  //   let collection_product = data?.data?.collection_product ?? []
  //   if (collection_product?.length > 0) {
  //     collection_product = collection_product?.map(list => {
  //       return {
  //         ...list,
  //         type: 'COLLECTION'
  //       }
  //     })
  //   }
  //   let category_product = data?.data?.category_product ?? [];
  //   if (category_product?.length > 0) {
  //     category_product = category_product?.map(list => {
  //       return {
  //         ...list,
  //         type: 'category'
  //       }
  //     })
  //   }

  //   if (id) {
  //     if (category_product.filter(list => list._id == id).length > 0 && type != "COLLECTION") {
  //       let product = category_product.find(list => list._id == id)
  //       category_product = category_product.filter(list => list._id != id)
  //       category_product = [product, ...category_product]
  //       // setProductList(category_product)
  //       setSwipeableIndex(0)
  //       setProductBottomData(category_product?.map((x, index) => {
  //         if (index == 0) {
  //           return true
  //         }
  //         return false
  //       }))
  //     } else {
  //       setSimilarList(category_product?.filter(list => list._id != id))
  //     }
  //     if (collection_product.filter(list => list._id == id).length > 0 && (type == "COLLECTION" || !type)) {
  //       let product = collection_product.find(list => list._id == id)
  //       collection_product = collection_product.filter(list => list._id != id)
  //       collection_product = [product, ...collection_product]
  //       // setProductList(collection_product)
  //       setSwipeableIndex(0)
  //       setProductBottomData(collection_product?.map((x, index) => {
  //         if (index == 0) {
  //           return true
  //         }
  //         return false
  //       }))
  //     } else {
  //       setSimilarList(collection_product?.filter(list => list._id != id))
  //     }
  //   }
  // }, [id, data]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  useEffect(() => {
    let recentlyProduct = Storage.get("recentlyProduct") ? JSON.parse(Storage.get("recentlyProduct") ?? '[]') : [];
    if (productList?.length > 0) {
      if (recentlyProduct?.some(x => x?._id == productList?.[swipeableIndex]._id)) {
        recentlyProduct = recentlyProduct?.filter(x => x?._id != productList?.[swipeableIndex]._id)
        recentlyProduct = [productList?.find(x => x?._id == productList?.[swipeableIndex]._id), ...recentlyProduct]
      } else {
        recentlyProduct = [productList?.find(x => x?._id == productList?.[swipeableIndex]._id), ...recentlyProduct]
      }
    }
    Storage.set("recentlyProduct", JSON.stringify(recentlyProduct))
  }, [swipeableIndex, productList]);

  const getCurrentBottomData = (index) => {
    let bottomData = [...productBottomData];
    bottomData = bottomData?.map((x) => false)
    bottomData[index] = true;
    setSwipeableIndex(index)
    setProductBottomData(bottomData)
  }

  return (
    <>
      <Slider {...settings} className="product-slider-full">
        {productList?.map((data, index) => {
          if (productList.length === swipeableIndex + 1) {
            return (
              <ProductCard key={data?._id + index + swipeableIndex} productIndex={index} product={data} similarList={similarList ?? []} setSwipeableDisable={setSwipeableDisable} productBottomData={productBottomData} refetch={refetchData} width={width} productList={productList} swipeableIndex={swipeableIndex} lastSkuData={lastSkuData ?? {}} setLastSkuData={setLastSkuData} filters={productList?.[swipeableIndex]?.skus ?? []} setQty={setQty} selectedData={selectedData} setSelectedData={setSelectedData} lastCardElementRef={lastCardElementRefProject} />
            )
          } else {
            return (
              <ProductCard key={data?._id + index + (swipeableIndex + 1)} productIndex={index} product={data} similarList={similarList ?? []} setSwipeableDisable={setSwipeableDisable} productBottomData={productBottomData} refetch={refetchData} width={width} productList={productList} swipeableIndex={swipeableIndex} lastSkuData={lastSkuData ?? {}} setLastSkuData={setLastSkuData} filters={productList?.[swipeableIndex]?.skus ?? []} setQty={setQty} selectedData={selectedData} setSelectedData={setSelectedData} />
            )
          }
        })}
      </Slider>
      <ProductPageFilter selectedImage={productList?.[swipeableIndex]?.images?.[0]?.url ?? ""} selectedProduct={productList?.[swipeableIndex] ?? {}} filters={productList?.[swipeableIndex]?.skus ?? []} swipeableIndex={swipeableIndex ?? 0} setLastSkuData={setLastSkuData} qty={qty} setQty={setQty} selectedData={selectedData} setSelectedData={setSelectedData} />
      {/* <SwipeableViews disableLazyLoading={true} containerStyle={{ height: '100%' }} enableMouseEvents index={swipeableIndex} disabled={swipeableDisable} onChangeIndex={(index) => getCurrentBottomData(index)} >
        {productList?.map((data, index) => {
          if (productList.length === swipeableIndex + 1) {
            return (
              <ProductCard key={data?._id + index + swipeableIndex} productIndex={index} product={data} similarList={similarList ?? []} setSwipeableDisable={setSwipeableDisable} productBottomData={productBottomData} refetch={refetchData} width={width} productList={productList} swipeableIndex={swipeableIndex} lastSkuData={lastSkuData ?? {}} setLastSkuData={setLastSkuData} filters={productList?.[swipeableIndex]?.skus ?? []} setQty={setQty} selectedData={selectedData} setSelectedData={setSelectedData} lastCardElementRef={lastCardElementRefProject} />
            )
          } else {
            return (
              <ProductCard key={data?._id + index + (swipeableIndex + 1)} productIndex={index} product={data} similarList={similarList ?? []} setSwipeableDisable={setSwipeableDisable} productBottomData={productBottomData} refetch={refetchData} width={width} productList={productList} swipeableIndex={swipeableIndex} lastSkuData={lastSkuData ?? {}} setLastSkuData={setLastSkuData} filters={productList?.[swipeableIndex]?.skus ?? []} setQty={setQty} selectedData={selectedData} setSelectedData={setSelectedData} />
            )
          }
        })}
      </SwipeableViews>
      <ProductPageFilter selectedImage={productList?.[swipeableIndex]?.images?.[0]?.url ?? ""} selectedProduct={productList?.[swipeableIndex] ?? {}} filters={productList?.[swipeableIndex]?.skus ?? []} swipeableIndex={swipeableIndex ?? 0} setLastSkuData={setLastSkuData} qty={qty} setQty={setQty} selectedData={selectedData} setSelectedData={setSelectedData} /> */}
    </>
  );
};

export default Product;
