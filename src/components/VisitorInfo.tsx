
import React from "react";
import { cn } from "@/lib/utils";

export function VisitorInfo() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
          Plan Your Adventure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto h-auto md:h-[500px]">
          {/* Card 1: Hours */}
          <div className="md:col-span-1 md:row-span-2 bg-primary rounded-3xl p-8 flex flex-col text-primary-foreground relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-background/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-bold mb-6">Opening Hours</h3>
            <div className="space-y-4 text-primary-foreground/90">
              <div className="flex justify-between border-b border-border/20 pb-2">
                <span>Mon - Fri</span>
                <span className="font-semibold">9AM - 6PM</span>
              </div>
              <div className="flex justify-between border-b border-border/20 pb-2">
                <span>Weekends</span>
                <span className="font-semibold">8AM - 8PM</span>
              </div>
              <div className="mt-8 pt-4">
                <p className="text-sm opacity-80 mb-2">Last entry 1 hour before closing.</p>
                <div className="inline-block bg-secondary text-foreground text-xs font-bold px-2 py-1 rounded">Holiday Hours May Vary</div>
              </div>
            </div>
          </div>

          {/* Card 2: Map/Location - Large */}
          <div className="md:col-span-2 md:row-span-1 bg-muted rounded-3xl overflow-hidden relative min-h-[250px] group">
            <img 
              src="/images/map-placeholder.png" 
              alt="Aquarium Map" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Find Your Way</h3>
              <p className="text-foreground/80">700 Ocean Blvd, Coral City, FL 33101</p>
            </div>
          </div>

          {/* Card 3: Tickets */}
          <div className="md:col-span-1 bg-background border border-border rounded-3xl p-8 flex flex-col justify-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-foreground mb-2">Day Pass</h3>
            <p className="text-3xl font-display font-bold text-secondary">$24.99</p>
            <p className="text-muted-foreground text-sm mb-4">Adults (13+)</p>
            <button type="button" aria-label="Buy adult day pass" className="w-full py-2 rounded-full border border-secondary text-secondary font-bold hover:bg-secondary hover:text-foreground transition-colors">
              Buy Now
            </button>
          </div>

          {/* Card 4: Kids Tickets */}
          <div className="md:col-span-1 bg-accent/30 rounded-3xl p-8 flex flex-col justify-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-foreground mb-2">Kids Pass</h3>
            <p className="text-3xl font-display font-bold text-secondary">$18.99</p>
            <p className="text-muted-foreground text-sm mb-4">Children (3-12)</p>
            <button type="button" aria-label="Buy kids pass" className="w-full py-2 rounded-full bg-primary text-foreground font-bold hover:bg-primary/90 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitorInfo;
