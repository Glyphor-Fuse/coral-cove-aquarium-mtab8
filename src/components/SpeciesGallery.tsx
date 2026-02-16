
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Species {
  id: number;
  name: string;
  funFact: string;
  image: string;
  color: string;
}

const speciesData: Species[] = [
  {
    id: 1,
    name: "Sea Turtle",
    funFact: "Green sea turtles can hold their breath for up to 5 hours while sleeping underwater!",
    image: "/images/turtle.png",
    color: "bg-background-100",
  },
  {
    id: 2,
    name: "Clownfish",
    funFact: "Clownfish are immune to the sting of the anemones they live in.",
    image: "/images/clownfish.png",
    color: "bg-background-100",
  },
  {
    id: 3,
    name: "Jellyfish",
    funFact: "Jellyfish have no brain, heart, bones or eyes. They are 95% water!",
    image: "/images/jellyfish.png",
    color: "bg-background-100",
  },
  {
    id: 4,
    name: "Reef Shark",
    funFact: "Sharks have excellent hearing and can detect fish from hundreds of feet away.",
    image: "/images/shark.png",
    color: "bg-background-100",
  },
];

export function SpeciesGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Meet Our Residents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on a bubble to learn more about the amazing creatures calling Coral Cove home.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {speciesData.map((species, index) => (
            <motion.div
              key={species.id}
              layoutId={`card-${species.id}`}
              onClick={() => setSelectedId(species.id)}
              className={`relative cursor-pointer group aspect-square rounded-full ${species.color} p-4 flex items-center justify-center shadow-md hover:shadow-xl transition-shadow`}
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            >
              <motion.img
                src={species.image}
                alt={species.name}
                className="w-full h-full object-cover rounded-full pointer-events-none"
              />
              <motion.div className="absolute inset-0 rounded-full bg-background/0 group-hover:bg-background/10 transition-colors" />
              <motion.h3 
                className="absolute bottom-6 bg-background/90 backdrop-blur px-4 py-4 rounded-full text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {species.name}
              </motion.h3>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 p-4 backdrop-blur-sm">
              <motion.div
                className="bg-background rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden"
                layoutId={`card-${selectedId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                  className="absolute top-4 right-4 p-2 bg-muted rounded-full hover:bg-muted/80 z-20"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
                
                {(() => {
                  const item = speciesData.find((s) => s.id === selectedId)!;
                  return (
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-32 h-32 rounded-full ${item.color} mb-6 overflow-hidden`}>
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-3xl font-display font-bold text-primary mb-2">
                        {item.name}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6 font-medium">
                        {item.funFact}
                      </p>
                      <button 
                        className="bg-secondary text-foreground px-6 py-3 rounded-full font-bold shadow-lg hover:bg-secondary/90 transition-colors"
                        onClick={(e) => { e.stopPropagation(); alert(`Booking encounter with ${item.name}!`); }}
                      >
                        Book Encounter
                      </button>
                    </div>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default SpeciesGallery;
