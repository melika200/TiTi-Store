import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/ProductSlice/ProductSlice"; // Ensure path is correct
import { addToCart } from "../../Store/Cart/CartSlice"; // Ensure path is correct
import Footer from "../../components/Footer/Footer";
import IntroInfo from "../../Components/Intro/IntriInfo";
import NavbarItem from "../../Components/navbarItem/NavbarItem";
import Slider from "../../components/Slider/Slider";
import Cart from "../../Components/Cart/Cart";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.products);
  const [show, setShow] = useState({});
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleShowMore = (id) => {
    setShow((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShowCart(true); // Show the cart immediately
  };

  return (
    <>
      <div className="test">
        <NavbarItem openCart={() => setShowCart(true)} />
      </div>
      <div className="container">
        <Slider />
        <IntroInfo />
        <div className="ProductHome">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <div className="producthome">
              {items.slice(0, 6).map((product) => (
                <div className="row" key={product.id}>
                  <div className="card">
                    <img
                      src={product.image}
                      alt="Card Image"
                      className="card-img"
                    />
                    <div className="card-content">
                      <h2 className="card-title">{product.title}</h2>
                      <p
                        className={
                          show[product.id] ? "full-text" : "truncated-text"
                        }
                      >
                        {product.description}
                      </p>
                      <button
                        className="card-btnn"
                        onClick={() => toggleShowMore(product.id)}
                      >
                        {show[product.id] ? "See Less" : "See More"}
                      </button>
                      <Link to={`/product/${product.id}`} className="card-btn">
                        Buy Info
                      </Link>
                      <button
                        className="card-btn"
                        onClick={() => handleAddToCart(product)}
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <Cart showModal={showCart} handleClose={() => setShowCart(false)} />
      </div>
      <div className="test">
        <Footer />
      </div>
    </>
  );
};

export default Home;
