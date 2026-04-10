import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React, { createContext, useContext, useState } from 'react';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';
import MenuPage from './pages/MenuPage';

const TransitionContext = createContext(null);

export const useTransitionNavigate = () => useContext(TransitionContext);

export const TransitionLink = ({ to, children, className }) => {
  const navigate = useTransitionNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (to.startsWith('http')) {
      window.open(to, '_blank');
    } else {
      navigate(to);
    }
  };
  return (
    <a href={to} className={className} onClick={handleClick}>
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
  return (
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
  );
}

export default App;
