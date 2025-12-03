export default function ChartCard({ title }: { title: string }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 border mt-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-500 text-sm">Chart coming soon...</p>
    </div>
  );
}
