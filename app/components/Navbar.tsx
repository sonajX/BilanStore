'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      className="bg-white shadow-md py-4 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{ rotate: 10 }}
            className="text-2xl font-bold text-blue-600 mr-2"
          >
            🏪
          </motion.div>
          <motion.h1 
            className="text-xl md:text-2xl font-bold text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            Bilan Store
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">


          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>


          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Products
          </Link>


          {/* Cart Items */}
          <Link href="/cart" className="relative">
            <span className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <span className="flex items-center">

                {/* Cart Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>

                {/* Number of Items in the Cart */}
                <motion.span 
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  0
                </motion.span>
              </span>
            </span>
          </Link>


        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-inner py-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link href="/" 
              className="text-gray-700 hover:text-blue-600 py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link href="/products" 
              className="text-gray-700 hover:text-blue-600 py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link href="/cart" 
              className="text-gray-700 hover:text-blue-600 py-2 transition-colors duration-200 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-2">Cart</span>
              <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;