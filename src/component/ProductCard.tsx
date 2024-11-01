import { ShoppingCart, Star } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import type { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative h-48 overflow-hidden group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wider">
            {product.category}
          </p>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span className="text-sm text-gray-600">4.5</span>
          </div>
        </div>

        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}