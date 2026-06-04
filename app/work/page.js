// SERVER COMPONENT
export const metadata = {
  title: 'Our Work - Software Company',
  description: 'Explore our portfolio of successful projects and case studies.',
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="page-title mb-4">
            Our <span className="text-gradient">Work</span>
          </h1>
          <p className="page-subtitle mx-auto max-w-2xl">
            Portfolio of successful projects across various industries
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="smooth-card rounded-2xl border border-white/10 p-8 glass">
              <div className="h-48 bg-linear-to-br from-primary to-accent rounded-xl mb-4"></div>
              <h3 className="card-title mb-2">Project {i}</h3>
              <p className="card-text">Case study coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}