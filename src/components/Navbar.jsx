import { useState } from "react";
import { ShoppingCart, Sun, Moon } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const { cartCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <ShoppingCart className="w-8 h-8 text-blue-500" />
            ShopHub
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
