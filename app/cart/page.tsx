'use client';

import { motion } from 'framer-motion';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const mockCartItems = [
  { id: 1, name: 'Chocolate Chip Cookies', quantity: 2, price: 4.99, emoji: '🍪' },
  { id: 2, name: 'Orange Juice', quantity: 1, price: 3.49, emoji: '🥤' },
  { id: 3, name: 'Body Lotion', quantity: 1, price: 7.99, emoji: '🧴' }
];

const CartPage = () => {
  const total = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Shopping Cart
          </motion.h1>

          <motion.div
            className="bg-white text-gray-800 rounded-xl shadow-lg p-6 md:p-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {mockCartItems.length === 0 ? (
              <p className="text-center text-lg">Your cart is empty 😢</p>
            ) : (
              <>
                <div className="space-y-4">
                  {mockCartItems.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <CartItem item={item} />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 border-t pt-6 flex justify-between items-center">
                  <span className="text-xl font-semibold">Total:</span>
                  <span className="text-xl font-bold">${total.toFixed(2)}</span>
                </div>

                <div className="mt-6 flex justify-end">
                  <Button size="lg" variant="secondary">
                    Proceed to Checkout
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
