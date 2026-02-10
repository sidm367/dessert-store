'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartSummary() {
  const { items, totalPrice, clearCart, updateQuantity, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h3>
        <p className="text-gray-500 mb-6">Add some delicious bakery items!</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
        <button
          onClick={clearCart}
          className="flex items-center space-x-1 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear Cart</span>
        </button>
      </div>

      <div className="space-y-4">
        {items.map(item => (
          <div key={item.product.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{item.product.name}</h4>
              <p className="text-sm text-gray-500">${item.product.price.toFixed(2)} each</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-12 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              
              <span className="font-medium w-24 text-right">
                ${(item.product.price * item.quantity).toFixed(2)}
              </span>
              
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="p-2 text-gray-400 hover:text-red-500"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t">
        <div className="flex justify-between items-center text-lg">
          <span className="text-gray-600">Total:</span>
          <span className="text-2xl font-bold text-amber-700">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        
        <div className="mt-8 space-y-4">
          <button
            onClick={() => alert('Checkout not implemented yet')}
            className="block w-full text-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
          >
            Proceed to Checkout
          </button>
          <Link
            href="/"
            className="block w-full text-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}