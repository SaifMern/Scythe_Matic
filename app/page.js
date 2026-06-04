// SERVER COMPONENT - SEO optimized
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import PortfolioGrid from './components/home/PortfolioGrid';
import MethodsSection from './components/home/MethodsSection';
import IndustriesSection from './components/home/IndustriesSection';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import TestimonialsSection from './components/home/TestimonialsSection';

export const metadata = {
  title: 'Scythematic | Enterprise Software Company',
  description: 'Premium software company specializing in enterprise web platforms, custom software, AI automation, DevOps, and software quality assurance.',
  openGraph: {
    title: 'Scythematic | Enterprise Software Company',
    description: 'Premium software company specializing in enterprise web platforms, custom software, AI automation, DevOps, and software quality assurance.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero with 3D Background - Client Component with animations */}
      <HeroSection />

      {/* Services - Server wrapper with Client cards */}
      <ServicesSection />

      {/* Portfolio - Client Component for animations */}
      <PortfolioGrid />

      <MethodsSection />

      <IndustriesSection />


      <WhyChooseUsSection />


      <TestimonialsSection />
    </main>
  );
}