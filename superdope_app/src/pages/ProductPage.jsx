 
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../App';
import '../styles/ProductPage.css';

const ProductPage = ({ products }) => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = () => {
        setIsAdding(true);
        addToCart(product, null, quantity);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000); 
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-page-container" style={{ backgroundImage: "url('https://github.com/YAZR007/superdope_website/blob/main/backgroundshop.jpg?raw=true')" }}>
            <div className="product-page-content">
                <Link to="/shop" className="back-to-shop-link gameplay"> &lt; BACK TO SHOP</Link>
                <div className="product-main-section">
                    <div className="product-image-section">
                        <img src={product.imageUrl} alt={product.name} className="product-main-image" />
                    </div>
                    <div className="product-details-section">
                        <h1 className="product-page-name alt-font">{product.name}</h1>
                        <div className="product-info-row gameplay">
                            <span>{product.type}</span>
                            <span>THC: {product.thc} | CBD: {product.cbd}</span>
                        </div>
                        
                        <div className="product-description-container">
                            <h2 className="section-title alt-font">DESCRIPTION</h2>
                            <ul>
                                <li><strong>Strain Type:</strong> {product.strainType}</li>
                                <li><strong>Effects:</strong> {product.effects.join(', ')}</li>
                            </ul>
                            <p>Experience the purest expression of your favorite strains with our lead-free, all-ceramic cartridges. We use only strain-specific terpenes, derived directly from the plant, with no additives or cuts. The result is a clean, flavorful, and potent experience that stays true to the original flower.</p>
                        </div>

                        <div className="purchase-section">
                            <div className="quantity-selector">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                                <input type="text" value={quantity} readOnly />
                                <button onClick={() => setQuantity(q => q + 1)}>+</button>
                            </div>
                            <button 
                                className={`add-to-cart-button-page alt-font ${isAdding ? 'animate-add-to-cart-snes' : ''}`}
                                onClick={handleAddToCart}
                                disabled={isAdding}
                            >
                                {isAdding ? 'ADDED!' : `ADD ${quantity} TO CART - £${(product.price * quantity).toFixed(2)}`}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
