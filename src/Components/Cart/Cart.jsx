import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../Store/Cart/CartSlice';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./Cart.css";

const Cart = ({ showModal, handleClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                <img className='imgcart rounded' src={item.image} alt={item.title} />
                <div className='flex-grow-1 mx-1'>
                  <h5 className='mb-1 textcart'>{item.title}</h5>
                  <span>${item.price} x {item.quantity}</span>
                </div>
                <div className='btncartt'>
                  <Button className='btncart' variant="secondary" onClick={() => dispatch(decrementQuantity(item.id))}>-</Button>
                  <Button className='btncart' variant="secondary" onClick={() => dispatch(incrementQuantity(item.id))}>+</Button>
                  <Button className='btncart' variant="danger" onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
                </div>
              </div>
            ))}
            <hr />
            <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
