import { Box, Rating } from "@mui/material";
import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { AiOutlineInstagram } from "react-icons/ai";
import { useAddProductReviewMutation } from "../../services/api";
import { toast } from 'react-toastify';
import { ApiPost } from "../../services/API/api";

const WriteAReviews = ({ showReviewsWrite, handleClose, id }) => {
  const [addProductReview] = useAddProductReviewMutation(undefined, {})
  const [imageLoading, setImageLoading] = useState(false);
  const [formData, setFormData] = useState({
    review: "",
    rating: 0,
    images: []
  });

  const handleSubmit = async () => {
    if (formData?.review != "" && formData?.rating != 0) {
      await addProductReview({ ...formData, product: id }).unwrap().then((data) => {
        handleClose();
      }).catch((error) => toast.error(error?.data?.message))
    }
  }


  const handleImageUpload = async (event) => {
    const filesData = new FormData();
    Object.values(event?.target?.files).forEach((value) => {
      filesData.append(`file`, value);
    });

    const config = {
      'Content-Type': 'multipart/form-data'
    };

    setImageLoading(true);
    const images = formData?.images ?? []
    await ApiPost("fileUpload/product", filesData, config)
      .then((response) => {
        if (response?.data) {
          let ImagesData = [];
          response?.data && response?.data?.forEach((element) => {
            ImagesData.push(element?.Location)
          })
          setFormData({
            ...formData, images: [...images, ...ImagesData]
          });
        }
        setImageLoading(false)
      })
      .catch((error) => {
        setImageLoading(false)
        console.log("Error", error);
      });
  }

  const handleDeleteImage = async (index) => {
    // setImageLoading(true)
    // await ApiPost('fileRmove', {
    //   url: formData?.images?.[index]?.url,
    //   type: 'Product'
    // })
    //   .then((response) => {
    //     setImageLoading(false)
    //     if (response?.data) {
    //       let images = formData?.images ?? []
    //       images = images?.filter((img, i) => i != index)
    //       setFormData({ ...formData, image: images });
    //     }
    //   })
    //   .catch((error) => {
    //     setImageLoading(false)
    //     console.log("Error", error);
    //   });
    let images = formData?.images ?? []
    images = images?.filter((img, i) => i != index)
    setFormData({ ...formData, images });
  }


  return (
    <>
      <Modal
        show={showReviewsWrite}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body className="review_body">
          <div className="login_wrap reviews_modal">
            <div className="review_title_wrap">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_928)">
                  <path
                    d="M14.499 9.21879V15.9168H1.10303V2.52078H7.80103"
                    stroke="#2A3990"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M15.6486 4.08176L8.22689 11.5035L5.4668 11.5532L5.51646 8.79307L12.9382 1.37134L15.6486 4.08176Z"
                    stroke="#000"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_928">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5 0.519897)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span style={{ marginLeft: "22px", fontSize: "16px", fontWeight: "600" }}>Write a Review</span>
              {/* <span className="review_title_wrap_proName">Brocade Kurta</span> */}
            </div>
            <div className="review_input_wrap">
              <div className="review_input_inner">
                <textarea
                  rows="4"
                  cols="50"
                  value={formData?.review}
                  onChange={(e) => {
                    setFormData({ ...formData, review: e.target.value })
                  }}
                  placeholder="What did you think of it?"
                ></textarea>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  className="review_input_stars"
                >
                  <Rating
                    name="simple-controlled"
                    value={formData?.rating}
                    sx={{
                      '& .MuiRating-icon': {
                        color: '#2A3592',
                        fontSize: "30px",
                      },
                      '& .MuiRating-iconFilled': {
                        color: '#2A3592',
                        fontSize: "30px",
                      },
                      '& .MuiRating-iconFocus': {
                        fontSize: "30px",
                      },
                      '& .MuiRating-iconHover': {
                        fontSize: "30px",
                      },
                    }}
                    onChange={(event, newValue) => {
                      setFormData({ ...formData, rating: newValue })
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "200px",
                      fontSize: "30px",
                    }}
                  />
                </div>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {formData?.images?.map((list, index) => (
                    <Box sx={{
                      position: 'relative'
                    }}>
                      <img src={list} style={{ padding: '10px' }} alt='image' width="60px" height="60px" />
                      <Box sx={{
                        width: '15px',
                        height: '15px',
                        position: 'absolute',
                        right: '5px',
                        top: 0,
                        cursor: 'pointer'
                      }} onClick={() => {
                        handleDeleteImage(index)
                      }}>
                        <svg style={{
                          background: 'red',
                          borderRadius: '50%',
                        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" class="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Box>
                    </Box>
                  ))}
                  <label style={{ cursor: 'pointer' }}>
                    <AiOutlineInstagram style={{ fontSize: "30px" }} />
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      hidden
                      multiple
                      onClick={(event) => { event.target.value = '' }}
                      onChange={(e) => handleImageUpload(e)} />
                  </label>
                </Box>
              </div>
            </div>
            <button className="btn focus_clear" type="button" onClick={handleSubmit}>
              <span>Submit Review</span>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WriteAReviews;
