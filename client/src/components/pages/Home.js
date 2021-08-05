import React, { useEffect } from "react";
import Product from "../products/Product";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import { getProds } from "../../redux/actions";

const Home = () => {
  const { products, loading } = useSelector((state) => state.initProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProds());
  }, [dispatch]);

  return (
    <div className="home">
      <h2 className="hometitle">Products</h2>
      <div className="homeproducts">
        {loading ? (
          <Spinner animation="border" />
        ) : (
          products.map((el) => (
            <Product
              productId={el._id}
              name={el.name}
              description={el.description}
              key={el._id}
              price={el.price}
              imageUrl={el.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
