// SERVER COMPONENT — Fast initial load
import ServiceCard from './ServiceCard';

const services = [
  {
    iconName: 'Code',
    id: 'web-development',
    title: 'Web Development',
    description:
      'Modern, fast, and responsive websites built with scalable technologies to help your business grow online.',
    features: ['React & Next.js', 'Business Websites', 'E-commerce Solutions'],
    color: 'from-primary to-accent',
  },
  {
    iconName: 'Settings',
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description:
      'Tailor-made software solutions designed around your business workflow, automation needs, and long-term growth.',
    features: ['CRM Systems', 'Admin Panels', 'Business Portals'],
    color: 'from-primary to-accent',
  },
  {
    iconName: 'ShieldCheck',
    id: 'software-quality-assurance',
    title: 'Software Quality Assurance',
    description:
      'Complete testing and QA services to make sure your software is reliable, secure, smooth, and ready for users.',
    features: ['Manual Testing', 'Bug Reporting', 'Performance Testing'],
    color: 'from-primary to-accent',
  },
  {
    iconName: 'Bot',
    id: 'ai-automation',
    title: 'AI Automation',
    description:
      'Smart automation solutions that reduce manual work, improve productivity, and help your business operate faster.',
    features: ['AI Chatbots', 'Workflow Automation', 'Data Automation'],
    color: 'from-primary to-accent',
  },
  {
    iconName: 'CloudCog',
    id: 'devops',
    title: 'DevOps',
    description:
      'Reliable deployment, server setup, CI/CD pipelines, and cloud infrastructure management for scalable applications.',
    features: ['CI/CD Pipelines', 'Cloud Deployment', 'Server Management'],
    color: 'from-primary to-accent',
  },
  {
    iconName: 'TrendingUp',
    id: 'product-growth-strategy',
    title: 'Product Growth Strategy',
    description:
      'Product growth strategy that improves positioning, funnels, analytics, and conversion-focused digital experiences.',
    features: ['Product Positioning', 'Conversion Strategy', 'Analytics & Reporting'],
    color: 'from-accent to-primary',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
          <h2 className="section-title mb-3">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="section-copy mx-auto max-w-2xl">
            Premium software services built to help businesses launch, scale, automate, and grow with confidence.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}