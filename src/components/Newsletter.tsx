
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0" />
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          Join the School!
        </h2>
        <p className="text-foreground/80 text-lg max-w-2xl mx-auto mb-10">
          Sign up for our newsletter to get exclusive updates on new exhibits, special events, and conservation news.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="bg-background/90 border-0 h-12 rounded-full px-6 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-secondary"
          />
          <Button type="submit" className="h-12 px-8 rounded-full bg-secondary hover:bg-secondary/90 text-foreground font-bold shadow-lg">
            Subscribe
          </Button>
        </form>
        <p className="text-foreground/60 text-sm mt-4">
          We promise not to spam (we leave that to the canned tuna).
        </p>
      </div>
    </section>
  );
}

export default Newsletter;
