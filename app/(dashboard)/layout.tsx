export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar will be added here */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
} 