'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { categories, getProductsByCategory } from '../data/products';  // Import data (adjust the import path)

const CategoryList = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelected(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Shop by Category</h2>
          <p className="text-gray-600">Find what you need by exploring our product categories</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const isSelected = selected === category.id;
            const productsInCategory = getProductsByCategory(category.id);

            return (
              <motion.button
                type="button"
                key={category.id}
                onClick={() => handleSelect(category.id)}
                className={`transition border rounded-xl p-6 flex flex-col items-center shadow-sm focus:outline-none
                  ${isSelected ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-gray-50 hover:bg-blue-50 text-gray-700'}
                `}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-4xl mb-3">{category.icon}</span>
                <h3 className="text-lg font-medium">{category.name}</h3>
                <p className="text-sm text-gray-500">{productsInCategory.length} Products</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
