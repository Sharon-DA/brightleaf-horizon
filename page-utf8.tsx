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

const cases = [
  {
    category: "SaaS & Cloud Solutions",
    title: "DirectScale: Market Positioning",
    location: "Denver, Colorado",
    description: "As this cloud-platform scaled, they needed to move from a 'tool' to a 'strategic partner' for global direct-selling brands.",
    challenge: "Defining a unique value proposition in a crowded legacy software market.",
    approach: "SaaS narrative overhaul + enterprise-level content strategy.",
    result: "Successfully positioned for high-value acquisition.",
    icon: "Ôÿü´©Å"
  },
  {
    category: "Cloud Commerce",
    title: "Pax8: Scale Strategy",
    location: "Denver, Colorado",
    description: "During their mid-market growth phase (50-100+ employees), we focused on simplifying complex cloud distribution narratives for IT professionals.",
    challenge: "Rapidly expanding service catalog causing brand message dilution.",
    approach: "Vertical-specific messaging + streamlined partner education.",
    result: "Catalyzed growth leading to 'Unicorn' status.",
    icon: "­ƒÜÇ"
  },
  {
    category: "Venture Capital & Web3",
    title: "Asymmetric Fund: Authority Building",
    location: "Poland / Global",
    description: "Establishing institutional authority and trust in the volatile liquid investment and crypto-asset space.",
    challenge: "Building long-term credibility in a skeptical market.",
    approach: "Deep-research content + risk-management focused voice.",
    result: "Solidified status with multi-million AUM growth.",
    icon: "­ƒôê"
  }
];

export default function Home() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-black text-white">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">We Build Brands.<br/>We Drive Growth.</h1>
        <p className="text-xl text-gray-300 mb-8">Brand strategy and digital growth for ambitious companies.</p>
        <div className="flex gap-6 flex-wrap justify-center">
          <Link href="/contact"><button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">Start a Project</button></Link>
          <Link href="/work"><button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">View Our Work</button></Link>
        </div>
      </section>

      {/* Positioning Strip */}
      <section className="py-6 px-4 bg-slate-900 text-white text-center text-lg font-medium">
        We build brands from the ground up and scale them through strategy, design, digital communication, and conversion.
      </section>

      {/* What We Do (Short) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Brand Strategy</h3>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Visual Identity</h3>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Digital Communication</h3>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Growth & Conversion</h3>
          </div>
        </div>
      </section>

      {/* Selected Work (Preview) */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Selected Work</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow border border-gray-100 flex flex-col gap-4">
              <h3 className="text-xl font-bold mb-2">DirectScale: Market Positioning</h3>
              <div className="text-gray-700">Successfully positioned for high-value acquisition.</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow border border-gray-100 flex flex-col gap-4">
              <h3 className="text-xl font-bold mb-2">Pax8: Scale Strategy</h3>
              <div className="text-gray-700">Catalyzed growth leading to 'Unicorn' status.</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow border border-gray-100 flex flex-col gap-4">
              <h3 className="text-xl font-bold mb-2">Asymmetric Fund: Authority Building</h3>
              <div className="text-gray-700">Solidified status with multi-million AUM growth.</div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/work"><button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition">View All Work</button></Link>
          </div>
        </div>
      </section>

      {/* Our Approach (Preview) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
          <ol className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
            <li>Brand Positioning</li>
            <li>Visual Identity</li>
            <li>Content Strategy</li>
            <li>Digital Communication</li>
            <li>Conversion</li>
            <li>Growth</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to build a brand that grows?</h2>
        <Link href="/contact"><button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">Start a Project</button></Link>
      </section>
    </main>
  );
}
