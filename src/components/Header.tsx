import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/85 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Grow More Cricket Academy logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full ring-2 ring-primary/40 shadow-glow"
          />
          <div className="leading-tight">
            <p className="font-display text-sm font-extrabold sm:text-base">Grow More</p>
            <p className="text-[10px] uppercase tracking-widest text-primary sm:text-xs">Cricket Academy</p>
          </div>
        </a>
        <Button
          asChild
          className="h-10 rounded-full bg-call font-bold text-call-foreground shadow-call hover:bg-call/90 hover:scale-[1.03] transition-bounce"
        >
          <a href={`tel:${CONTACT.phoneRaw}`}>
            <Phone className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>
        </Button>
      </div>
    </header>
  );
};
