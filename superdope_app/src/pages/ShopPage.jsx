
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ShopPage.css';

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
}

const ShopPage = ({ products }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [clickedProduct, setClickedProduct] = useState(null);
    const navigate = useNavigate();
    const isMobile = !useMediaQuery('(min-width: 769px)');

    const handleProductClick = (productId) => {
        setClickedProduct(productId);
        setTimeout(() => {
            navigate(`/product/${productId}`);
        }, 300); 
    };

    const filteredProducts = products
        .filter(p => activeCategory === 'All' || p.category === activeCategory)

    const categories = ['All', 'Edibles', 'Vapes', 'Carts'];

    const sidebarContent = (
      <>
        <div className='sidebar-section'>
            <h2 className='sidebar-title alt-font'>CATEGORIES</h2>
            <ul className='category-list'>
                {categories.map(cat => (
                    <li key={cat} >
                        <button onClick={() => setActiveCategory(cat)} className={`category-button gameplay ${activeCategory === cat ? 'active' : ''}`}>
                            {cat}
                            {['Edibles', 'Vapes'].includes(cat) && <span className='soon-tag'>SOON</span>}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        <div className='sidebar-section'>
            <h2 className='sidebar-title alt-font'>SORT BY</h2>
            <ul className='sort-list'>
                <li><button className='sort-button gameplay'>PRICE: LOW TO HIGH</button></li>
            </ul>
        </div>
      </>
    );

    return (
        <div className="shop-page-container" style={{ backgroundImage: "url('https://github.com/YAZR007/superdope_website/blob/main/backgroundshop.jpg?raw=true')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="shop-sidebar">
                <div className='sidebar-section'>
                    <h1 className='dispensary-title alt-font'>THE DISPENSARY</h1>
                </div>
                {isMobile && (
                    <button className="mobile-filter-toggle gameplay" onClick={() => setIsFilterVisible(!isFilterVisible)}>
                        {isFilterVisible ? 'HIDE FILTERS' : 'FILTERS & SORT'}
                    </button>
                )}
                {(!isMobile || isFilterVisible) && sidebarContent}
            </div>

            <div className="shop-main">
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <div 
                            key={product.id} 
                            className={`product-card ${clickedProduct === product.id ? 'clicked' : ''}`}
                            onClick={() => handleProductClick(product.id)}
                        >
                            <div 
                                className="product-image-container"
                                style={{ backgroundImage: `url(${product.imageUrl})` }}
                            />
                            <div className="product-info">
                                <p className="product-category gameplay">{product.category}</p>
                                <h3 className="product-name gameplay">{product.name.toUpperCase()}</h3>
                                <p className="product-type gameplay">{product.type}</p>
                                <div className="product-stats gameplay">
                                    <span>THC: {product.thc}</span>
                                    <span>CBD: {product.cbd}</span>
                                </div>
                                <p className="product-price gameplay">£{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
