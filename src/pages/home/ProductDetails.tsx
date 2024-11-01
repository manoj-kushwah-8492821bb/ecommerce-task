import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Star } from 'lucide-react';
import { Reviews } from '../../component/Reviews';
import { useCartStore } from '../../store/useCartStore';
import { getProductById } from '../../api/productApi';
import Header from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import { ShoppingCart } from '../../component/ShoppingCart';

export function ProductDetails() {
    const { id } = useParams();
    const addItem = useCartStore((state) => state.addItem);

    const { data: product, isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductById(Number(id)),
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
                    <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
                    <Link
                        to="/"
                        className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Link
                    to="/"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500 mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to products
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                            <p className="mt-2 text-sm text-indigo-600 font-medium uppercase tracking-wide">
                                {product.category}
                            </p>
                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
                                    />
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-500">
                                Based on reviews
                            </span>
                        </div>

                        <p className="text-gray-700 text-lg">{product.description}</p>

                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900">
                                ${product.price}
                            </span>
                            <button
                                onClick={() => addItem(product)}
                                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </button>
                        </div>

                        {/* Product Features */}
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Premium quality materials</li>
                                <li>Carefully crafted design</li>
                                <li>Built to last</li>
                                <li>30-day money-back guarantee</li>
                            </ul>
                        </div>

                        {/* Shipping Info */}
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Shipping & Returns
                            </h3>
                            <p className="text-gray-600">
                                Free shipping on orders over $100. Returns accepted within 30 days.
                                See our full shipping and returns policy for more details.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-16">
                    <Reviews productId={product.id} />
                </div>
            </div>

            <ShoppingCart />
            <Footer />
        </div>
    );
}