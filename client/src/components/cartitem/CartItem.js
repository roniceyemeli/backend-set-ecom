import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({ item, handleQuantityChange, handleDelete }) => {
  return (
    <div className="cartitem">
      <div className="cartitemimg">
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <Link to={`/product/${item.product}`} className="cartitemname">
        <p>{item.name}</p>
      </Link>

      <p className="cartitemprice">£{item.price}</p> 

      <select
        className="cartitemselect"
        value={item.qty}
        onChange={(e) => handleQuantityChange(item.product, e.target.value) }
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <Button variant="danger" className="cartitembtndelete" onClick={() =>handleDelete(item.product)}>
        <i className="fas fa-trash"></i>
      </Button>
    </div>
  );
};

export default CartItem;
