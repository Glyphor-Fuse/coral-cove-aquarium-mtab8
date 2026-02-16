
import React from "react";
import { Fish } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-border/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-display font-bold text-primary">
              <Fish className="w-8 h-8" />
              <span>Coral Cove</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Inspiring conservation of our world's aquatic treasures through education, research, and immersive experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Visit</h4>
            <ul className="space-y-2 text-muted text-sm">
              <li>Directions & Parking</li>
              <li>Accessibility</li>
              <li>Dining & Shopping</li>
              <li>Park Map</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Experience</h4>
            <ul className="space-y-2 text-muted text-sm">
              <li>Daily Schedule</li>
              <li>Animal Encounters</li>
              <li>Membership</li>
              <li>Groups & Schools</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-foreground">Connect</h4>
            <ul className="space-y-2 text-muted text-sm">
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Volunteer</li>
              <li>Press Room</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p>© 2024 Coral Cove Aquarium. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
