export default function ServicesPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Brand Strategy</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Brand positioning</li>
          <li>Consumer perception</li>
          <li>Market narrative</li>
          <li>Naming</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Visual Identity</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Identity systems</li>
          <li>Brand assets</li>
          <li>Guidelines</li>
          <li>Website design</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Digital Communication</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Content strategy</li>
          <li>SEO</li>
          <li>Paid media</li>
          <li>Social</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Growth & Conversion</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Conversion optimization</li>
          <li>Funnel strategy</li>
          <li>Analytics</li>
          <li>Performance marketing</li>
        </ul>
      </section>
    </main>
  );
}
