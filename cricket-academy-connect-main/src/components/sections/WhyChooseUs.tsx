import { GraduationCap, UserCheck, Swords, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: GraduationCap, title: "Experienced Coaches", desc: "Trained mentors with years of competitive cricket experience." },
  { icon: UserCheck, title: "Personal Attention", desc: "Small batch sizes ensure every child gets individual feedback." },
  { icon: Swords, title: "Match Practice", desc: "Regular weekly matches build real-game temperament and skills." },
  { icon: ShieldCheck, title: "Safe Environment", desc: "A secure, well-equipped facility designed with kids in mind." },
];

export const WhyChooseUs = () => {
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Why Choose Us</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
            Parents in LB Nagar <span className="text-gradient-primary">trust us</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="relative rounded-2xl border border-border/60 bg-gradient-card p-7 text-center shadow-card transition-smooth hover:border-primary/60 hover:-translate-y-1"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-lg font-extrabold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
