import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_luxury_jungle_house_interior.png";

export function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Luxury Jungle Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-block border border-white/30 px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] backdrop-blur-sm bg-white/5">
            Tulum, Mexico
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight">
            Discover Your <br/>
            <span className="italic text-accent">Jungle Sanctuary</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl font-light text-white/90 leading-relaxed">
            Bespoke 4-5 bedroom villas designed for deep rest, privacy, and connection with nature.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
