import React, { useState } from "react";
import { Button, Form,Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editProduct, getProds } from "../redux/actions";



const EditDeleteProducts = ({ produit }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(produit.name);
  const [description, setDescription] = useState(produit.description);
  const [price, setPrice] = useState(produit.price);
  const [imageUrl, setImageUrl] = useState(produit.imageUrl);

  console.log(produit)

  const dispatch = useDispatch();
  const handleEdit =(e) => {
    e.preventDefault();
      dispatch(
        editProduct(produit._id, name, description, price, imageUrl)
      );
      dispatch(getProds());
      handleClose();
  }

return (
  <div>
    <Button variant="primary" onClick={handleShow}>
      Edit
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Edit this Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleEdit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    </div>
  );
};

export default EditDeleteProducts;
