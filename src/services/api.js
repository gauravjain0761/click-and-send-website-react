import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ROUTES } from '../constant/api'
import url from 'url'
import Storage from './storage';

const { BASE_URL, API_VERSION } = API_ROUTES;
const API_BASE_URL = url.format(BASE_URL + API_VERSION);

export const AllApiData = createApi({
    reducerPath: 'apiData',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        // credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const token = Storage.isUserAuthenticated()
            if (token) {
                headers.set('Authorization', Storage.getToken());
            }
            return headers;
        },
    }),
    tagTypes: ['Cart', 'Order', 'Wishlist', 'HomeData', 'Customer'],
    endpoints: (builder) => ({
        getDatabyIdWithFilters: builder.mutation({
            query({ id, type, isRefresh, ...payload }) {
                return {
                    url: `get_data_by_id/${id}?type=${type}`,
                    method: 'POST',
                    body: payload,
                }
            },
            providesTags: ['HomeData'],
        }),
        sendOtp: builder.mutation({
            query(body) {
                return {
                    url: `send_otp`,
                    method: 'POST',
                    body,
                }
            },
        }),
        otpMatch: builder.mutation({
            query(body) {
                return {
                    url: `otp_match`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Cart', 'HomeData'],
        }),
        getShopMenuData: builder.query({
            query: () => `get_shop_menu`,
        }),
        getProduct: builder.query({
            query: ({ id }) => `get_product/${id}`,
        }),
        getAllCart: builder.query({
            query: () => `get_all_cart`,
            providesTags: ['Cart'],
        }),
        addToCart: builder.mutation({
            query(body) {
                return {
                    url: `add_to_cart`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Cart'],
        }),
        editCart: builder.mutation({
            query({ id, ...body }) {
                return {
                    url: `edit_cart/${id}`,
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: ['Cart'],
        }),
        removeCartItem: builder.mutation({
            query: (id) => ({
                url: `remove_cartitem/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Cart'],
        }),
        addOrder: builder.mutation({
            query(body) {
                return {
                    url: `order/add`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Cart', 'Order'],
        }),
        getOrderById: builder.query({
            query: (id) => `order/${id}`,
            providesTags: ['Wishlist'],
        }),
        orderList: builder.query({
            query: () => `order_list`,
            providesTags: ['Order'],
        }),
        getAllWishlist: builder.query({
            query: () => `get_all_wishlist`,
            providesTags: ['Wishlist'],
        }),
        addToWishlist: builder.mutation({
            query(body) {
                return {
                    url: `add_to_wishlist`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Wishlist'],
        }),
        removeWishlist: builder.mutation({
            query: (id) => ({
                url: `remove_wishlist/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Wishlist'],
        }),
        getCustomerData: builder.query({
            query: (id) => `customer/${id}`,
            providesTags: ['Customer'],
        }),
        customerUpdate: builder.mutation({
            query({ id, ...body }) {
                return {
                    url: `customer/update/${id}`,
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: ['Customer'],
        }),
        getAttributeData: builder.query({
            query: (id) => `attribute/getall`,
        }),
        addProductReview: builder.mutation({
            query(body) {
                return {
                    url: `product_review/add`,
                    method: 'POST',
                    body,
                }
            },
        }),
        couponApply: builder.mutation({
            query(body) {
                return {
                    url: `coupon_apply`,
                    method: 'POST',
                    body,
                }
            },
        }),
        makePayment: builder.mutation({
            query(body) {
                return {
                    url: `make_payment`,
                    method: 'POST',
                    body,
                }
            },
        }),
        getTrackOrder: builder.mutation({
            query({ id }) {
                return {
                    url: `track_order/${id}`,
                    method: 'POST',
                    body: {},
                }
            },
        }),
        deviceToken: builder.mutation({
            query(body) {
                return {
                    url: `device_token`,
                    method: 'POST',
                    body,
                }
            },
        }),
        logoutDeviceToken: builder.mutation({
            query(body) {
                return {
                    url: `logout`,
                    method: 'POST',
                    body,
                }
            },
        }),
        orderReturn: builder.mutation({
            query({ id, ...body }) {
                return {
                    url: `order_return/${id}`,
                    method: 'POST',
                    body,
                }
            },
        }),
    }),
})

export const { useSendOtpMutation, useOtpMatchMutation, useGetShopMenuDataQuery, useGetProductQuery, useAddToCartMutation, useGetAllCartQuery, useRemoveCartItemMutation, useEditCartMutation, useAddOrderMutation, useOrderListQuery, useAddToWishlistMutation, useGetAllWishlistQuery, useRemoveWishlistMutation, useCustomerUpdateMutation, useGetCustomerDataQuery, useGetAttributeDataQuery, useAddProductReviewMutation, useCouponApplyMutation, useGetDatabyIdWithFiltersMutation, useMakePaymentMutation, useGetTrackOrderMutation, useGetOrderByIdQuery, useDeviceTokenMutation, useLogoutDeviceTokenMutation, useOrderReturnMutation } = AllApiData