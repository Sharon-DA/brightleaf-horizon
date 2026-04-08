"use client";

import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Home() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    reset();
    alert("Thank you! We'll connect with you shortly.");
  };

  return (
    <main className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl animate-fade-in">
          <p className="text-amber-300 font-semibold text-lg mb-4 tracking-wide uppercase animate-slide-up" style={{animationDelay: '0.1s'}}>Strategic Growth Partners</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Elevate Your Brand. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-200">Transform Your Market.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
            We translate complex market insights into compelling narratives that move audiences, build authority, and drive measurable growth.
          </p>
          <div className="flex gap-6 flex-wrap justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Link href="/contact">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 hover:scale-105 transition font-semibold flex items-center gap-2 group shadow-lg hover:shadow-xl">
                Book a Strategy Call
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - UPDATED FOR 2024 FOUNDING */}
      <section className="py-16 px-6 bg-slate-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center font-bold">
            <div><p className="text-4xl text-amber-600 mb-2">2+</p><p className="text-gray-700 font-normal tracking-tight">Years of Rapid Impact</p></div>
            <div><p className="text-4xl text-amber-600 mb-2">50+</p><p className="text-gray-700 font-normal tracking-tight">Growth Partnerships</p></div>
            <div><p className="text-4xl text-amber-600 mb-2">$50M+</p><p className="text-gray-700 font-normal tracking-tight">Client Capital Secured</p></div>
          </div>
        </div>
      </section>

      {/* About Section - Unique Home Content */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Why Brightleaf Horizon?</h2>
          <p className="text-xl text-gray-700 mb-8">We are more than consultants—we are partners in your growth journey. Our team brings together strategists, technologists, and creatives to deliver holistic solutions that drive real business outcomes.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-2">Strategic Vision</h3>
              <p className="text-gray-600">We help you see the big picture and chart a course for sustainable success in a competitive landscape.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-2">Technical Expertise</h3>
              <p className="text-gray-600">Our experience in SaaS, cloud, and emerging technologies ensures your solutions are future-ready and robust.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-2">Creative Impact</h3>
              <p className="text-gray-600">We craft compelling narratives and engaging experiences that connect with your audience and build lasting value.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section - FINAL POLISHED VERSION */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info Panel */}
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-slate-900 tracking-tight">Start Your Strategy Conversation</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ready to transform your brand? Visit us in Denver or reach out online to schedule your complimentary strategy call.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 text-xl shadow-sm">📍</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Our Office</h4>
                    <p className="text-gray-600 leading-snug">1801 California St, Denver, CO 80202</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 text-xl shadow-sm">🕒</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Business Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 10am – 5pm</p>
                    <p className="text-gray-600">Sat: 1pm – 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 text-xl shadow-sm">📞</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Direct Contact</h4>
                    <p className="text-gray-600">303-521-6710</p>
                    <p className="text-amber-600 font-medium break-all">brightleafhealth@brightleafh.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Container */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 tracking-tight">Send us a message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input 
                    {...register("name", { required: true })} 
                    placeholder="Your Name" 
                    className="w-full p-4 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition bg-white text-gray-900" 
                  />
                </div>
                <div>
                  <input 
                    {...register("email", { required: true })} 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-4 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition bg-white text-gray-900" 
                  />
                </div>
                <div>
                  <textarea 
                    {...register("message", { required: true })} 
                    placeholder="Tell us about your brand growth objectives..." 
                    className="w-full p-4 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition bg-white text-gray-900" 
                    rows={5} 
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition shadow-lg hover:shadow-xl active:scale-[0.98]"
                >
                  Schedule Consultation
                </button>
              </form>
              <div className="mt-6 grid grid-cols-2 gap-4 text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <div className="flex flex-col">
                  <span>Response Time</span>
                  <span className="text-slate-600 tracking-normal mt-1">Within 24 Hours</span>
                </div>
                <div className="flex flex-col">
                  <span>Confidentiality</span>
                  <span className="text-slate-600 tracking-normal mt-1">100% NDA Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}