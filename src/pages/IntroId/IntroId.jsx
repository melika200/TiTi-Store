import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./IntroId.css"; // Optional: CSS for styling
import NavbarItem from "../../Components/navbarItem/NavbarItem";
import Footer from "../../Components/Footer/Footer";

const IntroId = ({ infoss }) => {
  const { id } = useParams();
  const info = infoss.find((item) => item.id === parseInt(id));
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
      <NavbarItem />
      <div className="introid">
        <h1>{info.title}</h1>
        <img src={info.image} alt={info.title} />
        <h5 className="my-2">{info.text}</h5>
        <p>{info.additionalInfo}</p>
        <button
          onClick={backhomeHandler} // Use backhomeHandler here
          className="btnid"
          style={{ marginLeft: "30px" }}
        >
          Back Home
        </button>
      </div>
      <Footer/>
    </>
  );
};

export default IntroId;
