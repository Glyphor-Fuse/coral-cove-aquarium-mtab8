
import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hero } from "@/components/Hero";
import { SpeciesGallery } from "@/components/SpeciesGallery";
import { Schedule } from "@/components/Schedule";
import { VisitorInfo } from "@/components/VisitorInfo";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
          <Hero />
          <SpeciesGallery />
          <Schedule />
          <VisitorInfo />
          <Testimonials />
          <Newsletter />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
