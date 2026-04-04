"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import FormTextarea from "@/components/FormTextarea";
import SuccessModal from "@/components/SuccessModal";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  address: string;
  preferredTime: string;
  customDateTime?: string;
}

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      address: "",
      preferredTime: "",
      customDateTime: "",
    },
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const preferredTime = watch("preferredTime");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError("");

    if (!phone) {
      setPhoneError("Phone number is required");
      return;
    }

    setPhoneError("");
    setIsSubmitting(true);

    const finalData = {
      ...data,
      phone,
      customDateTime: data.preferredTime === "custom" ? data.customDateTime : "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const responseBody = await response.json().catch(() => null);

      if (!response.ok || !responseBody?.success) {
        throw new Error(
          responseBody?.error ||
            "We couldn\'t send your request right now. Please try again."
        );
      }

      setShowSuccessModal(true);
      reset();
      setPhone("");
      setPhoneError("");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn\'t send your request right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeOptions = [
    { value: "morning", label: "Morning (9 AM - 12 PM)" },
    { value: "afternoon", label: "Afternoon (12 PM - 5 PM)" },
    { value: "evening", label: "Evening (5 PM - 8 PM)" },
    { value: "custom", label: "Custom Time" },
  ];

  const infoCardDelayClasses = [
    "animate-delay-900",
    "animate-delay-1000",
    "animate-delay-1100",
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-white">
      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message="Thank you! We'll contact you shortly."
        autoCloseDuration={4000}
      />

      {/* Hero Section */}
      <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Request a Consultation
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you at your
              preferred time.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6 md:px-8">
          {/* Form Card */}
          <div
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 
            hover:shadow-lg hover:border-amber-200 transition-all duration-300 
            animate-slide-up-fade-in"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div className="animate-slide-up-fade-in animate-delay-100">
                <FormInput
                  label="Full Name"
                  placeholder="John Doe"
                  required
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  error={errors.fullName}
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  }
                />
              </div>

              {/* Email Address */}
              <div className="animate-slide-up-fade-in animate-delay-200">
                <FormInput
                  type="email"
                  label="Email Address"
                  placeholder="you@example.com"
                  required
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: emailPattern,
                      message: "Please enter a valid email address",
                    },
                  })}
                  error={errors.email}
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  }
                />
              </div>

              {/* Phone Number */}
              <div className="animate-slide-up-fade-in animate-delay-300">
                <label className="text-sm font-medium text-slate-900 mb-2 block">
                  Phone Number *
                </label>

                <PhoneInput
                  international
                  defaultCountry="US"
                  value={phone}
                  onChange={(value) => {
                    setPhone(value || "");
                    if (value) setPhoneError("");
                  }}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-slate-900 outline-none transition"
                />

                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                )}
              </div>

              {/* Company Name */}
              <div className="animate-slide-up-fade-in animate-delay-400">
                <FormInput
                  label="Company Name"
                  placeholder="Acme Inc."
                  required
                  {...register("companyName", {
                    required: "Company name is required",
                    minLength: {
                      value: 2,
                      message: "Company name must be at least 2 characters",
                    },
                  })}
                  error={errors.companyName}
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  }
                />
              </div>

              {/* Address */}
              <div className="animate-slide-up-fade-in animate-delay-500">
                <FormTextarea
                  label="Address"
                  placeholder="123 Main Street, Suite 100, New York, NY 10001"
                  required
                  {...register("address", {
                    required: "Address is required",
                    minLength: {
                      value: 10,
                      message: "Address must be at least 10 characters",
                    },
                  })}
                  error={errors.address}
                />
              </div>

              {/* Preferred Time */}
              <div className="animate-slide-up-fade-in animate-delay-600">
                <FormSelect
                  label="Preferred Time for Communication"
                  placeholder="Select a time option"
                  required
                  options={timeOptions}
                  {...register("preferredTime", {
                    required: "Please select a preferred time",
                  })}
                  error={errors.preferredTime}
                />
              </div>

              {/* Custom DateTime - Show only if "custom" selected */}
              {preferredTime === "custom" && (
                <div className="animate-slide-up-fade-in animate-delay-700">
                  <FormInput
                    type="datetime-local"
                    label="Custom Date and Time"
                    required
                    {...register("customDateTime", {
                      required:
                        preferredTime === "custom"
                          ? "Please select a date and time"
                          : false,
                    })}
                    error={errors.customDateTime}
                  />
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4 animate-slide-up-fade-in animate-delay-800">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 text-white font-semibold py-4 rounded-lg 
                  hover:bg-slate-800 hover:scale-105 transition-all duration-300 
                  active:scale-95 shadow-md hover:shadow-lg disabled:opacity-60 
                  disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>

              {submitError && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </div>
              )}

              {/* Privacy Note */}
              <div className="pt-2 text-center text-sm text-gray-500 flex items-center justify-center gap-2 animate-slide-up-fade-in animate-delay-900">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Your information is secure and will not be shared.
              </div>
            </form>
          </div>

          {/* Info Section Below Form */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📞",
                title: "Quick Response",
                description: "We respond to inquiries within 24 hours.",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                description: "Your data is encrypted and kept confidential.",
              },
              {
                icon: "✓",
                title: "Expert Team",
                description: "Speak with our experienced consultants.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`text-center p-4 md:p-6 animate-slide-up-fade-in ${infoCardDelayClasses[idx]}`}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;