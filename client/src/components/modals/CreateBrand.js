import React from "react";
import { Modal, Button, Form } from "react-bootstrap";


const CreateBrand = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавление Бренда
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Control
                placeholder={"Название Бренда"}
            />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;