import Link from "next/link";

const services = [
  {
    icon: "🎯",
    title: "Brand Strategy & Positioning",
    overview: "Define who you are and why you matter.",
    description: "We help you carve out a distinct space in a crowded market. From competitive analysis to core messaging, we build the foundation that ensures your brand communicates the right value to the right people."
  },
  {
    icon: "🎨",
    title: "Visual Identity & Design",
    overview: "Aesthetic precision that builds trust.",
    description: "Your brand’s visual language speaks before you do. We design sophisticated, adaptable visual identities—logos, typography systems, and complete brand guidelines—that look beautiful and perform perfectly across all mediums."
  },
  {
    icon: "💬",
    title: "Digital Communication Arrays",
    overview: "Tell your story across every channel.",
    description: "We orchestrate content strategies and digital communication lines that keep your audience engaged. From thought leadership pieces to organic social strategy, we make sure your voice is heard loud and clear."
  },
  {
    icon: "📈",
    title: "Growth & Conversion Optimization",
    overview: "Turn attention into measurable action.",
    description: "Beautiful design means nothing if it doesn't perform. We optimize user funnels, design high-converting landing pages, and implement tech-forward solutions to ensure every touchpoint drives your business forward."
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-400 font-bold tracking-widest uppercase mb-4 text-sm animate-slide-up">Our Capabilities</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive Solutions<br />for Modern Brands
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We bridge the gap between creative storytelling and technical execution, offering an end-to-end suite of services designed to accelerate your growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group p-10 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-amber-300 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-amber-600 font-medium mb-6 text-sm uppercase tracking-wide">{service.overview}</p>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-50 border-t border-gray-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to elevate your brand?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Whether you need a complete overhaul or targeted strategy, we're here to help you scale.
          </p>
          <Link href="/contact">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-700 hover:shadow-lg transition-all active:scale-95 shadow-md">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
