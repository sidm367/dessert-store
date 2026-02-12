'use client';

import React from 'react';
import OrdersList from '@/components/Orders/OrdersList';
import { ListOrdered } from 'lucide-react';

export default function OrdersPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <ListOrdered className="w-8 h-8 text-amber-600" />
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
        </div>
        <p className="text-gray-600">View and manage customer orders</p>
      </div>
      <OrdersList />
    </div>
  );
}