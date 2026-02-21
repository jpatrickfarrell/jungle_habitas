import { motion, AnimatePresence } from "framer-motion";
import { useRoute } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Check, MapPin, Share2, Heart, X,
  Camera, TreePalm, Waves, Dumbbell, Sun, Wind, Leaf, Home,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { Link } from "wouter";
import { useState, useCallback, useEffect } from "react";

import imgPoolVilla from "@assets/generated_images/modern_jungle_villa_exterior_with_pool.png";
import imgBedroom from "@assets/generated_images/luxury_bedroom_in_jungle_setting.png";
import imgWellness from "@assets/generated_images/outdoor_wellness_area_with_red_light_room.png";
import imgExterior from "@assets/generated_images/luxury_tulum_jungle_villa_exterior.png";
import imgInterior from "@assets/generated_images/minimalist_luxury_jungle_house_interior.png";

// --- Gallery Modal ---
function GalleryModal({
  images,
  initialIndex,
  onClose,
}: {
  images: { src: string; caption: string }[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white z-10 p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 text-white/60 text-sm tracking-widest uppercase">
          {index + 1} / {images.length}
        </div>

        {/* Nav arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 md:left-8 text-white/60 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 md:right-8 text-white/60 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image */}
        <div
          className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={images[index].src}
            alt={images[index].caption}
            className="max-h-[75vh] max-w-full object-contain rounded-sm"
          />
          <p className="text-white/60 text-sm font-light tracking-wide">
            {images[index].caption}
          </p>
        </div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIndex(i); }}
              className={`flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${
                i === index ? "border-white opacity-100" : "border-transparent opacity-50 hover:opacity-75"
              }`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// --- Data ---
const projectsData: Record<string, any> = {
  "1": {
    title: "Casa Selva Profunda",
    subtitle: "Deep Jungle Privacy",
    price: "$650,000 USD",
    heroImage: imgPoolVilla,
    gallery: [
      { src: imgPoolVilla, caption: "Villa exterior with private pool" },
      { src: imgExterior, caption: "Courtyard and jungle pathway" },
      { src: imgInterior, caption: "Open-plan living with natural light" },
      { src: imgBedroom, caption: "Primary suite overlooking the garden" },
      { src: imgWellness, caption: "Private wellness pavilion" },
    ],
    description:
      "Deep in the heart of the Tulum jungle, Casa Selva Profunda offers an unparalleled connection to nature. This 4-bedroom villa is designed with bio-architecture principles, featuring local limestone walls and large openings that allow the jungle to become part of your living space.",
    longDescription:
      "Every detail has been considered to create a home that breathes with the jungle. The central courtyard brings dappled sunlight into the heart of the house, while the private pool sits surrounded by native vegetation. The architecture follows the natural contours of the land — no trees were removed during construction.",
    amenities: [
      "Private Plunge Pool",
      "Outdoor Rainfall Shower",
      "Smart Home Automation",
      "Rooftop Yoga Deck",
      "Organic Garden Space",
      "Full Outdoor Kitchen",
      "Electric Vehicle Charging",
      "Fiber Optic Internet",
    ],
    specs: { beds: 4, baths: 4.5, area: "320 m²", lot: "800 m²", delivery: "Immediate", parking: 2 },
    rooms: [
      {
        title: "Living Pavilion",
        image: imgInterior,
        description:
          "A double-height living space with floor-to-ceiling glass walls that dissolve the boundary between inside and out. Polished concrete floors stay cool underfoot, while the wooden ceiling channels warm overhead light.",
      },
      {
        title: "Primary Suite",
        image: imgBedroom,
        description:
          "Wake up to the sound of tropical birds. The primary suite features a king bed facing a wall of glass that opens onto a private garden. An oversized rain shower sits in a semi-outdoor bathroom wrapped in jungle.",
      },
      {
        title: "Wellness Space",
        image: imgWellness,
        description:
          "A dedicated wellness pavilion at the end of a stone pathway. Features a red light therapy room, cold plunge pool, and meditation deck elevated above the jungle floor.",
      },
    ],
    highlights: [
      { icon: "tree", label: "Deep Jungle", detail: "Surrounded by 800m² of preserved native jungle" },
      { icon: "waves", label: "Private Pool", detail: "8-meter plunge pool with natural stone surround" },
      { icon: "leaf", label: "Bio-Architecture", detail: "Local limestone, chukum stucco, tropical hardwoods" },
      { icon: "home", label: "Smart Home", detail: "Full automation: lighting, climate, security, sound" },
    ],
  },
  "2": {
    title: "Villa Aire",
    subtitle: "Elevated Wellness Retreat",
    price: "$850,000 USD",
    heroImage: imgBedroom,
    gallery: [
      { src: imgBedroom, caption: "Primary suite with jungle canopy views" },
      { src: imgExterior, caption: "Modern bio-architecture exterior" },
      { src: imgPoolVilla, caption: "Infinity pool at golden hour" },
      { src: imgWellness, caption: "Red light therapy room in the jungle" },
      { src: imgInterior, caption: "Sunlit corridor with garden views" },
    ],
    description:
      "Villa Aire is defined by its verticality and sense of openness. Perched slightly above the jungle floor, this 5-bedroom residence captures the sea breeze and offers stunning views of the tropical canopy.",
    longDescription:
      "Minimalist interiors meet warm wood textures for the ultimate wellness retreat. The home is organized around a central light well that brings natural ventilation and sunlight to every floor. A rooftop terrace offers panoramic views of the jungle canopy stretching to the Caribbean horizon. Every material was chosen for its ability to age beautifully in the tropical climate.",
    amenities: [
      "Red Light Therapy Room",
      "Full Gym",
      "Private Sauna",
      "Infinity Pool",
      "Electric Bike Station",
      "Rooftop Terrace",
      "Chef's Kitchen",
      "Wine Cellar",
    ],
    specs: { beds: 5, baths: 5, area: "380 m²", lot: "950 m²", delivery: "6 Months", parking: 2 },
    rooms: [
      {
        title: "The Great Room",
        image: imgInterior,
        description:
          "An expansive open-plan space where living, dining, and kitchen flow together seamlessly. Double-height ceilings and a wall of glass create a cathedral-like atmosphere. The tropical hardwood dining table seats twelve for intimate gatherings.",
      },
      {
        title: "Primary Suite",
        image: imgBedroom,
        description:
          "A sanctuary within a sanctuary. Floor-to-ceiling windows frame the jungle canopy like living art. The walk-through closet leads to a spa bathroom with a freestanding stone tub and private garden shower.",
      },
      {
        title: "Wellness Wing",
        image: imgWellness,
        description:
          "An entire wing dedicated to wellbeing. The red light therapy room is designed for daily recovery. Adjacent: a Finnish sauna, cold plunge pool, and a yoga platform that opens to the morning sun.",
      },
      {
        title: "Rooftop Terrace",
        image: imgExterior,
        description:
          "Above the canopy, the private rooftop terrace offers 360-degree views. A second outdoor kitchen, lounging area, and plunge pool make this the perfect space for sunset entertaining.",
      },
    ],
    highlights: [
      { icon: "dumbbell", label: "Full Wellness", detail: "Sauna, cold plunge, red light, gym — all private" },
      { icon: "wind", label: "Natural Cooling", detail: "Central light well provides passive ventilation" },
      { icon: "sun", label: "Rooftop Views", detail: "360° jungle-to-ocean panorama from private terrace" },
      { icon: "waves", label: "Infinity Pool", detail: "12-meter edge pool overlooking the canopy" },
    ],
  },
  "3": {
    title: "The Sanctuary",
    subtitle: "The Ultimate Estate",
    price: "$950,000 USD",
    heroImage: imgWellness,
    gallery: [
      { src: imgWellness, caption: "Private wellness garden with therapy rooms" },
      { src: imgExterior, caption: "Estate entrance through the jungle" },
      { src: imgInterior, caption: "Grand living hall with garden corridor" },
      { src: imgBedroom, caption: "Master suite with tropical garden" },
      { src: imgPoolVilla, caption: "Pool house and outdoor entertaining" },
    ],
    description:
      "The Sanctuary is our most exclusive estate. Built around a private natural cenote, this home is a masterclass in luxury that respects the earth.",
    longDescription:
      "It features expansive living areas, a dedicated spa wing, and hidden jungle paths that lead directly toward the ocean. The property encompasses nearly 1,200 square meters of land, most of which remains untouched jungle. A network of stone pathways connects the main residence to the pool pavilion, guest casita, and cenote deck — creating a private village within the forest.",
    amenities: [
      "Private Natural Cenote",
      "Full Spa Wing",
      "Chef's Kitchen",
      "Wine Cellar",
      "24/7 Concierge Service",
      "Guest Casita",
      "Fire Pit Lounge",
      "Professional Sound System",
    ],
    specs: { beds: 5, baths: 6, area: "450 m²", lot: "1,200 m²", delivery: "Pre-sale", parking: 3 },
    rooms: [
      {
        title: "The Grand Hall",
        image: imgInterior,
        description:
          "A dramatic entrance leads into a grand living hall where 6-meter ceilings and exposed wooden beams create a sense of awe. The space opens on both sides to landscaped gardens, making the jungle the primary artwork of the home.",
      },
      {
        title: "Master Suite",
        image: imgBedroom,
        description:
          "Occupying an entire wing, the master suite features a private terrace, walk-in closet, and a bathroom with both indoor and outdoor showers. The room is oriented to catch the first morning light through the canopy.",
      },
      {
        title: "The Cenote Deck",
        image: imgPoolVilla,
        description:
          "A wooden deck extends over the private cenote — a natural freshwater pool formed in the limestone. Perfect for morning swims or moonlit dips. Surrounded by ancient trees and illuminated by subtle ground lighting.",
      },
      {
        title: "Spa & Wellness",
        image: imgWellness,
        description:
          "A full spa wing with red light therapy, infrared sauna, cold plunge, massage room, and an apothecary bar for herbal preparations. Connected to the main house by a covered jungle walkway.",
      },
    ],
    highlights: [
      { icon: "waves", label: "Private Cenote", detail: "Natural freshwater cenote on the property" },
      { icon: "home", label: "Guest Casita", detail: "Separate 1-bedroom guest house with kitchenette" },
      { icon: "leaf", label: "Preserved Land", detail: "1,200m² lot with 85% jungle conservation" },
      { icon: "sun", label: "Concierge", detail: "24/7 estate management and concierge service" },
    ],
  },
};

const iconMap: Record<string, React.ReactNode> = {
  tree: <TreePalm className="w-5 h-5" />,
  waves: <Waves className="w-5 h-5" />,
  leaf: <Leaf className="w-5 h-5" />,
  home: <Home className="w-5 h-5" />,
  dumbbell: <Dumbbell className="w-5 h-5" />,
  wind: <Wind className="w-5 h-5" />,
  sun: <Sun className="w-5 h-5" />,
};

export default function HouseDetail() {
  const [, params] = useRoute("/house/:id");
  const project = params?.id ? projectsData[params.id] : null;
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  if (!project) return <div>Project not found</div>;

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  return (
    <Layout>
      {/* Gallery Modal */}
      {galleryOpen && (
        <GalleryModal
          images={project.gallery}
          initialIndex={galleryIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}

      <section className="min-h-screen pb-24">
        {/* Hero Image Grid */}
        <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          {/* Main hero image */}
          <div className="absolute inset-0 md:right-[33.33%]">
            <img
              src={project.gallery[0].src}
              alt={project.gallery[0].caption}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openGallery(0)}
            />
          </div>

          {/* Side grid (desktop only) */}
          <div className="hidden md:grid absolute top-0 right-0 w-1/3 h-full grid-rows-2 gap-1">
            <div className="relative overflow-hidden">
              <img
                src={project.gallery[1].src}
                alt={project.gallery[1].caption}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => openGallery(1)}
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src={project.gallery[2].src}
                alt={project.gallery[2].caption}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => openGallery(2)}
              />
              {/* View all photos overlay */}
              <button
                onClick={() => openGallery(0)}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-sm flex items-center gap-2 text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors"
              >
                <Camera className="w-4 h-4" />
                All {project.gallery.length} Photos
              </button>
            </div>
          </div>

          {/* Overlay and content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Back button — below the fixed header */}
          <div className="absolute top-24 left-6 md:left-12 z-20">
            <Link href="/houses">
              <Button variant="ghost" className="text-white hover:bg-white/20 gap-2 backdrop-blur-sm px-4">
                <ArrowLeft className="w-4 h-4" /> Back to Collection
              </Button>
            </Link>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-20 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber-300/90 text-xs uppercase tracking-[0.2em] font-medium mb-2 block">
                {project.subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif mb-4">{project.title}</h1>
              <div className="flex items-center gap-4 text-sm uppercase tracking-widest text-white/80">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Tulum, MX
                </span>
                <span>&middot;</span>
                <span>{project.price}</span>
              </div>
            </motion.div>
          </div>

          {/* Mobile: View photos button */}
          <button
            onClick={() => openGallery(0)}
            className="md:hidden absolute bottom-8 right-6 bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-sm flex items-center gap-2 text-xs uppercase tracking-widest font-medium"
          >
            <Camera className="w-4 h-4" />
            {project.gallery.length} Photos
          </button>
        </div>

        {/* Specs Bar */}
        <div className="bg-primary text-white py-6">
          <div className="container mx-auto px-6 flex justify-center gap-8 md:gap-16 overflow-x-auto no-scrollbar">
            {Object.entries(project.specs).map(([key, val]: any) => (
              <div key={key} className="text-center min-w-[70px] flex-shrink-0">
                <div className="text-xl md:text-2xl font-serif text-amber-300/90">{val}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">{key}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 mt-16 grid lg:grid-cols-3 gap-16">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-20">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-primary">The Vision</h2>
              <p className="text-muted-foreground font-light leading-relaxed text-lg italic">
                {project.description}
              </p>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Property Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-serif text-primary">Property Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.highlights.map((h: any, i: number) => (
                  <div key={i} className="flex gap-4 p-6 bg-muted/30 border border-border/50 rounded-sm">
                    <div className="text-accent flex-shrink-0 mt-1">{iconMap[h.icon]}</div>
                    <div>
                      <h4 className="font-serif text-lg text-primary mb-1">{h.label}</h4>
                      <p className="text-sm text-muted-foreground font-light">{h.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Room-by-Room Walkthrough */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif text-primary">A Walk Through</h2>
              <p className="text-muted-foreground font-light text-lg">
                Each space has been crafted with intention. Here is what awaits you.
              </p>

              <div className="space-y-16">
                {project.rooms.map((room: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`grid md:grid-cols-2 gap-8 items-center ${
                      i % 2 === 1 ? "md:direction-rtl" : ""
                    }`}
                  >
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer group ${
                        i % 2 === 1 ? "md:order-2" : ""
                      }`}
                      onClick={() => {
                        const idx = project.gallery.findIndex((g: any) => g.src === room.image);
                        openGallery(idx >= 0 ? idx : 0);
                      }}
                    >
                      <img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className={`space-y-4 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                      <span className="text-accent text-xs uppercase tracking-[0.2em] font-medium">
                        Space {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif text-primary">{room.title}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {room.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Photo Grid */}
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-primary">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.gallery.map((img: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`relative overflow-hidden rounded-sm cursor-pointer group ${
                      i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"
                    }`}
                    onClick={() => openGallery(i)}
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
                      <span className="text-white text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">
                        {img.caption}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-serif text-primary">Full Amenities</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.amenities.map((item: string) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-muted/30 border border-border/50 rounded-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-light text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-8 md:p-12 rounded-sm space-y-6"
            >
              <h2 className="text-3xl font-serif">Location</h2>
              <p className="text-white/70 font-light leading-relaxed text-lg">
                Located in the heart of the Tulum jungle corridor, approximately 1 kilometer from the Caribbean coast.
                Walking and biking distance to restaurants, beach clubs, and the hotel zone.
                The property sits within a gated community with 24-hour security and maintained jungle paths.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-serif text-amber-300/90">1 km</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">To Beach</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif text-amber-300/90">5 min</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">To Town</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif text-amber-300/90">90 min</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">From CUN</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Sidebar Action */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Price Card */}
              <div className="p-8 border border-border bg-white space-y-8 shadow-sm rounded-sm">
                <div className="space-y-2">
                  <h4 className="text-sm uppercase tracking-widest text-muted-foreground">Investment</h4>
                  <div className="text-3xl font-serif text-primary">{project.price}</div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-primary text-white py-6 uppercase tracking-widest text-xs rounded-none">
                    Request Brochure
                  </Button>
                  <Button variant="outline" className="w-full border-primary text-primary py-6 uppercase tracking-widest text-xs rounded-none">
                    Schedule Video Call
                  </Button>
                  <Button variant="outline" className="w-full border-accent text-accent py-6 uppercase tracking-widest text-xs rounded-none hover:bg-accent hover:text-white">
                    Book Site Visit
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

              {/* Quick specs recap */}
              <div className="p-6 bg-muted/30 border border-border/50 rounded-sm space-y-4">
                <h4 className="text-sm uppercase tracking-widest text-muted-foreground">At a Glance</h4>
                <div className="space-y-3 text-sm">
                  {Object.entries(project.specs).map(([key, val]: any) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-muted-foreground capitalize">{key}</span>
                      <span className="font-medium text-primary">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other houses */}
              <div className="p-6 bg-white border border-border rounded-sm space-y-4">
                <h4 className="text-sm uppercase tracking-widest text-muted-foreground">Also Available</h4>
                {Object.entries(projectsData)
                  .filter(([id]) => id !== params?.id)
                  .map(([id, p]: any) => (
                    <Link key={id} href={`/house/${id}`}>
                      <div className="flex gap-3 items-center group cursor-pointer py-2">
                        <img
                          src={p.heroImage}
                          alt={p.title}
                          className="w-16 h-16 object-cover rounded-sm flex-shrink-0"
                        />
                        <div>
                          <h5 className="font-serif text-primary group-hover:text-accent transition-colors">
                            {p.title}
                          </h5>
                          <span className="text-xs text-muted-foreground">{p.price}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
