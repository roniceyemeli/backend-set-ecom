import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = ({ click }) => {

  const { cartItems } = useSelector((state) => state.cart);

  const handleCartCount = () => {
    return cartItems.reduce((qty, it) => Number(it.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbarLogo">
        <Link to="/">
          <h2>Store</h2>
        </Link>
      </div>
      {/* link */}
      <ul className="navLinks">
        <li>
          <Link to="/" className="cartlink">
            home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cartlink">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogoBadge">{handleCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/" className="cartlink">
            Shop
          </Link>
        </li>
        <li>
          <Link to={ localStorage.getItem('token')? "/logout": "/login"} className="cartlink">
          {localStorage.getItem('token')? "Sign Out" : "Sign In"}
          </Link>
        </li>
        <li>
          <Link to="/register" className="cartlink">
            Sign Up
          </Link>
        </li>
      </ul>
      <div className="hamburger_menu" onClick={click}>
        {/* //hamburger menu */}
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
