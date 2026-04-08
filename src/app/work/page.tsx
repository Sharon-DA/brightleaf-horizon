const projects = [
  {
    name: "DirectScale: Market Positioning",
    challenge: "Defining a unique value proposition in a crowded legacy software market.",
    solution: "SaaS narrative overhaul + enterprise-level content strategy.",
    result: "Successfully positioned for high-value acquisition."
  },
  {
    name: "Pax8: Scale Strategy",
    challenge: "Rapidly expanding service catalog causing brand message dilution.",
    solution: "Vertical-specific messaging + streamlined partner education.",
    result: "Catalyzed growth leading to 'Unicorn' status."
  },
  {
    name: "Asymmetric Fund: Authority Building",
    challenge: "Building long-term credibility in a skeptical market.",
    solution: "Deep-research content + risk-management focused voice.",
    result: "Solidified status with multi-million AUM growth."
  }
];

export default function WorkPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Our Work</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow border border-gray-100 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{project.name}</h2>
            <div><strong>Challenge:</strong> {project.challenge}</div>
            <div><strong>Solution:</strong> {project.solution}</div>
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 mt-2">
              <strong>Result:</strong> {project.result}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
