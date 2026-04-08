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

export default function CaseStudiesPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 font-bold tracking-widest uppercase mb-4 text-sm animate-slide-up">Our Work</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Case Studies
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Real impact across SaaS, Cloud Commerce, and Web3. Explore how Brightleaf Horizon has delivered powerful solutions for our clients.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col hover:border-amber-400 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="text-5xl">{item.icon}</div>
              <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
                {item.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
            <p className="text-slate-600 text-sm mb-8 flex-grow leading-relaxed">{item.description}</p>
            
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Challenge</p>
                <p className="text-sm text-slate-600">{item.challenge}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Approach</p>
                <p className="text-sm text-slate-600">{item.approach}</p>
              </div>
              <div className="mt-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-amber-700 font-bold flex items-center justify-center text-sm text-center">
                  ✨ {item.result}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
    </main>
  );
}
