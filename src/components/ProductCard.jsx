import { useState } from "react";
import { ShoppingCart, Star, Loader2 } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        )}
        <img
          src={product.thumbnail}
          alt={product.title}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {product.discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            -{Math.round(product.discountPercentage)}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2 h-12">
          {product.title}
        </h3>
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
            ({product.stock} in stock)
          </span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ${product.price}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
