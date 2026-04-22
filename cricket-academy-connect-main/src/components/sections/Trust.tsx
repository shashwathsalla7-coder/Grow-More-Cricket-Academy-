import { Star, Users, Trophy, Heart, MapPin } from "lucide-react";

const highlights = [
  { icon: Trophy, label: "Experienced Coaches" },
  { icon: Users, label: "Weekly Matches" },
  { icon: Heart, label: "Personal Attention" },
];

export const Trust = () => {
  return (
    <section className="border-y border-border/50 bg-gradient-dark py-12 sm:py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-display text-2xl font-extrabold sm:text-3xl">4.9</span>
            </div>
            <p className="font-display text-2xl font-bold sm:text-3xl">
              65+ Happy Students
            </p>
            <p className="flex items-center justify-center gap-2 text-muted-foreground md:justify-start">
              <MapPin className="h-4 w-4 text-primary" />
              Trusted by parents across LB Nagar
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-gradient-card p-4 text-center shadow-card transition-smooth hover:border-primary/50 hover:-translate-y-1 sm:p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold leading-tight sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
