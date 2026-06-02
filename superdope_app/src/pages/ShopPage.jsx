
import React, { useState, useEffect } from 'react';
import '../styles/ShopPage.css';
import { useCart } from '../App';

const products = [
  {
    id: 1,
    name: 'OG Kush Resin',
    category: 'Vapes',
    price: 45,
    type: 'Resin Vape',
    thc: '85%',
    cbd: '1%',
    effects: ['Potent', 'Relaxing', 'Euphoric'],
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/logo.png'
  },
  {
    id: 2,
    name: 'Sour Diesel Resin',
    category: 'Vapes',
    price: 48,
    type: 'Resin Vape',
    thc: '88%',
    cbd: '< 1%',
    effects: ['Energetic', 'Uplifting', 'Creative'],
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/logo.png'
  },
  {
    id: 3,
    name: 'Blue Dream Resin',
    category: 'Vapes',
    price: 42,
    type: 'Resin Vape',
    thc: '82%',
    cbd: '2%',
    effects: ['Balanced', 'Uplifting', 'Calming'],
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/logo.png'
  },
  {
    id: 4,
    name: 'Runtz',
    category: 'Carts',
    price: 35,
    type: 'Cartridge',
    thc: '90%',
    cbd: '1%',
    effects: ['Happy', 'Uplifted', 'Euphoric'],
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/logo.png'
  },
  {
    id: 5,
    name: 'Pineapple Express',
    category: 'Carts',
    price: 38,
    type: 'Cartridge',
    thc: '85%',
    cbd: '1%',
    effects: ['Energetic', 'Uplifted', 'Focused'],
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/logo.png'
  },
  {
    id: 6,
    name: 'Mimosa',
    category: 'Carts',
    price: 36,
    type: 'Cartridge',
    thc: '87%',
    cbd: '1%',
    effects: ['Happy', 'Uplifted', 'Energetic'],
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/logo.png'
  },
  {
    id: 7,
    name: 'Gelato',
    category: 'Carts',
    price: 40,
    type: 'Cartridge',
    thc: '92%',
    cbd: '1%',
    effects: ['Relaxed', 'Happy', 'Euphoric'],
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/logo.png'
  }
];

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

const ShopPage = () => {
    const { addToCart } = useCart();
    const [activeCategory, setActiveCategory] = useState('Vapes');
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const isMobile = !useMediaQuery('(min-width: 769px)');
    const [addingProductId, setAddingProductId] = useState(null);

    const handleAddToCart = (product) => {
        addToCart({ ...product, quantity: 1 }, '1g');
        setAddingProductId(product.id);
        setTimeout(() => {
            setAddingProductId(null);
        }, 500);
    };

    const filteredProducts = products
        .filter(p => activeCategory === 'All' || p.category === activeCategory)
        .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const categories = ['All', 'Flower', 'Concentrates', 'Vapes', 'Carts'];

    const sidebarContent = (
      <>
        <div className='sidebar-section'>
            <h2 className='sidebar-title alt-font'>CATEGORIES</h2>
            <ul className='category-list'>
                {categories.map(cat => (
                    <li key={cat} >
                        <button onClick={() => setActiveCategory(cat)} className={`category-button gameplay ${activeCategory === cat ? 'active' : ''}`}>
                            {cat}
                            {['Flower', 'Concentrates', 'Vapes'].includes(cat) && <span className='soon-tag'>SOON</span>}
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
                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="Search strains..."
                        className="search-input gameplay"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img src={product.imageUrl} alt={product.name} className="product-image" />
                            </div>
                            <div className="product-info">
                                <p className="product-category gameplay">{product.category}</p>
                                <h3 className="product-name gameplay">{product.name.toUpperCase()}</h3>
                                <p className="product-type gameplay">{product.type}</p>
                                <div className="product-stats gameplay">
                                    <span>THC: {product.thc}</span>
                                    <span>CBD: {product.cbd}</span>
                                </div>
                                <p className="product-price gameplay">£{product.price}</p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleAddToCart(product);
                                    }}
                                    className={`view-drop-button alt-font ${addingProductId === product.id ? 'animate-add-to-cart-snes' : ''}`}
                                >
                                    {addingProductId === product.id ? 'ADDED!' : 'ADD TO CART'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
