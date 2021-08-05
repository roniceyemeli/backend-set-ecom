import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct, getProds } from "../redux/actions";
import EditDeleteProducts from "./EditDeleteProducts";
import './ProductsList.css'

const ProductsList = ({produits}) => {

  const dispatch = useDispatch()

  const handleDelete =(e) =>{
    e.preventDefault();
    dispatch(deleteProduct(produits._id))
    dispatch(getProds())
  } 

  return (
    <div className="product">
      <img src={produits.imageUrl} alt={produits.name} />

      <div className="productinfo">
        <p className="infoname"> {produits.name}</p>
        <p className="infodescription">{produits.description.toString().substring(0, 200)}</p>
        <p className="infoprice">£{produits.price}</p>
        <div className="btns">
        <Button variant="danger" onClick={handleDelete}>
            Delete
        </Button>
        <EditDeleteProducts produit={produits} />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
