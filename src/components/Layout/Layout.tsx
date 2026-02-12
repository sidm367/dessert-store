'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Package, Cake, ListOrdered } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { totalItems } = useCart();

  const navItems = [
    { href: '/', label: 'Products', icon: <Cake className="w-4 h-4" /> },
    { href: '/ingredients', label: 'Ingredients', icon: <Package className="w-4 h-4" /> },
    { href: '/orders', label: 'Orders', icon: <ListOrdered className="w-4 h-4" /> },
    { href: '/cart', label: 'Cart', icon: <ShoppingCart className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-amber-800">
                Sweet Bakery
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 hover:text-amber-800 hover:bg-amber-50 transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.href === '/cart' && totalItems > 0 && (
                    <span className="ml-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>© 2024 Sweet Bakery Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;