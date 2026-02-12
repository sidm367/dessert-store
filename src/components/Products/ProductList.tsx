'use client';

import React, { useEffect, useState } from 'react';
import { productService } from '@/services/api';
import { Product } from '@/services/api';
import ProductCard from './ProductCard';
import ProductFormModal from './ProductFormModal';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all products
  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await productService.getAll();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await productService.delete(id);
      await loadProducts();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleSave = async (formData: any) => {
    try {
      if (formData.id) {
        await productService.update(formData);
      } else {
        await productService.save(formData);
      }
      setIsModalOpen(false);
      setSelectedProduct(null);
      loadProducts();
    } catch (err) {
      console.error("Save failed", err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Products</h2>

        <button
          className="px-4 py-2 bg-green-700 text-white rounded"
          onClick={() => {
            setSelectedProduct(null);
            setIsModalOpen(true);
          }}
        >
          + Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={() => {
              setSelectedProduct(product);
              setIsModalOpen(true);
            }}
            onDelete={() => handleDelete(product.id)}
          />
        ))}
      </div>

      {isModalOpen && (
        <ProductFormModal
          product={selectedProduct}
          onSave={handleSave}
          onClose={() => {
            setSelectedProduct(null);
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
}
