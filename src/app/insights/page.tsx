const topics = [
  "Brand positioning",
  "Pricing power",
  "Consumer perception",
  "Identity systems",
  "Conversion strategy"
];

export default function InsightsPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Insights</h1>
      <p className="mb-6 text-lg">Thought leadership on brand strategy, growth, and conversion.</p>
      <ul className="list-disc list-inside space-y-3 text-xl">
        {topics.map((topic, i) => (
          <li key={i}>{topic}</li>
        ))}
      </ul>
    </main>
  );
}
