'use client';

import { useParams } from 'next/navigation';
import { getProductById } from '@/app/data/products';
import { notFound } from 'next/navigation';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id as string);

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl w-full">
        <img
          src={product.image}
          alt={product.brand}
          className="rounded mb-6 w-full h-64 object-cover"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.brand}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="text-gray-500 mb-2">Size: {product.size}</div>
        <div className="text-gray-500 mb-2">Stock: {product.stock}</div>
        <p className="text-2xl font-bold text-blue-600 mb-6">${product.price.toFixed(2)}</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
