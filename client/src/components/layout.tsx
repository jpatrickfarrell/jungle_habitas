import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Houses", href: "#houses" },
    { label: "Investment", href: "#investment" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground scroll-smooth">
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className={`text-2xl font-serif tracking-widest uppercase hover:opacity-80 transition-all cursor-pointer ${
            isScrolled ? "text-primary" : "text-white"
          }`}>
              Jungle <span className={`font-light ${isScrolled ? "text-accent" : "text-amber-300/90"}`}>Habitas</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                  isScrolled
                    ? "text-foreground hover:text-accent"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact">
              <Button variant="outline" className={`uppercase text-xs tracking-widest transition-all ${
                isScrolled
                  ? "border-accent text-accent hover:bg-accent hover:text-white"
                  : "border-white/40 text-white hover:bg-white/10"
              }`}>
                Book Visit
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${isScrolled ? "text-primary" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-serif text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-accent text-white uppercase tracking-widest">
                Book Visit
              </Button>
            </a>
          </div>
        )}
      </header>

      <main>
        {children}
      </main>

      <footer className="bg-primary text-cream py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
             <h2 className="text-3xl font-serif tracking-widest uppercase text-white">
              Jungle <span className="text-accent font-light">Habitas</span>
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
              <li>info@junglehabitas.com</li>
              <li>+52 123 456 7890</li>
              <li>Tulum, Mexico</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-20 pt-8 border-t border-white/10 text-center text-white/40 text-xs uppercase tracking-widest">
          &copy; 2026 Jungle Habitas. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
