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

      <footer className="py-12 px-6 bg-slate-900 border-t border-gray-900 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">BrightLeaf Horizon</h3>
            <p className="text-slate-300 text-sm">Strategic growth partners for visionary brands. Since 2024, we have translated market insights into compelling narratives that drive measurable impact.</p>
          </div>
          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-2">Company</h4>
            <ul className="text-slate-300 space-y-1 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#cases">Case Studies</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          {/* Connect Info with Socials beside Business Hours */}
          <div>
            <h4 className="text-white font-bold mb-2">Connect</h4>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-pink-400 text-2xl">&#128222;</span>
              <span className="text-slate-300 text-sm">303-521-6710</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-purple-200 text-2xl">&#128231;</span>
              <span className="text-slate-300 text-sm">brightleafhealth@brightleafh.com</span>
            </div>
            <div className="border-t border-slate-700 my-2"></div>
            <div className="flex items-center gap-2">
              <div>
                <div className="text-slate-400 text-xs font-bold mb-1">BUSINESS HOURS</div>
                <div className="text-slate-300 text-xs">Mon-Fri: 10am – 5pm<br/>Sat: 1pm – 5pm</div>
              </div>
              <div className="flex gap-2 ml-4">
                <a href="https://www.linkedin.com/company/brightleaf-horizon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white text-xl">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61587168273948" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white text-xl">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.35c0-.734-.593-1.326-1.326-1.326z"/></svg>
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white text-xl">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2.47a2.5 2.5 0 0 1 3.54 3.54l-4.88 4.88 4.88 4.88a2.5 2.5 0 0 1-3.54 3.54l-4.88-4.88-4.88 4.88a2.5 2.5 0 0 1-3.54-3.54l4.88-4.88-4.88-4.88a2.5 2.5 0 0 1 3.54-3.54l4.88 4.88 4.88-4.88z"/></svg>
                </a>
              </div>
            </div>
          </div>
          {/* Location */}
          <div>
            <h4 className="text-white font-bold mb-2">Location</h4>
            <div className="text-slate-300 text-sm mb-4">
              <div className="font-semibold text-white">Denver Office</div>
              1801 California St,<br/>Denver, CO 80202,<br/>United States
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 text-center text-slate-400 text-xs border-t border-slate-800 pt-6">© 2024–2026 BrightLeaf Horizon. All rights reserved.</div>
      </footer>
    </div>
  );
}