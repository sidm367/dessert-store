// src/components/Orders/OrdersList.tsx
/*
'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, User, Package, DollarSign } from 'lucide-react';

interface Order {
  id: number;
  totalPrice: number;
  dateTime: string;
  user: {
    username: string;
  };
  shoppingCart: {
    cartItems: any[];
  };
}

export default function OrdersList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch orders:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Orders</h2>
        
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {order.user.username}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(order.dateTime).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Package className="w-4 h-4 mr-1" />
                      {order.shoppingCart.cartItems?.length || 0} items
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-gray-500" />
                  <span className="text-xl font-bold text-amber-700">
                    ${order.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {orders.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No orders yet</h3>
            <p className="text-gray-500">Orders will appear here once placed.</p>
          </div>
        )}
      </div>
    </div>
  );
}
  */
 'use client';
import React from 'react';

export default function OrdersList() {
  return <div>OrdersList works</div>;
}
