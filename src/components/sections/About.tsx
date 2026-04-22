import { Target, Shield, Sparkles, Award } from "lucide-react";

const pillars = [
  { icon: Target, title: "Skill Development", desc: "Master batting, bowling and fielding fundamentals with structured drills." },
  { icon: Shield, title: "Discipline", desc: "Build focus, punctuality and team values that go beyond the field." },
  { icon: Sparkles, title: "Confidence Building", desc: "Match practice and personal mentoring help every child believe in themselves." },
  { icon: Award, title: "Pro Environment", desc: "A safe, professional setup designed for serious cricket growth." },
];

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">About Us</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
            Where champions <span className="text-gradient-primary">grow up</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            At Grow More Cricket Academy, we shape young cricketers with the right blend of professional coaching, real match exposure and a values-first culture.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-smooth group-hover:bg-primary/25" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
