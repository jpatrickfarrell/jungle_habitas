import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { AiConcierge } from "@/components/ai-concierge";
import { Button } from "@/components/ui/button";
import { 
  Bed, 
  Bath, 
  Square, 
  Check, 
  MapPin, 
  Wifi, 
  Waves, 
  Wind, 
  ShieldCheck,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";

// Import images
import heroImg from "@assets/generated_images/modern_jungle_villa_exterior_with_pool.png";
import gallery1 from "@assets/generated_images/luxury_bedroom_in_jungle_setting.png";
import gallery2 from "@assets/generated_images/minimalist_luxury_jungle_house_interior.png";
import gallery3 from "@assets/generated_images/modern_kitchen_with_jungle_view.png";
import gallery4 from "@assets/generated_images/spa_like_bathroom_with_stone_tub.png";
import gallery5 from "@assets/generated_images/aerial_view_of_jungle_villa_pool.png";

export default function PropertyPage() {
  const specs = [
    { icon: <Bed className="w-5 h-5" />, label: "4 Bedrooms" },
    { icon: <Bath className="w-5 h-5" />, label: "4.5 Bathrooms" },
    { icon: <Square className="w-5 h-5" />, label: "380 m² Construction" },
    { icon: <MapPin className="w-5 h-5" />, label: "Region 15, Tulum" },
  ];

  const amenities = [
    "Private Plunge Pool",
    "Outdoor Rain Shower",
    "Smart Home Integration",
    "Rooftop Terrace",
    "Wellness/Yoga Studio",
    "24/7 Security",
    "Solar Panel Ready",
    "Water Filtration System"
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen pb-24">
        {/* Back Button */}
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Collection
            </a>
          </Link>
        </div>

        {/* Hero Gallery Section */}
        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-sm group">
            <img src={heroImg} alt="Villa Exterior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative overflow-hidden rounded-sm group">
            <img src={gallery1} alt="Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative overflow-hidden rounded-sm group">
            <img src={gallery2} alt="Living Area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative overflow-hidden rounded-sm group">
            <img src={gallery3} alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative overflow-hidden rounded-sm group">
            <img src={gallery4} alt="Bathroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-6 mt-12 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Title & Specs */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-accent text-xs uppercase tracking-[0.2em] font-medium">Available Property</span>
                <span className="bg-accent/10 text-accent text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm">Premium Listing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-primary leading-tight">Casa Selva Profunda</h1>
              
              <div className="flex flex-wrap gap-8 py-6 border-y border-border/50">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-primary/70">
                    <span className="text-accent">{spec.icon}</span>
                    <span className="text-sm uppercase tracking-widest">{spec.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-primary">About the Property</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg max-w-3xl">
                Casa Selva Profunda is a masterpiece of bio-architecture, seamlessly blending into the dense Tulum jungle. 
                Designed for those who seek radical disconnect from the urban noise, the villa uses locally sourced limestone 
                and certified woods to create a living space that breathes.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed text-lg max-w-3xl">
                The open-concept living area features double-height ceilings and floor-to-ceiling glass walls that disappear, 
                merging the interior with the lush private gardens. A private rooftop sanctuary offers panoramic jungle views 
                and the perfect spot for stargazing.
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-primary">Amenities & Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-primary">Location</h3>
              <div className="relative aspect-video bg-muted rounded-sm overflow-hidden flex items-center justify-center border border-border">
                <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-87.46,20.21,13/1000x600?access_token=placeholder')] bg-cover bg-center" />
                <div className="relative z-10 flex flex-col items-center gap-2 text-primary/40">
                  <MapPin className="w-8 h-8" />
                  <span className="uppercase tracking-[0.2em] text-xs">Region 15, Tulum</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Inquiry Card */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-border p-8 rounded-sm space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Investment Price</span>
                <div className="text-4xl font-serif text-primary">$650,000 USD</div>
              </div>

              <div className="space-y-4 pt-4 border-t border-border/50">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Estimated ROI</span>
                  <span className="text-primary font-medium">9.5% Yearly</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Date</span>
                  <span className="text-primary font-medium">October 2026</span>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 uppercase tracking-widest text-xs">
                  Request Private Tour
                </Button>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/5 py-6 uppercase tracking-widest text-xs">
                  Download Floorplans
                </Button>
              </div>

              <div className="flex items-center gap-3 pt-4 text-[10px] uppercase tracking-widest text-muted-foreground leading-tight">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>Verified boutique developer listing</span>
              </div>
            </div>
          </aside>
        </section>
      </div>
      <AiConcierge />
    </Layout>
  );
}
