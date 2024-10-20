import React from 'react';
import { Carousel } from 'react-bootstrap';
const ImageSlider = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.clothfusion.com/wp-content/uploads/2022/03/Titi-Definition-Shirt-Another-Term-For-Auntie-Like-A-Mom-Only-Cooler.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nobbydesign.com/cdn/shop/products/b7713e2a47ea8ab30800ef1ef974b526.jpg?v=1705298780&width=800"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.onloan.co/wp-content/uploads/2024/01/Underestimate-Me-So-That-I-Can-Embarrass-You-Sweatshirt-1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  };
  
  export default ImageSlider;
  