import React from 'react';
import { useCart } from './CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
    const { cart, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40 transition-all duration-300"
                onClick={onClose}
            />

            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-2xl z-50 overflow-y-auto">
                <div className="p-6 border-b border-gray-800">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">CART</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition cursor-pointer">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-cyan-400 mt-1">{totalItems} Item{totalItems !== 1 ? 's' : ''}</p>
                </div>

                <div className="p-6 space-y-4 flex-1">
                    {cart.length === 0 ? (
                        <p className="text-center text-gray-500">Your cart is empty</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex gap-4 bg-gray-800 rounded-xl p-4">
                                <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                                <div className="flex-1">
                                    <h4 className="font-medium text-white text-sm line-clamp-1">{item.title}</h4>
                                    <p className="text-cyan-400 text-sm">${item.price.toFixed(2)}</p>

                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-8 h-8 cursor-pointer rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition"
                                        >
                                            −
                                        </button>
                                        <span className="w-12 text-center text-white">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-8 h-8 cursor-pointer rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition"
                                        >
                                            +
                                        </button>
                                        <span className="text-xs text-gray-500 ml-2">Max {item.stock} available</span>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-xs text-red-400 hover:text-red-300 mt-2 cursor-pointer"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <p className="text-sm font-medium text-white">
                                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="border-t border-gray-800 p-6 space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Items</span>
                            <span className="text-white">{totalItems}</span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold">
                            <span className="text-white">Total</span>
                            <span className="text-cyan-400">${totalPrice}</span>
                        </div>

                        <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-3 rounded-full transition cursor-pointer">
                            Checkout (demo)
                        </button>

                        <button
                            onClick={clearCart}
                            className="w-full bg-gray-800 hover:bg-gray-700 text-gray-400 font-medium py-2 rounded-full transition text-sm cursor-pointer"
                        >
                            Clear cart
                        </button>

                        <p className="text-xs text-center text-gray-500">
                            Totals update instantly thanks to useMemo in the cart context.
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;