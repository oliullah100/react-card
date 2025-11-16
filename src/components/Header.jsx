import React, { useState } from 'react';
import CartDrawer from './CartDrawer';
import { useCart } from './CartContext';

const Header = () => {
    const { totalItems } = useCart();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <div className="max-w-7xl bg-gray-800 rounded-2xl p-6 mb-8">
                <div className="w-full bg-[#050B1A] p-6 md:p-10 rounded-2xl">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-1 text-left">
                            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-400 mb-3">
                                Curated Objects
                            </p>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                                <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 md:mb-0">
                                    Lumen Supply Co.
                                </h1>
                                <button
                                    onClick={() => setIsDrawerOpen(true)}
                                    className="hidden md:flex cursor-pointer bg-[#00B7FF] text-black font-semibold py-3 px-6 rounded-2xl items-center gap-3 shadow-sm hover:bg-[#00a8ea] transition ml-auto"
                                >
                                    View cart
                                    <span className="bg-black text-white text-sm px-3 py-1 rounded-xl">
                                        {totalItems} items
                                    </span>
                                </button>
                            </div>
                            <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl mt-4 md:mt-2">
                                Discover daily essentials crafted by independent makers. Add what you love
                                to your cart and keep shopping—your picks stay saved thanks to local storage.
                            </p>
                        </div>
                        <div className="md:hidden w-full">
                            <button
                                onClick={() => setIsDrawerOpen(true)}
                                className="w-full cursor-pointer bg-[#00B7FF] text-black font-semibold py-3 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-sm hover:bg-[#00a8ea] transition"
                            >
                                View cart
                                <span className="bg-black text-white text-sm px-3 py-1 rounded-xl">
                                    {totalItems} items
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
};

export default Header;