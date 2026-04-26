
import React, { useState } from 'react';
import '../styles/ShopPage.css';
import { useCart } from '../App';

const products = [
  {
    id: 1,
    name: 'Cosmic Kush',
    type: 'Indica-dominant Hybrid',
    thc: '25%',
    cbd: '2%',
    effects: ['Relaxing', 'Euphoric', 'Sleepy'],
    description: 'A potent strain that will take you to another galaxy. Cosmic Kush is perfect for a relaxing night in, helping you unwind and drift off to sleep.',
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/3MKG4GUCQAWGTHZI5AJEM2VV-removebg-preview.png'
  },
  {
    id: 2,
    name: 'Pixel Haze',
    type: 'Sativa',
    thc: '22%',
    cbd: '< 1%',
    effects: ['Energetic', 'Focused', 'Creative'],
    description: 'A vibrant sativa that sharpens your senses and boosts creativity. Pixel Haze is the perfect companion for gaming, coding, or any activity that requires focus.',
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/4BIMMQVXWV6SKAW4NUZTRC64-removebg-preview.png'
  },
  {
    id: 3,
    name: "Ronin's Reserve",
    type: 'Hybrid',
    thc: '20%',
    cbd: '5%',
    effects: ['Balanced', 'Uplifting', 'Calming'],
    description: "A perfectly balanced hybrid for the modern warrior. Ronin's Reserve offers an uplifting yet calming experience, ideal for social gatherings or solo adventures.",
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/DJPNC3IOPECM2446K6QV6HRD-removebg-preview.png'
  },
  {
    id: 4,
    name: 'Samurai Spirit',
    type: 'Sativa-dominant Hybrid',
    thc: '28%',
    cbd: '1%',
    effects: ['Euphoric', 'Talkative', 'Giggly'],
    description: 'Unleash your inner samurai with this potent sativa-dominant hybrid. Samurai Spirit is known for its euphoric and social effects, making it great for sharing with friends.',
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/T2HX6CIMJVAOYYOM6RZEW7CB-removebg-preview.png'
  },
  {
    id: 5,
    name: "Shogun's Secret",
    type: 'Indica',
    thc: '30%',
    cbd: '3%',
    effects: ['Sedating', 'Relaxing', 'Pain-relief'],
    description: "A powerful indica fit for a shogun. Shogun's Secret is a heavy-hitter that provides deep relaxation and relief from pain, best used at the end of a long day.",
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/YOBJDT562XLEM4NYBTO6KPQT-removebg-preview.png'
  }
];

const Particles = () => {
    const particleCount = 50;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
        const style = {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
            '--x': (Math.random() - 0.5) * 400
        };
        particles.push(<div key={i} className="particle white" style={style} />);
    }
    return <div className="particles-background">{particles}</div>;
}

const ShopPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedWeight, setSelectedWeight] = useState('3.5g');
    const { addToCart } = useCart();

    const nextProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const openProduct = (product) => {
        setSelectedProduct(product);
    };

    const closeProduct = () => {
        setSelectedProduct(null);
    };
    
    const handleAddToCart = () => {
        if (selectedProduct) {
            addToCart(selectedProduct, selectedWeight);
            closeProduct();
        }
    };

    if (selectedProduct) {
        return (
            <div className="h-full w-full flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('https://raw.githubusercontent.com/YAZR007/superdope_website/main/backgroundshop.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Particles />
                <div className="w-full h-full bg-black bg-opacity-80 backdrop-blur-lg p-8 flex items-center justify-center absolute">
                    <div className="bg-gradient-to-br from-purple-900 to-black border-2 border-purple-500 rounded-2xl p-8 shadow-2xl shadow-purple-500/50 w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-auto object-contain rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-1/2 text-white">
                            <h2 className="text-5xl font-bold alt-font glow-white mb-4">{selectedProduct.name}</h2>
                            <p className="text-purple-300 gameplay text-lg mb-4">{selectedProduct.type}</p>
                            <div className="flex justify-around my-4 text-lg gameplay">
                                <span className="text-green-400">THC: {selectedProduct.thc}</span>
                                <span className="text-blue-400">CBD: {selectedProduct.cbd}</span>
                            </div>
                            <div className="my-4">
                                <h3 className="font-bold gameplay text-xl mb-2">Effects:</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {selectedProduct.effects.map(effect => (
                                        <span key={effect} className="bg-purple-700 text-sm font-semibold px-3 py-1 rounded-full gameplay shadow-md">{effect}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="mt-4 text-base japanese leading-relaxed">{selectedProduct.description}</p>
                            <div className="my-6">
                                <h3 className="font-bold gameplay text-xl mb-3">Weight:</h3>
                                <div className="flex gap-4 mt-2">
                                    {['3.5g', '7g', '14g', '28g'].map(weight => (
                                        <button key={weight} onClick={() => setSelectedWeight(weight)} className={`px-5 py-2 rounded-lg text-base font-bold transition-all duration-300 ${selectedWeight === weight ? 'bg-purple-600 shadow-lg scale-105' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                            {weight}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <button onClick={handleAddToCart} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-4 text-lg transition-transform duration-300 hover:scale-105">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <button onClick={closeProduct} className="text-white text-5xl absolute top-6 right-8 hover:text-purple-400 transition-colors">&times;</button>
                </div>
            </div>
        );
    }

    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    const nextIndex = (currentIndex + 1) % products.length;
    const currentProductData = products[currentIndex];
    const prevProductData = products[prevIndex];
    const nextProductData = products[nextIndex];

    return (
        <div className="h-full w-full p-4 flex flex-col items-center justify-between relative overflow-hidden" style={{ backgroundImage: "url('https://raw.githubusercontent.com/YAZR007/superdope_website/main/backgroundshop.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Particles />
            
            <div className="w-full text-center pt-8">
                <h2 className="text-4xl text-white font-bold alt-font glow-white">{currentProductData.name} (3.5g)</h2>
            </div>

            <div className="flex items-center justify-around w-full flex-grow">
                <div className="w-1/3 flex justify-center items-center">
                    <img 
                        src={prevProductData.imageUrl} 
                        alt={prevProductData.name}
                        className="cursor-pointer transition-all duration-500 ease-in-out transform hover:!scale-[0.7] hover:!opacity-100"
                        onClick={prevProduct}
                        style={{ 
                            maxHeight: '50vh', 
                            transform: 'scale(0.6) rotate(-15deg)',
                            opacity: 0.8
                        }}
                    />
                </div>

                <div className="w-1/3 flex justify-center items-center">
                    <img 
                        src={currentProductData.imageUrl} 
                        alt={currentProductData.name}
                        className="cursor-pointer transition-transform duration-500 w-auto object-contain hover:scale-105"
                        onClick={() => openProduct(currentProductData)}
                        style={{ 
                            maxHeight: '60vh',
                            zIndex: 10
                        }}
                    />
                </div>

                <div className="w-1/3 flex justify-center items-center">
                    <img 
                        src={nextProductData.imageUrl} 
                        alt={nextProductData.name}
                        className="cursor-pointer transition-all duration-500 ease-in-out transform hover:!scale-[0.7] hover:!opacity-100"
                        onClick={nextProduct}
                        style={{ 
                            maxHeight: '50vh', 
                            transform: 'scale(0.6) rotate(15deg)',
                            opacity: 0.8
                        }}
                    />
                </div>
            </div>

            <div className="w-full flex flex-col items-center pb-8 z-20">
                <button onClick={() => openProduct(currentProductData)} className="mb-4 bg-black bg-opacity-70 border border-white text-white font-bold py-3 px-12 rounded-lg text-xl tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                    ADD TO CART
                </button>
                <div className="text-white text-lg alt-font">CHARACTER SELECT</div>
                <div className="text-white text-sm mt-1">© 2026 SUPER DOPE</div>
            </div>

            <div onClick={prevProduct} className="arrow left-arrow" />
            <div onClick={nextProduct} className="arrow right-arrow" />
        </div>
    );
};

export default ShopPage;
