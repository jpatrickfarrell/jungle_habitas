import { motion } from "framer-motion";
import { ArrowRight, Wifi, Wind, Waves, TreePalm } from "lucide-react";
import project1 from "@assets/generated_images/modern_jungle_villa_exterior_with_pool.png";
import project2 from "@assets/generated_images/luxury_bedroom_in_jungle_setting.png";
import project3 from "@assets/generated_images/outdoor_wellness_area_with_red_light_room.png";

const projects = [
  {
    id: 1,
    title: "Casa Selva Profunda",
    price: "From $650k USD",
    features: ["4 BR", "Plunge Pool", "Deep Jungle"],
    image: project1,
    tags: ["Privacy", "Nature"]
  },
  {
    id: 2,
    title: "Villa Aire",
    price: "From $850k USD",
    features: ["5 BR", "Roof Garden", "Wellness Room"],
    image: project2,
    tags: ["Wellness", "Views"]
  },
  {
    id: 3,
    title: "The Sanctuary",
    price: "From $950k USD",
    features: ["Estate", "Private Cenote", "Spa"],
    image: project3,
    tags: ["Exclusive", "Retreat"]
  }
];

export function ProjectsGrid() {
  return (
    <section id="houses" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent text-xs uppercase tracking-[0.2em] font-medium">Curated Collection</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Jungle Residences</h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-light">
            Each home is a unique architectural response to its specific location in the jungle, ensuring maximum privacy and minimal environmental impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur text-primary text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-serif text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground">
                    {project.price}
                  </span>
                </div>
                <div className="flex gap-4 text-xs text-muted-foreground uppercase tracking-wider pt-2 border-t border-border/50">
                  {project.features.map((feature, i) => (
                    <span key={i}>{feature}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button className="inline-flex items-center gap-2 text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors uppercase text-sm tracking-widest group">
            View All Projects 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
           </button>
        </div>
      </div>
    </section>
  );
}
