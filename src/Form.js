import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";

import "./styles.css";

function Formdata() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Col md={3}>
          <Form.Group controlId="formbasic1">
            <Form.Label>Lead Category</Form.Label>
            <Form.Control required as="select" name="lead_category">
              <option>Select Category...</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic2">
            <Form.Label>Lead Source</Form.Label>
            <Form.Control required as="select" name="lead_source">
              <option>Select Source...</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic3">
            <Form.Label>Lead Type</Form.Label>
            <Form.Control required as="select" name="lead_type">
              <option>Select Type...</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic4">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="date" required />
          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col md={3}>
          <Form.Group controlId="formBasic5">
            <Form.Label>Title</Form.Label>
            <Form.Control required as="select" name="lead_title">
              <option>Select...</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic6">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter First Name"
              name="first_name"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic7">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Middle Name"
              name="middle_name"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic8">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Last Name"
              name="last_name"
            />
          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col md={3}>
          <Form.Group controlId="formBasic9">
            <Form.Label>Primary Mobile No</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Primary Mobile Number"
              name="phone_number"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic10">
            <Form.Label>Alternate Mobile No</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Alternate Mobile Number"
              name="alternate_number"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic11">
            <Form.Label>Whatsapp No</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Whatsapp Number"
              name="whatsapp_number"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic12">
            <Form.Label>User E-mail</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Email"
              name="email_address"
            />
          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col md={3}>
          <Form.Group controlId="formBasic13">
            <Form.Label>House No / Plot No</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Enter House No. /  Plot No."
              name="house_plot_no"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic14">
            <Form.Label>Building Name / Society Name</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Enter Building / Society Name"
              name="building_society_name"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic15">
            <Form.Label>Street Name / Road</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Enter Street / Road"
              name="street_road_name"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic16">
            <Form.Label> Area / Chowk / Nagar</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Enter Area /  Chowk / Nagar"
              name="area_chowk_ngr"
            />
          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col md={3}>
          <Form.Group controlId="formBasic17">
            <Form.Label>Locality / Taluka</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Enter Locality / Taluka"
              name="locality_taluka"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic18">
            <Form.Label>City</Form.Label>
            <Form.Control as="select" name="city" required>
              <option>Select</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic19">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter zip code"
              name="pincode"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formBasic20">
            <Form.Label>Landmark</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Landmark"
              name="landmark"
            />
          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col md={6}>
          <Form.Group controlId="formBasic21">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Enter Additional Notes."
              name="additional_note"
            />
          </Form.Group>
        </Col>
      </Form.Row>

      <hr />
      <div className="pull-right">
        <Button variant="success" type="submit">
          Create Lead
        </Button>
      </div>
    </Form>
  );
}

export default Formdata;
