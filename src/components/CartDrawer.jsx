import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Shopping Cart
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Your cart is empty
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b border-gray-50 dark:border-gray-700 pb-4"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-bold">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          -
                        </button>
                        <span className="px-3 dark:text-gray-100">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
