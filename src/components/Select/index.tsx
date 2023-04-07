import type { SelectHTMLAttributes, ForwardedRef } from "react";
import React, { forwardRef } from "react";

const Select = forwardRef(({ label, name, error, options, ...rest }: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  return (
    <div className="grid gap-2">
      <div className="flex justify-between">
        {label && (
          <label htmlFor={name} className="block text-sm font-medium text-white">
            {label}
          </label>
        )}
      </div>
      <select
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        ref={ref}
        name={name}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-600 mbs-2">{error}</p>}
    </div>
  );
});

Select.displayName = "Select";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}

export default Select;
