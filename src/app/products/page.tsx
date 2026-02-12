'use client';
import React, { useEffect } from 'react';
import ProductList from '@/components/products/ProductList'; 

export default function ProductsPage() {
useEffect(() => {
    console.log("ProductsPage mounted");
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ProductList />
    </main>
  );
}
