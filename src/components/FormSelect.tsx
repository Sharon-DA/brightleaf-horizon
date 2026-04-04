import React from 'react';
import { FieldError } from 'react-hook-form';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: FieldError;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
}

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, options, required, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-slate-900 mb-2">
          {label}
          {required && <span className="text-amber-600 ml-1">*</span>}
        </label>
        <select
          ref={ref}
          className={`w-full p-4 rounded-lg border border-gray-200 
          focus:border-amber-500 focus:ring-1 focus:ring-amber-500 
          outline-none transition bg-white text-gray-900 
          appearance-none ${error ? 'border-red-500' : ''} ${className || ''}`}
          {...props}
        >
          {props.placeholder && (
            <option value="" disabled hidden>
              {props.placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-4 top-12 w-4 h-4 text-gray-600 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        {error && (
          <span className="text-red-500 text-sm mt-1 animate-fade-in">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';

export default FormSelect;
