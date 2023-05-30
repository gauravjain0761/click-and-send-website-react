import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Country, State, City } from "country-state-city";

const CheckoutForm = ({ formData, setFormData, formError, setFormError }) => {

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
      <Row>
        <Col>
          <Form className="checkout_form">
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="fname" placeholder="First Name" value={formData?.fname ?? ''} onChange={handleChange} />
                  {formError?.fname ? <p className="error-text">name is required!</p> : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="lname" placeholder="Last Name" value={formData?.lname ?? ''} onChange={handleChange} />
                  {formError?.lname ? <p className="error-text">name is required!</p> : null}
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
                      value={formData?.phone ?? ''} onChange={handleChange}
                      placeholder="Phone Number"
                      style={{ paddingLeft: "3rem" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "12px",
                        color: "#737576",
                        fontSize: "16px",
                      }}
                    >
                      +91
                    </span>
                  </div>
                  {formError?.phone ? <p className="error-text">phone is required!</p> : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="email" name="email" placeholder="Email" value={formData?.email ?? ''} onChange={handleChange} />
                  {formError?.email ? <p className="error-text">email is required!</p> : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      type="text"
                      name="compony"
                      placeholder="Compony"
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "24px",
                        color: "#2A3592",
                        fontSize: "16px",
                      }}
                    >
                      Optional
                    </span>
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control
                    type="text"
                    value={formData?.address_1 ?? ''} onChange={handleChange}
                    name="address_1"
                    placeholder="Flat No. & Building"
                  />
                  {formError?.address_1 ? <p className="error-text">address is required!</p> : null}
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
                  {formError?.address_2 ? <p className="error-text">address is required!</p> : null}
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
                  {formError?.pincode ? <p className="error-text">pincode is required!</p> : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="city" placeholder="City" value={formData?.city ?? ''} onChange={handleChange} />
                  {formError?.city ? <p className="error-text">city is required!</p> : null}
                </Form.Group>
              </Col>
              <Col>
                {/* <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="state" placeholder="State" value={formData?.state ?? ''} onChange={handleChange} />
                  {formError?.state ? <p className="error-text">state is required!</p> : null}
                </Form.Group> */}
                <Autocomplete
                  sx={{
                    ".MuiInputBase-root": {
                      backgroundColor: "#fff",
                    },
                    ".MuiInputBase-root:hover": {
                      backgroundColor: "#fff",
                      border: 'nonwe'
                    },
                    ".MuiFilledInput-root": {
                      paddingBottom: "4px"
                    }
                  }}
                  fullWidth
                  multiple={false}
                  value={formData?.state ?? null}
                  name="state"
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, state: newValue });
                  }}
                  options={State?.getStatesOfCountry("IN")?.map(x => x?.name)}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="State"
                      variant="filled"
                    />
                  )}
                />
                {formError?.state ? <p className="error-text">state is required!</p> : null}
              </Col>
            </Row>

            {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button type="submit" className="input_file_button">
                    Publish
                  </Button>
                </div> */}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default CheckoutForm;
