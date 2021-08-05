import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/actions";

const AddProduct = () => {
  const {products, loading} = useSelector(state => state.addProductReducer);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addProduct({ name:name.toLowerCase(), description, price, imageUrl }));
    setName("");
    setDescription("");
    setPrice("");
    setImageUrl("");
  };

  return (
    <div className="container">
      <h1>Add New Product</h1>
      {loading ? 
      <Spinner animation="border" /> :
       products ? console.log('product added') :
      <Form onSubmit={handleAdd}>
        <Form.Group className="mb-3">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter the product name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image url</Form.Label>
          <Form.Control
            type="text"
            placeholder="image url"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
       } 
    </div>
  );
};

export default AddProduct;
