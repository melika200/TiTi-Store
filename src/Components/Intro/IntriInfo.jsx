import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Intro.css";
import { Link } from "react-router-dom";

export default function IntroInfo() {
  const infos = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4I2UdTlKbv3vEE5s0BsIwtEdj45QfcWBxzDo_2z-pgy22nNL2WJHh6bciit4sUSMNAiM&usqp=CAU",
      title: "Exportation",
      text: "Travel clothes are typically designed for comfort, ease of movement, and functionality.",
      buttonText: "Info",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeqLbiwIAtf-rs-Vi5aNM6OXoUTu598GlFyvTRHpOMRbHj3JY1XGxNbfa51toV-Wq6vU&usqp=CAU",
      title: "Material of clothes",
      text: "Potential outdoor conditions, often avoiding fine or delicate fabrics enhance mobility.",
      buttonText: "Info",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1788NxU5rYqRTaLZadW2Juw3oxmoqSv8P4Lamqtlw4aMYD1C8jzGmFbATmYS_n17ub9I&usqp=CAU",
      title: "Brand of company",
      text: "They often incorporate stretchy materials such as spandex, elastane, or Lycra to enhance mobility.",
      buttonText: "Info",
    },
  ];

  return (
    <div className="intro">
      {infos.map((info) => (
        <Card style={{ width: "18rem" }} key={info.id}>
          <Card.Img variant="top" src={info.image} />
          <Card.Body>
            <Card.Title className="animated-text">{info.title}</Card.Title>
            <Card.Text className="color-changing-text">{info.text}</Card.Text>
            <Link to={`/introid/${info.id}`} className="btn-intro">
              {info.buttonText}
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
