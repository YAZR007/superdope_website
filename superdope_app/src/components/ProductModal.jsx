import React, { useState } from 'react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [selectedWeight, setSelectedWeight] = useState('3.5g');

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, selectedWeight);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="product-card-modal bg-black border-2 border-purple-500 rounded-lg p-8 max-w-2xl w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-contain mb-4" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold alt-font glow-white">{product.name}</h2>
            <p className="text-purple-400 gameplay">{product.type}</p>
            <div className="flex justify-between my-4 gameplay">
              <span>THC: {product.thc}</span>
              <span>CBD: {product.cbd}</span>
            </div>
            <div className="my-4">
              <h3 className="font-bold gameplay">Effects:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.effects.map(effect => (
                  <span key={effect} className="bg-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full gameplay">{effect}</span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm japanese">{product.description}</p>
            <div className="my-4">
                <h3 className="font-bold gameplay">Weight:</h3>
                <div className="flex gap-4 mt-2">
                    {['3.5g', '7g', '14g', '28g'].map(weight => (
                        <button key={weight} onClick={() => setSelectedWeight(weight)} className={`px-4 py-2 rounded-lg ${selectedWeight === weight ? 'bg-purple-600' : 'bg-gray-700'}`}>
                            {weight}
                        </button>
                    ))}
                </div>
            </div>
            <button onClick={handleAddToCart} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
