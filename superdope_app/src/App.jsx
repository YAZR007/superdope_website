import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';
import MenuPage from './pages/MenuPage';
import { Howl } from 'howler';

const TransitionContext = createContext(null);
const SoundContext = createContext(null);

export const useTransitionNavigate = () => useContext(TransitionContext);
export const useSound = () => useContext(SoundContext);

// Sound setup
const hoverSound = new Howl({ src: ['/47313572-ui-sounds-pack-5-2-359749.mp3'] });
const clickSound = new Howl({ src: ['/ribhavagrawal-coin-recieved-230517.mp3'] });
const backgroundMusic = new Howl({
  src: ['/musicwallah-hyper-pop-anime-music-no-copyright-390088.mp3'],
  loop: true,
  volume: 0.5,
});

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
          <Route path="*" element={<IndexPage />} />
        </Routes>
      </div>
    </TransitionContext.Provider>
  );
}

function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    if (soundEnabled) {
      backgroundMusic.play();
    } else {
      backgroundMusic.stop();
    }
    return () => backgroundMusic.stop();
  }, [soundEnabled]);

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

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playHoverSound, playClickSound }}>
      <BrowserRouter>
        <div id="root-render-node" className="bg-black text-white h-full w-full flex flex-col font-['Jersey_20']">
          <div className="flex h-full w-full flex-col shadow-[0_0_10px_0_#000_inset]">
            <div className="tv-wrapper relative z-20 mx-4 mt-4 flex select-none flex-col overflow-hidden rounded-3xl bg-black flex-1 min-h-0">
              <main id="mainContainer" className="pointer-events-auto relative flex h-full w-full flex-col overflow-hidden">
                <AnimatedRoutes />
              </main>
            </div>
            <Navbar />
          </div>
        </div>
      </BrowserRouter>
    </SoundContext.Provider>
  );
}

export default App;