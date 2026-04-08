import React from 'react';
import Link from 'next/link';

const experts = [
  {
    name: "Atalia",
    quote: "We see beyond data points and trends - we connect dots between industries, behaviors, and ideas.",
    description: "Our strategists design pathways that help brands grow with clarity and confidence in an ever-changing landscape.",
    image: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/21729903/821840_221853.png"
  },
  {
    name: "Elena",
    quote: "Creativity isn’t just what we do - it’s how we think.",
    description: "From brand storytelling to experience design, our innovators craft narratives that inspire action and bring imagination to life.",
    image: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/21729903/521402_608444.jpeg"
  },
  {
    name: "Joela",
    quote: "Numbers tell stories too.",
    description: "Our analysts translate data into direction - uncovering insights that fuel strategy, measure impact, and keep our clients one step ahead.",
    image: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/21729903/455893_26344.png"
  }
];

const journeySteps = [
  { 
    date: "October 2, 2025", 
    title: "Looking Ahead", 
    content: "The world keeps evolving — and so do we. We are deepening our focus on human connection within technical industries like clean energy and med-tech." 
  },
  { 
    date: "January 2025", 
    title: "Milestones Achieved", 
    content: "Successfully established a regional presence in Denver, Colorado, and launched our first international partnership with Asymmetric Fund in Poland." 
  },
  { 
    date: "March 2024", 
    title: "Founding Principles", 
    content: "BrightLeaf Horizon was founded on a simple but powerful idea: to empower brands with strategy and soul, ensuring that clarity and conscience can coexist." 
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Empowering Sustainable Growth</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            At BrightLeaf Horizon, we help brands in architecture, healthcare, and clean energy grow with purpose — crafting strategies that are not only effective, but enduring.
          </p>
          <div className="flex justify-center gap-4">
             <Link href="#journey" className="bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition shadow-md">Our Journey</Link>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Meet Our Experts</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic">A collective of strategists, storytellers, and analysts — united by the belief that great marketing begins with understanding.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {experts.map((expert, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-64 h-64 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{expert.name}</h3>
              <p className="text-amber-600 italic mb-4 font-medium px-4 leading-snug">"{expert.quote}"</p>
              <p className="text-slate-500 text-sm leading-relaxed">{expert.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainability at Our Core</h2>
            <p className="text-amber-400 font-medium tracking-wide">For us, sustainability isn’t a checkbox — it’s how we think, create, and grow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Eco-Friendly Practices", desc: "Mindful resource use in daily operations, turning small actions into impact." },
              { title: "Community Engagement", desc: "Collaborating with communities to create initiatives that empower and educate." },
              { title: "Sustainable Partnerships", desc: "Building ecosystems where sustainability fuels innovation, not just obligation." },
              { title: "Continuous Improvement", desc: "Refining our practices to do better for our clients and our planet." }
            ].map((item, i) => (
              <div key={i} className="border-t border-slate-700 pt-6">
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section id="journey" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Journey</h2>
        <div className="space-y-12">
          {journeySteps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-12 border-l-2 border-amber-500 pl-8 relative">
              <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-0 shadow-sm"></div>
              <div className="min-w-[150px]">
                <p className="text-amber-600 font-bold text-sm uppercase tracking-widest">{step.date}</p>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}