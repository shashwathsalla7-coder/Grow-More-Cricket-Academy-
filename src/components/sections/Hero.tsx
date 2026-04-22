import { Star, MapPin } from "lucide-react";
import { CtaButtons } from "@/components/CtaButtons";
import heroImg from "@/assets/photo-batsman-stance.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Young cricketer in stance at Grow More Cricket Academy nets"
          className="h-full w-full object-cover object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 pitch-stripes opacity-60" />
      </div>

      <div className="container relative flex min-h-[92vh] flex-col justify-center py-20 sm:py-28">
        <div className="max-w-3xl animate-float-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <img src={logo} alt="" width={20} height={20} className="h-5 w-5 rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Now Enrolling — LB Nagar, Hyderabad
            </span>
          </div>

          <h1 className="font-display text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            Train Like a <span className="text-gradient-primary">Pro.</span>
            <br />
            Play Like a <span className="text-gradient-primary">Champion.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Professional cricket coaching for kids in Hyderabad. Build skill, discipline and confidence with experienced coaches.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/90">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-semibold">4.9 Rated</span>
              <span className="text-muted-foreground">| 65+ Reviews</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              LB Nagar, Hyderabad
            </div>
          </div>

          <div className="mt-8 max-w-xl">
            <CtaButtons size="xl" />
            <p className="mt-3 text-center text-xs text-muted-foreground sm:text-left">
              ⚡ Instant response • No forms • Talk to our coach directly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
