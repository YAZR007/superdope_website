import React from 'react';
import { useCart } from '../App';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart } = useCart();

  if (!isCartOpen) return null;

  const getTotalPrice = () => {
    // For now, let's just count the number of items
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2 className="text-2xl font-bold alt-font glow-white">Your Cart</h2>
          <button onClick={toggleCart} className="text-white text-2xl">&times;</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="text-center japanese">Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={`${item.id}-${item.weight}`} className="cart-item">
                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="text-lg font-bold alt-font glow-white">{item.name}</h3>
                  <p className="text-sm gameplay">{item.weight}</p>
                  <p className="text-sm gameplay">Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id, item.weight)} className="remove-item-button">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <h3 className="text-xl font-bold alt-font glow-white">Total: {getTotalPrice()} items</h3>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
