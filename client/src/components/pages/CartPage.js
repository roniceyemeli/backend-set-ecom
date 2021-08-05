import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, removeCart } from "../../redux/actions";
import CartItem from "../cartitem/CartItem";
import "./CartPage.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, qty) => {
    dispatch(addCart(id, qty));
  };

  const handleDelete = (id) => {
    dispatch(removeCart(id));
  };

  const handleCartCount = () =>{
      return cartItems.reduce((qty, it) => Number(it.qty) + qty, 0)
  }

  const handleAddedProductPrice = () =>{
      return cartItems.reduce((price,it) => it.price * it.qty + price, 0)
  }

  return (
    <div className="cartpage">
      <div className="cartleft">
        <h2>E-Shop</h2>
        {cartItems.length === 0 ? (
          <div>
            Empty cart <Link to="/"> <Button variant="primary">Go back</Button></Link>
          </div>
        ) : (
          cartItems.map((el) => (
            <CartItem
              key= {el.product}
              item={el}
              handleQuantityChange={handleQuantityChange}
              handleDelete={handleDelete}
            />
          ))
        )}
      </div>
      <div className="cartright">
        <div className="cartinfo">
          <p>Products added ({handleCartCount()}) </p>
          <h6>TND({handleAddedProductPrice().toFixed(2)}) </h6> 
        </div>
        <div>
          <Button variant="success"> Proceed purchase</Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
