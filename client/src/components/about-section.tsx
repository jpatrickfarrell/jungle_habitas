import { motion } from "framer-motion";
import { TreeDeciduous, Leaf, Footprints, Droplets } from "lucide-react";
import interiorImg from "@assets/generated_images/minimalist_luxury_jungle_house_interior.png";

export function AboutSection() {
  const features = [
    {
      icon: <TreeDeciduous className="w-6 h-6" />,
      title: "Low Footprint",
      description: "We occupy only 7% of the land, leaving the jungle to thrive around you."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Bio-Architecture",
      description: "Structures that breathe, using local materials and ancient techniques."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Wellness First",
      description: "Ice baths, saunas, and meditation spaces integrated into every home."
    },
    {
      icon: <Footprints className="w-6 h-6" />,
      title: "Barefoot Living",
      description: "Reconnect with the earth. Textures designed to be felt."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-accent text-xs uppercase tracking-[0.2em] font-medium">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
            Not just a house, <br/>
            but a <span className="italic text-accent">return to origin.</span>
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed text-lg">
            We are a boutique developer of 4-5 bedroom jungle houses near the ocean.
            We believe luxury isn't about gold faucets; it's about silence, space,
            and the way the light hits the limestone walls in the morning.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed text-lg">
            No two houses are the same. We use a 3D walkthrough process to align
            every corner with your personal vision of paradise.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8">
            {features.map((feature, i) => (
              <div key={i} className="space-y-3">
                <div className="text-accent">{feature.icon}</div>
                <h4 className="font-serif text-lg text-primary">{feature.title}</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[600px] overflow-hidden rounded-sm"
        >
          <img
            src={interiorImg}
            alt="Minimalist luxury jungle house interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white/90 font-serif text-2xl italic leading-relaxed">
              "The jungle is not the backdrop. It is the architecture."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
