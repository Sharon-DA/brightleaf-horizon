"use client";

import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const cases = [
  {
    category: "SaaS & Cloud Solutions",
    title: "DirectScale: Market Positioning",
    location: "Denver, Colorado",
    description: "As this cloud-platform scaled, they needed to move from a 'tool' to a 'strategic partner' for global direct-selling brands.",
    challenge: "Defining a unique value proposition in a crowded legacy software market.",
    approach: "SaaS narrative overhaul + enterprise-level content strategy.",
    result: "Successfully positioned for high-value acquisition.",
    icon: "☁️"
  },
  {
    category: "Cloud Commerce",
    title: "Pax8: Scale Strategy",
    location: "Denver, Colorado",
    description: "During their mid-market growth phase (50-100+ employees), we focused on simplifying complex cloud distribution narratives for IT professionals.",
    challenge: "Rapidly expanding service catalog causing brand message dilution.",
    approach: "Vertical-specific messaging + streamlined partner education.",
    result: "Catalyzed growth leading to 'Unicorn' status.",
    icon: "🚀"
  },
  {
    category: "Venture Capital & Web3",
    title: "Asymmetric Fund: Authority Building",
    location: "Poland / Global",
    description: "Establishing institutional authority and trust in the volatile liquid investment and crypto-asset space.",
    challenge: "Building long-term credibility in a skeptical market.",
    approach: "Deep-research content + risk-management focused voice.",
    result: "Solidified status with multi-million AUM growth.",
    icon: "📈"
  }
];

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
            <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 hover:scale-105 transition font-semibold flex items-center gap-2 group shadow-lg hover:shadow-xl">
              Book a Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center font-bold">
            <div><p className="text-4xl text-amber-600 mb-2">15+</p><p className="text-gray-700 font-normal">Years of Excellence</p></div>
            <div><p className="text-4xl text-amber-600 mb-2">200+</p><p className="text-gray-700 font-normal">Brands Transformed</p></div>
            <div><p className="text-4xl text-amber-600 mb-2">$500M+</p><p className="text-gray-700 font-normal">Revenue Generated</p></div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - UPDATED WITH REAL COMPANIES */}
      <section id="cases" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold uppercase tracking-widest mb-4">Market Impact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Results for Growing Enterprises</h2>
            <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">Specializing in high-growth companies (50-100 employees) and global funds.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:border-amber-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: `${0.1 + i * 0.1}s`}}>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded uppercase tracking-wider">
                    {item.location}
                  </span>
                </div>
                <span className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{item.description}</p>
                
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-500"><strong>Challenge:</strong> {item.challenge}</p>
                  <p className="text-xs text-slate-500"><strong>Approach:</strong> {item.approach}</p>
                  <div className="mt-4 bg-amber-50 p-3 rounded-lg border border-amber-100">
                    <p className="text-amber-700 font-bold text-center text-sm">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Start Your Strategy Conversation</h2>
          <p className="text-xl text-gray-300">Share your vision, and let's explore how we can accelerate your growth.</p>
        </div>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register("name", { required: true })} placeholder="Your Name" className="w-full border p-4 rounded-lg text-gray-900 focus:border-amber-500 outline-none" />
            <input {...register("email", { required: true })} type="email" placeholder="Email Address" className="w-full border p-4 rounded-lg text-gray-900 focus:border-amber-500 outline-none" />
            <textarea {...register("message", { required: true })} placeholder="Growth objectives..." className="w-full border p-4 rounded-lg text-gray-900 focus:border-amber-500 outline-none" rows={4} />
            <button type="submit" className="w-full bg-amber-600 text-white py-4 rounded-lg hover:bg-amber-700 transition font-bold text-lg">
              Schedule Consultation
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}