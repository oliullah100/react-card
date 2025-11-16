import React, { useState } from 'react';
import { useCart } from './CartContext';

const Card = ({ id, title, price, description, stock, category = "Home & Living", imageUrl }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ id, title, price: parseFloat(price), imageUrl }, quantity);
        setQuantity(1);
    };

    return (
        <div className="bg-gray-800 rounded-2xl overflow-hidden group shadow-lg">
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute top-3 right-3 bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full border border-gray-700">
                    {stock} IN STOCK
                </span>
            </div>

            <div className="p-6 space-y-3 text-left">
                <p className="text-xs font-medium text-gray-300 uppercase tracking-wider">{category}</p>
                <h3 className="text-xl font-bold text-white line-clamp-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-tight line-clamp-2">{description}</p>
                <p className="text-2xl font-bold text-white">${price}</p>

                <div className="flex items-center gap-3">
                    <label className="text-sm text-gray-400 whitespace-nowrap">Quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        min={1}
                        className="w-20 bg-gray-900 text-white text-sm font-medium rounded-xl px-4 py-2 text-center border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 [appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
                    />
                </div>

                <button
                    onClick={handleAddToCart}
                    className="w-full bg-cyan-500 cursor-pointer hover:bg-cyan-400 text-gray-900 font-semibold py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-center"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;