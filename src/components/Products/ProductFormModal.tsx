import React, { useState, useEffect } from 'react';
import { Product } from '@/services/api';

export default function ProductFormModal({
  product,
  onSave,
  onClose
}: {
  product: Product | null;
  onSave: (data: any) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    id: product?.id ?? null,
    name: product?.name ?? "",
    price: product?.price ?? 0,
    description: product?.description ?? "",
    weight: product?.weight ?? 0,
    unit: product?.unit ?? "",
    categoryId: product?.category?.id ?? "",
    image: product?.image ?? null
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = () => onSave(form);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-white text-black p-6 rounded-lg w-[400px]">

        <h3 className="text-xl font-bold mb-4">
          {form.id ? "Edit Product" : "Add New Product"}
        </h3>

        <div className="flex flex-col gap-3">
          <input className="p-2 border" name="name" value={form.name} placeholder="Name" onChange={handleChange} />

          <input className="p-2 border" name="price" value={form.price} type="number" placeholder="Price" onChange={handleChange} />

          <input className="p-2 border" name="description" value={form.description} placeholder="Description" onChange={handleChange} />

          <input className="p-2 border" name="weight" value={form.weight} type="number" placeholder="Weight" onChange={handleChange} />

          <input className="p-2 border" name="unit" value={form.unit} placeholder="Unit" onChange={handleChange} />

          <input className="p-2 border" name="categoryId" value={form.categoryId} type="number" placeholder="Category ID" onChange={handleChange} />
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button className="px-4 py-2 bg-gray-400 text-black rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={submit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
