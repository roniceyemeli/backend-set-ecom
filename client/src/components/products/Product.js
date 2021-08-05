import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({imageUrl, description, price, name, productId}) => {
  return (
    <div className="product">
      <img
        src={imageUrl}
        alt={name}
      />

      <div className="productinfo">
        <p className="infoname"> {name}</p>
        <p className="infodescription">
          {description.substring(0, 200)}
        </p>

        <p className="infoprice">£{price}</p>

        <Link to={`/product/${productId}`} className="infobtn">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
