import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ show, click }) => {
  const sidefunction = ["sidebar"];
  if (show) {
    sidefunction.push("show");
  }

  const { cartItems } = useSelector((state) => state.cart);

  const handleCartCount = () => {
    return cartItems.reduce((qty, it) => Number(it.qty) + qty, 0);
  };

  return (
    <div className={sidefunction.join(" ")}>
      <ul className="sidebarlink" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="sidebarcartbadge">{handleCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link
            to={localStorage.getItem("token") ? "/logout" : "/login"}
            className="cartlink"
          >
            {localStorage.getItem("token") ? "Sign Out" : "Sign In"}
          </Link>
        </li>
        <li>
          <Link to="/register" className="cartlink">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
