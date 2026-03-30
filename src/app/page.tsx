// src/app/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
      {/* Hero Section - Premium & Bold */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Subtle background accent */}
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
            We translate complex market insights into compelling narratives that move audiences, build authority, and drive measurable growth. From healthcare to clean energy to architectural innovation—we help visionary brands clarify their story and own their market.
          </p>
          <div className="flex gap-6 flex-wrap justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 hover:scale-105 transition font-semibold flex items-center gap-2 group shadow-lg hover:shadow-xl">
              Book a Strategy Call
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition font-semibold hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Strategic Positioning Statement */}
      <section className="py-16 px-6 bg-slate-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-600 mb-2">15+</p>
              <p className="text-gray-700">Years of Strategic Excellence</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-600 mb-2">200+</p>
              <p className="text-gray-700">Brands Transformed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-600 mb-2">$500M+</p>
              <p className="text-gray-700">Revenue Generated for Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise - Services Reimagined */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Strategic Services That Drive Growth</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine data-driven insights with creative excellence to build brands that lead markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-gray-200 hover:border-amber-400 hover:shadow-2xl transition transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-600 transition">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Brand Strategy & Positioning</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Market research, competitive intelligence, and strategic positioning that clarify your unique value and establish market leadership in your industry.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span> Competitive Advantage Mapping
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span> Consumer Behavior Insights
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span> Market Opportunity Analysis
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-gray-200 hover:border-amber-400 hover:shadow-2xl transition transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-600 transition">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Creative Storytelling & Content</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Compelling narratives that resonate with your audience, from visual identity and brand voice to content campaigns that amplify reach and engagement.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span> Visual Identity Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span> Storytelling Frameworks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span> Brand Content Strategy
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-gray-200 hover:border-amber-400 hover:shadow-2xl transition transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-600 transition">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Marketing & Analytics</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Data-driven campaigns that convert audiences into customers: SEO, paid media, performance tracking, and continuous optimization for measurable impact.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span> Performance Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span> Campaign Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span> Conversion Strategy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 px-6 bg-slate-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-amber-600 font-semibold uppercase tracking-widest mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>Industries</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up" style={{animationDelay: '0.2s'}}>Strategic Expertise Across Sectors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.3s'}}>
              Deep industry knowledge combined with global perspective to drive growth in markets that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Healthcare & Life Sciences", desc: "Positioning complex medical innovation for patient trust and provider adoption." },
              { name: "Clean Energy & Sustainability", desc: "Building brand authority in emerging markets and green technology sectors." },
              { name: "Architecture & Design", desc: "Elevating design-driven firms and architectural practices to market leaders." },
              { name: "Technology & SaaS", desc: "Clarifying complex B2B solutions and driving user engagement and adoption." },
              { name: "Finance & Professional Services", desc: "Building credibility and thought leadership for advisory and financial brands." },
              { name: "Consumer & Retail", desc: "Creating memorable brand experiences that drive loyalty and repeat business." },
            ].map((industry, i) => (
              <div key={i} className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-lg hover:shadow-2xl transition transform hover:scale-105 hover:-translate-y-1 animate-slide-up" style={{animationDelay: `${0.1 + i * 0.1}s`}}>
                <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - Real Impact */}
      <section id="cases" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-amber-600 font-semibold uppercase tracking-widest mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>Case Studies</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up" style={{animationDelay: '0.2s'}}>Transforming Complex Challenges Into Market Success</h2>
          </div>

          <div className="space-y-8">
            {/* Case Study 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border border-amber-100 hover:shadow-2xl hover:border-amber-400 transition transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div>
                <p className="text-amber-600 font-semibold uppercase text-sm tracking-widest mb-2">Healthcare Innovation</p>
                <h3 className="text-3xl font-bold mb-4">Clinic Network Expansion</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A healthcare network expanded into three new markets but struggled with brand awareness among physicians and patients. We developed a strategic positioning framework that emphasized clinical excellence and local community presence, combined with targeted digital campaigns.
                </p>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>Challenge:</strong> Low recognition in new markets; competitive pressure from established players</p>
                  <p className="text-gray-700"><strong>Approach:</strong> Strategic positioning + thought leadership content + localized campaigns</p>
                  <p className="text-2xl font-bold text-amber-600 mt-6">+320% patient inquiries in 8 months</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 h-64 rounded-lg flex items-center justify-center text-white text-6xl opacity-80 hover:animate-glow">
                🏥
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl border border-teal-100 hover:shadow-2xl hover:border-teal-400 transition transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-teal-400 to-teal-600 h-64 rounded-lg flex items-center justify-center text-white text-6xl opacity-80 order-2 md:order-none hover:animate-glow">
                ⚡
              </div>
              <div className="order-1 md:order-none">
                <p className="text-amber-600 font-semibold uppercase text-sm tracking-widest mb-2">Clean Energy</p>
                <h3 className="text-3xl font-bold mb-4">Renewable Technology Adoption</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A clean energy startup had revolutionary technology but couldn't communicate its value to enterprise decision-makers. We crafted a compelling brand narrative that connected technological superiority to real-world sustainability impact and ROI.
                </p>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>Challenge:</strong> Complex tech innovation; difficulty reaching C-suite stakeholders</p>
                  <p className="text-gray-700"><strong>Approach:</strong> Strategic narrative repositioning + executive thought leadership</p>
                  <p className="text-2xl font-bold text-amber-600 mt-6">+$45M in enterprise contracts secured</p>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border border-orange-100 hover:shadow-2xl hover:border-orange-400 transition transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div>
                <p className="text-amber-600 font-semibold uppercase text-sm tracking-widest mb-2">Architecture & Design</p>
                <h3 className="text-3xl font-bold mb-4">Architecture Firm Regional Dominance</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A mid-sized architecture firm wanted to expand beyond regional recognition to become a recognized sector leader. We reimagined their brand positioning around their design philosophy and created content that showcased industry expertise and innovation.
                </p>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>Challenge:</strong> Local recognition only; competing against national brands</p>
                  <p className="text-gray-700"><strong>Approach:</strong> Brand repositioning + portfolio showcase + digital PR strategy</p>
                  <p className="text-2xl font-bold text-amber-600 mt-6">+280% qualified project inquiries; 5 major award wins</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 h-64 rounded-lg flex items-center justify-center text-white text-6xl opacity-80 hover:animate-glow">
                🏗️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Voice */}
      <section id="testimonials" className="py-24 px-6 bg-slate-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-amber-600 font-semibold uppercase tracking-widest mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>Client Voices</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up" style={{animationDelay: '0.2s'}}>What Visionary Leaders Say</h2>
          </div>

          <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 6000 }} className="pb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
          {[
              {
                text: "BrightLeaf didn't just redesign our brand—they reframed how we think about our market position. Their strategic insight was invaluable.",
                name: "James Mitchell",
                title: "CEO, Healthcare Innovation Group",
                company: ""
              },
              {
                text: "The team translated our complex technical advantage into a compelling narrative that resonates with enterprise buyers. Results speak for themselves.",
                name: "Sarah Chen",
                title: "VP of Marketing",
                company: "Clean Energy Solutions Ltd."
              },
              {
                text: "Working with BrightLeaf elevated our firm's visibility from regional to nationally recognized. Their strategic thinking is genuinely different.",
                name: "Michael Torres",
                title: "Principal Architect",
                company: "Torres Architecture Collective"
              },
              {
                text: "What impressed us most was their deep understanding of our industry dynamics. They brought strategic foresight, not just creative execution.",
                name: "Rebecca Sato",
                title: "Chief Strategy Officer",
                company: "Financial Advisory Partners"
              },
            ].map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div className="text-center max-w-3xl mx-auto bg-white p-8 rounded-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition transform">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg animate-glow" style={{animationDelay: `${j * 0.05}s`}}>★</span>
                    ))}
                  </div>
                  <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                    {testimonial.company && <p className="text-amber-600 text-sm font-medium">{testimonial.company}</p>}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section - Strategic Approach */}
      <section className="py-24 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Brand's Impact?</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Schedule a strategic consultation with our team. We'll assess your market position, identify growth opportunities, and outline a clear path forward.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 hover:scale-105 hover:shadow-2xl transition font-semibold flex items-center gap-2 group">
              Book a Strategy Call
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition font-semibold hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form - Professional */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>Start Your Strategy Conversation</h2>
            <p className="text-xl text-gray-600 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Share your vision, and let's explore how we can accelerate your growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-gray-200 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                />
              </div>
              <textarea
                {...register("message", { required: true })}
                placeholder="Tell us about your brand growth objectives..."
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition animate-slide-up"
                style={{animationDelay: '0.5s'}}
                rows={6}
              />
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-4 rounded-lg hover:bg-amber-700 hover:scale-105 hover:shadow-2xl transition transform font-semibold text-lg animate-slide-up"
                style={{animationDelay: '0.6s'}}
              >
                Schedule Your Consultation
              </button>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center animate-slide-up" style={{animationDelay: '0.7s'}}>
            <div className="p-6 rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-lg transition hover:scale-105 hover:-translate-y-1 animate-slide-up" style={{animationDelay: '0.55s'}}>
              <p className="font-semibold text-lg mb-2">Response Time</p>
              <p className="text-gray-600">Within 24 hours</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-lg transition hover:scale-105 hover:-translate-y-1 animate-slide-up" style={{animationDelay: '0.65s'}}>
              <p className="font-semibold text-lg mb-2">Initial Consultation</p>
              <p className="text-gray-600">Complimentary strategy call</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-lg transition hover:scale-105 hover:-translate-y-1 animate-slide-up" style={{animationDelay: '0.75s'}}>
              <p className="font-semibold text-lg mb-2">Confidentiality</p>
              <p className="text-gray-600">100% protected under NDA</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}