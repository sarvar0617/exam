import React from "react";
import useCartStore from "../redux/cartStore";

const ShoppingCart = () => {
  const {
    items: cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();

  const total = cartItems.reduce(
    (sum, item) => Math.floor(sum + item.price * item.quantity),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Shopping Cart */}
        <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-2xl shadow">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
            Shopping Cart
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-wrap sm:flex-nowrap items-center justify-between border-b py-4 gap-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500">{item.id}</p>
                  </div>
                </div>

                <div className="flex flex-wrap min-[480px]:flex-nowrap items-center gap-4 w-full sm:w-auto  sm:justify-end">
                  <div className="flex items-center border rounded px-2">
                    <button
                      className="px-2 text-lg"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="px-2 text-lg"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-sm sm:text-base">
                    ${Math.floor(item.price * item.quantity)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 text-xl"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Order Summary
          </h2>

          <input
            type="text"
            placeholder="Discount code / Promo code"
            className="w-full border rounded-lg px-4 py-2 mb-4 text-sm"
          />

          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter Card Number"
              className="flex-1 border rounded-lg px-4 py-2 text-sm"
            />
            <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm">
              Apply
            </button>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping & Handling</span>
              <span>$29</span>
            </div>
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>${total + 50 + 29}</span>
          </div>

          <button className="w-full mt-6 bg-black text-white py-3 rounded-xl text-sm sm:text-base">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
