import React from 'react'
import { toast } from 'react-toastify';
import { useAddToWishlistMutation, useRemoveWishlistMutation } from '../../services/api';
import Storage from '../../services/storage';

const SaveButton = ({ id, isWishlist, isBlue = false, selectedId, setSelectedId, refetch }) => {
    const [addToWishlist] = useAddToWishlistMutation(undefined, {})
    const [removeWishlist] = useRemoveWishlistMutation(undefined, {})

    const addWishlist = async (id) => {
        await addToWishlist({ data: [id] }).unwrap().then((data) => {
            if (selectedId) {
                setSelectedId({ ...selectedId, isRefresh: !selectedId?.isRefresh })
            } else {
                refetch();
            }
        }).catch((error) => toast.error(error?.data?.message))
    };

    const removeToWishlist = async (id) => {
        await removeWishlist(id).unwrap().then((data) => {
            if (selectedId) {
                setSelectedId({ ...selectedId, isRefresh: !selectedId?.isRefresh })
            } else {
                refetch();
            }
        }).catch((error) => toast.error(error?.data?.message))
    };

    return (
        <>
            {isBlue ?
                <div className={`save_wrap mobile_save_wrap ${isWishlist ? "save_wrap_blue_active" : ""}`} onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (Storage.isUserAuthenticated()) {
                        if (isWishlist) {
                            removeToWishlist(id)
                        } else {
                            addWishlist(id)
                        }
                    } else {
                        toast.error("Login required!")
                    }
                }}>
                    <p>{isWishlist ? "Saved" : "Save"}</p>
                    <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z"
                            stroke="#2A3990"
                            strokeWidth="1.7"
                            strokeMiterlimit="10"
                        />
                    </svg>
                </div>
                :
                <div className={`save_wrap common_tab_title_save_warp ${isWishlist ? "save_wrap_active" : ""}`} onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (Storage.isUserAuthenticated()) {
                        if (isWishlist) {
                            removeToWishlist(id)
                        } else {
                            addWishlist(id)
                        }
                    } else {
                        toast.error("Login required!")
                    }
                }}>
                    <p>{isWishlist ? "Saved" : "Save"}</p>
                    <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z"
                            stroke="#fff"
                            strokeWidth="1.7"
                            strokeMiterlimit="10"
                        />
                    </svg>
                </div>
            }
        </>
    )
}

export default SaveButton