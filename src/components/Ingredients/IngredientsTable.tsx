import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ingredientService, Ingredient } from '@/services/api';
import { Edit2, Save, X, AlertTriangle } from 'lucide-react';


const IngredientsTable: React.FC = () => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Ingredient>>({});
  const queryClient = useQueryClient();

  const { data: ingredients, isLoading } = useQuery({
    queryKey: ['ingredients'],
    queryFn: () => ingredientService.getAll(),
  });

  const updateMutation = useMutation({
  mutationFn: (ingredient: Ingredient) =>
    ingredientService.update(ingredient),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['ingredients'] });
    setEditingId(null);
    setEditForm({});
  },
});

  const startEditing = (ingredient: Ingredient) => {
  setEditingId(ingredient.id);
  setEditForm({ ...ingredient }); // store everything, not just quantity
};


  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  /*
  const saveEditing = (ingredient: Ingredient) => {
  if (editForm.quantity === undefined) return;

  const updatedIngredient: Ingredient = {
    ...ingredient,
    quantity: editForm.quantity, // override quantity // verify this logic later
  };

  updateMutation.mutate(updatedIngredient); // pass the full object
};
*/  
const saveEditing = () => {
  if (!editForm.id || editForm.quantity === undefined) return;

  updateMutation.mutate(editForm as Ingredient);
};


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Ingredients Inventory</h2>
        <p className="text-gray-600 text-sm mt-1">Manage your bakery ingredients stock levels</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ingredient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Minimum Required
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ingredients?.map(ingredient => {
              const isLowStock = ingredient.quantity <= ingredient.min_quantity;
              const isEditing = editingId === ingredient.id;
              
              return (
                <tr key={ingredient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{ingredient.name}</div>
                      <div className="text-sm text-gray-500">Unit: {ingredient.unit}</div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing ? (
                      <input
                        type="number"
                        value={editForm.quantity || ''}
                        onChange={(e) =>
  setEditForm((prev) => ({
    ...prev,
    quantity: Number(e.target.value),
  }))
}

                        className="w-32 px-2 py-1 border rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    ) : (
                      <span className="text-sm text-gray-900">{ingredient.quantity} {ingredient.unit}</span>
                    )}
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{ingredient.min_quantity} {ingredient.unit}</span>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLowStock ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        Low Stock
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        In Stock
                      </span>
                    )}
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {isEditing ? (
  <div className="flex space-x-2">
    <button
      onClick={saveEditing} // pass the full object
      disabled={updateMutation.isPending}
      className="inline-flex items-center px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
    >
      <Save className="w-3 h-3 mr-1" />
      Save
    </button>
    <button
      onClick={cancelEditing}
      className="inline-flex items-center px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
    >
      <X className="w-3 h-3 mr-1" />
      Cancel
    </button>
  </div>
) : (
  <button
    onClick={() => startEditing(ingredient)}
    className="inline-flex items-center px-3 py-1 bg-amber-600 text-white rounded hover:bg-amber-700"
  >
    <Edit2 className="w-3 h-3 mr-1" />
    Update Stock
  </button>
)}

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IngredientsTable;