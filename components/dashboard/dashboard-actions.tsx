'use client';

import { useState } from 'react';
import { AddProductDialog } from '@/components/dashboard/add-product-dialog';

export function DashboardActions() {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  return (
    <>
      <div className="flex space-x-4">
        <button
          onClick={() => setIsAddProductOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Add Product
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          New Order
        </button>
      </div>

      <AddProductDialog
        isOpen={isAddProductOpen}
        onClose={() => setIsAddProductOpen(false)}
      />
    </>
  );
} 