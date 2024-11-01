import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { motion, AnimatePresence } from 'framer-motion'

export function ShoppingCart() {
    const { items, isOpen, setIsCartOpen, updateQuantity, removeItem } = useCartStore();

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />

            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md">
                    <div className="h-full flex flex-col bg-white shadow-xl">
                        {/* Header */}
                        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center">
                                    <ShoppingBag className="h-6 w-6 text-indigo-600" />
                                    <h2 className="ml-2 text-lg font-medium text-gray-900">Shopping Cart</h2>
                                    <span className="ml-2 text-sm text-gray-600">
                                        ({items.length} {items.length === 1 ? 'item' : 'items'})
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="ml-3 h-7 w-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Cart items */}
                            <div className="mt-8">
                                <div className="flow-root">
                                    <AnimatePresence initial={false}>
                                        <ul className="divide-y divide-gray-200">
                                            {items.map((item) => (
                                                <li key={item.id} className="py-6 flex">
                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                <h3 className="line-clamp-1">{item.title}</h3>
                                                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                                            </div>
                                                            <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                                                                {item.category}
                                                            </p>
                                                        </div>

                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                            <div className="flex items-center space-x-2">
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                                                    className="p-1 rounded-full hover:bg-gray-100"
                                                                >
                                                                    <Minus className="h-4 w-4" />
                                                                </button>
                                                                <span className="font-medium w-8 text-center">
                                                                    {item.quantity}
                                                                </span>
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                    className="p-1 rounded-full hover:bg-gray-100"
                                                                >
                                                                    <Plus className="h-4 w-4" />
                                                                </button>
                                                            </div>

                                                            <button
                                                                type="button"
                                                                onClick={() => removeItem(item.id)}
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>${total.toFixed(2)}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                                Shipping and taxes calculated at checkout.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}