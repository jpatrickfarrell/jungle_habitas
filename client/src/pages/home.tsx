import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { AiConcierge } from "@/components/ai-concierge";
import { ProjectsGrid } from "@/components/projects-grid";
import { AboutSection } from "@/components/about-section";
import { InvestmentSection } from "@/components/investment-section";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ProjectsGrid />
      <InvestmentSection />
      
      {/* Contact Section Placeholder */}
      <section id="contact" className="py-24 bg-background text-center">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl font-serif text-primary mb-6">Ready to Step Inside?</h2>
           <p className="text-muted-foreground font-light mb-8 max-w-xl mx-auto">
             Our advisor is ready to curate a selection of homes just for you. 
             Book a visit to experience the jungle in person.
           </p>
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-primary text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
           >
             Start Conversation
           </button>
        </div>
      </section>

      <AiConcierge />
    </Layout>
  );
}
