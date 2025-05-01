'use client';

import Link from 'next/link';
import { products } from '@/app/data/products';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Products
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.product_id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <img
                src={product.image}
                alt={product.brand}
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h2 className="text-lg font-semibold text-gray-800">{product.brand}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-blue-600 font-bold mt-2">
                {new Intl.NumberFormat('en-PH', {
                  style: 'currency',
                  currency: 'PHP',
                }).format(product.price)}
              </p>
              <Link
                href={`/products/${product.product_id}`}
                className="inline-block mt-3 text-sm font-medium text-blue-500 hover:underline"
              >
                View Details →
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/products">
            <Button variant="secondary" size="lg">
              View All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
