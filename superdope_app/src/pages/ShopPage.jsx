
import React, { useState, useEffect } from 'react';
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
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/3MKG4GUCQAWGTHZI5AJEM2VV.png'
  },
  {
    id: 2,
    name: 'Pixel Haze',
    type: 'Sativa',
    thc: '22%',
    cbd: '< 1%',
    effects: ['Energetic', 'Focused', 'Creative'],
    description: 'A vibrant sativa that sharpens your senses and boosts creativity. Pixel Haze is the perfect companion for gaming, coding, or any activity that requires focus.',
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/4BIMMQVXWV6SKAW4NUZTRC64.png'
  },
  {
    id: 3,
    name: "Ronin's Reserve",
    type: 'Hybrid',
    thc: '20%',
    cbd: '5%',
    effects: ['Balanced', 'Uplifting', 'Calming'],
    description: "A perfectly balanced hybrid for the modern warrior. Ronin's Reserve offers an uplifting yet calming experience, ideal for social gatherings or solo adventures.",
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/DJPNC3IOPECM2446K6QV6HRD.png'
  },
  {
    id: 4,
    name: 'Samurai Spirit',
    type: 'Sativa-dominant Hybrid',
    thc: '28%',
    cbd: '1%',
    effects: ['Euphoric', 'Talkative', 'Giggly'],
    description: 'Unleash your inner samurai with this potent sativa-dominant hybrid. Samurai Spirit is known for its euphoric and social effects, making it great for sharing with friends.',
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/T2HX6CIMJVAOYYOM6RZEW7CB.png'
  },
  {
    id: 5,
    name: "Shogun's Secret",
    type: 'Indica',
    thc: '30%',
    cbd: '3%',
    effects: ['Sedating', 'Relaxing', 'Pain-relief'],
    description: "A powerful indica fit for a shogun. Shogun's Secret is a heavy-hitter that provides deep relaxation and relief from pain, best used at the end of a long day.",
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/YOBJDT562XLEM4NYBTO6KPQT.png'
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
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const getSafeIndex = (index) => ((index % products.length) + products.length) % products.length;
    const currentSafeIndex = getSafeIndex(currentIndex);
    const currentProductData = products[currentSafeIndex];

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
                <div className="w-full h-full bg-black bg-opacity-80 backdrop-blur-lg p-4 flex items-center justify-center absolute">
                    <div className="bg-gradient-to-br from-purple-900 to-black border-2 border-purple-500 rounded-2xl shadow-2xl shadow-purple-500/50 w-full max-w-5xl flex flex-col md:flex-row gap-6 items-center p-6 h-full md:h-auto overflow-y-auto md:overflow-y-visible">
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
                            <p className="mt-3 text-lg md:text-xl alt-font leading-relaxed flex-grow">{selectedProduct.description}</p>
                            <div className="mt-auto pt-4">
                                <h3 className="font-bold gameplay text-xl md:text-2xl mb-3">Weight:</h3>
                                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
                                    {['3.5g', '7g', '14g', '28g'].map(weight => (
                                        <button key={weight} onClick={() => setSelectedWeight(weight)} className={`px-4 py-2 md:px-5 rounded-lg text-base md:text-lg font-bold transition-all duration-300 ${selectedWeight === weight ? 'bg-purple-600 shadow-lg scale-105' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                            {weight}
                                        </button>
                                    ))}
                                </div>
                                <button onClick={handleAddToCart} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl md:text-2xl transition-transform duration-300 hover:scale-105">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <button onClick={closeProduct} className="text-white text-4xl md:text-5xl absolute top-4 right-4 hover:text-purple-400 transition-colors z-20">&times;</button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full w-full p-4 flex flex-col items-center justify-between relative overflow-hidden" style={{ backgroundImage: "url('https://raw.githubusercontent.com/YAZR007/superdope_website/main/backgroundshop.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Particles />
            
            <div className="w-full text-center pt-8">
                <h2 className="text-3xl md:text-4xl text-white font-bold alt-font glow-white px-4">{currentProductData.name} (3.5g)</h2>
            </div>

            <div className="w-full flex-grow flex items-center justify-center relative overflow-hidden">
                {products.map((product, index) => {
                    const offset = index - currentSafeIndex;
                    let adjustedOffset = offset;
                    if (Math.abs(offset) > products.length / 2) {
                        adjustedOffset = offset > 0 ? offset - products.length : offset + products.length;
                    }

                    const isCurrent = adjustedOffset === 0;

                    const getTransform = () => {
                        let x = adjustedOffset * (isDesktop ? 80 : 70);
                        let scale = isDesktop ? 0.6 : 0.5;
                        let rotate = 0;

                        if (isCurrent) {
                            scale = 1;
                            x = 0;
                        } else if (adjustedOffset > 0) {
                            rotate = 15;
                        } else {
                            rotate = -15;
                        }

                        return `translateX(${x}%) scale(${scale}) rotate(${rotate}deg)`;
                    };
                    
                    const getOpacity = () => {
                        if (Math.abs(adjustedOffset) > 1) return 0;
                        if (isCurrent) return 1;
                        return 0.8;
                    };

                    const opacity = getOpacity();
                    const getZIndex = () => (products.length - Math.abs(adjustedOffset));

                    return (
                        <div
                            key={product.id}
                            className="cursor-pointer absolute transition-all duration-500 ease-in-out"
                            style={{
                                top: '50%',
                                left: '50%',
                                transform: `translate(-50%, -50%) ${getTransform()}`,
                                opacity: opacity,
                                zIndex: getZIndex(),
                                pointerEvents: opacity === 0 ? 'none' : 'auto',
                            }}
                            onClick={() => {
                                if (isCurrent) {
                                    openProduct(product);
                                } else if (Math.abs(adjustedOffset) === 1) {
                                   setCurrentIndex(currentIndex + adjustedOffset);
                                }
                            }}
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-auto object-contain"
                                style={{
                                    maxHeight: isDesktop ? '60vh' : '50vh',
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            <div className="w-full flex flex-col items-center pb-8 z-20">
                <button onClick={() => openProduct(currentProductData)} className="mb-4 bg-black bg-opacity-70 border border-white text-white font-bold py-3 px-8 md:px-12 rounded-lg text-lg md:text-xl tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                    ADD TO CART
                </button>
                <div className="text-white text-lg alt-font">CHARACTER SELECT</div>
                <div className="text-white text-sm mt-1">© 2026 SUPER DOPE</div>
            </div>
        </div>
    );
};

export default ShopPage;
