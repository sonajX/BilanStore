'use client';

import { motion } from 'framer-motion';

type CartItemProps = {
  item: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    emoji: string;
  };
};

const CartItem = ({ item }: CartItemProps) => {
  return (
    <motion.div
      className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-4">
        <div className="text-3xl">{item.emoji}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
        </div>
      </div>
      <div className="text-right font-medium text-gray-800">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </motion.div>
  );
};

export default CartItem;
