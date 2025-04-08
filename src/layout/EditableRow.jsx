function EditableRow({ label, name, value, onChange }) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <p className="font-medium text-gray-600">{label}:</p>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="text-right font-semibold border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#FB8E0B]"
      />
    </div>
  );
}

export default EditableRow