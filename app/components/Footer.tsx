'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <motion.h3 
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              About Bilan Store
            </motion.h3>
            <motion.p 
              className="text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Your one-stop shop for all convenience store needs. We offer a wide range of snacks, drinks, toiletries, and household items.
            </motion.p>
          </div>
          
          {/* Quick Links */}
          <div>
            <motion.h3 
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Cart
                </Link>
              </li>
            </motion.ul>
          </div>
          
          {/* Contact */}
          <div>
            <motion.h3 
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h3>
            <motion.div 
              className="space-y-2 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>📞 (123) 456-7890</p>
              <p>✉️ info@bilanstore.com</p>
              <p>🏠 123 Shopping St, Retail City</p>
            </motion.div>
          </div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Bilan Store. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;