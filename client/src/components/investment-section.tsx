import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InvestmentSection() {
  return (
    <section id="investment" className="py-24 bg-primary text-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 blur-3xl rounded-full translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-accent text-xs uppercase tracking-[0.2em] font-medium">Investment & Lifestyle</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              A Wise Asset.<br/>
              A Priceless <span className="italic text-accent">Experience.</span>
            </h2>
            <p className="text-white/70 font-light leading-relaxed text-lg">
              Tulum is no longer just a destination; it's a global brand. Investing in Barefoot Luxury means securing a high-value asset in one of the world's most desirable locations, while having your own sanctuary to escape to.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Average ROI of 8-12% via vacation rentals",
                "Full property management services available",
                "Appreciation potential in developing zone",
                "Perfect for hosted wellness retreats"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-white/80 font-light">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
               <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 uppercase tracking-widest text-sm rounded-none">
                 Download Investment Guide
               </Button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-sm space-y-8">
             <div className="text-center space-y-2 pb-8 border-b border-white/10">
               <span className="text-sm uppercase tracking-widest text-white/50">Starting Investment</span>
               <div className="text-5xl font-serif text-white">$500,000 <span className="text-lg text-white/50">USD</span></div>
             </div>
             
             <div className="grid grid-cols-2 gap-6 text-center">
               <div className="space-y-1">
                 <div className="text-3xl font-serif text-accent">4-5</div>
                 <div className="text-xs uppercase tracking-widest text-white/50">Bedrooms</div>
               </div>
               <div className="space-y-1">
                 <div className="text-3xl font-serif text-accent">350m²</div>
                 <div className="text-xs uppercase tracking-widest text-white/50">Avg. Size</div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
