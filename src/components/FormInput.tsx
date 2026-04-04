import React from 'react';
import { FieldError } from 'react-hook-form';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  icon?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, icon, required, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-slate-900 mb-2">
          {label}
          {required && <span className="text-amber-600 ml-1">*</span>}
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full p-4 ${
              icon ? 'pl-10' : ''
            } rounded-lg border border-gray-200 
            focus:border-amber-500 focus:ring-1 focus:ring-amber-500 
            outline-none transition bg-white text-gray-900 
            placeholder-gray-400 ${error ? 'border-red-500' : ''} ${className || ''}`}
            {...props}
          />
        </div>
        {error && (
          <span className="text-red-500 text-sm mt-1 animate-fade-in">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;
