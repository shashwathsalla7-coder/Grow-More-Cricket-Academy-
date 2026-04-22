import { MapPin, Navigation, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";

export const Location = () => {
  return (
    <section id="location" className="bg-gradient-dark py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Location</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
            Easy to find in <span className="text-gradient-primary">LB Nagar</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-extrabold">Address</h3>
              <p className="mt-2 text-muted-foreground">{CONTACT.address}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-extrabold">Training Hours</h3>
              <p className="mt-2 text-muted-foreground">Mon – Sun · 6:00 AM – 8:00 PM</p>
            </div>
            <Button
              asChild
              className="h-12 w-full rounded-full bg-gradient-cta font-bold text-primary-foreground shadow-cta hover:scale-[1.02] transition-bounce"
            >
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/60 shadow-card lg:col-span-3">
            <iframe
              title="Grow More Cricket Academy location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="h-[360px] w-full sm:h-[460px]"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
