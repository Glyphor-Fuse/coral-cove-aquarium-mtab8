
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden bg-background">
      {/* Background Gradient simulating water depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/30 via-background to-background" />
      
      {/* Animated Bubbles (CSS-based for performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/10 rounded-full"
            initial={{ y: "100vh", x: Math.random() * 100 + "vw", scale: Math.random() * 0.5 + 0.5 }}
            animate={{ y: "-10vh" }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{
              width: Math.random() * 100 + 50 + "px",
              height: Math.random() * 100 + 50 + "px",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-bold tracking-wider mb-4 uppercase">
            Experience the Magic of the Deep
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-primary drop-shadow-sm">
            Coral Cove <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Aquarium
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-xl md:text-2xl text-muted-foreground font-medium"
        >
          Dive into a world of wonder. Meet majestic sea turtles, playful otters, and thousands of colorful fish in our sun-lit reef adventure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-foreground rounded-full px-8 text-lg h-14 shadow-lg shadow-secondary/25">
            <Star className="mr-2 h-5 w-5" />
            Book Tickets
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 text-lg h-14">
            Plan Your Visit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Decorative Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wave_white.svg/1024px-Wave_white.svg.png')] bg-repeat-x bg-bottom bg-contain opacity-20 pointer-events-none w-[200%]" />
    </div>
  );
}

export default Hero;
