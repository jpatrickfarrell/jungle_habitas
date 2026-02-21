import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin, Phone, Mail, Calendar, Video, MessageCircle, Check, Send,
} from "lucide-react";
import wellnessImg from "@assets/generated_images/outdoor_wellness_area_with_red_light_room.png";

const interests = [
  "Personal Retreat",
  "Investment Property",
  "Wellness Retreat Center",
  "Mix of Both",
];

const budgetRanges = [
  "$500k – $700k",
  "$700k – $900k",
  "$900k – $1.2M",
  "$1.2M+",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[45vh] md:h-[50vh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src={wellnessImg}
            alt="Jungle Habitas wellness garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-300/90 text-xs uppercase tracking-[0.25em] font-medium">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mt-3">
              Start Your Journey
            </h1>
            <p className="text-white/70 font-light text-lg mt-3 max-w-lg">
              Tell us about your dream and we'll curate a selection of homes
              that match your vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-serif text-primary">Thank You</h2>
                  <p className="text-muted-foreground font-light text-lg max-w-md mx-auto">
                    We've received your inquiry. Our advisor will reach out within 24 hours
                    to discuss your dream jungle home.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-4 border-primary text-primary uppercase tracking-widest text-xs"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  {/* Personal Info */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-serif text-primary">Your Details</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-xs uppercase tracking-widest text-muted-foreground">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          required
                          placeholder="Patrick"
                          className="bg-white border-border/60 rounded-sm py-5"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-xs uppercase tracking-widest text-muted-foreground">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          required
                          placeholder="Farrell"
                          className="bg-white border-border/60 rounded-sm py-5"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="bg-white border-border/60 rounded-sm py-5"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">
                          WhatsApp / Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="bg-white border-border/60 rounded-sm py-5"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Interest */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-serif text-primary">What Brings You Here?</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {interests.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => setSelectedInterest(interest)}
                          className={`text-xs uppercase tracking-widest py-3 px-4 border rounded-sm transition-all text-center ${
                            selectedInterest === interest
                              ? "bg-primary text-white border-primary"
                              : "bg-white text-primary border-border/60 hover:border-primary"
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-serif text-primary">Budget Range</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setSelectedBudget(range)}
                          className={`text-xs uppercase tracking-widest py-3 px-4 border rounded-sm transition-all text-center ${
                            selectedBudget === range
                              ? "bg-primary text-white border-primary"
                              : "bg-white text-primary border-border/60 hover:border-primary"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-serif text-primary">Tell Us About Your Dream</h2>
                    <Textarea
                      placeholder="Describe your ideal home — features, lifestyle, timeline, anything that matters to you..."
                      rows={5}
                      className="bg-white border-border/60 rounded-sm resize-none"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-serif text-primary">How Should We Connect?</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { icon: <Calendar className="w-5 h-5" />, label: "Site Visit", desc: "Visit in person in Tulum" },
                        { icon: <Video className="w-5 h-5" />, label: "Video Call", desc: "Virtual tour & consultation" },
                        { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", desc: "Chat at your pace" },
                      ].map((method) => (
                        <label
                          key={method.label}
                          className="flex items-start gap-3 p-4 border border-border/60 bg-white rounded-sm cursor-pointer hover:border-primary transition-colors group"
                        >
                          <input type="checkbox" className="mt-1 accent-primary" />
                          <div>
                            <div className="flex items-center gap-2 text-primary">
                              {method.icon}
                              <span className="text-sm font-medium">{method.label}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{method.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="bg-primary text-white px-10 py-6 uppercase tracking-widest text-sm rounded-none group"
                    >
                      <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-0.5" />
                      Send Inquiry
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">
                      Our advisor typically responds within 24 hours.
                    </p>
                  </div>
                </motion.form>
              )}
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* Direct Contact */}
                <div className="p-8 bg-white border border-border rounded-sm space-y-6">
                  <h3 className="font-serif text-xl text-primary">Direct Contact</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@junglehabitas.com"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4 text-accent" />
                      info@junglehabitas.com
                    </a>
                    <a
                      href="tel:+521234567890"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 text-accent" />
                      +52 123 456 7890
                    </a>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      Tulum, Quintana Roo, Mexico
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="p-8 bg-primary text-white rounded-sm space-y-6">
                  <h3 className="font-serif text-xl">What to Expect</h3>
                  <div className="space-y-4">
                    {[
                      { step: "01", text: "Our advisor reviews your inquiry and prepares a curated selection." },
                      { step: "02", text: "We schedule a video call or in-person visit at your convenience." },
                      { step: "03", text: "You receive a personalized walkthrough of matching properties." },
                      { step: "04", text: "If you find your home, we guide you through the entire process." },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3">
                        <span className="text-amber-300/90 font-serif text-lg flex-shrink-0 w-8">
                          {item.step}
                        </span>
                        <p className="text-white/70 font-light text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick action */}
                <div className="p-6 bg-muted/30 border border-border/50 rounded-sm text-center space-y-3">
                  <p className="text-sm text-muted-foreground">Prefer to chat now?</p>
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-white uppercase tracking-widest text-xs rounded-none"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Open WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
