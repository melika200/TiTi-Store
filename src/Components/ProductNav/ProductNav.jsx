import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/ProductSlice/ProductSlice"; // Ensure path is correct
import { addToCart } from "../../Store/Cart/CartSlice"; // Ensure path is correct
import './ProductNav.css';
import { Link } from "react-router-dom";
import NavbarItem from "../navbarItem/NavbarItem";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";

export default function ProductNav() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.products);
  const [show, setShow] = useState({});
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShowCart(true); // Show the cart immediately
  };

  
  const toggleShowMore = (id) => {
    setShow((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <NavbarItem openCart={() => setShowCart(true)} />
      <div className="ProductHome container">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div className="producthome">
            {items.slice(0, 20).map((product) => (
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
                    <Link
                      className="card-btnn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Cart showModal={showCart} handleClose={() => setShowCart(false)} />
      <Footer />
    </>
  );
}
