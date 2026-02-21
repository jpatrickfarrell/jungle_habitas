import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@assets/generated_images/luxury_tulum_jungle_villa_exterior.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury Jungle Villa in Tulum"
          className="w-full h-full object-cover"
        />
        {/* Rich dark overlay — no white washout */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-[#1a2e1a]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <span className="inline-block border border-white/30 px-5 py-2 rounded-full text-xs uppercase tracking-[0.25em] backdrop-blur-sm bg-white/5">
            Tulum, Mexico
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight">
            Your Jungle<br/>
            <span className="italic text-amber-300/90">Sanctuary</span> Awaits
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-white/85 leading-relaxed">
            Bespoke 4-5 bedroom villas nestled in the Tulum jungle.
            Designed for deep rest, privacy, and connection with nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#houses"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white/20 transition-all duration-300"
            >
              Explore Homes
            </a>
            <a
              href="/contact"
              className="bg-amber-600/80 backdrop-blur-sm border border-amber-500/40 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-amber-600/90 transition-all duration-300"
            >
              Book a Visit
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Discover</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
