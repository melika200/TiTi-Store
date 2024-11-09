import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./IntroId.css"; // Optional: CSS for styling
import NavbarItem from "../../Components/navbarItem/NavbarItem";
import Footer from "../../Components/Footer/Footer";
import Cart from "../../Components/Cart/Cart";

const IntroId = ({ infoss }) => {
  const { id } = useParams();
  const info = infoss.find((item) => item.id === parseInt(id));
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();
  const backhomeHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to go back to the homepage?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes :(",
      cancelButtonText: "No :)",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Back HomePage!",
          text: "done",
          icon: "success",
        });
        navigate("/");
      }
    });
  };


  return (
    <>
      <NavbarItem openCart={() => setShowCart(true)} />
      <div className="introid">
        <h1 className="my-3">{info.title}</h1>
        <img src={info.image} alt={info.title} />
        <h5 className="my-3 p-2">{info.text}</h5>
        <p className="textintro">{info.additionalInfo}</p>
        <button
          onClick={backhomeHandler} // Use backhomeHandler here
          className="btnid"
          style={{ marginLeft: "30px" }}
        >
          Back Home
        </button>
        <Cart showModal={showCart} handleClose={() => setShowCart(false)} />

      </div>
      <Footer />
    </>
  );
};

export default IntroId;
