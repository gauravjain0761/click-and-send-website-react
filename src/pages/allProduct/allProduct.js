import React, { useMemo, useState } from 'react';
import { useGetShopMenuDataQuery } from '../../services/api';
import AllProductList from '../../components/allProduct/allProduct';
import { useParams } from 'react-router-dom';

const AllProduct = () => {
    const { id } = useParams()
    const { data, error, isLoading } = useGetShopMenuDataQuery()

    const collections = useMemo(() => {
        return data?.collections ?? []
    }, [data]);

    const categories = useMemo(() => {
        let temp = data?.categories ?? []
        let categoryList = [];
        if (id) {
            temp = temp?.map(level1 => {
                if (id === level1?._id) {
                    if (level1?.sub_cateogries?.length > 0) {
                        level1?.sub_cateogries?.map(level2 => {
                            if (level2?.categories?.length == 0) {
                                categoryList.push(level2)
                            }
                        })
                    } else {
                        categoryList.push(level1)
                    }
                } else {
                    if (level1?.sub_cateogries?.length > 0) {
                        level1?.sub_cateogries?.map(level2 => {
                            if (id === level2?._id) {
                                if (level2?.categories?.length > 0) {
                                    level2?.categories?.map(level2 => {
                                        categoryList.push(level2)
                                    })
                                } else {
                                    categoryList.push(level1)
                                }
                            }
                        })
                    }
                }
                return level1
            }) ?? [];
        }
        return categoryList ?? []
    }, [data, id]);

    return (
        <>
            <AllProductList menuData={[...categories, ...collections]} />
        </>
    )
}

export default AllProduct