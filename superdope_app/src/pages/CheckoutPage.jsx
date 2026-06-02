import { useCart } from '../App';

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-4">
          {cart.map(item => (
            <div key={`${item.id}-${item.weight}`} className="flex justify-between">
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-400">{item.weight}g</p>
              </div>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4 flex justify-between font-bold text-lg">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Pay with Card
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Pay with Crypto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
