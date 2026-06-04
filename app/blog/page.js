// SERVER COMPONENT
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2026',
    excerpt: 'Exploring upcoming trends and technologies shaping the web.',
    date: 'January 15, 2026',
    category: 'Development',
  },
  {
    id: 2,
    title: 'Building High-Performance React Applications',
    excerpt: 'Best practices for optimizing React apps for speed and SEO.',
    date: 'January 10, 2026',
    category: 'React',
  },
  {
    id: 3,
    title: 'AI Automation Strategies That Actually Save Time',
    excerpt: 'Practical ways to reduce manual work with reliable AI-powered workflows.',
    date: 'January 5, 2026',
    category: 'Automation',
  },
];

export const metadata = {
  title: 'Scythematic | Enterprise Software Company',
  description: 'Read Scythematic insights on enterprise software, scalable web development, AI automation, QA, DevOps, and product engineering.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="page-title mb-4">
            Scythematic <span className="text-gradient">Insights</span>
          </h1>
          <p className="page-subtitle mx-auto max-w-2xl">
            Enterprise software, automation, QA, and product engineering insights
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="smooth-card rounded-2xl border border-white/10 p-8 glass">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                  {post.category}
                </span>
                <span className="text-slate-400 text-sm">{post.date}</span>
              </div>
              <h2 className="card-title mb-3 transition-all hover:text-primary">
                {post.title}
              </h2>
              <p className="card-text mb-4">{post.excerpt}</p>
              <button className="text-primary hover:underline">Read More →</button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}