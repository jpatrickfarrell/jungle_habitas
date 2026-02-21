import { motion } from "framer-motion";
import { ArrowRight, MapPin, Bed, Maximize, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";

import imgPoolVilla from "@assets/generated_images/modern_jungle_villa_exterior_with_pool.png";
import imgBedroom from "@assets/generated_images/luxury_bedroom_in_jungle_setting.png";
import imgWellness from "@assets/generated_images/outdoor_wellness_area_with_red_light_room.png";
import imgExterior from "@assets/generated_images/luxury_tulum_jungle_villa_exterior.png";
import imgInterior from "@assets/generated_images/minimalist_luxury_jungle_house_interior.png";

const projects = [
  {
    id: 1,
    title: "Casa Selva Profunda",
    subtitle: "Deep Jungle Privacy",
    price: "$650,000 USD",
    priceShort: "From $650k",
    description:
      "A 4-bedroom villa designed with bio-architecture principles, featuring local limestone walls and large openings that allow the jungle to become part of your living space.",
    image: imgPoolVilla,
    gallery: [imgPoolVilla, imgExterior, imgInterior],
    tags: ["Privacy", "Nature"],
    specs: { beds: 4, area: "320 m²", delivery: "Immediate" },
    features: ["Plunge Pool", "Smart Home", "Yoga Deck", "Organic Garden"],
  },
  {
    id: 2,
    title: "Villa Aire",
    subtitle: "Elevated Wellness Retreat",
    price: "$850,000 USD",
    priceShort: "From $850k",
    description:
      "Perched above the jungle floor, this 5-bedroom residence captures the sea breeze and offers stunning views of the tropical canopy. Minimalist interiors meet warm wood textures.",
    image: imgBedroom,
    gallery: [imgBedroom, imgExterior, imgPoolVilla],
    tags: ["Wellness", "Views"],
    specs: { beds: 5, area: "380 m²", delivery: "6 Months" },
    features: ["Red Light Therapy", "Sauna", "Infinity Pool", "Rooftop Terrace"],
  },
  {
    id: 3,
    title: "The Sanctuary",
    subtitle: "The Ultimate Estate",
    price: "$950,000 USD",
    priceShort: "From $950k",
    description:
      "Our most exclusive estate, built around a private natural cenote. Expansive living areas, a dedicated spa wing, and hidden jungle paths leading toward the ocean.",
    image: imgWellness,
    gallery: [imgWellness, imgInterior, imgBedroom],
    tags: ["Exclusive", "Retreat"],
    specs: { beds: 5, area: "450 m²", delivery: "Pre-sale" },
    features: ["Private Cenote", "Spa Wing", "Guest Casita", "Wine Cellar"],
  },
];

export default function Houses() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={imgExterior}
            alt="Jungle Habitas Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1a2e1a]/80" />
        </div>
        <div className="relative z-10 text-center text-white space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-300/90 text-xs uppercase tracking-[0.25em] font-medium">
              Curated Collection
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-light mt-3">
              Our Residences
            </h1>
            <p className="max-w-xl mx-auto text-white/75 font-light text-lg mt-4">
              Each home is a unique architectural response to its location in the jungle,
              ensuring maximum privacy and minimal environmental impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Properties List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Alternating layout */}
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "" : ""
              }`}>
                {/* Image side */}
                <Link href={`/house/${project.id}`} className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative group cursor-pointer">
                    {/* Main image */}
                    <div className="aspect-[4/3] overflow-hidden rounded-sm">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Thumbnail strip */}
                    <div className="flex gap-2 mt-2">
                      {project.gallery.slice(1).map((img, i) => (
                        <div key={i} className="flex-1 aspect-[3/2] overflow-hidden rounded-sm">
                          <img
                            src={img}
                            alt={`${project.title} gallery ${i + 2}`}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/90 backdrop-blur text-primary text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>

                {/* Content side */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <span className="text-accent text-xs uppercase tracking-[0.2em] font-medium">
                      {project.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mt-2">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground font-light leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Specs row */}
                  <div className="flex gap-8 py-4 border-y border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Bed className="w-4 h-4 text-accent" />
                      <span>{project.specs.beds} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Maximize className="w-4 h-4 text-accent" />
                      <span>{project.specs.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{project.specs.delivery}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs uppercase tracking-widest text-primary bg-muted/50 border border-border/50 px-3 py-1.5 rounded-sm"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Starting at</span>
                      <div className="text-2xl font-serif text-primary">{project.price}</div>
                    </div>
                    <Link href={`/house/${project.id}`}>
                      <Button className="bg-primary text-white px-6 py-5 uppercase tracking-widest text-xs rounded-none group">
                        View Property
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Don't See What You're Looking For?
          </h2>
          <p className="text-white/60 font-light max-w-xl mx-auto text-lg">
            Every Jungle Habitas home can be customized. Tell us your vision
            and we'll design a home around your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="/#contact">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 uppercase tracking-widest text-sm rounded-none">
                Start a Conversation
              </Button>
            </a>
            <a href="/#investment">
              <Button variant="outline" className="border-white/40 text-white px-8 py-6 uppercase tracking-widest text-sm rounded-none hover:bg-white/10">
                Investment Guide
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
