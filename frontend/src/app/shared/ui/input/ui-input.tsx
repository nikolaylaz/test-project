export interface UiInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}

export function UiInput({ label, placeholder, value, onChange }: UiInputProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
      />
    </div>
  );
}
