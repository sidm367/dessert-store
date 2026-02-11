'use client';

import React from 'react';
import IngredientsTable from '@/components/Ingredients/IngredientsTable';
import {Package} from 'lucide-react';

export default function IngredientsPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <Package className="w-8 h-8 text-amber-600" />
          <h1 className="text-3xl font-bold text-gray-900">Ingredients Management</h1>
        </div>
        <p className="text-gray-600">Monitor and update ingredient stock levels</p>
      </div>
      <IngredientsTable />
    </div>
  );
}