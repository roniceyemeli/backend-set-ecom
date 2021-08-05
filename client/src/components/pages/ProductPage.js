import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getProdDetails } from "../../redux/actions";
import "./ProductPage.css";

const ProductPage = ({match, history}) => {

  const dispatch = useDispatch();

  const {loading, product} = useSelector(state => state.getProductDetails);
  const [qty, setQty] = useState(4);
  console.log(product)

  useEffect(() => {
      if(product && match.params.id !== product._id) {
        dispatch(getProdDetails(match.params.id))
      }
  }, [dispatch, product, match])

  const handleAddtoCart =() =>{
    dispatch(addCart(product._id, qty));
    history.push("/cart")
  }
  return (
    <div className="productpage">
      { loading ? <Spinner animation="border" /> : 

        <>
          <div className="productleft">
        <div className="leftimg">
          <img
            src= {product.imageUrl}
            alt={product.name}
          />
        </div>

        <div className="leftinfo">
          <p className="leftname">{product.name}</p>
          <p>Price: £{product.price}</p>
          <p>
            {product.description}
          </p>
        </div>
      </div>
      <div className="productright">
        <div className="rightinfo">
            <p>
                Price: <h5> £{product.price}</h5>
            </p>
            <p>
                Status: <span>{product.quantityInStock > 0 ? <h5>Available</h5> : <h5>Out of stock</h5> }</span>
            </p>
            <p>
                Quantity: 
                <select value = {qty} onChange={(e) => setQty(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </p>
            <p>
                <Button variant="success" onClick ={handleAddtoCart}>Add to cart</Button>
            </p>
        </div>
      </div>
        </>
      }
      
    </div>
  );
};

export default ProductPage;
