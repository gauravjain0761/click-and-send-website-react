import { useEffect, useState } from 'react'
import { ApiGet } from '../services/API/api'
import _ from 'lodash'

export default function useProjectData(productFilter) {
    const [loadingProduct, setLoading] = useState(true)
    const [errorProduct, setError] = useState(false)
    const [getAllProduct, setGetAllProject] = useState([])
    const [hasMoreProduct, setHasMore] = useState(false)


    const getList = (skus) => {
        let temp = [...skus ?? []] ?? []
        let uniqKey = _.uniq(temp?.map((list) => Object.keys(list?.varients ?? {}))?.flat())?.map((list, index) => list) ?? []
        let tempAttributeList = {};
        let tempAttributeData = {};
        let tempLastSkuData = {};
        uniqKey.filter(list => list != 'qty').map(val => {
            temp.map((list) => {
                let value = tempAttributeList?.[val] ?? []
                if (!!list?.varients?.[val]) {
                    tempAttributeList = { ...tempAttributeList, [val]: [...value, { value: list?._id, label: list?.varients?.[val] }] }
                }
            })
            tempAttributeData = { ...tempAttributeData, [val]: 'defaultValue' }
        })
        const data = _.uniqBy(tempAttributeList?.color, x => x?.label)?.length > 0 ? _.uniqBy(tempAttributeList?.color, x => x?.label) : []
        tempLastSkuData = temp?.find(list => list?._id == data?.[0]?.value) ?? {}
        return {
            attributeList: tempAttributeList,
            attributeData: tempAttributeData,
            filterList: temp,
            lastSkuData: tempLastSkuData
        }
    }

    const getProjectData = async () => {
        if (productFilter.page == 0) {
            return
        }
        await ApiGet(`get_product_by_category?productId=${productFilter?.id}`, productFilter)
            .then((response) => {
                let productAll = [...response?.data?.data];
                productAll = productAll?.map((list) => {
                    return {
                        ...list,
                        attributeList: getList(list?.skus ?? [])?.attributeList,
                        attributeData: getList(list?.skus ?? [])?.attributeData,
                        filterList: getList(list?.skus ?? [])?.filterList,
                        lastSkuData: getList(list?.skus ?? [])?.lastSkuData,
                    }
                })
                setGetAllProject((product) => {
                    if (productFilter.page == 1) {
                        return (
                            [{ ...response?.data?.product, attributeList: getList(response?.data?.product?.skus ?? [])?.attributeList, filterList: getList(response?.data?.product?.skus ?? [])?.filterList, attributeData: getList(response?.data?.product?.skus ?? [])?.attributeData, lastSkuData: getList(response?.data?.product?.skus ?? [])?.lastSkuData }, ...productAll]
                        )
                    }
                    return (
                        [...product, ...productAll]
                    )
                })
                setHasMore(productAll?.length > 0)
                setLoading(false)
            })
            .catch(error => {
                console.log("Error", error)
            })
    }

    useEffect(() => {
        setLoading(true)
        setError(false)
        getProjectData();
    }, [productFilter?.page, productFilter?.id, productFilter?.isRefresh])

    return { loadingProduct, errorProduct, getAllProduct, hasMoreProduct }
}