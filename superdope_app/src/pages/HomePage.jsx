import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div 
      className="h-screen w-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://github.com/YAZR007/superdope_website/blob/main/backgroundshop.jpg?raw=true')" }}
    >
      <h1 className="text-7xl font-bold alt-font glow-pink mb-8">Dankstar Dispensary</h1>
      <p className="text-2xl japanese mb-12">Your one-stop shop for the finest cannabis in the galaxy.</p>
      <Link to="/shop">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-2xl transition-transform duration-300 hover:scale-105">
          Enter the Shop
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
