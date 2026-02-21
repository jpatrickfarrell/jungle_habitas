import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import bedroomImg from "@assets/generated_images/luxury_bedroom_in_jungle_setting.png";

export function InvestmentSection() {
  return (
    <section id="investment" className="relative overflow-hidden">
      {/* Split layout: image left, content right */}
      <div className="grid lg:grid-cols-2 min-h-[800px]">
        {/* Left: Full-bleed image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] lg:h-auto"
        >
          <img
            src={bedroomImg}
            alt="Luxury bedroom overlooking the jungle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 lg:hidden" />
        </motion.div>

        {/* Right: Content on dark background */}
        <div className="bg-primary text-cream py-16 lg:py-24 px-8 lg:px-16 flex items-center">
          <div className="space-y-8 max-w-lg">
            <span className="text-accent text-xs uppercase tracking-[0.2em] font-medium">Investment & Lifestyle</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              A Wise Asset.<br/>
              A Priceless <span className="italic text-accent">Experience.</span>
            </h2>
            <p className="text-white/70 font-light leading-relaxed text-lg">
              Tulum is no longer just a destination; it's a global brand. Investing in Jungle Habitas means securing a high-value asset in one of the world's most desirable locations, while having your own sanctuary to escape to.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "Average ROI of 8-12% via vacation rentals",
                "Full property management services available",
                "Appreciation potential in developing zone",
                "Perfect for hosted wellness retreats"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-white/80 font-light">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-3xl font-serif text-accent">$500k</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Starting From</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-serif text-accent">4-5</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Bedrooms</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-serif text-accent">1km</div>
                <div className="text-xs uppercase tracking-widest text-white/50">To Ocean</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-serif text-accent">12mo</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Delivery</div>
              </div>
            </div>

            <div className="pt-4">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 uppercase tracking-widest text-sm rounded-none">
                Download Investment Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
