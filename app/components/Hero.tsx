'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to Bilan Store
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-6 text-blue-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your convenient one-stop shop for essentials and goods!
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/products">
                <Button variant="secondary" size="lg">
                  Shop Now
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-600">
                View Offers
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative h-64 md:h-96 w-full">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg text-center relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-6 -right-6 text-4xl"
                  >
                    🛒
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Easy Shopping</h2>
                  <p className="text-lg">Essentials and Goods whatever you need MERON KAMI!!!!!</p>
                  <div className="flex justify-center mt-4 space-x-4 text-3xl">
                    <motion.span whileHover={{ scale: 1.2 }}>🍪</motion.span>
                    <motion.span whileHover={{ scale: 1.2 }}>🥤</motion.span>
                    <motion.span whileHover={{ scale: 1.2 }}>🧴</motion.span>
                    <motion.span whileHover={{ scale: 1.2 }}>🧹</motion.span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;