import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, MapPin, Share2, Heart } from "lucide-react";
import { Link } from "wouter";

import project1 from "@assets/generated_images/modern_jungle_villa_exterior_with_pool.png";
import project2 from "@assets/generated_images/luxury_bedroom_in_jungle_setting.png";
import project3 from "@assets/generated_images/outdoor_wellness_area_with_red_light_room.png";

const projectsData: Record<string, any> = {
  "1": {
    title: "Casa Selva Profunda",
    price: "$650,000 USD",
    image: project1,
    description: "Deep in the heart of the Tulum jungle, Casa Selva Profunda offers an unparalleled connection to nature. This 4-bedroom villa is designed with bio-architecture principles, featuring local limestone walls and large openings that allow the jungle to become part of your living space.",
    amenities: ["Private Plunge Pool", "Outdoor Rainfall Shower", "Smart Home Automation", "Rooftop Yoga Deck", "Organic Garden Space"],
    specs: { beds: 4, baths: 4.5, area: "320 m²", delivery: "Immediate" }
  },
  "2": {
    title: "Villa Aire",
    price: "$850,000 USD",
    image: project2,
    description: "Villa Aire is defined by its verticality and sense of openness. Perched slightly above the jungle floor, this 5-bedroom residence captures the sea breeze and offers stunning views of the tropical canopy. Minimalist interiors meet warm wood textures for the ultimate wellness retreat.",
    amenities: ["Red Light Therapy Room", "Full Gym", "Private Sauna", "Infinity Pool", "Electric Bike Station"],
    specs: { beds: 5, baths: 5, area: "380 m²", delivery: "6 Months" }
  },
  "3": {
    title: "The Sanctuary",
    price: "$950,000 USD",
    image: project3,
    description: "The Sanctuary is our most exclusive estate. Built around a private natural cenote, this home is a masterclass in luxury that respects the earth. It features expansive living areas, a dedicated spa wing, and hidden jungle paths that lead directly toward the ocean.",
    amenities: ["Private Natural Cenote", "Full Spa Wing", "Chef's Kitchen", "Wine Cellar", "24/7 Concierge Service"],
    specs: { beds: 5, baths: 6, area: "450 m²", delivery: "Pre-sale" }
  }
};

export default function HouseDetail() {
  const [, params] = useRoute("/house/:id");
  const project = params?.id ? projectsData[params.id] : null;

  if (!project) return <div>Project not found</div>;

  return (
    <Layout>
      <section className="min-h-screen pb-24">
        {/* Hero Image */}
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute top-8 left-6 md:left-12 z-20">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20 gap-2 backdrop-blur-sm px-4">
                <ArrowLeft className="w-4 h-4" /> Back to Collection
              </Button>
            </Link>
          </div>
          <div className="absolute bottom-12 left-6 md:left-12 z-20 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif mb-4">{project.title}</h1>
              <div className="flex items-center gap-4 text-sm uppercase tracking-widest text-white/80">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Tulum, MX</span>
                <span>•</span>
                <span>{project.price}</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-12 grid lg:grid-cols-3 gap-16">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex gap-12 border-b border-border pb-8 overflow-x-auto no-scrollbar">
              {Object.entries(project.specs).map(([key, val]: any) => (
                <div key={key} className="text-center min-w-[80px]">
                  <div className="text-2xl font-serif text-primary">{val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{key}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-primary">The Vision</h2>
              <p className="text-muted-foreground font-light leading-relaxed text-lg italic">
                {project.description}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-primary">Key Amenities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.amenities.map((item: string) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-muted/30 border border-border/50">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-sm font-light text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sidebar Action */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 border border-border bg-white space-y-8 shadow-sm">
              <div className="space-y-2">
                <h4 className="text-sm uppercase tracking-widest text-muted-foreground">Investment</h4>
                <div className="text-3xl font-serif text-primary">{project.price}</div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-primary text-white py-6 uppercase tracking-widest text-xs">
                  Request Brochure
                </Button>
                <Button variant="outline" className="w-full border-primary text-primary py-6 uppercase tracking-widest text-xs">
                  Schedule Video Call
                </Button>
              </div>

              <div className="flex justify-center gap-6 pt-4 border-t border-border">
                <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
                  <Share2 className="w-4 h-4" /> Share
                </button>
                <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
                  <Heart className="w-4 h-4" /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
