
import React from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "The shark tunnel was absolutely breathtaking. My kids couldn't stop talking about it for days!",
    name: "Sarah Jenkins",
    title: "Mom of 3",
  },
  {
    quote: "Beautifully maintained and the staff is so knowledgeable. The interactive ray tank is a must-do.",
    name: "David Chen",
    title: "Local Guide",
  },
  {
    quote: "A magical experience. The floating species gallery is unlike anything I've seen before.",
    name: "Emily Watson",
    title: "Marine Biologist",
  },
  {
    quote: "Great value for a family day out. Plenty of rest spots and the food court is actually good!",
    name: "Michael Ross",
    title: "Visitor",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mb-12">
        <h2 className="text-4xl font-display font-bold text-primary text-center">
          What Our Explorers Say
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-8 whitespace-nowrap py-4">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i}
              className="w-[350px] md:w-[450px] bg-muted/30 border border-border p-8 rounded-3xl flex-shrink-0 whitespace-normal hover:bg-muted/50 transition-colors"
            >
              <div className="flex flex-col h-full justify-between">
                <p className="text-lg text-foreground italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-foreground font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
