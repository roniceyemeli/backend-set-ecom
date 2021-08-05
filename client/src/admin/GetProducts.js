import React, { useEffect } from 'react'
import { Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProds } from '../redux/actions';
import ProductsList from './ProductsList';
import './GetProducts.css'
import { Link } from 'react-router-dom';

const GetProducts = () => {

    const { products, loading } = useSelector((state) => state.initProducts);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProds());
    }, [dispatch]);

    return (
        <div className="home">
      <h2 className="hometitle">Products-Admin</h2>
        <Link to="/admin/addProducts" >
        <Button variant="primary">
            Add new Product
        </Button>
        </Link>
      <div className="homeproducts">
        {loading ? (
          <Spinner animation="border" />
        ) : (
          products.map((el) => (
            <ProductsList
              produits={el}
              key={el._id}
            />
          ))
        )}
      </div>
    </div>
    )
}

export default GetProducts
