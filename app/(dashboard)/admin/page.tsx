import { Metadata } from 'next';
import { DashboardActions } from '@/components/dashboard/dashboard-actions';

export const metadata: Metadata = {
  title: 'Admin Dashboard | MyEcom',
  description: 'Admin dashboard for managing products, orders, and users',
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <DashboardActions />
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Products</h3>
          <p className="mt-2 text-3xl font-semibold">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
          <p className="mt-2 text-3xl font-semibold">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
          <p className="mt-2 text-3xl font-semibold">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
          <p className="mt-2 text-3xl font-semibold">$0</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-medium">Recent Activity</h2>
          <div className="mt-4">
            <p className="text-gray-500">No recent activity to display</p>
          </div>
        </div>
      </div>
    </div>
  );
} 