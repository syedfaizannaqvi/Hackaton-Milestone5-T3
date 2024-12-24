"use client";
import Image from "next/image";
import { shoes, mens, womens } from "../../data";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

// Helper function to get product by ID from all product arrays
const getProductById = (id: string) => {
  const allProducts = [...shoes, ...mens, ...womens];
  return allProducts.find((product) => product.id === id);
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: quantity,
    });
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-[1240px] min-h-screen mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {product.name}
            </h1>
            <p className="text-xl text-gray-700">{product.category}</p>
          </div>

          <div className="flex items-center">
            <p className="text-2xl font-medium">
              ₹ {product.price.toLocaleString()}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Select Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {[6, 7, 8, 9, 10, 11].map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 rounded-md py-3 hover:border-black transition-colors"
                >
                  UK {size}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <div className="w-1/2 sm:w-auto flex items-center gap-4">
                <p className="text-gray-900 whitespace-nowrap">Quantity:</p>
                <div className="flex-1 flex items-center justify-center gap-4 border border-gray-200 rounded-lg px-4 py-2">
                  <button
                    onClick={decreaseQuantity}
                    className="text-gray-500 hover:text-primary-dark transition-colors"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="text-gray-500 hover:text-primary-dark transition-colors"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full sm:flex-1 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Product Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description ||
                `Turn style on its head with this crafted take on the 
              ${product.name}. Its "inside out"-inspired construction, including unique layering and 
              exposed foam accents, ups the ante on this timeless silhouette. Details like the 
              deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich 
              mixture of materials and aged midsole aesthetic give this release an artisan finish.`}
            </p>
          </div>

          {/* Delivery & Returns */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Free Delivery and Returns</h3>
            <p className="text-gray-700">
              Your order of ₹14,000 or more gets free standard delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}