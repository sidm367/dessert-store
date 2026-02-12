import React from 'react';
import { Product } from '@/services/api';
import { Edit2, Trash2 } from 'lucide-react';

export default function ProductCard({
  product,
  onEdit,
  onDelete
}: {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="border border-gray-700 p-4 rounded-lg bg-black text-white">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-400">{product.description}</p>

      <p className="mt-2">💲 {product.price}</p>
      <p>Weight: {product.weight} {product.unit}</p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={onEdit}
          className="px-3 py-1 bg-blue-600 text-white rounded flex items-center gap-1"
        >
          <Edit2 size={16} />
          Edit
        </button>

        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-600 text-white rounded flex items-center gap-1"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
}
