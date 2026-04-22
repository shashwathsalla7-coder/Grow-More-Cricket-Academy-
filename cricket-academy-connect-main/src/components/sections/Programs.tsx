import { Phone, Trophy, Users, Calendar, Target, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";

const features = [
  { icon: Users, label: "Small batches with personal attention" },
  { icon: Target, label: "Batting, bowling & fielding fundamentals" },
  { icon: Trophy, label: "Weekly inter-academy matches" },
  { icon: Calendar, label: "Flexible morning, evening & weekend slots" },
  { icon: Sparkles, label: "Fitness, agility & mental conditioning" },
  { icon: ShieldCheck, label: "Safe, kid-friendly professional environment" },
];

export const Programs = () => {
  return (
    <section id="programs" className="bg-gradient-dark py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Our Coaching Program</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
            Complete <span className="text-gradient-primary">Cricket Coaching</span>
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            One powerful program. Every skill your child needs to play cricket the right way.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <article className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-8 shadow-card transition-bounce hover:border-primary hover:shadow-glow sm:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Trophy className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="rounded-full bg-accent/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent">
                      All Ages · All Levels
                    </span>
                  </div>
                </div>

                <h3 className="mt-6 font-display text-3xl font-black sm:text-4xl">
                  Grow More Cricket Coaching
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  A complete, structured program designed for every young cricketer — from
                  first-time beginners to school-team players. Our coaches build technique
                  step by step, then test it through real match practice every week.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Each child gets a personalized growth plan, regular performance feedback
                  and the discipline of a professional cricket setup — all in a fun,
                  safe environment that parents trust.
                </p>

                <Button
                  asChild
                  className="mt-8 h-14 rounded-full bg-call px-8 font-bold text-call-foreground shadow-call hover:bg-call/90 hover:scale-[1.02] transition-bounce"
                >
                  <a href={`tel:${CONTACT.phoneRaw}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call to Enroll
                  </a>
                </Button>
              </div>

              <ul className="space-y-3 lg:col-span-2">
                {features.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/40 p-4 transition-smooth hover:border-primary/50"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium leading-snug">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
