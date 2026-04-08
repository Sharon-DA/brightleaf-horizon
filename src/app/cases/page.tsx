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
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
      <p className="mb-4">Explore how Brightleaf Horizon has delivered impactful solutions for our clients:</p>
      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:border-amber-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex justify-between items-start mb-4">
              <div className="text-4xl">{item.icon}</div>
              <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded uppercase tracking-wider">
                {item.location}
              </span>
            </div>
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">{item.category}</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
            <p className="text-slate-600 text-sm mb-6 grow leading-relaxed">{item.description}</p>
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
    </main>
  );
}
