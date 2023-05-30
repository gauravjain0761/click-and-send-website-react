import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineCheck } from 'react-icons/ai';
import { useSelector } from "react-redux";
import { useCustomerUpdateMutation, useGetCustomerDataQuery } from "../../services/api";
import { toast } from 'react-toastify';

const SavedAddressModule = () => {
  const [customerUpdate] = useCustomerUpdateMutation(undefined, {})
  const userItem = useSelector(state => state?.user?.userData)
  const { data: userData, error, isLoading } = useGetCustomerDataQuery(userItem?._id, { skip: !userItem?._id })
  const [formData, setFormData] = useState([]);
  const [formError, setFormError] = useState([]);

  useEffect(() => {
    if (Object.keys(userData?.data ?? {})?.length > 0) {
      setFormData({
        id: userData?.data?._id,
        address_1: userData?.data?.address_1 ?? "",
        address_2: userData?.data?.address_2 ?? "",
        city: userData?.data?.city ?? "",
        city: userData?.data?.city ?? "",
        state: userData?.data?.state ?? "",
        email: userData?.data?.email ?? "",
        phone: userData?.data?.phone ?? "",
        pincode: userData?.data?.pincode ?? "",
        fname: userData?.data?.fname ?? "",
        lname: userData?.data?.lname ?? "",
        district: userData?.data?.district ?? "",
      })
    }
  }, [userData])

  const handleUpdate = async () => {
    let tempError = { ...formError }
    if (formData?.fname == "") {
      tempError = { ...tempError, fname: true }
    }
    if (formData?.lname == "") {
      tempError = { ...tempError, lname: true }
    }
    if (formData?.email == "") {
      tempError = { ...tempError, email: true }
    }
    if (formData?.phone == "") {
      tempError = { ...tempError, phone: true }
    }
    if (formData?.address_1 == "") {
      tempError = { ...tempError, address_1: true }
    }
    if (formData?.address_2 == "") {
      tempError = { ...tempError, address_2: true }
    }
    if (formData?.pincode == "") {
      tempError = { ...tempError, pincode: true }
    }
    if (formData?.city == "") {
      tempError = { ...tempError, city: true }
    }
    if (formData?.district == "") {
      tempError = { ...tempError, district: true }
    }
    if (formData?.state == "") {
      tempError = { ...tempError, state: true }
    }
    if (tempError?.fname || tempError?.lname || tempError?.email || tempError?.phone || tempError?.address_1 || tempError?.address_2 || tempError?.pincode || tempError?.city || tempError?.state || tempError?.district) {
      setFormError(tempError)
    } else {
      await customerUpdate(formData).unwrap().then((data) => {
        toast.success("Profile updated successfully!")
      }).catch((error) => toast.error(error?.data?.message))
    }
  }

  const handleChange = (event) => {
    if (event.target.name == "phone") {
      const onlyNums = event.target.value.replace(/[^0-9]/g, '');
      if (onlyNums.length < 10) {
        setFormData({ ...formData, [event.target.name]: onlyNums });
      } else if (onlyNums.length === 10) {
        setFormData({ ...formData, [event.target.name]: onlyNums });
      }
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    setFormError({ ...formError, [event.target.name]: false })
  }

  return (
    <>
      {/* <Container> */}
      <Row>
        <Col>
          <Form className="checkout_form">
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="fname" placeholder="First Name" value={formData?.fname ?? ''} onChange={handleChange} />
                  {formError?.fname ? <p className="error-text">Name is required!</p> : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="lname" placeholder="Last Name" value={formData?.lname ?? ''} onChange={handleChange} />
                  {formError?.lname ? <p className="error-text">Name is required!</p> : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData?.phone ?? ''}
                      placeholder="Phone Number"
                      style={{ paddingLeft: "3rem" }}
                    />
                    <span style={{ position: "absolute", top: "16px", left: "12px", color: "#737576", fontSize: "16px" }}>+91</span>
                  </div>
                  {formError?.phone ? <p className="error-text">Phone is required!</p> : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="email" name="email" placeholder="Email" value={formData?.email ?? ''} onChange={handleChange} />
                  {formError?.email ? <p className="error-text">Email is required!</p> : null}
                </Form.Group>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      type="text"
                      name="compony"
                      placeholder="Compony"
                    />
                    <span style={{ position: "absolute", top: "16px", right: "24px", color: "#2A3592", fontSize: "16px" }}>Optional</span>
                  </div>
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row> */}
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control
                    type="text"
                    value={formData?.address_1 ?? ''} onChange={handleChange}
                    name="address_1"
                    placeholder="Flat No. & Building"
                  />
                  {formError?.address_1 ? <p className="error-text">Address is required!</p> : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control
                    type="text"
                    value={formData?.address_2 ?? ''} onChange={handleChange}
                    name="address_2"
                    placeholder="Street Address"
                  />
                  {formError?.address_2 ? <p className="error-text">Address is required!</p> : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control
                    type="text"
                    value={formData?.pincode ?? ''} onChange={handleChange}
                    name="pincode"
                    placeholder="PIN Code"
                  />
                  {formError?.pincode ? <p className="error-text">Pincode is required!</p> : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="state" placeholder="State" value={formData?.state ?? ''} onChange={handleChange} />
                  {formError?.state ? <p className="error-text">State is required!</p> : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="district" placeholder="District" value={formData?.district ?? ''} onChange={handleChange} />
                  {formError?.district ? <p className="error-text">District is required!</p> : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="city" placeholder="City" value={formData?.city ?? ''} onChange={handleChange} />
                  {formError?.city ? <p className="error-text">City is required!</p> : null}
                </Form.Group>
              </Col>
            </Row>

            <div
              style={{
                display: "grid",
              }}
            >
              <Button onClick={handleUpdate} className="savedAddressModule_btn">
                Update Address
                <AiOutlineCheck />
              </Button>
            </div>
          </Form>
          <div className="savedAddressModule_bottom">
            This address will be used by default the next time you order. You can edit it at checkout.
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  );
};

export default SavedAddressModule;
