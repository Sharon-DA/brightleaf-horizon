export default function AboutPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Who We Are</h1>
      <p className="mb-8 text-lg">BrightLeaf Horizon is a brand strategy and digital growth agency. We help ambitious companies define their identity, build authority, and drive business growth from strategy to conversion.</p>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What We Believe</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Brands are built, not decorated</li>
          <li>Perception drives value</li>
          <li>Strategy comes before execution</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What Makes Us Different</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Strategy-first approach</li>
          <li>End-to-end system (positioning → conversion)</li>
          <li>Focus on business outcomes</li>
        </ul>
      </section>
      {/* Optional: Team / Founder story section can be added here */}
    </main>
  );
}
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