import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif tracking-widest text-primary uppercase hover:opacity-80 transition-opacity cursor-pointer">
              Barefoot <span className="text-accent font-light">Luxury</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Houses", "Investment", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest hover:text-accent transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white uppercase text-xs tracking-widest">
              Book Visit
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
            {["About", "Houses", "Investment", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-serif text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="w-full bg-accent text-white uppercase tracking-widest">
              Book Visit
            </Button>
          </div>
        )}
      </header>

      <main className="pt-20">
        {children}
      </main>

      <footer className="bg-primary text-cream py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
             <h2 className="text-3xl font-serif tracking-widest uppercase text-white">
              Barefoot <span className="text-accent font-light">Luxury</span>
            </h2>
            <p className="text-white/60 max-w-md font-light leading-relaxed">
              Boutique jungle homes designed for wellness, privacy, and return on investment. 
              Experience the true essence of Tulum.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-accent uppercase tracking-widest text-sm">Explore</h4>
            <ul className="space-y-2 text-white/70 font-light">
              <li><a href="#houses" className="hover:text-white transition-colors">The Houses</a></li>
              <li><a href="#investment" className="hover:text-white transition-colors">Investment</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Philosophy</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-accent uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-2 text-white/70 font-light">
              <li>info@barefootluxury.mx</li>
              <li>+52 123 456 7890</li>
              <li>Tulum, Mexico</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-20 pt-8 border-t border-white/10 text-center text-white/40 text-xs uppercase tracking-widest">
          © 2026 Barefoot Luxury. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
