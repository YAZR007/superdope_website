
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React, { createContext, useContext, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';
import MenuPage from './pages/MenuPage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import { Howl } from 'howler';
import MediaComingSoon from './pages/MediaComingSoon';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import AgeVerification from './components/AgeVerification';

const TransitionContext = createContext(null);
const SoundContext = createContext(null);
const CartContext = createContext(null);

export const useTransitionNavigate = () => useContext(TransitionContext);
export const useSound = () => useContext(SoundContext);
export const useCart = () => useContext(CartContext);

// Sound setup
const hoverSound = new Howl({ src: ['/47313572-ui-sounds-pack-5-2-359749.mp3'] });
const clickSound = new Howl({ src: ['/ribhavagrawal-coin-recieved-230517.mp3'] });
const backgroundMusic = new Howl({
  src: ['/musicwallah-hyper-pop-anime-music-no-copyright-390088.mp3'],
  loop: true,
  volume: 0.5,
});

export const products = [
  {
    id: 1,
    name: 'OG Kush Resin',
    category: 'Vapes',
    price: 45,
    type: 'Resin Vape',
    thc: '85%',
    cbd: '1%',
    strainType: 'Indica',
    effects: ['Potent', 'Relaxing', 'Euphoric'],
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/1000040341-removebg-preview.png?raw=true'
  },
  {
    id: 2,
    name: 'Sour Diesel Resin',
    category: 'Vapes',
    price: 48,
    type: 'Resin Vape',
    thc: '88%',
    cbd: '< 1%',
    strainType: 'Sativa',
    effects: ['Energetic', 'Uplifting', 'Creative'],
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/1000040341-removebg-preview.png?raw=true'
  },
  {
    id: 3,
    name: 'Blue Dream Resin',
    category: 'Vapes',
    price: 42,
    type: 'Resin Vape',
    thc: '82%',
    cbd: '2%',
    strainType: 'Hybrid',
    effects: ['Balanced', 'Uplifting', 'Calming'],
    imageUrl: 'https://raw.githubusercontent.com/YAZR007/superdope_website/main/1000040341-removebg-preview.png?raw=true'
  },
  {
    id: 4,
    name: 'Runtz',
    category: 'Carts',
    price: 35,
    type: 'Cartridge',
    thc: '90%',
    cbd: '1%',
    strainType: 'Hybrid',
    effects: ['Happy', 'Uplifted', 'Euphoric'],
    imageUrl: 'https://github.com/YAZR007/superdope_website/blob/main/1000040335-removebg-preview.png?raw=true'
  },
  {
    id: 5,
    name: 'Pineapple Express',
    category: 'Carts',
    price: 38,
    type: 'Cartridge',
    thc: '85%',
    cbd: '1%',
    strainType: 'Sativa',
    effects: ['Energetic', 'Uplifted', 'Focused'],
    imageUrl: 'https://github.com/YAZR007/superdope_website/blob/main/1000040335-removebg-preview.png?raw=true'
  },
  {
    id: 6,
    name: 'Mimosa',
    category: 'Carts',
    price: 36,
    type: 'Cartridge',
    thc: '87%',
    cbd: '1%',
    strainType: 'Sativa',
    effects: ['Happy', 'Uplifted', 'Energetic'],
    imageUrl: 'https://github.com/YAZR007/superdope_website/blob/main/1000040335-removebg-preview.png?raw=true'
  },
  {
    id: 7,
    name: 'Gelato',
    category: 'Carts',
    price: 40,
    type: 'Cartridge',
    thc: '92%',
    cbd: '1%',
    strainType: 'Hybrid',
    effects: ['Relaxed', 'Happy', 'Euphoric'],
    imageUrl: 'https://github.com/YAZR007/superdope_website/blob/main/1000040335-removebg-preview.png?raw=true'
  }
];

export const TransitionLink = ({ to, children, className }) => {
  const navigate = useTransitionNavigate();
  const { playClickSound } = useSound();

  const handleClick = (e) => {
    e.preventDefault();
    playClickSound();
    if (to.startsWith('http')) {
      window.open(to, '_blank');
    } else {
      navigate(to);
    }
  };

  return (
    <a href={to} className={className} onClick={handleClick} onMouseEnter={() => useSound().playHoverSound()}>
      {children}
    </a>
  );
};

function AnimatedRoutes() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const transitionTo = (path) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
      setIsTransitioning(false);
    }, 500); // Wait for turnOff
  };

  return (
    <TransitionContext.Provider value={transitionTo}>
      <div className={`h-full w-full flex flex-col ${isTransitioning ? 'animate-turnOff' : 'animate-turnOn'}`}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/shop" element={<ShopPage products={products} />} />
          <Route path="/product/:productId" element={<ProductPage products={products} />} />
          <Route path="/media" element={<MediaComingSoon />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} /> 
          <Route path="*" element={<IndexPage />} />
        </Routes>
      </div>
    </TransitionContext.Provider>
  );
}

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [cart, setCart] = useState([]);

  const handleVerification = () => {
    setIsVerified(true);
  };

  useEffect(() => {
    if (isVerified && soundEnabled) {
      backgroundMusic.play();
    } else {
      backgroundMusic.stop();
    }
    return () => backgroundMusic.stop();
  }, [isVerified, soundEnabled]);

  const playHoverSound = () => {
    if (soundEnabled) {
      hoverSound.play();
    }
  };

  const playClickSound = () => {
    if (soundEnabled) {
      clickSound.play();
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const addToCart = (product, weight, quantity = 1) => {
    setCart(prevCart => {
        const existingProduct = prevCart.find(item => item.id === product.id && item.weight === weight);
        if (existingProduct) {
            return prevCart.map(item => 
                item.id === product.id && item.weight === weight 
                ? { ...item, quantity: item.quantity + quantity } 
                : item
            );
        } else {
            return [...prevCart, { ...product, weight, quantity }];
        }
    });
  };

  const removeFromCart = (productId, weight) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === productId && item.weight === weight)));
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
  }

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playHoverSound, playClickSound }}>
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, isCartOpen, toggleCart }}>
            <HashRouter>
              { !isVerified ?
                <AgeVerification onVerified={handleVerification} /> :
                (
                  <div id="root-render-node" className="bg-black text-white h-full w-full flex flex-col font-['Jersey_20']">
                    <div className="flex h-full w-full flex-col shadow-[0_0_10px_0_#000_inset]">
                        <div className="tv-wrapper relative z-20 mx-4 mt-4 flex select-none flex-col overflow-hidden rounded-3xl bg-black flex-1 min-h-0">
                        <main id="mainContainer" className="pointer-events-auto relative flex h-full w-full flex-col overflow-hidden">
                            <AnimatedRoutes />
                        </main>
                        </div>
                        <Navbar />
                        <Cart />
                    </div>
                  </div>
                )
              }
            </HashRouter>
        </CartContext.Provider>
    </SoundContext.Provider>
  );
}

export default App;
