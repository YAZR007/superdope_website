import React from 'react';
import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
  const cryptoOptions = [
    {
      name: 'Bitcoin',
      address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029'
    },
    {
      name: 'Ethereum',
      address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
      icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029'
    },
    {
      name: 'Dogecoin',
      address: 'D7yjjfE5A2Z3e4fE2fB8E21A1C3b4D5e6F7',
      icon: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=029'
    },
  ];

  const handleCopyAddress = (address) => {
    navigator.clipboard.writeText(address).then(() => {
      alert('Address copied to clipboard!');
    }, (err) => {
      alert('Failed to copy address: ', err);
    });
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Crypto Payment</h1>
      <p className="checkout-subtitle">Select a currency and send the total amount to the address below.</p>
      <div className="crypto-options">
        {cryptoOptions.map(crypto => (
          <div key={crypto.name} className="crypto-option">
            <img src={crypto.icon} alt={`${crypto.name} logo`} className="crypto-icon" />
            <div className="crypto-info">
              <h2 className="crypto-name">{crypto.name}</h2>
              <p className="crypto-address">{crypto.address}</p>
              <button className="copy-button" onClick={() => handleCopyAddress(crypto.address)}>
                Copy Address
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
