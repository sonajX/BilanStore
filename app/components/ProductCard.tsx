'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './Button';

interface Product {
    product_id: string;
    image?: string;
    brand: string;
    category: string;
    stock: number;
    description: string;
    size: string;
    price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
    const [isHovered, setIsHovered] = useState(false);

    if (!product) return null;

    return (
        <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <Link href={`/products/${product.product_id}`}>
                <div className="relative h-48 w-full">
                    <Image
                        src={product.image || "/api/placeholder/300/300"}
                        alt={product.brand}
                        layout="fill"
                        objectFit="contain"
                        className="p-4"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        {product.category}
                    </div>

                    {/* Stock Tag */}
                    {product.stock < 20 && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                            Low Stock!
                        </div>
                    )}
                </div>

                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.brand}</h3>
                    <p className="text-gray-600 text-sm mb-2 h-10 overflow-hidden">{product.description}</p>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-500 text-sm">{product.size}</span>
                        <span className="font-bold text-blue-600">${product.price.toFixed(2)}</span>
                    </div>
                </div>
            </Link>

            <div className="px-4 pb-4">
                <Button
                    variant="primary"
                    fullWidth
                    onClick={() => {
                        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault();
                        handleClick({ preventDefault: () => { } } as React.MouseEvent<HTMLButtonElement>);
                    }}
                >
                    Add to Cart
                </Button>
            </div>
        </motion.div>
    );
};

export default ProductCard;