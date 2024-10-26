import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../../Store/ProductSlice/ProductSlice"; // Ensure path is correct
import { addToCart } from "../../Store/Cart/CartSlice"; // Ensure path is correct
import "./ProductPage.css";
import NavbarItem from "../navbarItem/NavbarItem";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { items, isLoading, error } = useSelector((state) => state.products);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShowCart(true); // Show the cart immediately
  };

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items]);

  const product = items.find((item) => item.id === parseInt(id));

  return (
    <>
      <NavbarItem openCart={() => setShowCart(true)} />
      <div className="product-page">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : product ? (
          <div className="product-info">
            <div className="product-card">
              <img src={product.image} alt={product.title} />
              <h6>{product.title}</h6>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <button onClick={() => handleAddToCart(product)}>add to cart</button>
              <Link to="/" className="mx-3">back home</Link>
              <Link to="/product">Back ProductPage</Link>
            </div>
          </div>
        ) : (
          <h1>Product not found</h1>
        )}
        <Cart showModal={showCart} handleClose={() => setShowCart(false)} />
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
