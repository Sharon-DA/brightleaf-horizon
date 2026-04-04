'use client';

import React, { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
  autoCloseDuration?: number;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  message = "Thank you! We'll contact you shortly.",
  autoCloseDuration = 4000,
}) => {
  useEffect(() => {
    if (isOpen && autoCloseDuration) {
      const timer = setTimeout(onClose, autoCloseDuration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseDuration, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-white rounded-2xl p-8 shadow-2xl z-50 max-w-md w-full mx-4 animate-slide-up-fade-in"
      >
        {/* Checkmark Icon */}
        <div className="flex justify-center mb-4">
          <div
            className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center 
            animate-scale-up"
          >
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
          Success!
        </h3>
        <p className="text-gray-600 text-center mb-6">{message}</p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 
          transition-colors font-medium"
        >
          Close
        </button>
      </div>
    </>
  );
};

export default SuccessModal;
