
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
    description: 'A classic, potent resin vape for the discerning connoisseur. OG Kush provides a powerful, relaxing high.',
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/YOBJDT562XLEM4NYBTO6KPQT.png'
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
    description: 'A legendary sativa in a potent resin vape. Sour Diesel is perfect for daytime use, providing an energetic and creative buzz.',
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/T2HX6CIMJVAOYYOM6RZEW7CB.png'
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
    description: 'A perfectly balanced hybrid resin vape. Blue Dream delivers a calming, yet uplifting experience, suitable for any occasion.',
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/DJPNC3IOPECM2446K6QV6HRD.png'
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
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedWeight, setSelectedWeight] = useState('1g');
    const { addToCart } = useCart();
    const [activeCategory, setActiveCategory] = useState('Vapes');
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const isMobile = !useMediaQuery('(min-width: 769px)');

    const openProduct = (product) => setSelectedProduct(product);
    const closeProduct = () => setSelectedProduct(null);
    
    const handleAddToCart = () => {
        if (selectedProduct) {
            addToCart(selectedProduct, selectedWeight);
            closeProduct();
        }
    };

    const filteredProducts = products
        .filter(p => activeCategory === 'All' || p.category === activeCategory)
        .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (selectedProduct) {
        return (
            <div className="h-full w-full flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('https://github.com/YAZR007/superdope_website/blob/main/backgroundshop.jpg?raw=true')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full h-full bg-black bg-opacity-80 backdrop-blur-lg p-4 flex items-center justify-center absolute">
                    <div className="bg-gradient-to-br from-purple-900 to-black border-2 border-transparent rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row gap-6 items-center p-6 h-full md:h-auto overflow-y-auto md:overflow-y-visible">
                        <div className="md:w-1/2 w-full flex-shrink-0">
                            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-auto object-contain rounded-lg" />
                        </div>
                        <div className="md:w-1/2 w-full text-white flex flex-col">
                            <h2 className="text-4xl md:text-6xl font-bold alt-font glow-white mb-2">{selectedProduct.name}</h2>
                            <p className="text-purple-300 gameplay text-lg md:text-xl mb-3">{selectedProduct.type}</p>
                            <div className="flex justify-around my-3 text-lg md:text-xl gameplay">
                                <span className="text-green-400">THC: {selectedProduct.thc}</span>
                                <span className="text-blue-400">CBD: {selectedProduct.cbd}</span>
                            </div>
                            <div className="my-3">
                                <h3 className="font-bold gameplay text-xl md:text-2xl mb-2">Effects:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProduct.effects.map(effect => (
                                        <span key={effect} className="bg-purple-700 text-sm md:text-base font-semibold px-3 py-1 rounded-full gameplay shadow-md">{effect}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="my-4 flex-grow">
                                <h3 className="font-bold gameplay text-xl md:text-2xl mb-2">Description</h3>
                                <p className="product-description-modal">{selectedProduct.description}</p>
                            </div>
                            <div className="mt-auto pt-4">
                                <h3 className="font-bold gameplay text-xl md:text-2xl mb-3">Weight:</h3>
                                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
                                    {['1g', '2g'].map(weight => (
                                        <button key={weight} onClick={() => setSelectedWeight(weight)} className={`px-4 py-2 md:px-5 rounded-lg text-base md:text-lg font-bold transition-all duration-300 ${selectedWeight === weight ? 'bg-purple-600 shadow-lg scale-105' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                            {weight}
                                        </button>
                                    ))}
                                </div>
                                <div className="text-3xl md:text-4xl font-bold alt-font my-4">
                                    £{selectedProduct.price}
                                </div>
                                <button onClick={handleAddToCart} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl md:text-2xl transition-transform duration-300 hover:scale-105">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <button onClick={closeProduct} className="text-white text-4xl md:text-5xl absolute top-4 right-4 hover:text-[#fd63a1] transition-colors z-20">&times;</button>
                </div>
            </div>
        );
    }

    const categories = ['All', 'Flower', 'Prerolls', 'Concentrates', 'Vapes', 'Accessories'];

    const sidebarContent = (
      <>
        <div className='sidebar-section'>
            <h2 className='sidebar-title alt-font'>CATEGORIES</h2>
            <ul className='category-list'>
                {categories.map(cat => (
                    <li key={cat} >
                        <button onClick={() => setActiveCategory(cat)} className={`category-button gameplay ${activeCategory === cat ? 'active' : ''}`}>
                            {cat}
                            {['Prerolls', 'Concentrates', 'Flower', 'Accessories'].includes(cat) && <span className='soon-tag'>SOON</span>}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        <div className='sidebar-section'>
            <h2 className='sidebar-title alt-font'>SORT BY</h2>
            <ul className='sort-list'>
                <li><button className='sort-button gameplay'>CBD: HIGH TO LOW</button></li>
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
                    <p className='dispensary-subtitle gameplay'>CURATED ARTISANAL CBD HARVEST</p>
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
                        <div key={product.id} className="product-card" onClick={() => openProduct(product)}>
                            <div className="product-image-container">
                                <img src={product.imageUrl} alt={product.name} className="product-image" />
                            </div>
                            <div className="product-info">
                                <p className="product-category gameplay">{product.category}</p>
                                <h3 className="product-name alt-font">{product.name.toUpperCase()}</h3>
                                <p className="product-description-card">{product.description}</p>
                                <p className="product-type">{product.type}</p>
                                <div className="product-stats">
                                    <span>THC: {product.thc}</span>
                                    <span>CBD: {product.cbd}</span>
                                </div>
                                <p className="product-price gameplay">£{product.price}</p>
                                <button className="view-drop-button alt-font">ADD TO CART</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
