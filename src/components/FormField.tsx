interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}

export const FormField = ({ label, id, type = "text", placeholder }: FormFieldProps) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-[10px] font-bold text-gray-500 uppercase tracking-wider ml-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full bg-gray-100 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
    />
  </div>
);