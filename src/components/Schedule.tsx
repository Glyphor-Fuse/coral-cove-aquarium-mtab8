
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Star } from "lucide-react";

const schedule = {
  morning: [
    { time: "09:30 AM", title: "Otter Feeding", loc: "Otter Bay" },
    { time: "10:30 AM", title: "Dolphin Discovery", loc: "Main Lagoon" },
    { time: "11:00 AM", title: "Coral Reef Dive Talk", loc: "Reef Theater" },
  ],
  afternoon: [
    { time: "01:00 PM", title: "Shark Bridge Walk", loc: "Shark Tunnel" },
    { time: "02:30 PM", title: "Penguin Parade", loc: "Polar Point" },
    { time: "03:30 PM", title: "Ray Bay Feeding", loc: "Touch Tank" },
  ],
  evening: [
    { time: "05:00 PM", title: "Sunset Dolphin Show", loc: "Main Lagoon" },
    { time: "06:00 PM", title: "Nocturnal Reef Tour", loc: "Coral Hall" },
  ]
};

export function Schedule() {
  return (
    <section className="py-24 bg-accent/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-display font-bold text-primary text-center">
            Daily Show Schedules
          </h2>
          <p className="text-muted-foreground mt-4 text-center max-w-xl">
            Don't miss a moment of the magic. Plan your day around our expert-led feedings and interactive shows.
          </p>
        </div>

        <Tabs defaultValue="morning" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 h-14 bg-background/50 backdrop-blur rounded-full p-4 shadow-sm">
            <TabsTrigger value="morning" className="rounded-full text-lg data-[state=active]:bg-primary data-[state=active]:text-foreground">Morning</TabsTrigger>
            <TabsTrigger value="afternoon" className="rounded-full text-lg data-[state=active]:bg-primary data-[state=active]:text-foreground">Afternoon</TabsTrigger>
            <TabsTrigger value="evening" className="rounded-full text-lg data-[state=active]:bg-primary data-[state=active]:text-foreground">Evening</TabsTrigger>
          </TabsList>
          
          {Object.entries(schedule).map(([key, events]) => (
            <TabsContent key={key} value={key} className="mt-8 space-y-4">
              {events.map((event, i) => (
                <div key={i} className="flex items-center justify-between bg-background p-6 rounded-2xl shadow-sm border border-border/50 hover:border-secondary/50 transition-colors group">
                  <div className="flex items-center gap-6">
                    <div className="bg-secondary/10 p-3 rounded-full text-secondary font-bold whitespace-nowrap">
                      {event.time}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{event.title}</h3>
                      <p className="text-muted-foreground flex items-center gap-1 text-sm mt-1">
                        <MapPinIcon className="w-3 h-3" /> {event.loc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <button className="text-sm font-semibold text-primary hover:underline">Details &rarr;</button>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  );
}

export default Schedule;
