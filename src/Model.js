import React, { useState } from "react";
import { Button, Modal, Container } from "react-bootstrap";
import Formdata from "./Form";
import "./styles.css";

const Modelm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Create
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <Container>
            <Modal.Header closeButton>
              <Modal.Title>Create New Lead</Modal.Title>
            </Modal.Header>
            <hr />
            <Formdata />
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modelm;
