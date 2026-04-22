import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-gradient-dark pb-24 pt-16 sm:pb-16">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Grow More Cricket Academy logo"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 rounded-full ring-2 ring-primary/40 shadow-glow"
              />
              <div>
                <p className="font-display text-lg font-extrabold">Grow More</p>
                <p className="text-xs uppercase tracking-widest text-primary">Cricket Academy</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Hyderabad's trusted cricket academy for kids. Building champions with skill, discipline and confidence.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-primary">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-2 text-foreground transition-smooth hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {CONTACT.address}
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-primary md:text-right">
              Quick Enquiry
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Tap to speak with our coach right now.
            </p>
            <Button
              asChild
              className="mt-4 h-12 w-full rounded-full bg-call font-bold text-call-foreground shadow-call hover:bg-call/90 hover:scale-[1.02] transition-bounce md:w-auto md:px-8"
            >
              <a href={`tel:${CONTACT.phoneRaw}`}>
                <Phone className="mr-2 h-5 w-5" />
                Quick Call
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Grow More Cricket Academy. All rights reserved.</p>
          <p>Made for parents in LB Nagar, Hyderabad.</p>
        </div>
      </div>
    </footer>
  );
};
