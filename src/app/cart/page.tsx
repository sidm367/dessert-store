'use client';

import React from 'react';
import CartSummary from '@/components/Cart/CartSummary';
import { ShoppingCart } from 'lucide-react';

// src/app/cart/page.tsx
export default function CartPage() {
  return (
     <main className="max-w-3xl mx-auto p-6">
      <CartSummary />
    </main>
  );
}