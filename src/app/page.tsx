import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { MetricsAndTestimonials } from "@/components/sections/MetricsAndTestimonials";
import { ProjectEstimator } from "@/components/sections/ProjectEstimator";
import { Footer } from "@/components/layout/Footer";
import { BrandPopup } from "@/components/ui/BrandPopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-sky-500 selection:text-white relative overflow-x-hidden">
      <BrandPopup />
      <Header />
      <Hero />
      <PortfolioShowcase />
      <ServicesBento />
      <ProcessTimeline />
      <MetricsAndTestimonials />
      <ProjectEstimator />
      <Footer />
    </main>
  );
}
