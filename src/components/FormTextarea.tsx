import React from 'react';
import { FieldError } from 'react-hook-form';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: FieldError;
  placeholder?: string;
  required?: boolean;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, required, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-slate-900 mb-2">
          {label}
          {required && <span className="text-amber-600 ml-1">*</span>}
        </label>
        <textarea
          ref={ref}
          className={`w-full p-4 rounded-lg border border-gray-200 
          focus:border-amber-500 focus:ring-1 focus:ring-amber-500 
          outline-none transition bg-white text-gray-900 
          placeholder-gray-400 resize-none ${error ? 'border-red-500' : ''} ${className || ''}`}
          rows={4}
          {...props}
        />
        {error && (
          <span className="text-red-500 text-sm mt-1 animate-fade-in">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
