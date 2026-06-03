import React from 'react';
import { useCart } from '../App';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart } = useCart();
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  const handleCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };

  return (
    <div className={`cart-container ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="sidebar-title alt-font">Your Cart</h2>
          <button onClick={toggleCart} className="text-white text-2xl">&times;</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="text-center gameplay">Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={`${item.id}-${item.weight}`} className="cart-item product-card">
                <div className="cart-item-details product-info">
                  <h3 className="product-name gameplay">{item.name}</h3>
                  <p className="gameplay">{item.type}</p>
                  <p className="gameplay">{item.weight}</p>
                  <p className="gameplay">Quantity: {item.quantity}</p>
                  <p className="product-price gameplay">£{item.price * item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id, item.weight)} className="remove-item-button view-drop-button alt-font">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <h3 className="sidebar-title alt-font">Total: £{getTotalPrice()}</h3>
          <button className="checkout-button view-drop-button alt-font" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
  );
};

export default Cart;
