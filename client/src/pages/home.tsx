import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { AiConcierge } from "@/components/ai-concierge";
import { ProjectsGrid } from "@/components/projects-grid";
import { AboutSection } from "@/components/about-section";
import { InvestmentSection } from "@/components/investment-section";
import wellnessImg from "@assets/generated_images/outdoor_wellness_area_with_red_light_room.png";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ProjectsGrid />
      <InvestmentSection />

      {/* Contact Section — dramatic wellness image background */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={wellnessImg}
            alt="Wellness area in the jungle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="inline-block text-amber-300/90 text-xs uppercase tracking-[0.25em] font-medium mb-6">
            Visit & Connect
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Ready to Step<br/>
            <span className="italic text-amber-300/90">Into the Jungle?</span>
          </h2>
          <p className="text-white/75 font-light mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Walk the paths, feel the stone beneath your feet, and discover your future home.
            Our advisor is ready to curate a selection just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary px-8 py-4 uppercase tracking-widest text-sm hover:bg-white/90 transition-colors font-medium"
            >
              Book a Site Visit
            </a>
            <a
              href="/contact"
              className="border border-white/40 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Schedule Video Call
            </a>
          </div>
        </div>
      </section>

      <AiConcierge />
    </Layout>
  );
}
