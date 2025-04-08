function StaticRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <p className="font-medium text-gray-600">{label}:</p>
      <p className="font-semibold text-right">{value}</p>
    </div>
  );
}

export default StaticRow